import request from "supertest";

import app from "../src/app";

describe("app", () => {
  it("responds with 404", (done) => {
    request(app)
      .get("/api")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(404, { message: "Page not found" }, done);
  });
});
