require("dotenv-flow").config();
const mongoose = require("mongoose");

const MONGO_ID = process.env.MONGO_ID;
const MONGO_PASS = process.env.MONGO_PASS;

const clusterURL = `mongodb+srv://${MONGO_ID}:${MONGO_PASS}@live-markdown.nemylu3.mongodb.net/?retryWrites=true&w=majority`;

const config = {
  dbName: "development",
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const db = mongoose.connection;

mongoose.connect(clusterURL, config, () => {
  console.log("Connected to db");
  findRooms();
});

const ONE_DAY = 1000 * 60 * 60 * 24;
const TIMEFRAME = Date.now() - ONE_DAY;

const searchConfig = {
  timestamp: {
    $lt: new Date(TIMEFRAME),
  },
};

function findRooms() {
  try {
    const rooms = db.collection("rooms");
    rooms.deleteMany(searchConfig).then(() => {
      console.log("Deleted all old rooms");
      mongoose.disconnect();
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = {};
