import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
//import logo from './image/logo192.png'

function Footer(){
    return(
        <footer>This is a footer element</footer>
    )
}

function Page(){
   return(
   <div>
        <Header/>
        <img src="../pic/logo193.png" width="50px"/>
        <h2>This is h2 tag</h2>
        <p>This is a paragraph</p>
        <Footer/>
    </div>)
}

ReactDOM.render(<Page/>,document.getElementById("root"))