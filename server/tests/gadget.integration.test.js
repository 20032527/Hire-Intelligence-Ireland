const request = require("supertest");
const express = require("express");
const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
const Gadget = require("../models/Gadget");
let gadgetRoutes = require("../routes/gadgetRoutes");


jest.mock("../middleware/authMiddleware", () => ({
  auth: (req, res, next) => next()
}));

jest.setTimeout(30000); 

const app = express();
app.use(express.json());
app.use("/api/gadgets", gadgetRoutes);

let mongoServer;

describe("Gadget API Integration Tests (In-Memory DB)", () => {
  beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    const uri = mongoServer.getUri();
    await mongoose.connect(uri, { dbName: "testdb" });
  });

  afterAll(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    await mongoServer.stop();
  });

  afterEach(async () => {
    await Gadget.deleteMany({});
  });

  
  test("POST /api/gadgets/create → should create a gadget", async () => {
    const payload = { name: "Camera", pricePerDay: 25, availableQty: 5 };

    const res = await request(app)
      .post("/api/gadgets/create")
      .send(payload)
      .expect(201);

    expect(res.body.name).toBe("Camera");
    expect(res.body.pricePerDay).toBe(25);

    const gadgetInDb = await Gadget.findOne({ name: "Camera" });
    expect(gadgetInDb).not.toBeNull();
  });

  
  test("GET /api/gadgets/:id → should return a gadget", async () => {
    const gadget = await Gadget.create({
      name: "Laptop",
      pricePerDay: 50,
      availableQty: 3
    });

    const res = await request(app)
      .get(`/api/gadgets/${gadget._id}`)
      .expect(200);

    expect(res.body.name).toBe("Laptop");
    expect(res.body.availableQty).toBe(3);
  });
});
