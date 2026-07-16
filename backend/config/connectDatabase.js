// const mongoose = require("mongoose");

// const connectDatabase = async () => {
//   try {
//     const con = await mongoose.connect(process.env.DB_URL);

//     console.log(`MongoDB Connected: ${con.connection.host}`);
//   } catch (error) {
//     console.error("MongoDB Connection Failed!");
//     console.error(error.message);
//     process.exit(1);
//   }
// };

// module.exports = connectDatabase;



const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    const con = await mongoose.connect(process.env.DB_URI);

    console.log(`✅ MongoDB Connected: ${con.connection.host}`);
  } catch (error) {
    console.error("❌ MongoDB Connection Failed!");
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDatabase;
