import { Header } from "../../Components/SemesterPage/Header/Header";
import "./SemesterPage.css";
import { useGetSemesterStation } from "./SemesterPage.hook";
export const SemesterPage = () => {
  const stations = useGetSemesterStation();
  return (
    <div>
      <Header />
      <div id="semester_body_frame">
        {stations.map((station) => (
          <div id="semester_frame" key={station.stationId}>
            <p id="semester_text">{station.station} 노선</p>
            <table>
              <thead>
                <tr>
                  <th>회차</th>
                  <th colSpan="2">
                    {station.stationInfo.station} {">"}
                    {station.stationInfo.endstation}
                  </th>
                </tr>
              </thead>
              <tbody>
                {station.stationInfo.info.map((info) => (
                  <tr key={info.round}>
                    <td>{info.round}회차</td>
                    <td>{info.stationTime}</td>
                    <td>{info.endTime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};
