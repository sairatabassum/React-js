import React from "react";
import useVolunteers from "../../hooks/useVolunteers";
import Activity from "../Activity/Activity";

const Volunteers = () => {
  const [data, setData] = useVolunteers();
  return (
    <div>
      <h2>All volunteers</h2>
      <div className="activity-container">
        {data.map((activity) => (
          <Activity key={activity._id} activity={activity}></Activity>
        ))}
      </div>
    </div>
  );
};

export default Volunteers;
