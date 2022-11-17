import { useState, useEffect } from 'react';
import { Button } from './Button';
import { Time } from './Time';
const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [timerId, setTimerId] = useState(0);
    const handleStartTimer = () => {
        setSeconds(0);
        const id = setInterval(() => {
            setSeconds((prev) => prev + 1)
        }, 1000)
        setTimerId(+id)
    }
    const handleStopTimer = () => {
        clearInterval(timerId);
        setTimerId(0);
    }
    useEffect(() => {
        console.log('Can start timer')
    }, [])
    useEffect(() => {
        if (timerId !== 0) {
            alert(timerId)
        }
    }, [timerId])
    useEffect(() => {
        if (seconds === 10){
            handleStopTimer();
            setSeconds(0);
        }
    }, [seconds])
    return (
        <div>
            <Time seconds={seconds}/>
            <Button handleStartTimer={handleStartTimer} handleStopTimer={handleStopTimer} timerId={timerId} />
        </div>
    )
}

export { Timer };