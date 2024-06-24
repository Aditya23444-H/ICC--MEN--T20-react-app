
function Standings(){
    let thead=['POS','Team','pld','nrr','pts'];
    let item=[[1,'../src/assets/afg.png','AFG',0,'-',0],[1,'../src/assets/afg.png','AFG',0,'-',0],[1,'../src/assets/afg.png','AFG',0,'-',0],[1,'../src/assets/afg.png','AFG',0,'-',0]]

    return(
    <>
    <div className="main">
        <div className="standings">
            <div className="grid-container">
                <div className="grid-item1 p-10">Standings</div>
                <div className=" grid-item1 thead">
                    {thead.map((value)=>{
                        return <div className="grid-item2 p-10">{value}</div>
                    })}
                </div>
                
                    {item.map((value)=>{
                        return (
                        <>
                            <div className=" grid-item1">
                                <div className="grid-item2 p-10 txt-cent">{value[0]}</div>
                                <div className="grid-item3 p-10">
                                    <div><span>{value[2]}</span></div>
                                    <div><img src={value[1]} alt="afg" /></div>
                                </div>
                                <div className="grid-item2 p-10 txt-cent">{value[3]}</div>
                                <div className="grid-item2 p-10 txt-cent">{value[4]}</div>
                                <div className="grid-item2 p-10 txt-cent">{value[5]}</div>
                            </div>
                        </>
                        );
                    })}
            </div>
        </div>
    </div>
    </>
    );
}

export default Standings;