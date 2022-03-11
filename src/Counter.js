import {useState} from 'react';

function Counter(){
    const [count, setCount] = useState(0);
    function ACC(){
        setCount(count + 1)
    }
    function DEC(){
        setCount(count - 1)
    }
    const [t,setT] = useState(false);

    return(
        <>
        <div className='Count'>
      <p>You clicked {count} times</p>
      <button onClick={ACC} >
        ACC
      </button>
      <button onClick={DEC} disabled={t}>
        DEC 
      </button>
    </div>
        </>
    );
}


export default Counter;