import { useState } from "react";

function NavBar() {
  const searchBar = localStorage.getItem("employeeProfiles");
  const results = JSON.parse(searchBar);
  const [searchEmployee, setSearchEmployee] = useState("");

  const search = () => {
    for (let i = 0; i < results.length; i++) {
      if (searchEmployee === results[i].employeeId) {
        localStorage.setItem("searchBar", JSON.stringify([results[i]]));
      }
    }
    window.location.reload();
    console.log(searchEmployee);
  };
  return (
    <div className="navBar">
      <img src="./freelancer.png" />
      <h1>Employee Tracker App</h1>
      <input
        type="search"
        placeholder="Search"
        onChange={(event) => setSearchEmployee(event.target.value)}
      />
      <i className="fa fa-search" aria-hidden="true" onClick={search}></i>
    </div>
  );
}
export default NavBar;
