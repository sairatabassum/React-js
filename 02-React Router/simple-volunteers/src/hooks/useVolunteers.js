import { useEffect, useState } from "react";

const useVolunteers = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((dt) => setData(dt));
  }, []);
  return [data, setData];
};
export default useVolunteers;
