import React from "react";
import { useParams } from "react-router-dom";

const FriendDetail = () => {
  const { friendID } = useParams();
  return (
    <div>
      <h2>This is FriendDetail about: {friendID}</h2>
    </div>
  );
};

export default FriendDetail;
