import { useState } from "react";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import "./App.css";

function App() {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Vineeth",
      department: "IT",
      salary: 50000
    },
    {
      id: 2,
      name: "Rahul",
      department: "HR",
      salary: 40000
    }
  ]);

  const addEmployee = (employee) => {
    setEmployees([
      ...employees,
      {
        ...employee,
        id: Date.now()
      }
    ]);
  };

  const deleteEmployee = (id) => {
    setEmployees(
      employees.filter(employee => employee.id !== id)
    );
  };

  return (
    <div className="container">

      <h1>Employee Management</h1>

      <EmployeeForm onAddEmployee={addEmployee} />

      <EmployeeList
        employees={employees}
        onDelete={deleteEmployee}
      />

    </div>
  );
}

export default App;