interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

const [student1, student2] = [
    {
        firstName: "Jamin",
        lastName: "Benjamins",
        age: 23,
        location: "New York"
    },
    {
        firstName: "Janelle",
        lastName: "Monroe",
        age: 20,
        location: "Nairobi"
    }
]

const studentsList: Array<Student> = [student1, student2]

const table = document.createElement("table");

const body: HTMLBodyElement = document.getElementsByTagName("body")[0];
const thead: HTMLTableSectionElement = document.createElement("thead");
const tbody: HTMLTableSectionElement = document.createElement("tbody");
const headerRow: HTMLTableRowElement = thead.insertRow(0);
const firstCell: HTMLTableCellElement = headerRow.insertCell(0);
const secondCell: HTMLTableCellElement = headerRow.insertCell(1);

firstCell.innerHTML = "firstName";
secondCell.innerHTML = "location";
table.append(thead);

studentsList.forEach(student => {
    const row: HTMLTableRowElement = tbody.insertRow(0);
    const Cell1: HTMLTableCellElement = row.insertCell(0);
    const Cell2: HTMLTableCellElement = row.insertCell(1);

    Cell1.innerHTML = student.firstName;
    Cell2.innerHTML = student.location;
});

table.append(tbody);
body.append(table);
