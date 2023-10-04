export default function updateStudentGradeByCity (arr, city, newGrades) {
  return arr
    .filter((element) => element.location === city)
    .map((person) => {
      const grades = newGrades.filter((element) => element.studentId === person.id);
      return {
        ...person,
        grade
      };
    });
}
