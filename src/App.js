import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import GlobalStyle from './Styles/GlobalStyle';
import Home from '../src/Pages/HomePage';
import Product from '../src/Pages/ProductPage';
import Faq from '../src/Pages/FaqPage';
import Contact from '../src/Pages/ContactPage';
import PageNotFound from '../src/Pages/PageNotFound';
import Theme from '../src/Styles/Theme';


const App = () => {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle/>
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Product" element={<Product />} />
            <Route path="/Faq" element={<Faq />} />
            <Route path="/*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
