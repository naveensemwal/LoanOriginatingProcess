import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Badge, UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem } from 'reactstrap';
import { Badge as AntdBadge } from 'antd';
import "./DefaultHeader.css"

const imgStyle = { width: "35px", height: "35px", cursor: "pointer", marginRight: "10px" }

class DefaultHeader extends Component {

  render() {

    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <Nav className="ml-auto float-right list-right">
          <NavItem className="d-md-down-none">
            <NavLink to="#" className="nav-link"><AntdBadge count={5}><i className="fa fa-bell-o i-16px" ></i></AntdBadge></NavLink>
          </NavItem>
          <NavItem className="d-md-down-none">
            <NavLink to="#" className="nav-link"><i className="fa fa-list i-16px"></i></NavLink>
          </NavItem>
          <NavItem className="d-md-down-none">
            <NavLink to="#" className="nav-link"><i className="fa fa-map-marker i-16px"></i></NavLink>
          </NavItem>
          <UncontrolledDropdown direction="down" className="apple">
            <DropdownToggle tag="span">
              <img src={'../../assets/img/avatars/6.jpg'} className="img-avatar" style={imgStyle} alt="admin@bootstrapmaster.com" />

            </DropdownToggle>
            <DropdownMenu right >
              <DropdownItem header tag="div" className="text-center"><strong>Account</strong></DropdownItem>
              <DropdownItem><i className="fa fa-bell-o" /> Updates<Badge className="float-right" color="info">42</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-envelope-o"></i> Messages<Badge className="float-right" color="success">42</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-tasks"></i> Tasks<Badge className="float-right" color="danger">42</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-comments"></i> Comments<Badge className="float-right" color="warning">42</Badge></DropdownItem>
              <DropdownItem header tag="div" className="text-center"><strong>Settings</strong></DropdownItem>
              <DropdownItem><i className="fa fa-user"></i> Profile</DropdownItem>
              <DropdownItem><i className="fa fa-wrench"></i> Settings</DropdownItem>
              <DropdownItem><i className="fa fa-usd"></i> Payments<Badge className="float-right" color="secondary">42</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-file"></i> Projects<Badge className="float-right" color="primary">42</Badge></DropdownItem>
              <DropdownItem divider />
              <DropdownItem><i className="fa fa-shield"></i> Lock Account</DropdownItem>
              <DropdownItem onClick={e => this.props.onLogout(e)}><i className="fa fa-lock"></i> Logout</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        {/* <AppAsideToggler className="d-md-down-none" /> */}
        {/*<AppAsideToggler className="d-lg-none" mobile />*/}
      </React.Fragment >
    );
  }
}


const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;