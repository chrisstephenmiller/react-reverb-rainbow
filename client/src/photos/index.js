import React, { Component } from 'react';
import './photos.css';
import axios from 'axios'

const colors = [`red`, `orange`, `yellow`, `green`, `blue`, `purple`]

export default class Photo extends Component {
  constructor() {
    super()

    this.state = {
      listings: []
    }

  }

  componentDidMount = () => {
    const redListings = []
    const orangeListings = []
    const yellowListings = []
    const greenListings = []
    const blueListings = []
    const purpleListings = []
    axios.get('/api/listings')
      .then(res => res.data)
      .then(res => {
        res.forEach(l => {
          if (l.color.includes('red')) redListings.push(l)
          if (l.color.includes('orange')) orangeListings.push(l)
          if (l.color.includes('yellow')) yellowListings.push(l)
          if (l.color.includes('green')) greenListings.push(l)
          if (l.color.includes('blue')) blueListings.push(l)
          if (l.color.includes('purple')) purpleListings.push(l)
        })
        const listings = [shuffle((redListings).slice(0, 50)), shuffle((orangeListings).slice(0, 50)), shuffle((yellowListings).slice(0, 50)), shuffle((greenListings).slice(0, 50)), shuffle((blueListings).slice(0, 50)), shuffle((purpleListings).slice(0, 50))]
        this.setState({ listings })
      })



    function shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;

      while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    }
  }

  render = () => {
    const { listings } = this.state
    console.log(listings)
    return (
      <div className="photos">
        {listings.map((c, i) => {
          return (
            <div key={c[0].listingId} className={`color-row-${colors[i]}`}>
              {c.map(l => {
                return (
                  <a key={l.id} target="_blank" href={`http://www.reverb.com/item/${l.listingId}`}>
                    <div className="item" onClick={() => console.log(l.listingId)}>
                      <img alt="listing" src={l.imgUrl} className="photo" />
                      <div className="tooltip">
                        <span className={`tooltiptext`}>
                          {`${l.make} ${l.model}`}
                          <br></br>
                          <span>{`$${l.price}`}</span>
                        </span>
                      </div>
                    </div>
                  </a>
                )
              })}
            </div>
          )
        })}
      </div>
    );
  }
}