import './App.css';
import Player from './Player.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Player className="p1" />
        <div className='centerBar'>
          <h1>プレイヤー名</h1>
          <h1>サイド枚数</h1>
          <h1>残りHP</h1>
        </div>
        <Player className="p2" />
      </header>
    </div>
  );
}

export default App;
