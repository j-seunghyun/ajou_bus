import axios from "../../Util/axios";
import { useEffect } from "react";
import { useState } from "react";

const dummy = [
  {
    station: "목동",
    stationId: 1,
    kind: false, //false가 학기를 의미
    fee: {
      ticket: 1300,
      cash: 1500,
    },
    carNumber: "일류투어 9904",
    stationInfo: {
      station: "오목교 (오목교역 1번출구 마을버스 회차지점 앞)",
      endstation: "아주대학교",
      info: [
        {
          round: 1,
          stationTime: "07:00",
          endTime: "08:50",
        },
        {
          round: 2,
          stationTime: "07:30",
          endTime: "09:50",
        },
      ],
    },
  },
];
export const useGetSemesterStation = () => {
  const [stations, setStations] = useState(dummy);

  useEffect(() => {
    axios
      .get("/api/station/semester")
      .then((res) => {
        setStations(res.data.result);
      })
      .catch((e) => setStations(dummy));
  }, []);

  return stations;
};
