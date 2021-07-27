import React from "react";
import { connect } from "react-redux";
import { authSelectors, authOperations } from "../../redux/auth";
import defaultAvatar from "./default-avatar.png";
import { Button } from 'react-bootstrap';

const UserMenu = ({ avatar, name, onLogout }) => (
  <div className='container'>
    <img src={avatar} alt='' width='32' className='avatar' />
    <span className='name'>Welcome, {name}</span>
    <Button variant="outline-success" type='button' onClick={onLogout}>
      Logout
    </Button>
  </div>
);
const mapStateToProps = (state) => ({
  name: authSelectors.getUsername(state),
  avatar: defaultAvatar,
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
