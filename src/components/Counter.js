import {useState} from 'react'
import { AiOutlineHeart } from 'react-icons/ai';


function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className="Counter flex mr2" onClick={() => setCount(count+1)}>
      <div className='f3 mt2'>
        {count}
      </div>
      <AiOutlineHeart className='f1'/>
    </div>
  );
}

export default Counter;
