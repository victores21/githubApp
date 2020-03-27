import React, { useState, useEffect } from "react";
import "./css/user.css";
import { useParams } from "react-router";

const User = () => {
  const [user, setUser] = useState();
  const [loading, setloading] = useState(true);
  const userNameId = useParams();

  useEffect(() => {
    const getData = async () => {
      const req = await fetch(
        `https://api.github.com/users/${userNameId.userId}`
      );
      const data = await req.json();
      setUser(data);
      setloading(false);
      console.log(data);
    };
    getData();
  }, [loading]);

  if (loading === true) {
    return "Loading...";
  } else {
    return (
      <>
        {console.log("user", user)}
        <div className="container_user">
          <div className="top_container">
            <div className="user_avatar">
              <img src={user.avatar_url} alt="" />
            </div>
            <div className="username">
              <h1>{user.name}</h1>
            </div>
            <div className="url">
              <a href={user.url}>@{user.login}</a>
            </div>
            <div className="user_info">
              <div className="social">
                <p>
                  <i className="fas fa-briefcase"></i> @{user.login}
                </p>
              </div>
              <div className="location">
                <p>
                  <i className="fas fa-map-marker-alt"></i> {user.location}
                </p>
              </div>
              <div className="created">
                <p>
                  <i className="far fa-calendar-alt"></i>Joined{" "}
                  {user.created_at}
                </p>
              </div>
            </div>
            <div className="account_details">
              <div className="repositories details_rep">
                <p>{user.public_repos}</p>
                {console.log(user.public_repos)}
                <p>Repositories</p>
              </div>
              <div className="followers details_rep">
                <p>{user.followers}</p>
                <p>followers</p>
              </div>
              <div className="following details_rep">
                <p>{user.following}</p>
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
  }
};

export default User;
