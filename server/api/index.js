'use strict'

const Sequelize = require('sequelize');
const router = require('express').Router()
const { db, Listing } = require('../db')

router.get('/listings', (req, res, next) => {
    console.log('hitting listings')
    Listing.findAll()
        .then(listings => res.send(listings))
})

module.exports = router