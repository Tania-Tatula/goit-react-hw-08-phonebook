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

class RegisterPage extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onRegister(this.state);

    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <div>
        <h1 className='title'>Страница регистрации</h1>
        <div className='container'>
          <Form
            onSubmit={this.handleSubmit}
            style={styles.form}
            autoComplete='off'
          >
            <Form.Label style={styles.label}>
              Имя
              <Form.Control
                type='text'
                name='name'
                value={name}
                onChange={this.handleChange}
              />
            </Form.Label>

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
              Зарегистрироваться
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterPage);
