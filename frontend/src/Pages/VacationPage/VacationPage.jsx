import { Header } from "../../Components/SemesterPage/Header/Header";
import "../SemesterPage/SemesterPage.css";
import { useGetVacationStation } from "./VacationPage.hook";

export const VacationPage = () => {
  const stations = useGetVacationStation();

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
                {station.stationInfo.info.map((info, i) => (
                  <tr key={i}>
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
