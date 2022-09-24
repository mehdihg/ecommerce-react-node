import profile from "./profile.png";
import "./Profile.css";

import MotioAnimate from "../MotionAnimate/MotionAnimte";
import { useDispatch, useSelector } from "react-redux";
import Button from "../Form/Button/Button";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const state = useSelector((state) => state.AuthProvider.userData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const Logingout = () => {
    localStorage.removeItem("auth");
    dispatch({ type: "clearAuth" });
    navigate("/login");
  };

  return (
    <>
      {!state ? (
        <h2>Please Login</h2>
      ) : (
        <MotioAnimate>
          <div className="profile">
            <div>
              <img src={profile} alt="profile" className="profile-img" />
            </div>

            <div className="profile-details">
              <h2>Name : {state.name}</h2>
              <h2>Email : {state.email}</h2>
              <h2>Phone : {state.phoneNumber}</h2>
            </div>
            <Button className="profile-btn" onClick={Logingout}>
              Logout
            </Button>
          </div>
        </MotioAnimate>
      )}
    </>
  );
};
export default Profile;
