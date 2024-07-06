document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    const regNumber = urlParams.get('regNumber');
    const dob = urlParams.get('dob');
    const physicsMarks = parseInt(urlParams.get('physics'));
    const chemistryMarks = parseInt(urlParams.get('chemistry'));
    const tamilMarks = parseInt(urlParams.get('tamil'));
    const englishMarks = parseInt(urlParams.get('english'));
  
    if (name && regNumber && dob && !isNaN(physicsMarks) && !isNaN(chemistryMarks) && !isNaN(tamilMarks) && !isNaN(englishMarks)) {
      const studentData = {
        name: name,
        regNumber: regNumber,
        dob: dob,
        marks: {
          physics: physicsMarks,
          chemistry: chemistryMarks,
          tamil: tamilMarks,
          english: englishMarks
        }
      };
  
      // Calculate total marks
      const totalMarks = Object.values(studentData.marks).reduce((total, mark) => total + mark, 0);
  
      // Calculate grade
      let grade;
      if (totalMarks >= 320) {
        grade = 'A';
      } else if (totalMarks >= 240) {
        grade = 'B';
      } else {
        grade = 'C';
      }
  
      // Display results in table
      const resultsTable = document.getElementById('resultsTable');
      const newRow = resultsTable.insertRow();
      newRow.innerHTML = `
        <td>${studentData.name}</td>
        <td>${studentData.regNumber}</td>
        <td>${studentData.dob}</td>
        <td>${studentData.marks.physics}</td>
        <td>${studentData.marks.chemistry}</td>
        <td>${studentData.marks.tamil}</td>
        <td>${studentData.marks.english}</td>
        <td>${totalMarks}</td>
        <td>${grade}</td>
      `;
  
      // Update summary
      const totalStudents = document.getElementById('totalStudents');
      totalStudents.textContent = parseInt(totalStudents.textContent) + 1;
  
      const gradeElement = document.getElementById(`grade${grade}`);
      gradeElement.textContent = parseInt(gradeElement.textContent) + 1;
    } else {
      // If data is missing or invalid, handle appropriately
      console.error('Required data missing or invalid.');
    }
  });
  