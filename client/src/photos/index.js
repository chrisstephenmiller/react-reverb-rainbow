import React, { Component } from 'react';
import './photos.css';
import listings from '../listings'
const colors = [`red`, `orange`, `yellow`, `green`, `blue`, `purple`]

export default class Photo extends Component {
  constructor() {
    super()

    this.state = {
      colorListings: [],
      halfColorListings: [],
      newColorListings: [],
      halfNewColorListings: [],
    }
  }

  componentDidMount = () => {
    this.getListings()
  }

  getListings = () => {
    const redListings = []
    const orangeListings = []
    const yellowListings = []
    const greenListings = []
    const blueListings = []
    const purpleListings = []

    listings.forEach((l, i) => {
      if (l.color.includes('red')) redListings.push(l)
      if (l.color.includes('orange')) orangeListings.push(l)
      if (l.color.includes('yellow')) yellowListings.push(l)
      if (l.color.includes('green')) greenListings.push(l)
      if (l.color.includes('blue')) blueListings.push(l)
      if (l.color.includes('purple')) purpleListings.push(l)
    })

    const colorListings = [shuffle(redListings.slice(0, 25)), shuffle(orangeListings.slice(0, 25)), shuffle(yellowListings.slice(0, 25)), shuffle(greenListings.slice(0, 25)), shuffle(blueListings.slice(0, 25)), shuffle(purpleListings.slice(0, 25))]
    const halfColorListings = [shuffle(redListings.slice(25)), shuffle(orangeListings.slice(25)), shuffle(yellowListings.slice(25)), shuffle(greenListings.slice(25)), shuffle(blueListings.slice(25)), shuffle(purpleListings.slice(25))]
    const newColorListings = colorListings.map(arr => shuffle([...arr]))
    const halfNewColorListings = halfColorListings.map(arr => shuffle([...arr]))
    this.setState({ colorListings, halfColorListings, newColorListings, halfNewColorListings })


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
    const { colorListings, halfColorListings, newColorListings, halfNewColorListings } = this.state
    return (
      <div className="photos">
        {[colorListings, halfColorListings, newColorListings, halfNewColorListings].map(a => a.map((c, i) => {
          return (
            <div key={`color-${i}`} className={`${colors[i]}-row`}>
              {c.map(l => {
                return (
                  <a key={l.id} target="_blank" href={`http://www.reverb.com/item/${l.listingId}`}>
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
                  </a>
                )
              })}
            </div>
          )
        }))}
      </div>
    );
  }
}
