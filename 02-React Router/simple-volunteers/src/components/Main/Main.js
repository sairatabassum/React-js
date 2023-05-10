import React from "react";
import Activity from "../Activity/Activity";
import "./Main.css";
import useVolunteers from "../../hooks/useVolunteers";

const Main = () => {
  const [data, setData] = useVolunteers();

  return (
    <div>
      <h2>{data.length}</h2>
      <div className="activity-container">
        {data.map((activity) => (
          <Activity key={activity._id} activity={activity}></Activity>
        ))}
      </div>
    </div>
  );
};

export default Main;
