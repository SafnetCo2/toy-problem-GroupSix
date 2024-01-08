function gradingStudents(grades) {
    // Write your code here
    if (grades < 38) {
        return grades
    } else {
        for (let i = 40; i <= 100; i = i + 5) {

            while (i - grades < 5 && i - grades > 0) {
                if (i - grades < 3) {
                    return i
                } else {
                    return grades
                }
            }
        }
    }
}
gradingStudents()