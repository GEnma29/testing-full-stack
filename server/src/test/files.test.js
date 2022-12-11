const request = require("supertest");
const app = require("../app");

describe("GET /files/data", function () {
  it("returns all files ", async function () {
    request(app)
      .get("/files/data")
      .expect("Content-Type", /json/)
      .expect(400)
      .end(function (err, res) {
        if (err) throw err;
      });
  });
});

describe("GET /files/data?fileName=test3.csv", function () {
  it("returns file info  by file name ", async function () {
    request(app)
      .get("/files/data")
      .expect("Content-Type", /json/)
      .expect('Content-Length', '3')
      .expect(400)
      .end(function (err, res) {
        if (err) throw err;
      });
  });
});
