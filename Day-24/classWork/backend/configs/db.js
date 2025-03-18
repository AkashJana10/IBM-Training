const mongoose = require('mongoose');

const connectDB = mongoose.connect('mongodb+srv://akashjana9679:akash@cluster1.uk8aw.mongodb.net/myDB?retryWrites=true&w=majority&appName=Cluster1');

module.exports = connectDB;