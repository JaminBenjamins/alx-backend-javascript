export default function iterateThroughObject (reportWithIterator) {
  const employeeNames = [];

  for (const employee of reportWithIterator) {
    employeesNames.push(employee);
  }
  return employeeNames.join(' | ');
}
