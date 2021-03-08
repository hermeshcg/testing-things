import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, sign_in } from './store/actions';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.logged);
  const dispatch = useDispatch();

  return (
    <Provider store={store}>
      <div className="App">
        <h1>Counter: {counter}</h1>
        <button onClick={() => dispatch(increment(5))}>+</button>
        <button onClick={() => dispatch(decrement(4))}>-</button>
        <button onClick={() => dispatch(sign_in())}>Login</button>
        {isLogged ? <h3>Valuable information i shoudn't see</h3> : ''}
      </div>
    </Provider>
  );
}

export default App;
