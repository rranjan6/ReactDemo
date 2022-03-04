import React from "react";
import memesdata from "./memesdata";
 
export default function Meme() {
    const [memeImage, setMemeImage] = React.useState("http://i.imgflip.com/1bij.jpg")
    function getMemesImage(){
        const memesArray = memesdata.data.memes
        const randomNumber = Math.floor(Math.random()*memesArray.length)
        setMemeImage(memesArray[randomNumber].url);
    }
    return(
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button 
                    className="form--button"
                    onClick={getMemesImage}
                >
                    Get a new meme image 🖼
                </button>
                <img src={memeImage}/>
            </div>
        </main>
    )
}