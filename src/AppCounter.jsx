import './App.css';
import Counter from './component/Counter';
import React, {useState} from 'react';

export default function AppCounter() {
    const [totalCount, setTotalCount] = useState(0);
    const countHandler = () => {
        setTotalCount(prev => prev + 1)
    }
    return (
        <div className='container'>
            <div className='banner'>
                Total Count: {totalCount} {totalCount > 10 ? '🔥' : '❄️'}
            </div>
            <div className='counters'>
                <Counter total={totalCount} onClick={countHandler}/>
                <Counter total={totalCount} onClick={countHandler}/>
                <Counter total={totalCount} onClick={countHandler}/>
            </div>
        </div>
    );
}

