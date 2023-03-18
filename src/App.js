import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, login } from "./actions";
import "./App.css";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogin = useSelector((state) => state.isLogin);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Hello Redux</h1>
      <h2>カウント: {counter}</h2>
      <button onClick={() => dispatch(increment(10))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <h2>
        {isLogin ? (
          <h3>ログインが成功しました！</h3>
        ) : (
          <h3>ログインしてください</h3>
        )}
      </h2>
      <button onClick={() => dispatch(login())}>ログインorログアウト</button>
    </div>
  );
}

export default App;
