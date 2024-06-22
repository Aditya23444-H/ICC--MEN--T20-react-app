import React from 'react'

export default function Video(props) {
    return(
        <>
            <div className="video">
                <img src={props.img} alt={props.title} />
                <p>ICC men t20 world cup</p>
                <h4>{props.title}</h4>
            </div>
        </>
    );
}
