import axios from "axios";

export async function getAbiFromEtherscan(addr: string) {
  const response = await axios.get(process.env.ETHERSCAN_API_URL!, {
    params: {
      module: "contract",
      action: "getabi",
      address: addr,
      apikey: process.env.ETHERSCAN_API_KEY!,
    },
  });

  if (response.data.status === "0")
    throw new Error("ABI not verified on Etherscan");

  return response.data.result;
}
