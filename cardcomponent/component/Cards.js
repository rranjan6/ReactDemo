import React from "react"

export default function Card() {
    return(
        <div className="card">
            <img className="card-image" src="images/katie-zaferes.png"/>
            <div className="card-stats">
                <img className="card-star" src="images/star.png"/>
                <span>5.0</span>
                <span className="gray">(6) .</span>
                <span className="gray">USA</span>
            </div>
            <p>Life lession with Katie zaferes</p>
            <p><span className="bold">From $136</span> / person</p>
        </div>
    )
}