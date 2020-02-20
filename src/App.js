import React, {Component} from 'react';
import Shape from './shape';

class Selector extends Component {
  constructor() {
    super();
    this.state = {
      selectedShape: 'square',
      count: 0,
    }
  }

  selectShape = (shapeName) => {
    this.setState({
      selectedShape: shapeName,
    })
  }

  countClicks = () => {
    this.setState({
      count: this.state.count + 1,
    })
  }
  render() {
    return (
      <div className= "container">
        <div className="navbar">
          <div>Selected: <span>{this.state.selectedShape}</span></div>
        </div>
        <div className="shape-list" onClick={this.countClicks}>

          <Shape shape="square" selectShape={this.selectShape}
           />
          <Shape shape="triangle" selectShape={this.selectShape}/>
          <Shape shape="circle" selectShape={this.selectShape}/>
        </div>

        <div className="shape-list" onClick={this.countClicks}>
          <Shape shape="oval" selectShape={this.selectShape}/>
          <Shape shape="trapezium" selectShape={this.selectShape}/>
          <Shape shape="triangle_down" selectShape={this.selectShape}/>
        </div>

        <div className="shape-list" onClick={this.countClicks}>
          <Shape shape="star" selectShape={this.selectShape}/>
          <Shape shape="triangle_left" selectShape={this.selectShape}/>
          <Shape shape="triangle_right" selectShape={this.selectShape}/>
        </div>
        <div className="footer">Total clicks: {this.state.count}</div>
      </div>
    )
  }
}

export default Selector;
