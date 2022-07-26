import React from "react";

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", ene:"" ,hp:""};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEne = this.handleEne.bind(this);
    this.handleHp = this.handleHp.bind(this);
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

  render() {
    return (
      <div className="p1">
        <h1>{this.state.value}</h1>
        <h1>{this.state.ene}</h1>
        <h1>{this.state.hp}</h1>
        <form onSubmit={this.handleSubmit}>
          <label className="param">
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
              placeholder="プレイヤー名"
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
              />
            </form>
          </label>
        </form>
      </div>
    );
  }
}

export default Player;
