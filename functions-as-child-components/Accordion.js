import React, { Component } from 'react';

export class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.onToggle = this.onToggle.bind(this);
  }
  
  render() {
    return (
      <span>
        { this.props.children(this.state.isOpen, this.onToggle) }
      </span>
    );
  }
  
  onToggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }
}

export class Consumer extends Component {
  render() {
    <Accordion>
      {
        (isOpen, onToggle) => {
          if (isOpen) {
            return <ComponentA onToggle={onToggle} />;
          }
          return <ComponentAWithDifferentSiblings onToggle={onToggle} />;
        }
      }
    </Accordion>
  }
}
