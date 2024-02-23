import React from "react";
import Header from "./component/Header/Header";
import Home from "./Home";

import Nav from "./component/Nav/Nav";
import Service from "./component/Service/Service"
import Product from "./component/Product/Product"
import Contact from "./component/Contact/Contact"
import About from "./component/About/About";

const App = ()=>{
    return(
        <>
        <Header/>
        <Nav/>
        <Home/>
        <About/>
        <Service/>
        <Product/>
        <Contact/>  
        </>
    )
}
export default App