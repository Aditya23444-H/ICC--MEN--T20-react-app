import React, { useRef, useState } from 'react'
import Video from './Video'

export default function Videos(props) {
    let items=[1,2,3,4,5,6,7,8];
    let [item,setItem]=useState(0);
    let ref=useRef(null);

    function scrollto(index){
        let container= ref.current;
        let off=index-item;
        container.scrollBy({
            left: 360 * off,
            behavior: 'smooth',
          });
        setItem(index);
        console.log(index,off);
    }

    return(
        <>
            <div className="videos">
                <h2>VIDEOS</h2>
                <div className="video-cards" ref={ref}>
                <Video title="Something random is not actually random" img='../src/assets/video.jpeg'/>
                <Video title="Something random is not actually random" img='../src/assets/video.jpeg'/>
                <Video title="Something random is not actually random" img='../src/assets/video.jpeg'/>
                <Video title="Something random is not actually random" img='../src/assets/video.jpeg'/>
                <Video title="Something random is not actually random" img='../src/assets/video.jpeg'/>
                <Video title="Something random is not actually random" img='../src/assets/video.jpeg'/>
                <Video title="Something random is not actually random" img='../src/assets/video.jpeg'/>
                <Video title="Something random is not actually random" img='../src/assets/video.jpeg'/>
                <Video title="Something random is not actually random" img='../src/assets/video.jpeg'/>
                <Video title="Something random is not actually random" img='../src/assets/video.jpeg'/>
                <Video title="Something random is not actually random" img='../src/assets/video.jpeg'/>
                </div>
                <div className="scroll-buttons">
                    {items.map((_,index)=>{
                        return <button key={index} className={index === item ? "active-scrolling" : "non-active-scrolling"} onClick={()=>{scrollto(index)}}></button>
                    })}
                </div>
            </div>
        </>
    );
}
