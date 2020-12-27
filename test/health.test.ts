import request from "supertest";
import app from "../src/app";

describe("GET /health", () => {
  it("should return 200 OK", () => {
    return request(app).get("/health").expect(200, "ok");
  });
});
