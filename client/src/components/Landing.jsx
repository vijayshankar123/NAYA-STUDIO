import React, { useEffect, useState } from "react";
import { userRegister, clearError } from "../actions/userAction";
import { setAlert } from "../actions/alertAction";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Alert from "./Alert";

const Landing = ({
  userRegister,
  clearError,
  setAlert,
  user: { error },
  history
}) => {
  useEffect(
    () => {
      if (error) {
        setAlert(error, "danger");
        clearError();
      }
    },
    [error]
  );

  // CURSOR FOLLOWER
  const [move, setMove] = useState({
    xMain: 0,
    yMain: 0
  });

  // REGISTRATION FORM
  const [register, setRegister] = useState({
    email: "",
    password: "",
    role: "",
    Capacity_des: "",
    Type_of_designer: "",
    Training: "",
    Capacity_maker: "",
    Material: "",
    Location: ""
  });

  //destructuring
  const {
    email,
    password,
    role,
    Capacity_des,
    Capacity_maker,
    Material,
    Location,
    Training,
    Type_of_designer
  } = register;

  // we retrieve coordinates from state
  const { xMain, yMain } = move;

  var Types = [
    "Furniture Designer",
    "Architect",
    "Interior Designer",
    "Industrial Designer",
    "Designer Maker",
    "Other"
  ];
  var Types1 = ["Wood", "Metal", "Glass", "Plastic", "Concrete", "Other"];

  //handle mouse movements
  const handleMouseMove = e => {
    setMove({
      xMain: e.clientX,
      yMain: e.clientY
    });
  };

  //handle on submit
  const onSubmit = e => {
    e.preventDefault();
    var form = {
      email,
      password,
      role,
      designer: {
        Capacity_des,
        Type_of_designer,
        Training
      },
      maker: {
        Capacity_maker,
        Material,
        Location
      }
    };
    if (error) {
      setAlert(error, "danger");
      clearError();
    } else {
      userRegister(form, history);
      console.log(form);

      //setting to default
      setRegister({
        email: "",
        password: "",
        role: "",
        Capacity_des: "",
        Type_of_designer: "",
        Training: "",
        Capacity_maker: "",
        Material: "",
        Location: ""
      });
    }
  };

  //handle on change
  const onChange = e => {
    setRegister({ ...register, [e.target.name]: e.target.value });
  };

  return (
    <div onMouseMove={handleMouseMove} style={{ overflow: "auto" }}>
      <div className="cursors">
        <div className="cursor" style={{ left: xMain, top: yMain }} />
      </div>
      <section className="landing">
        <div className="dark-overlay">
          <h1
            style={{ marginTop: "58px", color: "white" }}
            className="text-center "
          >
            <Alert />
            <strong>REGISTER AS</strong>
          </h1>
          <form onSubmit={onSubmit}>
            <div className="row" style={{ fontSize: "xx-large" }}>
              <div className="col-md-4 container">
                <div className="text-center">
                  {/* DESIGNER,MAKER,BOTH */}
                  <label
                    style={
                      role === "Designer"
                        ? { color: "orange" }
                        : { color: "white" }
                    }
                    htmlFor="role1"
                  >
                    Designer{" "}
                  </label>{" "}
                  <input
                    type="radio"
                    name="role"
                    id="role1"
                    value="Designer"
                    onChange={onChange}
                  />
                </div>
              </div>

              <div className="col-md-4">
                <div className="text-center">
                  <label
                    style={
                      role === "Maker"
                        ? { color: "orange" }
                        : { color: "white" }
                    }
                    htmlFor="role2"
                  >
                    Maker{" "}
                  </label>{" "}
                  <input
                    type="radio"
                    name="role"
                    id="role2"
                    value="Maker"
                    onChange={onChange}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="text-center">
                  <label
                    style={
                      role === "Both" ? { color: "orange" } : { color: "white" }
                    }
                    htmlFor="role3"
                  >
                    Both{" "}
                  </label>{" "}
                  <input
                    type="radio"
                    id="role3"
                    name="role"
                    value="Both"
                    onChange={onChange}
                  />
                </div>
              </div>
            </div>
            <div style={{ opacity: "0.7" }} className="col-md-12 mt-1 form ">
              {/*EMAIL AND PASSWORD*/}
              {role !== "" && (
                <div className="animate ">
                  {" "}
                  <input
                    style={{ backgroundColor: "#333" }}
                    placeholder="Email"
                    type="email"
                    name="email"
                    onChange={onChange}
                    required
                  />
                  <input
                    style={{ backgroundColor: "#333" }}
                    className="mt-2"
                    placeholder="Password"
                    type="password"
                    name="password"
                    onChange={onChange}
                    required
                  />
                </div>
              )}

              {/*DESIGNER FILEDS*/}
              {(role === "Designer" || role === "Both") && (
                <div className="mt-4">
                  <input
                    style={{ backgroundColor: "#333" }}
                    type="number"
                    name="Capacity_des"
                    placeholder="Capacity"
                    value={Capacity_des}
                    onChange={onChange}
                    required
                  />

                  <small
                    style={{
                      display: "block",
                      margin: "auto",
                      backgroundColor: "black"
                    }}
                    className="text-muted text-center"
                  >
                    How much time can you spend on Naya projects per week?
                  </small>
                  <select
                    className="mt-2"
                    name="Type_of_designer"
                    style={{ color: "black" }}
                    onChange={onChange}
                    required
                  >
                    <option selected disabled>
                      Select Type of Designer
                    </option>
                    {Types.map((item, i) => (
                      <option key={i} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  <input
                    className="mt-2"
                    style={{ backgroundColor: "#333" }}
                    type="text"
                    name="Training"
                    placeholder="Education level / Type"
                    onChange={onChange}
                  />
                </div>
              )}

              {/*Maker*/}
              {(role === "Maker" || role === "Both") && (
                <div className="mt-4">
                  <input
                    style={{ backgroundColor: "#333" }}
                    type="number"
                    name="Capacity_maker"
                    placeholder="Capacity"
                    value={Capacity_maker}
                    onChange={onChange}
                    required
                  />

                  <small
                    style={{
                      display: "block",
                      margin: "auto",
                      backgroundColor: "black"
                    }}
                    className="text-muted text-center"
                  >
                    How many projects on average do you work on every month?
                  </small>
                  <select
                    className="mt-2"
                    name="Material"
                    style={{ color: "black" }}
                    onChange={onChange}
                    required
                  >
                    <option selected disabled>
                      Select Material
                    </option>
                    {Types1.map((item, i) => (
                      <option key={i} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  <input
                    className="mt-2"
                    style={{ backgroundColor: "#333" }}
                    type="text"
                    name="Location"
                    placeholder="Location"
                    onChange={onChange}
                    required
                  />
                </div>
              )}

              {/*SUBMIT BUTTON */}
              {role !== "" && (
                <input
                  className="btn btn-primary mt-2"
                  type="submit"
                  value="REGISTER"
                />
              )}
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.user
});
export default connect(mapStateToProps, { userRegister, clearError, setAlert })(
  withRouter(Landing)
);
