import request from "supertest";

import app from "../src/app";

const USDT_CONTRACT = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
const UNVERIFIED_CONTRACT = "0x495f947276749Ce646f68AC8c248420045cb7b5e";

describe("POST /api/read", () => {
  it("fails if address is missing", (done) => {
    request(app)
      .post("/api/read")
      .set("Accept", "application/json")
      .send({
        method: "decimals",
      })
      .expect(500)
      .expect({ message: "Invalid request body" }, done);
  });

  it("fails if method is missing", (done) => {
    request(app)
      .post("/api/read")
      .set("Accept", "application/json")
      .send({
        address: USDT_CONTRACT,
      })
      .expect(500)
      .expect({ message: "Invalid request body" }, done);
  });

  it("succeeds if both address and method are present", (done) => {
    request(app)
      .post("/api/read")
      .set("Accept", "application/json")
      .send({
        address: USDT_CONTRACT,
        method: "decimals",
      })
      .expect(200)
      .expect({ result: "6" }, done); // USDT decimals is 6
  });

  it("fails if args is missing for a method that requires it", (done) => {
    request(app)
      .post("/api/read")
      .set("Accept", "application/json")
      .send({
        address: USDT_CONTRACT,
        method: "balanceOf",
      })
      .expect(500)
      .expect({ message: "Wrong arguments for the contract method" }, done);
  });

  it("fails if args is invalid", (done) => {
    request(app)
      .post("/api/read")
      .set("Accept", "application/json")
      .send({
        address: USDT_CONTRACT,
        method: "balanceOf",
        args: ["invalid address"],
      })
      .expect(500)
      .expect({ message: "Wrong arguments for the contract method" }, done);
  });

  it("succeeds if args is valid", (done) => {
    request(app)
      .post("/api/read")
      .set("Accept", "application/json")
      .send({
        address: USDT_CONTRACT,
        method: "balanceOf",
        args: [USDT_CONTRACT],
      })
      .expect(200, done);
  });

  it("fails if method not available in contract", (done) => {
    request(app)
      .post("/api/read")
      .set("Accept", "application/json")
      .send({
        address: USDT_CONTRACT,
        method: "invalid method",
      })
      .expect(500)
      .expect({ message: "Method does not exist in contract" }, done);
  });

  it("fails if contract is not verified on Etherscan", (done) => {
    request(app)
      .post("/api/read")
      .set("Accept", "application/json")
      .send({
        address: UNVERIFIED_CONTRACT,
        method: "some method",
      })
      .expect(500)
      .expect({ message: "ABI not verified on Etherscan" }, done);
  });
});
