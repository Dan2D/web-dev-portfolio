import React, { Component } from "react";
import Icon from "./Icon";
import Display from "./Display";
import InfoSec from "./InfoSec";

class ProjCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: ""
    };
  }

  componentDidMount() {
    this.adjustComps();
    window.addEventListener("resize", this.adjustComps);
  }

  adjustComps = () => {
    let width = document.documentElement.clientWidth;
    if (width < 768) {
      this.setState({size: ""})
    }
    // if (width > 481 && width < 992 ){
    //     this.setState({size: '-md'});
    // }
    if (width > 768) {
      this.setState({size: "-lg"})
    }
  };

  clickHandler = (card) => {
    let pos = card.currentTarget.dataset.pos;
    if (pos === "2"){
        return
    }
    let switchCard = document.querySelector('.projCard-container[data-pos="2"]');
    switchCard.dataset.pos = pos;
    card.currentTarget.dataset.pos = "2";
  }

  render() {
    return (
      <div className="projCard-container" tabIndex="0" data-pos={this.props.pos} onClick={(e) => this.clickHandler(e)}>
        <Icon icon={this.props.name + this.state.size} />
        <Display size={this.state.size} desktop={`${this.props.name}-desktop`} mobile={`${this.props.name}-mobile`} />
        <InfoSec
          title={this.props.title}
          size={this.state.size}
          tools={this.props.tools}
          design={this.props.design}
          purpose={this.props.purpose}
          notes={this.props.notes}
        />
      </div>
    );
  }
}
export default ProjCard;
