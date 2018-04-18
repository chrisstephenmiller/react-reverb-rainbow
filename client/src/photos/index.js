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

  getListings = () => {
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
        console.log(redListings.length, orangeListings.length, yellowListings.length, greenListings.length, blueListings.length, purpleListings.length)
        const listings = [((redListings).slice(0, 100)), ((orangeListings).slice(0, 100)), ((yellowListings).slice(0, 100)), ((greenListings).slice(0, 100)), ((blueListings).slice(0, 100)), ((purpleListings).slice(0, 100))]
        this.setState({ listings })
      })
      .catch(err => console.log(err))

    const redListings = []
    const orangeListings = []
    const yellowListings = []
    const greenListings = []
    const blueListings = []
    const purpleListings = []

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

  componentDidMount = () => {
    this.getListings()
  }

  render = () => {
    const { listings } = this.state
    return (
      <div className="photos">
        {listings.map((c, i) => {
          return (
            <div key={c[0].listingId} className={`color-row-${colors[i]}`}>
              {c.map(l => {
                return (
                  /*<a key={l.id} target="_blank" href={`http://www.reverb.com/item/${l.listingId}`}>*/
                  <div key={l.id} className="item">
                    <img alt="listing" src={l.imgUrl} className="photo" />
                    <div className="tooltip">
                      <span className={`tooltiptext`}>
                        {`${l.make} ${l.model}`}
                        <br></br>
                        <span>{`$${l.price}`}</span>
                      </span>
                    </div>
                  </div>
                  /*</a>*/
                )
              })}
            </div>
          )
        })}
      </div>
    );
  }
}