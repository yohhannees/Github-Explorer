import React from 'react';
import { Provider } from 'react-redux';
import store from './Redux/store';

import SearchForm from './Components/SearchForm/SearchForm';
import Loader from './Components/Loader/Loader';
import UserProfile from './Components/UserProfile/UserProfile';

import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import { ThemeProvider } from "styled-components";

import { useTheme } from "./Context/ThemeContext";
import { GlobalStyle } from './Components/Styles/global';

const App = () => {
  const { theme } = useTheme();
  return (
    <Provider store={store}>

      <ThemeProvider theme={theme} >
        <GlobalStyle />
        <div className='canvas'>
          <Header />
          <SearchForm />
          <Loader />
          <UserProfile />
          <Footer />
        </div>

      </ThemeProvider>
    </Provider>
  );
};

export default App;
