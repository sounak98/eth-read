import axios from "axios";

export default async function apiRead(
  address: string,
  method: string,
  args: string[]
) {
  const url = new URL("/api/read", import.meta.env.VITE_API_URL);

  const response = await axios.post(url.toString(), {
    address,
    method,
    args,
  });

  return response.data;
}
