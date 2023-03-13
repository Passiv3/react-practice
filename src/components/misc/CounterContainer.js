import React, { useState } from 'react';

import Counter from './Counter';
import Button from '../common/Button';

const CounterContainer = () =>{
    const [currentNumber, setCurrentNumber] = useState(0);

    return <React.Fragment>
        <Counter number = {currentNumber}></Counter>
        <Button>A Button</Button>
    </React.Fragment>
};

export default CounterContainer;