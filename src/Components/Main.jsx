import Standings from "./Standings";
import Hilights from "./Hilights";
import Videos from "./Videos";

function Main(props){
    return(
    <>
    <Standings />
    <Videos scroll={props.scroll}/>
    <Hilights />
    </>
    );
}

export default Main;