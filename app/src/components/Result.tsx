import { useState } from "react";

function Result({ result }: { result: string }) {
  const [copyText, setCopyText] = useState("Copy");

  return (
    <div className="flex flex-col items-stretch gap-2">
      <div className="font-semibold text-slate-600">Result</div>
      <div className="flex flex-row gap-2">
        <input
          disabled
          type="text"
          value={result}
          className="w-full border border-slate-600 px-3 py-2"
        />
        <button
          onClick={() => {
            navigator.clipboard.writeText(result).then(() => {
              setCopyText("Copied!");
              setTimeout(() => setCopyText("Copy"), 2000);
            });
          }}
          className="text-sm underline"
        >
          {copyText}
        </button>
      </div>
    </div>
  );
}

export default Result;
