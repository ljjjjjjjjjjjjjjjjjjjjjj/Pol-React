
import '../main/custom-bootstrap.css';
import './PatientList.css';



function EmployeeSelectionRow( props ) {
  console.log('PROPS', props);
  return (
    <option key={props.employee.empID} value={props.employee}>
      {`${props.employee.empName} ${props.employee.empSurname} (${props.employee.empJobTitle})`}
      </option>
  );
}

export default EmployeeSelectionRow;
  
  
  