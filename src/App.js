import './App.css';
import Player from './Player.jsx';
import Coin from './Coin.jsx'
import Field from './Field';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Player className="p1" />
        <div className="centerBar">
          <h1>プレイヤー名</h1>
          <h1>サイド枚数</h1>
          <h1>残りHP</h1>
          <Field />
          <Coin />
        </div>
        <Player className="p2" />
      </header>
    </div>
  );
}

export default App;
