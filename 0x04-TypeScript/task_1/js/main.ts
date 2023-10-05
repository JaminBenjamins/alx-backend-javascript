interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,

    [propName: string]: any
}

interface Director extends Teacher {
    numberOfReports: number,
}
 
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
    `${firstName.charAt(0).toUpperCase()}. ${lastName}`;
}

interface StudentClassInterface {
    new (firstName: string, lastName: string): StudentClass;
}

class StudentClass {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstname = firstName;
        this.lastname = lastName;
    }

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}

