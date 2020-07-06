import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useCookies } from 'react-cookie';

// import components
import Header from './components/Header';
import Search from './components/Search';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

import { setProfileCreator } from './reducers/profileReducer';

const App = () => {
  const [cookies, setCookie] = useCookies(['isLoggedIn']);
  const isLoggedIn = cookies.isLoggedIn;
  const userProfile = useSelector((store) => store.profile);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn && !userProfile) {
      dispatch(setProfileCreator());
    }
  }, [dispatch]);
  return (
    <div className="container">
      <Header />
      <Search />
      <Navigation />
    </div>
  );
};

export default App;
