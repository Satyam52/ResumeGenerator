import React, { Component, useState } from "react";
import { logout } from "../../actions/auth";
import { useHistory } from "react-router-dom";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon
} from "mdbreact";
import PropTypes from "prop-types";
import { connect } from "react-redux";
const NavbarPage = ({ logout, isAuthenticated }) => {
  const [isOpen, setIsopen] = useState(false);
  let history = useHistory();

  const toggleCollapse = () => {
    setIsopen(!isOpen);
  };

  return (
    <MDBNavbar color="primary-color" dark expand="md">
      <MDBNavbarBrand>
        <strong className="white-text">ResumeGenerator </strong>
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={toggleCollapse} />
      <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
        <MDBNavbarNav left>
          <MDBNavItem active>
            <MDBNavLink to="/">Home</MDBNavLink>
          </MDBNavItem>

          <MDBNavItem>
            <MDBNavLink to="/dashboard">Dashboard</MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>
        {isAuthenticated && (
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <MDBIcon icon="user" />
                </MDBDropdownToggle>
                <MDBDropdownMenu right className="dropdown-default right">
                  <MDBDropdownItem
                    onClick={() => {
                      logout();
                      history.push("/");
                    }}
                  >
                    Log Out
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        )}
      </MDBCollapse>
    </MDBNavbar>
  );
};
NavbarPage.protoTypes = {
  logout: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});
export default connect(mapStateToProps, { logout })(NavbarPage);
