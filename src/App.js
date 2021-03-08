import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, sign_in } from './store/actions';

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.logged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement(4))}>-</button>
      <button onClick={() => dispatch(sign_in())}>Login</button>
      {isLogged ? <h3>Valuable information i shoudn't see</h3> : ''}
    </div>
  );
}

export default App;
