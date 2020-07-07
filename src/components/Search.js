import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Switch from './Switch';
import HorizontalScroller from './HorizontalScroller';
import { useField } from '../utils/hook';

import { setSearchCreator } from '../reducers/searchReducer.js';

const Search = () => {
  const [switchState, setSwitchState] = useState(false);
  const searchField = useField('text');

  const dispatch = useDispatch();
  const profile = useSelector((store) => store.profile);

  const onSearch = (event) => {
    searchField.onChange(event);
    const searchType = switchState ? 'artist' : 'track';
    dispatch(
      setSearchCreator(searchType, searchField.value, profile.data.country)
    );
  };

  return (
    <div className="search">
      <div className="search__switch">
        <span
          className={
            switchState
              ? 'search__switch-option'
              : 'search__switch-option search__switch-option--active'
          }
        >
          by track
        </span>
        <Switch switchState={switchState} setSwitchState={setSwitchState} />
        <span
          className={
            switchState
              ? 'search__switch-option search__switch-option--active'
              : 'search__switch-option'
          }
        >
          by artist
        </span>
      </div>
      <input
        type={searchField.type}
        value={searchField.value}
        onChange={onSearch}
        className="search__box"
        placeholder={switchState ? 'Search by artist' : 'Search by track'}
      />
      <HorizontalScroller />
    </div>
  );
};

export default Search;
