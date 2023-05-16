import { Contract, InterfaceAbi, getAddress } from "ethers";

import cache from "../cache";
import { getAbiFromEtherscan } from "./etherscan";
import provider from "./provider";

export async function contractRead(
  rawAddr: string,
  method: string,
  args: string[]
) {
  let addr;
  try {
    addr = getAddress(rawAddr);
  } catch {
    throw new Error("Invalid address");
  }

  let abi: InterfaceAbi | undefined = cache.get(addr);
  if (!abi) {
    abi = await getAbiFromEtherscan(addr);
    cache.set(addr, abi);
  }

  const contract = new Contract(addr, abi!, provider);

  try {
    contract.getFunction(method);
  } catch (e) {
    throw new Error("Method does not exist in contract");
  }

  try {
    const result = await contract[method].staticCallResult(...args);
    return result.toArray();
  } catch {
    throw new Error("Wrong arguments for the contract method");
  }
}
