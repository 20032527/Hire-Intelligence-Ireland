const Rental = require('../models/Rental');
const Gadget = require('../models/Gadget');

/* Creates a new rental */
/* Ref: https://mongoosejs.com/docs/models.html */
const create = async (req, res) => {
  try {

    /* Basic request validation */
    /* Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else */
    const { user, gadgetId, qty, startDate, endDate } = req.body;
    if (!user || !gadgetId || !startDate || !endDate || !qty) {
      return res.status(400).json({ message: 'Missing fields' });
    }

    const gadget = await Gadget.findById(gadgetId);

    /* Fetch gadget from database */
    /* Ref: https://mongoosejs.com/docs/api/model.html#Model.findById */
    if (!gadget) return res.status(404).json({ message: 'Gadget not found' });
    if (gadget.availableQty < qty) return res.status(400).json({ message: 'Not enough quantity' });

    /* Calculate rental days and total price */
    /* Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date */
    const days = Math.ceil((new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24)) + 1;

    
    const totalPrice = days * gadget.pricePerDay * qty;

    gadget.availableQty -= qty;
    await gadget.save();

    const rental = new Rental({
      user: req.user.id,
      gadget: gadget._id,
      qty,
      startDate,
      endDate,
      totalPrice,
      status: 'reserved'
    });
    await rental.save();

    res.status(201).json(rental);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create rental', error: error.message });
  }
};

/* Fetch rentals for logged-in user */
/* Ref: https://mongoosejs.com/docs/populate.html */
const my = async (req, res) => {
  try {
    const items = await Rental.find({ user: req.user.id }).populate('gadget');
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch rentals', error: error.message });
  }
};
module.exports = { create, my };
