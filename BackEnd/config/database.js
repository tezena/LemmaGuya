const mongoose = require('mongoose');

const dbUri = 'mongodb+srv://tezena:tezenafitahb@cluster0.6u9clce.mongodb.net/LGF_DB?retryWrites=true&w=majority';

async function connectToDatabase() {
  try {
    await mongoose.connect(dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB!');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

module.exports = {
  connectToDatabase,
};
