const StudentService = require('../services/student.service');

exports.registerStudent = async (req, res) => {
    const payload=req.body;
    const {student_id,firstname,lastname,email,password,dob,address,mobilenumber,departmentid,enrollment_year,graduation_year}=payload;
    StudentService.registerStudent(student_id,firstname,lastname,email,password,dob,address,mobilenumber,departmentid,enrollment_year,graduation_year).then((result) => {
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

exports.loginStudent = async (req, res) => {
    const { email, password } = req.body;

    try {
        const result = await StudentService.loginStudent(email, password);
        res.status(200).json({ status: true, message: result.message, student: result.student });
    } catch (error) {
        res.status(401).json({ status: false, message: error.message });
    }
};
