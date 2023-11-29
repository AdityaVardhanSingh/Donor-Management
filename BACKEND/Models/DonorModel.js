const mongoose = require('mongoose');

const donorSchema = new mongoose.Schema({
  name: String,
  contact: String,
  preferences: String,
  // other fields as per description
});

const DonorModel = mongoose.model('Donor', donorSchema);

module.exports = DonorModel;
