import React from 'react';
import PropTypes from 'prop-types';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

ButtonDropdown.propTypes = {
  disabled: PropTypes.bool,
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),
  group: PropTypes.bool,
  isOpen: PropTypes.bool,
  tag: PropTypes.string,
  toggle: PropTypes.func
};

DropdownToggle.propTypes = {
  caret: PropTypes.bool,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  'data-toggle': PropTypes.string,
  'aria-haspopup': PropTypes.bool
};

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
        αWorkoutsα
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem><NavLink to = {`/workoutindex`}>All Workouts</NavLink></DropdownItem>
          <DropdownItem><NavLink to = {`/`}>Home</NavLink></DropdownItem>
          <DropdownItem divider />
          
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
} 