import React from "react";
import vstar from "./VASTAR_marker.png";

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", ene:"" ,hp:"",clicked:false};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEne = this.handleEne.bind(this);
    this.handleHp = this.handleHp.bind(this);
    this.imageClick = this.imageClick.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleEne(event) {
    this.setState({ene: event.target.value});
  }
  handleHp(event) {
    this.setState({hp: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
  }
  imageClick(event){
    this.setState({
      clicked: (event.target.value = !event.target.value),
    });
  }
  line1 = <div className="gradline"></div>

  render() {
    return (
      <div className="p1">
        <p className="discription">プレイヤー</p>
        <div className="gradline"></div>
        <h1 className="maintext">{this.state.value}</h1>
        <p className="discription">サイド枚数</p>
        <div className="gradline"></div>
        <h1 className="maintext">{this.state.ene}</h1>
        <p className="discription">残りHP</p>
        <div className="gradline"></div>
        <h1 className="maintext">{this.state.hp}</h1>
        <form onSubmit={this.handleSubmit}>
          <label className="param">
            <p className="discription">VSTAR</p>
            <div className="gradline"></div>
            <img
              className={
                this.state.clicked ? "offvstarMarker" : "onvstarMarker"
              }
              src={vstar}
              alt=""
              onClick={this.imageClick}
            />
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
              placeholder="プレイヤー名"
              className="inputconfig"
            />
            <form onSubmit={this.handleSubmit}>
              <input
                type="range"
                min="0"
                max="6"
                value={this.state.ene}
                onChange={this.handleEne}
                placeholder="サイド枚数"
                name="side"
                className="inputconfig"
              />
            </form>
            <form onSubmit={this.handleSubmit}>
              <input
                type="range"
                min="0"
                max="400"
                step="10"
                value={this.state.hp}
                onChange={this.handleHp}
                placeholder="残りHP"
                name="hpleft"
                className="inputconfig"
              />
            </form>
          </label>
        </form>
      </div>
    );
  }
}

export default Player;
