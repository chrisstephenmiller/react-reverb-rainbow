import React from 'react';
import './photos.css';
import listings from '../listings'

const colors = [`red`, `orange`, `yellow`, `green`, `blue`, `purple`]

const Photos = () => {
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

export default Photos;