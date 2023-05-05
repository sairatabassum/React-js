import React from "react";
import { useNavigate } from "react-router-dom";

const Friend = (props) => {
  const { name, username, id } = props.friend;

  const navigate = useNavigate();

  const showFriendDetail = () => {
    // const path = "/about"; DIRECT PATH

    const path = `friend/${id}`; //NESTED PATH
    navigate(path);
  };
  return (
    <div>
      <h2>Name: {name} </h2>
      <button onClick={showFriendDetail}>
        {username}: id {id}
      </button>
    </div>
  );
};

export default Friend;
