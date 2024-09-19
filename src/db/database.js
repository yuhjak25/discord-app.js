const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    // Connect with the database of MongoDB
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('Connected to mongodb: ' + process.env.MONGODB_URI)
  } catch (error) {
    console.error('Error connecting to MongoDB: ' + error)
    process.exit(1)
  }
}

module.exports = connectDB
