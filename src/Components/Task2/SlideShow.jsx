import { useState } from "react";
import './SlideShow.css';
const SlideShow = () =>  {
    const [i,setI]=useState(1)
    const handleNextClick=()=>{
        console.log(i)
        if(i<6){
            setI(i+1)
        }else{
            setI(1)
        }
    };
    const handlePrevClick=()=>{
        if(i>1){
            setI(i-1)
        }else{
            setI(6)
        }
    };
    return <>
        <img src={`images/${i}.jpg`} alt="Ay haga"/>
        <div>
            <button onClick={handlePrevClick} >Prev</button>
            <button onClick={handleNextClick} >Next</button>
        </div>
    </>
                                       
}
export default SlideShow;
