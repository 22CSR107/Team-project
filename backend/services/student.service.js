const StudentModel = require('../models/student.model.js');

class StudentService {
    async registerStudent(studentid, firstname, lastname, email, password, dob, address, mobilenumber, departmentid, enroll, graduationyear) {
        const obj = {
            studentid: studentid,
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password,
            dob: dob,
            address: address,
            mobilenumber: mobilenumber,
            departmentid: departmentid,
            enroll: enroll,
            graduationyear: graduationyear
        };

        const newStudent = new StudentModel(obj);
        await newStudent.save(); // Use save() to persist the new student to the database
    }

    async updateStudent(obj) {
        const id = obj.studentid;
        const existingStudent = await StudentModel.findById(id);
        if (!existingStudent) {
            throw new Error('Student not found');
        }
        existingStudent.firstname = obj.firstname;
        existingStudent.lastname = obj.lastname;
        existingStudent.address = obj.address;
        await existingStudent.save();
    }

    async getAllStudent() {
        const students = await StudentModel.find();
        return students;
    }

    async deleteStudent(id) {
        await StudentModel.findByIdAndDelete(id);
        return { message: 'Student deleted successfully' };
    }
}

module.exports = StudentService;