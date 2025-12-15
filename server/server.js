const mongoose = require("mongoose");
const app = require("./index");
const { PORT, MONGO_URI } = require("./config");

mongoose

/* Connect to MongoDB database */

  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");

    /* Start server only after DB is connected */

    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error(err));
