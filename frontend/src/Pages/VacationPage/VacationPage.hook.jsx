import axios from "../../Util/axios";
import { useEffect, useState } from "react";

export const useGetVacationStation = () => {
  const [stations, setStations] = useState([]);

  useEffect(() => {
    axios
      .get("/api/station/vacation")
      .then((res) => {
        setStations(res.data.result);
      })
      .catch((e) => setStations([]));
  });

  return stations;
};
