const http = require('node:http');
const student = require('./student');

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.end(`
<html lang="en">
<head><title>About student</title></head>
<body><p>My name is ${student.getStudentFullName()}. My student ID is ${student.getStudentId()}</p></body>
</html>\n`
    );
});

server.listen(PORT, '127.0.0.1', () => {
    process.stdout.write(`
    Server is running on ${PORT}
    My name is ${student.getStudentFullName()}. My student ID is ${student.getStudentId()}
    \n`)
});
