import { useDispatch, useSelector } from "react-redux";

function App() {
  const {count} = useSelector(state=>state.counter);
  const dispatch = useDispatch();
  return (
   <div>
    <button onClick={()=>dispatch({type:"increment"})}>+</button>
    <p>{count}</p>
    <button onClick={()=>dispatch({type:"decrement"})}>-</button>
   </div>
  );
}

export default App;
