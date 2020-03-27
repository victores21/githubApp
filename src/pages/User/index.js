import React from "react";
import "./css/user.css";

const User = () => {
  return (
    <>
      <div className="container_user">
        <div className="top_container">
          <div className="user_avatar">
            <img
              src="https://avatars2.githubusercontent.com/u/1410106?v=4"
              alt=""
            />
          </div>
          <div className="username">
            <h1>Shuvalov Anton</h1>
          </div>
          <div className="url">
            <a href="#">@A</a>
          </div>
          <div className="user_info">
            <div className="social">
              <p>
                <i className="fas fa-briefcase"></i> @winstrike
              </p>
            </div>
            <div className="location">
              <p>
                <i className="fas fa-map-marker-alt"></i> Bucaramanga, Colombia
              </p>
            </div>
            <div className="created">
              <p>
                <i className="far fa-calendar-alt"></i> Joined in 12 Feb 2019
              </p>
            </div>
          </div>
          <div className="account_details">
            <div className="repositories details_rep">
              <p>55</p>
              <p>Repositories</p>
            </div>
            <div className="followers details_rep">
              <p>398</p>
              <p>followers</p>
            </div>
            <div className="following details_rep">
              <p>97</p>
              <p>Following</p>
            </div>
          </div>
        </div>
      </div>
      <script
        src="https://kit.fontawesome.com/c7c21d079c.js"
        crossorigin="anonymous"
      ></script>
    </>
  );
};

export default User;
