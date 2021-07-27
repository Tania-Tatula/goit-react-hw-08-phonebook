import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../routes";
import { connect } from "react-redux";
import { authSelectors } from "../../redux/auth";

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
  activeLink: {
    color: '#E84A5F',
  },
};

const Navigation = ({isAuthenticated}) => {
  return (
    <nav>
    <NavLink to={routes.home}
     exact         
     style={styles.link}
     activeStyle={styles.activeLink}
>
      Главная
    </NavLink>

    {isAuthenticated && (
    <NavLink to={routes.contactsPage}
     exact         
     style={styles.link}
     activeStyle={styles.activeLink}
   >
      Заметки
    </NavLink>
)}
    </nav>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
