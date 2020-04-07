import React, { Fragment, useState } from "react";
import Alert from "./Alert";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addLink } from "../actions/userAction";

const Dashboard = ({ addLink, user: { user } }) => {
  const [link, setLink] = useState("");

  const onChange = e => {
    setLink(e.target.value);
  };

  const onClick = e => {
    e.preventDefault();
    var links = link.split(",");

    addLink(links, user._id);
    setLink("");
  };

  return (
    <div className=" dash2">
      <span className="containere">
        <Alert />
      </span>
      {user && user.email ? (
        <Fragment>
          <div style={{ marginTop: "70px" }}>
            <h2 className="text-center" style={{ color: "blueviolet" }}>
              Welcome {user.email}
            </h2>
          </div>

          <div style={{ marginTop: "130px" }}>
            <h3 style={{ color: "aquamarine" }} className="text-center">
              Add links to your work
            </h3>
            <div className="text-center">
              <textarea
                style={{ marginTop: "20px", opacity: "0.7" }}
                rows="5"
                cols="50"
                name="link"
                value={link}
                placeholder="Add comma after each link"
                onChange={onChange}
              />
              <small
                style={{
                  display: "block",
                  color: "white",
                  marginBottom: "10px"
                }}
              >
                Add comma after each link
              </small>
            </div>
            <div className="text-center">
              <div onClick={onClick} className="text-center btn btn-success">
                Add Links
              </div>
            </div>
          </div>
        </Fragment>
      ) : (
        <div style={{ marginTop: "60px" }} className="text-center ">
          <Link to="/">Please Register to start adding links to your work</Link>
        </div>
      )}
    </div>
  );
};
const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps, { addLink })(Dashboard);
