import "./App.css";
import NavBar from "./Components/NavBar";
import { useState } from "react";
import CreatForm from "./Components/AddEmployees";
import DisplayEmployee from "./Components/DisplayEmployee";
import { useEffect } from "react";


function App() {
 const storedEmployees = JSON.parse(localStorage.getItem("employeeProfiles")) || [];
  const [employeeProfiles, setEmployeeProfiles] = useState(storedEmployees);


  useEffect(() => {
    localStorage.setItem("employeeProfiles", JSON.stringify(employeeProfiles));
  }, [employeeProfiles]);

  const addEmployees = (
    employeeName,
    employeeId,
    employeeEmail,
    employeePhoneNumber,
    employeePosition,
    // uniqueId,
    employeeImg
  ) => {
    setEmployeeProfiles((employeeProfiles) => [
      ...employeeProfiles,
      {
        employeeName: employeeName,
        employeeId: employeeId,
        employeeEmail: employeeEmail,
        employeePhoneNumber: employeePhoneNumber,
        employeePosition: employeePosition,
        employeeImg:employeeImg
      },
    ]);
    console.log(employeeProfiles);
  };

  return (
    <div className="App">
      <NavBar />
      <CreatForm addEmployees={addEmployees} />
      <div className="display">
        <DisplayEmployee employeeProfiles={employeeProfiles} />
      </div>
    </div>
    
  );
}

export default App;
