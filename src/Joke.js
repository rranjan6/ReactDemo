import React from "react";

export default function Joke(props) {
    return(
        <div>
            {/*props.setup && <h3>Que: {props.setup}</h3>*/}
            <h3 style={{display: props.setup? "block": "none"}} >Que: {props.setup}</h3>
            <p>Ans: {props.punchline}</p>
            <hr/>
        </div>
    )
}