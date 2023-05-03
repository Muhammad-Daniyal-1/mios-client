import React, { Component, } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { Navigate } from "react-router-dom";
import image from "../assets/images/logo_sml 1.png";
import Notification from '../../Notifications/Notifications';
import { ReactNotifications } from 'react-notifications-component';


export class Login extends Component {

  constructor() {
    super();
    this.state = {
      loading: false,
      email: "",
      password: "",
      errors: {},
      user: "",
    };
  }


  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    this.login(this.state.email, this.state.password);
  }
  host = process.env.REACT_APP_API_URL;
  login = async (email, password) => {
    try {
      const response = await axios.post(`${this.host}/api/auth/login`, {
        headers: {
          "Content-Type": "application/json",
        },
        email, password
      });
      if (response.data?.authtoken) {
        console.log(response.data.authtoken);
        this.setState({ user: response.data.authtoken });
        // console.log(this.state.user);
        window.location.reload();
      }
    } catch (e) {
      if (e.response?.data?.errors[0]?.msg) {
        Notification("Error", e.response.data.errors[0].msg, "danger");
      } else if (e.response?.data?.errors?.msg) {
        Notification("Error", e.response.data.errors.msg, "danger");
      } else {
        Notification("Error", e.message, "danger");
      }
    } 
  };

  render() {
    return (
      <><ReactNotifications />
        <section className="area-login">

          {this.state.user ? (
            <Navigate to="/productMain" replace={true} />
          ) : null}

          <div className="login">
            <div>
              <img className='logo_mios' src={image} alt='logo' />
            </div>

            <form method='post' onSubmit={this.onSubmit}>
              <input type="email" name="email" id='email' placeholder="E-mail" autoFocus onChange={this.onChange} required />
              <input className="mb-3" type="password" name="password" id='password' placeholder="Password" onChange={this.onChange} required />
              <br /> <input type="submit" value="Login" />
              <span>
                <center>
                  <br />
                  Don't Have an Account? <Link to="/signup">SIGN UP</Link>
                </center>
              </span>
            </form>
          </div>
        </section>
      </>
    )
  }
}

export default Login