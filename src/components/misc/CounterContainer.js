import React, { useState } from 'react';

import Counter from './Counter';
import Button from '../common/Button';

const CounterContainer = () =>{
    const [currentNumber, setCurrentNumber] = useState(0);
    const buttonHandler = () => {
        setCurrentNumber(currentNumber + 1);
    }
    return <React.Fragment>
        <Counter number = {currentNumber}></Counter>
        <Button label = "A Button" onClick = {buttonHandler}></Button>
    </React.Fragment>
};

export default CounterContainer;