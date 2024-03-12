const FULLNAME = 'Roman Vazhynskyi';
const STUDENT_ID = '44098';

function getStudentFullName() {
    return FULLNAME;
}

function getStudentId() {
    return STUDENT_ID;
}

process.stdout.write(`My name is ${getStudentFullName()}. My student ID is ${getStudentId()}\n`);
