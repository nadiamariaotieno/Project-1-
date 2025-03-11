<!DOCTYPE html>
<html>
<head>
    <title>JavaScript Variables</title>
</head>
<body>
    <h1>JavaScript Variables</h1>
    <h2>Creating a Variable</h2>
    <p id="demo"></p>

    <script>
        // Create a Variable:
        let student = {
            firstName: "John",
            lastName: "Doe",
            age: 21,
            course: "Computer Science"
        };

        // Display Student information
        document.getElementById("demo").innerHTML = 
            "Student: " + student.firstName + " " + student.lastName + 
            ", Age: " + student.age + ", Course: " + student.course;
    </script>
</body>
</html>
