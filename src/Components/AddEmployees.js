import { useState } from "react";

function CreatForm(props) {
  const [employeeImg, setEmployeeImg] = useState("");
  const [employeeName, setEmployeeName] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [employeeEmail, setEmployeeEmail] = useState("");
  const [employeePhoneNumber, setEmployeePhoneNumber] = useState("");
  const [employeePosition, setEmployeePosition] = useState("");

  function Add() {
    props.addEmployees(
      employeeName,
      employeeId,
      employeeEmail,
      employeePhoneNumber,
      employeePosition,
      employeeImg
    );
    
    console.log(props.addEmployees);
    window.location.reload();
  }

  return (
    <div>
      <div className="form">
        <img src="./programmer.png" />
        <input
          type="text"
          placeholder="Name & Surname"
          onChange={(event) => setEmployeeName(event.target.value)}
        />
        <input
          type="number"
          placeholder="ID Number"
          onChange={(event) => setEmployeeId(event.target.value)}
        />
        <input
          type="email"
          placeholder="Email Adress"
          onChange={(event) => setEmployeeEmail(event.target.value)} 
        />
        <input
          type="number"
          placeholder="Phone Number"
          onChange={(event) => setEmployeePhoneNumber(event.target.value)}
        />
        <select onChange={(event) => setEmployeePosition(event.target.value)}>
          <option>Employee Position</option>
          <option>Project Manager</option>
          <option>Scrum Master</option>
          <option>FrontEnd Developer</option>
          <option>BackEnd Developer</option>
        </select>
        <input type="file" accept="img/*" onChange={(event) => setEmployeeImg(event.target.value)}/>
        <button onClick={Add}>Add Employee</button>
      </div>
    </div>
  );
}

export default CreatForm;
