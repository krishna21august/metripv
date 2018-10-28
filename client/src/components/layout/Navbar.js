import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { clearCurrentProfile } from "../../actions/profileActions";

class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
    this.props.clearCurrentProfile();
  }
  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/feed">
            Post Feed
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/dashboard">
            Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <a
            href="#"
            onClick={this.onLogoutClick.bind(this)}
            className="nav-link"
          >
            <img
              className="rounded-circle"
              src={user.avatar}
              alt={user.name}
              style={{ width: "25px", marginRight: "5px" }}
              title="You must have gravatar connected to your email to display image"
            />
            Logout
          </a>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/register">
            Sign Up
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
      </ul>
    );
    return (
      <div>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#myNavbar"
              >
                Menu
              </button>
              <Link className="navbar-brand" to="#myPage">
                <img
                  src={require("../../img/logo.png")}
                  alt="logo"
                  className="img-responsive"
                />
              </Link>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="nav navbar-nav navbar-right">
                <li className="active">
                  <Link to="#">HOME</Link>
                </li>
                <li>
                  <Link to="#">ABOUT US</Link>
                </li>
                <li>
                  <Link to="#">SUCESS STORIES</Link>
                </li>
                <li>
                  <Link to="#">CONTACT US</Link>
                </li>
                <li>
                  <Link to="#">
                    <span
                      className="btn btn-bg theme_bg"
                      data-toggle="modal"
                      data-target=".bs-modal-sm"
                    >
                      LOGIN
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <header className="masthead d-flex">
          <div className="container text-center bnr-dtl">
            {/* <h1 className=" bnr-head" >We bring people together.<br>
            <span className="typewrite" data-period="1000" data-type='[ "We bring people together.", "Love unites them...", "Mayank singh", "Prashant Bhatt" ]'></span>
            <span className="wrap"></span>
          </h1> */}
            <a
              className="btn btn-line btn-lg "
              href="#"
              data-toggle="modal"
              data-target=".bs-modal-sm"
            >
              Get Started
            </a>
          </div>
          <div className="overlay" />
          <div className="clearfix" />
          <div className="bnr_footer">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 bdr_rht">
                  50+ Languages
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 bdr_rht">
                  50+ Languages
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 bdr_rht">
                  50+ Languages
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                  50+ Languages
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser, clearCurrentProfile }
)(Navbar);
