import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";
import { ArrowLeft } from "react-bootstrap-icons";
import { log_out_customer } from "../../actions/customer/customerAuthAction";
import { connect } from "react-redux";

class NavigationSideBar extends Component {
  logOut = async () => {
    await this.props.log_out_customer();
    window.location.reload(true);
  };

  render() {
    return (
      <div>
        <ListGroup className="profile-navigation profile">
          <ListGroup.Item>
            <h4>Profile </h4>
          </ListGroup.Item>

          <ListGroup.Item>
            <ul className="profile" onClick={this.logOut}>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="12"
                  viewBox="0 0 37.054 24">
                  <g id="logout" transform="translate(-160.034 -240.868)">
                    <g
                      id="Group_100"
                      data-name="Group 100"
                      transform="translate(160.034 240.868)">
                      <g id="Group_99" data-name="Group 99">
                        <path
                          id="Path_433"
                          data-name="Path 433"
                          d="M22.154,22.85H5.538c-1.019,0-1.846-.448-1.846-1v-18c0-.552.827-1,1.846-1H22.154C23.175,2.85,24,2.4,24,1.85s-.825-1-1.846-1H5.538C2.485.85,0,2.2,0,3.85v18c0,1.654,2.485,3,5.538,3H22.154c1.021,0,1.846-.447,1.846-1S23.175,22.85,22.154,22.85Z"
                          transform="translate(0 -0.85)"
                          fill="#ff6a00"
                        />
                      </g>
                    </g>
                    <g
                      id="Group_102"
                      data-name="Group 102"
                      transform="translate(177.598 245.5)">
                      <g id="Group_101" data-name="Group 101">
                        <path
                          id="Path_434"
                          data-name="Path 434"
                          d="M189.229,114.034l-7.369-6.555a1.308,1.308,0,0,0-1.714.011,1.017,1.017,0,0,0,.012,1.545l5.266,4.685H171.312a1.1,1.1,0,1,0,0,2.185h14.112l-5.266,4.685a1.018,1.018,0,0,0-.012,1.545,1.307,1.307,0,0,0,1.714.011l7.369-6.555a1.018,1.018,0,0,0,0-1.556Z"
                          transform="translate(-170.1 -107.165)"
                          fill="#ff6a00"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </li>
              <li>Log out</li>
              <li>
                <ArrowLeft />
              </li>
            </ul>
          </ListGroup.Item>
        </ListGroup>
      </div>
    );
  }
}
export default connect(null, {
  log_out_customer,
})(NavigationSideBar);
