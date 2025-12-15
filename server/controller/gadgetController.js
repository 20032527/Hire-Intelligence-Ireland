const Gadget = require('../models/Gadget');

/* Creates a new gadget document */
/* Ref: https://mongoosejs.com/docs/models.html */
const create = async (req, res) => {
  const g = new Gadget(req.body); // create model instance
  await g.save(); // save to database

  res.status(201).json(g);
};

/* Fetches available gadgets sorted by latest */
/* Ref: https://mongoosejs.com/docs/queries.html */
const list = async (req, res) => {
  const gadgets = await Gadget.find({ availableQty: { $gt: 0 } })
    .sort({ createdAt: -1 });

  res.json(gadgets);
};

/* Gets a single gadget by ID */
/* Ref: https://mongoosejs.com/docs/api/model.html#Model.findById */

const get = async (req, res) => {
  const g = await Gadget.findById(req.params.id);
  if (!g) return res.status(404).json({ message: 'Not found' });
  res.json(g);
};

/* Updates gadget details */
/* Ref: https://mongoosejs.com/docs/api/model.html#Model.findByIdAndUpdate */

const update = async (req, res) => {
  const g = await Gadget.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!g) return res.status(404).json({ message: 'Not found' });
  res.json(g);
};

/* Deletes a gadget */
/* Ref: https://mongoosejs.com/docs/api/model.html#Model.findByIdAndDelete */

const remove = async (req, res) => {
  const g = await Gadget.findByIdAndDelete(req.params.id);
  if (!g) return res.status(404).json({ message: 'Not found' });
  res.json({ message: 'Deleted' });
};

module.exports = { create, list, get, update, remove };
