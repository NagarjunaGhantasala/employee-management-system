function EmployeeList({ employees, onDelete }) {

    return (
        <div>

            <h2>Employee List</h2>

            {employees.map((employee) => (

                <div className="employee" key={employee.id}>

                    <h3>{employee.name}</h3>

                    <p>
                        Department: {employee.department}
                    </p>

                    <p>
                        Salary: ₹{employee.salary}
                    </p>

                    <button
                        onClick={() => onDelete(employee.id)}
                    >
                        Delete
                    </button>

                </div>

            ))}

        </div>
    );
}

export default EmployeeList;