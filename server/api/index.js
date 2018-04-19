'use strict'

const Sequelize = require('sequelize');
const router = require('express').Router()
const { db, Listing } = require('../db')
const listings = require('../db/listings-dump')

router.get('/listings', (req, res, next) => {
    res.json(listings)
})

module.exports = router