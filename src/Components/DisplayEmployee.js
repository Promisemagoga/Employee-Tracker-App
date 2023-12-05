import { useState } from "react";
import UpdateEmployee from "./updateEmployees";

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
      <table className="displayInfo">
        <tbody>
          <tr>
            <th>Name & Surname</th>
            <th>ID Number</th>
            <th>Email Adress</th>
            <th>Phone Number</th>
            <th>Position</th>
            <th>Actions</th>

          </tr>
          {props.employeeProfiles.map((data, index) => (
            <tr key={index}>
              <td className="picSide">
                <img id="preview" src={data.employeeImg} alt="employeePic" width={30}></img>
                {data.employeeName}
              </td>
              <td>{data.employeeId}</td>
              <td>{data.employeeEmail}</td>
              <td>{data.employeePhoneNumber}</td>
              <td>
                {data.employeePosition}
              </td>
              <td>
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
      {showForm && <UpdateEmployee setShowForm={setShowForm} />}
    </div>
  );
}

export default DisplayEmployee;
