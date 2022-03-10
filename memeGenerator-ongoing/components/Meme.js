import React from "react";
import memesdata from "./memesdata";
 
export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages,setAllMemeImages] = React.useState(memesdata)
    function getMemesImage(){
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random()*memesArray.length)
        //setMemeImage(memesArray[randomNumber].url);
        setMeme(preVal=> ({...meme,randomImage:memesArray[randomNumber].url}))
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
                <img src={meme.randomImage}/>
            </div>
        </main>
    )
}