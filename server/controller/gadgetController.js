const Gadget = require('../models/Gadget');

const create = async (req, res) => {
  const g = new Gadget(req.body);
  await g.save();
  res.status(201).json(g);
};


const list = async (req, res) => {
  const gadgets = await Gadget.find({ availableQty: { $gt: 0 } })
    .sort({ createdAt: -1 });

  res.json(gadgets);
};

const get = async (req, res) => {
  const g = await Gadget.findById(req.params.id);
  if (!g) return res.status(404).json({ message: 'Not found' });
  res.json(g);
};

const update = async (req, res) => {
  const g = await Gadget.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!g) return res.status(404).json({ message: 'Not found' });
  res.json(g);
};

const remove = async (req, res) => {
  const g = await Gadget.findByIdAndDelete(req.params.id);
  if (!g) return res.status(404).json({ message: 'Not found' });
  res.json({ message: 'Deleted' });
};

module.exports = { create, list, get, update, remove };
