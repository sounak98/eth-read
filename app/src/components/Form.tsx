import { useMutation } from "@tanstack/react-query";
import clsx from "clsx";
import { useState } from "react";

import read from "../api/read";
import Input from "./Input";
import MultiInput from "./MultiInput";
import Result from "./Result";

function Form() {
  const [address, setAddress] = useState<string>("");
  const [method, setMethod] = useState("");
  const [args, setArgs] = useState<string[]>([]);

  const { data, error, isSuccess, isLoading, isError, mutate } = useMutation({
    mutationFn: () => read(address, method, args),
  });

  return (
    <div className="mb-6 flex w-96 flex-col items-stretch gap-6">
      <Input
        title="Address"
        placeholder="eg. 0xdAC...ec7"
        setValue={setAddress}
      />
      <Input title="Method" placeholder="eg. decimals" setValue={setMethod} />
      <MultiInput
        title="Arguments"
        inputElement="Argument"
        setValue={setArgs}
      />
      {isError && (
        <div className="text-sm text-orange-700">
          Error: "{error.response.data.message}". Please try again.
        </div>
      )}
      <button
        disabled={isLoading || address === "" || method === ""}
        type="button"
        className={clsx(
          "self-start rounded-md bg-gray-700 px-6 py-2 font-medium text-white",
          "bg-gray-700 hover:bg-gray-900 disabled:bg-gray-500",
          "focus:outline-none focus:ring-4 focus:ring-gray-300"
        )}
        onClick={mutate}
      >
        {isLoading ? "Loading..." : "Get Result"}
      </button>
      {isSuccess && <Result result={data!.result} />}
    </div>
  );
}

export default Form;
