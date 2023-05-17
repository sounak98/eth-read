import Form from "./Form";
import ethereumLogo from "/ethereum.png";

function Main() {
  return (
    <div className="px-48 py-24">
      <img src={ethereumLogo} className="mb-8 w-24" />
      <h1 className="mb-4 text-2xl font-semibold">eth-read</h1>
      <div className="mb-8 text-slate-600">
        <p>
          Read Ethereum contract data using this tool! Built by{" "}
          <a
            href="https://github.com/sounak98"
            target="_blank"
            className="underline"
          >
            @sounak98
          </a>
          .
        </p>
        <p>Only works for verified contracts on Etherscan.</p>
      </div>
      <div className="mb-6">
        <a
          href="https://github.com/sounak98/eth-read"
          target="_blank"
          className="underline"
        >
          Github repository
        </a>
      </div>
      <div className="mb-6 border-t"></div>
      <Form />
    </div>
  );
}

export default Main;
