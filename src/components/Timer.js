import { useEffect, useState } from "react";
import styles from "./Timer.module.scss";
import Button from "./Button";

const Timer = () => {
    const [time, setTime] = useState(0);
    const [start, setStart] = useState(false);
    const msToTime = ms => { 
        let sec = Math.floor((ms / 1000 ) % 60);
        let min = Math.floor(((ms / 1000 ) / 60) % 60);
        let hour = Math.floor((ms / 1000 ) / 60 / 60);
        ms = Math.floor((ms - sec * 1000) );
        return (`${hour} : ${min} : ${sec} : ${ms}`);
     }
    useEffect(() => {
        if(start){
            const timer = setInterval(()=>{
                setTime(previousTime=>previousTime+1);
            },1);
            return () => clearInterval(timer);
        }
    },[start]);
    return(
        <div className={styles.timer}>
            <section className={styles.time}>{msToTime(time)}</section>
            <Button onClick={()=>setStart(true)}>Start</Button>
            <Button onClick={()=>setStart(false)}>Stop</Button>
            <Button onClick={()=>setTime(0)}>Reset</Button>
        </div>
    )

}

export default Timer;