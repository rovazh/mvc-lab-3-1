const students = {
    '0': {
        fullName: 'Roman Vazhynskyi',
        studentId: '44098',
    },
    '1': {
        fullName: 'Kacper Nowak',
        studentId: '111222',
    },
    '2': {
        fullName: 'Maja Kowalska',
        studentId: '222333',
    },
}

function getStudentFullName(id) {
    if (id in students) {
        return students[id].fullName;
    }
    return 'Michal Wisniewski';
}

function getStudentId(id) {
    if (id in students) {
        return students[id].studentId;
    }
    return '333444';
}
