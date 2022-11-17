const Button = (props: {handleStartTimer: Function, handleStopTimer: Function, timerId: number}) => {
    const { handleStartTimer, handleStopTimer, timerId } = props;
    const isTimerStarted = timerId !== 0;
    return (
        <button onClick={() => isTimerStarted ? handleStopTimer() : handleStartTimer()}
                style={{backgroundColor: isTimerStarted ? 'red' : 'green'}}>
            {!isTimerStarted ? 'START' : 'STOP'}
        </button>
    )
}

export { Button };