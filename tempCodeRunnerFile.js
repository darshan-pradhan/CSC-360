const Student = class Student { 
    constructor(firstName, LastName, gpa, degreeType, grade=undefined, graduated = false) {
        this.firstName = firstName;
        this.LastName = LastName;
        this.gpa = gpa;
        this.degreeType = degreeType;
        this.grade = grade
        this.graduated = graduated
    }
}
const student2 = new Student('First', 'Last', 4.0, 'Graduate');