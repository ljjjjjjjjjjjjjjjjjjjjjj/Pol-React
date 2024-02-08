
import '../main/custom-bootstrap.css';
import './PatientList.css';



function EmployeeSelectionRow({ employee }  ) {
  return (
    <option key={employee.empID} value={employee.empID}>
      {`${employee.empName} ${employee.empSurname} (${employee.empJobTitle})`}
      </option>
  );
}

export default EmployeeSelectionRow;
  
  
  