import React from "react";

export default function Joke(props) {
    return(
        <div>
            <h2>Que: {props.setup}</h2>
            <h3>Ans: {props.punchline}</h3>
        </div>
    )
}