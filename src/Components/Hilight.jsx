

function Hilight(props){
    return(
    <>
    <div className="hilight">
        <img src="../src/assets/hilight.png" alt={props.title} />
        <h4>{props.title}</h4>
        <p className="date">{props.date}</p>
    </div>
    </>
    );
}

export default Hilight;