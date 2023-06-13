import { useState } from "react";
import UpdateEmployee from "./updateEmployees";
import SearchedResult from "./SearchedResult";

function DisplayEmployee(props) {
  let stringifyEmployee = localStorage.getItem("employeeProfiles");
  let employees = JSON.parse(stringifyEmployee);

  function deleteFun(event, index) {
    employees.splice(index, 1);
    localStorage.setItem("employeeProfiles", JSON.stringify(employees));
    window.location.reload();
  }

  const [showForm, setShowForm] = useState(false);

  const edit = (event, data) => {
    localStorage.setItem("employee", JSON.stringify([data]));
    setShowForm(!showForm);
  };

  return (
    <div>
    <div>
      <table className="displayInfo">
        <tbody>
          <tr>
            <th>Name & Surname</th>
            <th>ID Number</th>
            <th>Email Adress</th>
            <th>Phone Number</th>
            <th>Position</th>
          </tr>
          {props.employeeProfiles.map((data, index) => (
            <tr key={index}>
              <td>
                <img src= {data.employeeImg} />
                {data.employeeName}
              </td>
              <td>{data.employeeId}</td>
              <td>{data.employeeEmail}</td>
              <td>{data.employeePhoneNumber}</td>
              <td className="position">
                {data.employeePosition}
                <div className="ud--buttons">
                  <i
                    className="fa fa-trash-o fa-lg"
                    aria-hidden="true"
                    onClick={(event) => deleteFun(event, index)}
                  ></i>
                  <i
                    className="fa fa-pencil-square-o fa-lg"
                    aria-hidden="true"
                    onClick={(event) => edit(event, data)}
                  ></i>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showForm && <UpdateEmployee />}
  </div>
     <SearchedResult />
    </div>
  );
}

export default DisplayEmployee;
