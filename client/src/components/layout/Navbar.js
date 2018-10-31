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
      <div className="Landing" id="index">
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
          <div
            aria-hidden="true"
            aria-labelledby="mySmallModalLabel"
            className="modal fade bs-modal-sm"
            id="myModal"
            role="dialog"
            tabindex="-1"
          >
            <div className="modal-dialog modal-md">
              <div className="modal-content">
                <div className="modal-header theme_color">
                  <button
                    aria-hidden="true"
                    className="close"
                    data-dismiss="modal"
                    style={{ color: "#ffffff", opacity: "1" }}
                    type="button"
                  >
                    ×
                  </button>
                  <h4 className="modal-title" id="myModalLabel" />
                  <img
                    className="img-responsive"
                    alt="logo"
                    src={require("../../img/logo.png")}
                  />
                </div>
                <div className="bs-example bs-example-tabs text-center">
                  <ul className="nav nav-tabs" id="myTab">
                    <li className="active col-xs-6 col-md-6 col-sm-6 col-lg-6 no-pad">
                      <Link data-toggle="tab" to="#signin">
                        Login
                      </Link>
                    </li>
                    <li className=" col-xs-6 col-md-6 col-sm-6 col-lg-6 no-pad">
                      <Link data-toggle="tab" to="#signup">
                        Register
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="modal-body">
                  <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade active in" id="signin">
                      <form className="form-horizontal">
                        <fieldset>
                          <div className="control-group">
                            <label className="control-label" htmlFor="userid">
                              Email Id:
                            </label>
                            <div className="controls">
                              <input
                                className="input-medium"
                                id="userid"
                                name="userid"
                                placeholder="Ex: rahul_123@gmail.com"
                                required=""
                                type="email"
                              />
                            </div>
                          </div>
                          <div className="control-group">
                            <label
                              className="control-label"
                              htmlFor="passwordinput"
                            >
                              Password:
                            </label>
                            <div className="controls">
                              <input
                                className="input-medium"
                                id="passwordinput"
                                name="passwordinput"
                                placeholder="********"
                                required=""
                                type="password"
                              />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12 text-right">
                              <i>
                                <Link to="#">Forgot Password?</Link>
                              </i>
                            </div>
                          </div>
                          <div className="control-group text-center">
                            <label className="control-label" htmlFor="signin" />
                            <div className="controls">
                              <button
                                className="btn btn-danger col-xs-12 col-md-12 col-sm-12 col-lg-12 btn-lg"
                                id="signin"
                                name="signin"
                              >
                                Login
                              </button>
                            </div>
                          </div>
                        </fieldset>
                      </form>
                    </div>
                    <div className="tab-pane fade" id="signup">
                      <form className="form-horizontal">
                        <fieldset>
                          <div className="control-group">
                            <label className="control-label" htmlFor="First">
                              First Name:
                            </label>
                            <div className="controls">
                              <input
                                className="input-medium"
                                id="First"
                                name="First"
                                placeholder="Eg: Rahul"
                                required=""
                                type="text"
                              />
                            </div>
                          </div>
                          <div className="control-group">
                            <label className="control-label" htmlFor="Last">
                              Last Name:
                            </label>
                            <div className="controls">
                              <input
                                className="input-medium"
                                id="Last"
                                name="Last"
                                placeholder="Eg: Kumar"
                                required=""
                                type="text"
                              />
                            </div>
                          </div>
                          <div className="control-group">
                            <label className="control-label" htmlFor="Email">
                              Email:
                            </label>
                            <div className="controls">
                              <input
                                className="input-large"
                                id="Email"
                                name="Email"
                                placeholder="Ex: rahul_123@gmail.com"
                                required=""
                                type="text"
                              />
                            </div>
                          </div>
                          <div className="control-group">
                            <label className="control-label" htmlFor="Phone">
                              Phone Number:
                            </label>
                            <div className="controls">
                              <input
                                className="input-large"
                                id="Phone"
                                name="Phone"
                                placeholder="Eg: 0123456789"
                                required=""
                                type="text"
                              />
                            </div>
                          </div>
                          <div className="control-group">
                            <label className="control-label" htmlFor="password">
                              Password:
                            </label>
                            <div className="controls">
                              <input
                                className="input-large"
                                id="password"
                                name="password"
                                placeholder="********"
                                required=""
                                type="password"
                              />
                              <em>1-8 Characters</em>
                            </div>
                          </div>
                          <div className="control-group text-center">
                            <label
                              className="control-label"
                              htmlFor="confirmsignup"
                            />
                            <div className="controls">
                              <button
                                className="btn btn-danger col-xs-12 col-md-12 col-sm-12 col-lg-12 btn-lg"
                                id="confirmsignup"
                                name="confirmsignup"
                              >
                                Sign Up
                              </button>
                            </div>
                          </div>
                        </fieldset>
                      </form>
                    </div>
                  </div>
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
