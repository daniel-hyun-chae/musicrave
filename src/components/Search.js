import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Switch from './Switch';
import { useField } from '../utils/hook';
import { search } from '../services/spotify';

const Search = () => {
  const [switchState, setSwitchState] = useState(false);
  const searchField = useField('text');

  const dispatch = useDispatch();
  const profile = useSelector((profile) => profile);

  const onSearch = (event) => {
    searchField.onChange(event);

    const searchType = switchState ? 'artist' : 'track';
    search(searchType, searchField.value, profile);
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
      />
    </div>
  );
};

export default Search;
