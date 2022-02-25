import React from "react";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Cards from "./component/Cards";
import data from "./data.js";

export default function App() {
    const card= data.map(item=>{
        return (
            <Cards 
                imge={item.coverImg} 
                rating={item.stats.rating} 
                reviewCount={item.stats.reviewCount} 
                country={item.location} 
                title={item.title} 
                price={item.price}
            />
        )
    })
    return(
        <div>
            <Navbar/>
            <Hero/>
            <section className="cards-list">
                {card}
            </section>
        </div>
    )
}