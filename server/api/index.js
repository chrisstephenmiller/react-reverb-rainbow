'use strict'

const Sequelize = require('sequelize');
const router = require('express').Router()
const { db, Listing } = require('../db')

router.get('/listings', (req, res, next) => {
    Listing.findAll()
        .then(listings => res.send(listings))
})

router.delete('/listings/:listingId', (req, res, next) => {
    const { listingId } = req.params
    Listing.destroy({
        where: {
            listingId
        }
    })
    res.send('destroyed')
})

module.exports = router