import { useEffect, useState } from "react";

function UpdateEmployee({ setShowForm }) {
  const updateEmployee = localStorage.getItem("employeeProfiles");
  let employeeProfile = JSON.parse(updateEmployee);
  const update = localStorage.getItem("employee");
  let upEmployee = JSON.parse(update);


  const [employeeIndex, setEmployeeIndex] = useState(0);

  useEffect(() => {
    for (let i = 0; i < employeeProfile.length; i++) {
      if (upEmployee[0].employeeId === employeeProfile[i].employeeId) {
        setEmployeeIndex(i);
      }
    }
  }, [upEmployee, employeeProfile, employeeIndex]);

  const [employee, setEmployee] = useState({
    empID: upEmployee[0].employeeId,
    name: upEmployee[0].employeeName,
    empEmailAdress: upEmployee[0].employeeEmail,
    position: upEmployee[0].employeePosition,
    phoneNumber: upEmployee[0].employeePhoneNumber,
  });

  function save() {
    employeeProfile[employeeIndex].employeeId = employee.empID;
    employeeProfile[employeeIndex].employeeName = employee.name;
    employeeProfile[employeeIndex].employeeEmail = employee.empEmailAdress;
    employeeProfile[employeeIndex].employeePosition = employee.position;
    employeeProfile[employeeIndex].employeePhoneNumber = employee.phoneNumber;

    localStorage.setItem("employeeProfiles", JSON.stringify(employeeProfile));
    console.log(employee);
    console.log(employeeProfile);
    alert("Details updatted successfully")
    window.location.reload();
  }



  const handleChange = (e) => setEmployee(prevState => ({ ...prevState, [e.target.name]: e.target.value }),
    console.log(employee)

  )


  function closeModal() {
    setShowForm(false)
  }

  return (
    <div className="formcontainer">
      <div className="editForm">
        <h1 style={{ marginLeft: "auto", color: "#00dfa2", paddingRight: "20px" }} onClick={closeModal}>X</h1>
        <h2>Edit employee info</h2>
        <input
          type="text"
          name="name"
          value={employee.name}
          placeholder="Name and Surname"
          onChange={handleChange}
        />
        <input
          type="number"
          name="empID"
          placeholder="Id Number"
          value={employee.empID}

          onChange={handleChange}
        />
        <input
          type="email"
          name="empEmailAdress"
          placeholder="Email Address"
          onChange={handleChange}
          value={employee.empEmailAdress}

        />
        <input
          type="number"
          name="phoneNumber"
          placeholder="Phone Number"
          value={employee.phoneNumber}

          onChange={handleChange}
        />
        <input
          type="file"
          name="image"
          onChange={handleChange}
        />
        <select
          name="position"
          onChange={handleChange}
          value={employee.position}

        >
          <option>Employee Position</option>
          <option>Project Manager</option>
          <option>Scrum Master</option>
          <option>FrontEnd Developer</option>
          <option>BackEnd Developer</option>
        </select>
        <button onClick={save}>Save changes</button>
      </div>
    </div>
  );
}

export default UpdateEmployee;
