interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface extends DirectorInterface

export class Director implements DirectorInterface {
    workFromHome(): string {
        return "Working from home";
    }

    getCoffeeBreak(): string {
        return "Getting a coffee break";
    }

    workDirectorTasks(): string {
        return "Getting to director tasks";
    }
}

export class Teacher implemenets TeacherInterface {
    workFromHome(): string {
        return "Cannot work from home";
    }

    getCoffeeBreak(): string {
        return "Cannot have a break";
    }

    workTeacherTasks(): string {
        return "Getting to work";
    }
}

export function createEmployee(salary: number | string): Director | Teacher {
    return typeof salary === "number" && salary < 500 ? new Teacher() : new Director();
}

export function isDirector(employee: Director | Teacher): employee is Director {
    return(employee as Director).workDirectorTasks() !== undefined;
}

export function executeWork(employee: Director | Teacher): string {
    return (isDirector(employee)) ? employee.workDirectorTasks() : employee.workTeacherTasks();
} 

type Subjects = "Math" | "History"

export function teachClass(todayClass: Subjects): string | boolean {
    return (todayClass === "Math" ? "Teaching Math" : (todayClass === "History" ? "Teaching History" : `${undefined}`
}
