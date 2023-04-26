import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Toggle = ({ loggedIn, currentUser, filterWorkouts }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("all");

  const toggle = () => setDropdownOpen(!dropdownOpen);

  const handleFilterChange = (userId) => {
    setSelectedFilter(userId);
    filterWorkouts(userId);
  };

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        {selectedFilter === "all" ? "All Workouts" : "My Workouts"}
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem
          onClick={() => handleFilterChange("all")}
          active={selectedFilter === "all"}
        >
          All Workouts
        </DropdownItem>
        {loggedIn && (
          <DropdownItem
            onClick={() => handleFilterChange(currentUser.id)}
            active={selectedFilter === currentUser.id}
          >
            My Workouts
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  );
};

export default Toggle;
