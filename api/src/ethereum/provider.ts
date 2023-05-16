import { JsonRpcProvider } from "ethers";

require("dotenv").config();

const provider = new JsonRpcProvider(process.env.RPC_URL!);

export default provider;
