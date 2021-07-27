import React, { Component } from "react";
import { connect } from "react-redux";
import { authOperations } from "../redux/auth";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 15,
  },
};

class LoginPage extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div>
        <h1 className='title'>Страница логина</h1>
        <div className='container'>
          <Form
            onSubmit={this.handleSubmit}
            style={styles.form}
            autoComplete='off'
          >
            <Form.Label style={styles.label}>
              Почта
              <Form.Control
                type='email'
                name='email'
                value={email}
                onChange={this.handleChange}
              />
            </Form.Label>

            <Form.Label style={styles.label}>
              Пароль
              <Form.Control
                type='password'
                name='password'
                value={password}
                onChange={this.handleChange}
              />
            </Form.Label>

            <Button variant='outline-success' type='submit'>
              Войти
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};

export default connect(null, mapDispatchToProps)(LoginPage);
