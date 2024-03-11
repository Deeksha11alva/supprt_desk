const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      'mongodb+srv://d06eeksha:Deeksha%401106@cluster0.ws2ybwa.mongodb.net/Profile?retryWrites=true&w=majority&appName=Cluster0'
    )
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    console.log(`Error: ${error.message}`.red.underline.bold)
    process.exit(1)
  }
}

module.exports = connectDB
