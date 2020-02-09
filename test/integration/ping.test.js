const express = require("express");
const request = require("supertest");
const init = require("../../config/init");

beforeAll(() => {
  init(express);
});

describe("Testing ping", () => {
  it("GET /api/ping", async () => {
    const res = await request(app).get("/api/ping");

    expect(res).toHaveProperty("statusCode", 200);
    expect(res.body).toHaveProperty("content");
    expect(res.body).toHaveProperty("messages", "PING");
  });
});
