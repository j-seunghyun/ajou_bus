import axios from "../../Util/axios";
import { useEffect } from "react";
import { useState } from "react";

export const useGetSemesterStation = () => {
  const [stations, setStations] = useState([]);

  useEffect(() => {
    axios
      .get("/api/station/semester")
      .then((res) => {
        setStations(res.data.result);
      })
      .catch((e) => setStations([]));
  }, []);

  return stations;
};
