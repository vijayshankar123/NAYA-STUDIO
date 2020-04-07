import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUsers } from "../actions/userAction";

const Dashboard = ({ user, getUsers }) => {
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="dash2">
      {user.count !== null && (
        <span className="containere">
          <h2
            className="text-center"
            style={{ color: "coral", marginTop: "55px" }}
          >
            Total Users Registered : {user.count}
          </h2>
        </span>
      )}
    </div>
  );
};
const mapStateToProps = state => ({
  user: state.user
});
export default connect(mapStateToProps, { getUsers })(Dashboard);
