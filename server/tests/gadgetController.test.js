const Gadget = require("../models/Gadget");
const {
  create,
  get,
  update,
  remove
} = require("../controller/gadgetController");

/* Mock Gadget model so DB is not used */

jest.mock("../models/Gadget");

describe("Gadget Controller (Unit Tests)", () => {
  
  /* Fake response object */
  const mockRes = () => {
    return {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
  };

 
  test("create() should save gadget and return 201", async () => {
    const req = { body: { name: "Phone", pricePerDay: 20 } };
    const res = mockRes();

    /* Mock save() */
    Gadget.mockImplementation(() => ({
      save: jest.fn()
    }));

    await create(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalled();
  });

  
  test("get() should return gadget", async () => {
    const req = { params: { id: "123" } };
    const res = mockRes();

    Gadget.findById.mockResolvedValue({ name: "Laptop" });

    await get(req, res);

    expect(res.json).toHaveBeenCalledWith({ name: "Laptop" });
  });

  test("get() should return 404 if not found", async () => {
    const req = { params: { id: "123" } };
    const res = mockRes();

    Gadget.findById.mockResolvedValue(null);

    await get(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
  });

  
  test("update() should return updated gadget", async () => {
    const req = { params: { id: "10" }, body: { name: "Updated" } };
    const res = mockRes();

    Gadget.findByIdAndUpdate.mockResolvedValue({ name: "Updated" });

    await update(req, res);

    expect(res.json).toHaveBeenCalledWith({ name: "Updated" });
  });

  test("update() returns 404 for missing gadget", async () => {
    const req = { params: { id: "10" }, body: {} };
    const res = mockRes();

    Gadget.findByIdAndUpdate.mockResolvedValue(null);

    await update(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
  });

  
  test("remove() should delete gadget", async () => {
    const req = { params: { id: "1" } };
    const res = mockRes();

    Gadget.findByIdAndDelete.mockResolvedValue({ _id: "1" });

    await remove(req, res);

    expect(res.json).toHaveBeenCalledWith({ message: "Deleted" });
  });

  test("remove() should return 404 when not found", async () => {
    const req = { params: { id: "1" } };
    const res = mockRes();

    Gadget.findByIdAndDelete.mockResolvedValue(null);

    await remove(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
  });
});
