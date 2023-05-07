import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FriendDetail = () => {
  const { friendID } = useParams();
  const [friend, setFriend] = useState({});

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${friendID}`;

    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFriend(data));
  }, []);
  return (
    <div>
      <h2>This is FriendDetail about: {friendID}</h2>
      <h3>Name :{friend.name}</h3>
      <h4>Email: {friend.email}</h4>
      <h6>Website: {friend.website}</h6>
      <p>City: {friend.address?.city}</p>
      <p>
        <small>Lat: {friend.address?.geo?.lat}</small>
      </p>
      <p>
        <small>Lng: {friend.address?.geo?.lng}</small>
      </p>
    </div>
  );
};

export default FriendDetail;
