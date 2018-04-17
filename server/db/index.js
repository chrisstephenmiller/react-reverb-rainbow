'use strict';

const Sequelize = require('sequelize');
console.log("Opening database connection");
const db = new Sequelize(`postgres://localhost:5432/reverb-rainbow`, { logging: false });

const Listing = db.define('listing', {
  listingId: {
    type: Sequelize.INTEGER,
    unique: true
  },
  title: Sequelize.STRING,
  price: Sequelize.FLOAT,
  make: Sequelize.STRING,
  model: Sequelize.STRING,
  color: Sequelize.STRING,
  imgUrl: Sequelize.STRING,
})

module.exports = { db, Listing }
