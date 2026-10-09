import { useState } from "react";

function EmployeeForm({ onAddEmployee }) {

    const [name, setName] = useState("");
    const [department, setDepartment] = useState("");
    const [salary, setSalary] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !department || !salary) {
            alert("Please enter all fields");
            return;
        }

        const employee = {
            name: name,
            department: department,
            salary: Number(salary)
        };

        onAddEmployee(employee);

        setName("");
        setDepartment("");
        setSalary("");
    };

    return (
        <form onSubmit={handleSubmit}>

            <input
                type="text"
                placeholder="Employee Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <input
                type="text"
                placeholder="Department"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
            />

            <input
                type="number"
                placeholder="Salary"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
            />

            <button type="submit">
                Add Employee
            </button>

        </form>
    );
}

export default EmployeeForm;