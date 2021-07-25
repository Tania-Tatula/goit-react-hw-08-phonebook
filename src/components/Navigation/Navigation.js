import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../routes";

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

const Navigation = () => {
  return (
    <nav>
    <NavLink to={routes.home}
     exact         
     style={styles.link}
     activeStyle={styles.activeLink}
>
      Главная
    </NavLink>
    <NavLink to={routes.contactsPage}
     exact         
     style={styles.link}
     activeStyle={styles.activeLink}
   >
      Заметки
    </NavLink>
    </nav>
  );
};
export default Navigation;
