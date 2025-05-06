const StudentModel = require('../models/student.model.js');

async function registerStudent(studentid, firstname, lastname, email, password, dob, address, mobilenumber, departmentid, enroll, graduationyear) {
    const obj = {
        studentid,
        firstname,
        lastname,
        email,
        password,
        dob,
        address,
        mobilenumber,
        departmentid,
        enroll,
        graduationyear
    };

    const newStudent = new StudentModel(obj);
    await newStudent.save();
}

async function updateStudent(obj) {
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

async function getAllStudent() {
    return await StudentModel.find();
}

async function deleteStudent(id) {
    await StudentModel.findByIdAndDelete(id);
    return { message: 'Student deleted successfully' };
}

async function loginStudent(email, password) {
    const student = await StudentModel.findOne({ email });

    if (!student) {
        throw new Error("Student with this email does not exist");
    }

    if (student.password !== password) {
        throw new Error("Invalid password");
    }

    return {
        message: "Login successful",
        student: {
            studentid: student.studentid,
            firstname: student.firstname,
            lastname: student.lastname,
            email: student.email
        }
    };
}


module.exports = {
    registerStudent,
    updateStudent,
    getAllStudent,
    deleteStudent,
    loginStudent
};
