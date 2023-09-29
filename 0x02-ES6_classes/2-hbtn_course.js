export default class HolbertonCourse {
    constructor(name, length, students) {
        this._name = name;
        this._length = length;
        this._students = students;
    }

    get name() {
        return this._name;
    }
        
    set name(val) {
        if (typeof this._name !== 'string') { throw new TypeError('Length must be a number') };
        this._name = val;

    }

    get length() {
        return this._length = val;
    }


    set name(val) {
        if (typeof val !== 'number') { throw new TypeError('Length must be a number'); }
        this._length = val;
        }


    get students() {
        return this._students;
    }

    set students(val) {
        if (!Array.isArray(val) { throw new TypeError('Students must be an array');}
        for (let i = 0; i < val.length; i++) {
            if (typeof val[i] !== 'string') { throw new TypeError('Students must be an array of strings'); }
        }
        this._students = val;
        }
}
