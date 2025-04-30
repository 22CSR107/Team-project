const StudentService = require("../services/student.service");

exports.registerStudent = async (req, res) => {
    const payload=req.body;
    const {email,password}=payload;
    StudentService.registerStudent(email,password).then((result) => {
        res.status(200).json({ message: "Student registered successfully" });
    }).catch((error) => {
        res.json({
            status:false,
            message: error.message
        })
    });
}
exports.getAllStudent = async (req, res) => {
    StudentService.getAllStudent().then((result) => {
        res.status(200).json({ message: "Student fetched successfully", data: result });
    }).catch((error) => {
        res.json({
            status:false,
            message: error.message
        })
    });
}
exports.updateStudent = async (req, res) => {
    const payload=req.body;
    const {studentid,firstname,lastname,email,password,dob,address,mobilenumber,departmentid,enroll,graduationyear}=payload;
    StudentService.updateStudent(studentid,firstname,lastname,email,password,dob,address,mobilenumber,departmentid,enroll,graduationyear).then((result) => {
        res.status(200).json({ message: "Student updated successfully" });
    }).catch((error) => {
        res.json({
            status:false,
            message: error.message
        })
    });
}
exports.deleteStudent = async (req, res) => {
    const id=req.params.id;
    StudentService.deleteStudent(id).then((result) => {
        res.status(200).json({ message: "Student deleted successfully" });
    }).catch((error) => {
        res.json({
            status:false,
            message: error.message
        })
    });
}