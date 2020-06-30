const request = require("supertest");
const app = require("../app");

describe("app.js", () => {
  it("GET / should work", () => {
    request(app).get("/").expect(200, "GET is working");
  });
});
