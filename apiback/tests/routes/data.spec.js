/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require("chai");
const session = require("supertest-session");
const app = require("../../src/app.js");
const { Data, conn } = require("../../src/db.js");

const agent = session(app);
const Data = {
  name: "Argentina",
};

describe("Data routes", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  beforeEach(() => Data.sync({ force: true }).then(() => Data.create(pokemon)));
  describe("GET /data", () => {
    it("should get 200", () => agent.get("/data").expect(200));
  });
});
