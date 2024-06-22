import React from 'react'
import Video from './Video'

export default function Videos() {
    return(
        <>
            <div className="videos">
                <h2>VIDEOS</h2>
                <div className="video-cards">
                <Video title="Something random is not actually random" img='../video.jpeg'/>
                <Video title="Something random is not actually random" img='../video.jpeg'/>
                <Video title="Something random is not actually random" img='../video.jpeg'/>
                <Video title="Something random is not actually random" img='../video.jpeg'/>
                <Video title="Something random is not actually random" img='../video.jpeg'/>
                <Video title="Something random is not actually random" img='../video.jpeg'/>
                </div>
                <div className="scroll-buttons">
                    <button className="active-scrolling"></button>
                    <button className="non-active-scrolling"></button>
                </div>
            </div>
        </>
    );
}
