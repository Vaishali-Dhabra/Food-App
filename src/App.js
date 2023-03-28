import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Theme from './CustomTheme/Theme';
import { ThemeProvider } from '@emotion/react';
import GlobalStyle from './Styles/GlobalStyle';
import Home from './Pages/HomePage';
import Product from './Pages/ProductPage';
import Faq from './Pages/FaqPage';
import Contact from './Pages/ContactPage';
import PageNotFound from './Pages/PageNotFound';


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
