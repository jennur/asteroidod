import React from "react";

class AccordionSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.renderContent = this.renderContent.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    let content = this.state.isOpen ? this.renderContent() : null;
    return (
      <div className="accordion-section">
        <div className="accordion-section__title" onClick={this.handleClick}>
          {this.props.title}
        </div>
        {content}
      </div>
    );
  }
  handleClick(e) {
    this.setState({ isOpen: !this.state.isOpen });
  }
  renderContent() {
    return (
      <div className="accordion-section__content" ref="accordionContent">
        {this.props.children}
      </div>
    );
  }
}

export default AccordionSection;
