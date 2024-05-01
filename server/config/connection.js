const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://justinschoi93:password1234567890@cluster0.juhayez.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

module.exports = mongoose.connection;
