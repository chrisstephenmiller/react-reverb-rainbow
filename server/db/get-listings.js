const fetch = require('node-fetch')
// const { db, Listing } = require('./index')

// db.sync({ force: true })
//   .then(() => {
//     console.log('db synced')
//   });

const getListings = p => {
  return fetch(`api/listings`, {
    // headers: {
    //   'Content-Type': 'application/hal+json',
    //   'Accept': 'application/hal+json',
    //   'Accept-Version': '3.0'
    // },
    method: `GET`,
  })
    .then(results => results.json())
}

const listingsWithFinish = p => getListings(p).then(results => results.listings.filter(l => l.finish))

const colors = ['red', 'orange', `yellow`, `green`, `blue`, `purple`]

const red = l => { if (l.finish.includes('Red')) { l.finish = 'red' } }
const orange = l => { if (l.finish.includes('Orange') || l.finish.includes('Amber')) { l.finish = 'orange' } }
const yellow = l => { if (l.finish.includes('Yellow') || l.finish.includes('Gold') || l.finish.includes('Butterscotch')) { l.finish = 'yellow' } }
const green = l => { if (l.finish.includes('Green')) { l.finish = 'green' } }
const blue = l => { if (l.finish.includes('Blue')) { l.finish = 'blue' } }
const purple = l => { if (l.finish.includes('Purple') || l.finish.includes('Burgundy')) { l.finish = 'purple' } }

const listingsFilteredByColor = p => {
  return listingsWithFinish(p)
    .then(listings => {
      listings.forEach(l => {
        red(l)
        orange(l)
        yellow(l)
        green(l)
        blue(l)
        purple(l)
      })
      return listings.filter(l => colors.includes(l.finish))
    })
}

const storeColorfulListings = p => {
  listingsFilteredByColor(p)
    .then(listings => {
      listings.forEach(l => {
        Listing.create({
          listingId: l.id,
          title: l.title,
          price: l.price.amount,
          make: l.make,
          model: l.model,
          color: l.finish,
          imgUrl: l.photos[0]._links.large_crop.href
        })
      })
    })
}

const pages = p => {
  for (let i = 1; i < p; i++) {
    storeColorfulListings(i)
  }
}

pages(10)
