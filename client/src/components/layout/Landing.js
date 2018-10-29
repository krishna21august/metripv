import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
  render() {
    return (
      <div className="landing">
        <section className="section">
          <div className="container text-center">
            <h1 className="sec_head"> We Bring You Best Match From All </h1>
            <p className="sec_title mr_b5"> Follow this simple steps</p>

            <div className="row">
              <div className=" col-lg-4 col-md-4 col-sm-4 col-xs-12">
                <div className="card">
                  <Link to="#">
                    <img
                      className="card-img-top"
                      src={require("../../img/pro_1.png")}
                      alt="Card image"
                    />
                    <div className="card-body">
                      <h4 className="card-title">Sign Up</h4>
                      <p className="card-text">
                        Register for free & put up your Profile
                      </p>
                    </div>
                  </Link>
                </div>
              </div>

              <div className=" col-lg-4 col-md-4 col-sm-4 col-xs-12">
                <div className="card">
                  <Link to="#">
                    <img
                      className="card-img-top"
                      src={require("../../img/pro_2.png")}
                      alt="Card image"
                    />
                    <div className="card-body">
                      <h4 className="card-title">Sign Up</h4>
                      <p className="card-text">
                        Register for free & put up your Profile
                      </p>
                    </div>
                  </Link>
                </div>
              </div>

              <div className=" col-lg-4 col-md-4 col-sm-4 col-xs-12">
                <div className="card">
                  <Link to="#">
                    <img
                      className="card-img-top"
                      src={require("../../img/pro_3.png")}
                      alt="Card image"
                    />
                    <div className="card-body">
                      <h4 className="card-title">Sign Up</h4>
                      <p className="card-text">
                        Register for free & put up your Profile
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section story">
          <div className="container text-center">
            <h1 className="sec_head"> Be inspired by Real Weddings </h1>
            <p className="sec_title mr_b5">
              {" "}
              Find inspiration for your Special Day. Yours could be the next
              Success Story.
            </p>
            <div className="row">
              <div className="">
                <div className="">
                  <div id="myCarousel" className="carousel slide">
                    <ol className="carousel-indicators">
                      <li
                        data-target="#myCarousel"
                        data-slide-to="0"
                        className="active"
                      />
                      <li data-target="#myCarousel" data-slide-to="1" />
                      <li data-target="#myCarousel" data-slide-to="2" />
                    </ol>

                    <div className="carousel-inner">
                      <div className="item active">
                        <div className="row-fluid">
                          <div className="col-sm-4 col-xs-12 col-md-4 col-lg-4  ">
                            <div className="thumbnail">
                              <img
                                src={require("../../img/str-1.jpg")}
                                alt="Image"
                                className="img-responsive no-pad"
                              />
                              <div className="card-body text-center">
                                <h4 className="card-title">Megha and Anshul</h4>
                                <p className="card-text">Kumauni</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-4 col-xs-12 col-md-4 col-lg-4  ">
                            <div className="thumbnail">
                              <img
                                src={require("../../img/str-1.jpg")}
                                alt="Image"
                                className="img-responsive no-pad"
                              />
                              <div className="card-body text-center">
                                <h4 className="card-title">Megha and Anshul</h4>
                                <p className="card-text">Kumauni</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-4 col-xs-12 col-md-4 col-lg-4  ">
                            <div className="thumbnail">
                              <img
                                src={require("../../img/str-1.jpg")}
                                alt="Image"
                                className="img-responsive no-pad"
                              />
                              <div className="card-body text-center">
                                <h4 className="card-title">Megha and Anshul</h4>
                                <p className="card-text">Kumauni</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="item">
                        <div className="row-fluid">
                          <div className="col-sm-4 col-xs-12 col-md-4 col-lg-4  ">
                            <div className="thumbnail">
                              <img
                                src={require("../../img/str-1.jpg")}
                                alt="Image"
                                className="img-responsive no-pad"
                              />
                              <div className="card-body text-center">
                                <h4 className="card-title">Megha and Anshul</h4>
                                <p className="card-text">Kumauni</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-4 col-xs-12 col-md-4 col-lg-4  ">
                            <div className="thumbnail">
                              <img
                                src={require("../../img/str-1.jpg")}
                                alt="Image"
                                className="img-responsive no-pad"
                              />
                              <div className="card-body text-center">
                                <h4 className="card-title">Megha and Anshul</h4>
                                <p className="card-text">Kumauni</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-4 col-xs-12 col-md-4 col-lg-4  ">
                            <div className="thumbnail">
                              <img
                                src={require("../../img/str-1.jpg")}
                                alt="Image"
                                className="img-responsive no-pad"
                              />
                              <div className="card-body text-center">
                                <h4 className="card-title">Megha and Anshul</h4>
                                <p className="card-text">Kumauni</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="item">
                        <div className="row-fluid">
                          <div className="col-sm-4 col-xs-12 col-md-4 col-lg-4  ">
                            <div className="thumbnail">
                              <img
                                src={require("../../img/str-1.jpg")}
                                alt="Image"
                                className="img-responsive no-pad"
                              />
                              <div className="card-body text-center">
                                <h4 className="card-title">Megha and Anshul</h4>
                                <p className="card-text">Kumauni</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-4 col-xs-12 col-md-4 col-lg-4  ">
                            <div className="thumbnail">
                              <img
                                src={require("../../img/str-1.jpg")}
                                alt="Image"
                                className="img-responsive no-pad"
                              />
                              <div className="card-body text-center">
                                <h4 className="card-title">Megha and Anshul</h4>
                                <p className="card-text">Kumauni</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-4 col-xs-12 col-md-4 col-lg-4  ">
                            <div className="thumbnail">
                              <img
                                src={require("../../img/str-1.jpg")}
                                alt="Image"
                                className="img-responsive no-pad"
                              />
                              <div className="card-body text-center">
                                <h4 className="card-title">Megha and Anshul</h4>
                                <p className="card-text">Kumauni</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cta">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 col-lg-offset-8 col-md-offset-8 col-sm-offset-6">
                <h1>
                  Get the best deals <small> & </small> great savings
                </h1>
                <Link
                  className="btn btn-line btn-lg "
                  to="#"
                  data-toggle="modal"
                  data-target=".bs-modal-sm"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section about">
          <div className="container text-center">
            <h1 className="sec_head">About Pahadivivah</h1>
            <p className="sec_title mr_b5"> </p>
            <div className="row">
              <div className=" col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <p className="content">
                  cAliquam rutrum nibh ipsum. Maecenas maximus efficitur lorem
                  vel gravida. Duis sagittis turpis est, in facilisis urna
                  euismod sed. Integer ac lacus ut libero varius tincidunt quis
                  ac lectus. Mauris imperdiet lorem dui, in vulputate augue
                  semper vitae. Fusce luctus ac massa rutrum placerat. Aliquam
                  rutrum nibh ipsum. Maecenas maximus efficitur lorem vel
                  gravida. Duis sagittis turpis est, in facilisis urna euismod
                  sed. Integer ac lacus ut libero varius tincidunt quis ac
                  lectus. Mauris imperdiet lorem dui, in vulputate augue semper
                  vitae. Fusce luctus ac massa rutrum placerat.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
Landing.propTypes = {
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
