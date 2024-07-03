import Hilight from './Hilight'
import { useState ,useRef} from 'react';
import titles from '../data/data.json';

function Hilights(){
    let items=[];
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


    function formatDate(inputDate) {
        const [year, month, day] = inputDate.split('-');
        return `${day}-${month}-${year}`;
    }

    let [data, setData ] = useState(titles);

    const onSearch=(e)=>{
        let value=e.target.value.toLowerCase();
        const name=e.target.name.toLowerCase();
        let requiredData=[{title:"",date:""}]
        if(name === 'title') {
            requiredData=titles.filter(item =>
            (item.title).toLowerCase().includes(value)
            )
            console.log(value,name,requiredData);
            setData(requiredData);
        }

        else{
            value=formatDate(value);
            requiredData=titles.filter(item =>
            item.date === value
            )
            console.log(value,name,requiredData);
            setData(requiredData);
        }
        for(let i=1; i<data.length-2; i++){
            items[i-1] = i;
        }
    }
    
    for(let i=1; i<data.length-2; i++){
        items[i-1] = i;
    }

    return(
    <>
    <div className="hilights">
        <h2>MATCH HILIGHTS</h2>
        <div className="search-bar">
            <input type="search" name="title" id="title" placeholder='Search by Title...' onChange={onSearch}/>
            <input type="date" name="date" id="date" onChange={onSearch}/>
        </div>
        <div className="hi-cards" ref={ref}>
        {data.length===0? <p className='no-content'>No Highlights to display</p> :data.map((value,index)=>{
            return <Hilight key={index}  title= {value.title} date={value.date}/>
        })}
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

export default Hilights;