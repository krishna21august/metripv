import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div>
      <section id="footer" class="section">
        <div className="container">
          <div className="row text-center text-xs-center text-sm-left text-md-left mr_b5">
            <div className="col-xs-4 col-sm-4 col-md-4">
              <h5>About</h5>
              <ul className="list-unstyled quick-links">
                <li>
                  <Link to="javascript:void();"> Home</Link>
                </li>
                <li>
                  <Link to="javascript:void();"> About</Link>
                </li>
                <li>
                  <Link to="javascript:void();"> FAQ</Link>
                </li>
                <li>
                  <Link to="javascript:void();"> Get Started</Link>
                </li>
                <li>
                  <Link to="javascript:void();"> Videos</Link>
                </li>
              </ul>
            </div>
            <div className="col-xs-4 col-sm-4 col-md-4">
              <h5>Support</h5>
              <ul className="list-unstyled quick-links">
                <li>
                  <Link to="javascript:void();"> Home</Link>
                </li>
                <li>
                  <Link to="javascript:void();"> About</Link>
                </li>
                <li>
                  <Link to="javascript:void();"> FAQ</Link>
                </li>
                <li>
                  <Link to="javascript:void();"> Get Started</Link>
                </li>
                <li>
                  <Link to="javascript:void();"> Videos</Link>
                </li>
              </ul>
            </div>
            <div className="col-xs-4 col-sm-4 col-md-4">
              <h5>Legal</h5>
              <ul className="list-unstyled quick-links">
                <li>
                  <Link to="javascript:void();"> Home</Link>
                </li>
                <li>
                  <Link to="javascript:void();"> About</Link>
                </li>
                <li>
                  <Link to="javascript:void();"> FAQ</Link>
                </li>
                <li>
                  <Link to="javascript:void();"> Get Started</Link>
                </li>
                <li>
                  <Link
                    to="https://wwwe.sunlimetech.com"
                    title="Design and developed by"
                  >
                    {" "}
                    Imprint
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
              <ul className="list-unstyled list-inline social text-center">
                <li className="list-inline-item">
                  <Link to="javascript:void();">
                    <i className="fa fa-facebook" />
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="javascript:void();">
                    <i className="fa fa-twitter" />
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="javascript:void();">
                    <i className="fa fa-instagram" />
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="javascript:void();">
                    <i className="fa fa-google-plus" />
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="javascript:void();" target="_blank">
                    <i className="fa fa-envelope" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
