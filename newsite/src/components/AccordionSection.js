import React from 'react';
import PropTypes from 'prop-types';

class AccordionSection extends React.Component{
  onClick = () => {
    this.props.onClick(this.props.label);
  }
  render(){
      
  }
}

AccordionSection.PropTypes = {
  children = PropTypes.instanceOf(Object).isRequired,
  isOpen = PropTypes.bool.isRequired,
  label = PropTypes.string.isRequired,
  onClink = PropTypes.func.isRequired
};