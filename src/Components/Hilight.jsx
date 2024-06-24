

function Hilight(props){
    return(
    <>
    <div className="hilight">
        <img src="../src/assets/hilight.png" alt={props.title} />
        <p>ICC men t20 world cup</p>
        <h4>{props.title}</h4>
    </div>
    </>
    );
}

export default Hilight;