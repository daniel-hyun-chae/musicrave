import React from 'react';
import { useSelector } from 'react-redux';

const HorizontalScroller = () => {
  const searchResults = useSelector((store) => store.search.tracks.items);
  return (
    <>
      {searchResults ? (
        <ul className="horizontal-scroller">
          {searchResults.map((item) => (
            <li className="horizontal-scroller__item" key={item.id}>
              <img
                className="horizontal-scroller__image"
                src={item.album.images[1].url}
              />
              <div className="horizontal-scroller__text">
                <div className="horizontal-scroller__text-main">
                  {item.name} - {item.artists[0].name}
                </div>
                <div className="horizontal-scroller__text-sub"></div>
              </div>
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
};

export default HorizontalScroller;
