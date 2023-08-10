document.getElementById("addQualification").addEventListener("click", function() {
    const qualificationTable = document.getElementById("qualificationTable");
    const newRow = qualificationTable.insertRow();
    
    const qualificationCell = newRow.insertCell(0);
    const institutionCell = newRow.insertCell(1);
    
    qualificationCell.innerHTML = '<input type="text" name="qualification">';
    institutionCell.innerHTML = '<input type="text" name="institution">';
  });
  
  document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const name = document.getElementById("name").value;
    const enrollmentNo = document.getElementById("enrollmentNo").value;
    const registrationNo = document.getElementById("registrationNo").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const year = document.getElementById("year").value;
    
    const hobbies = [];
    const hobbyCheckboxes = document.getElementsByName("hobbies");
    hobbyCheckboxes.forEach(checkbox => {
      if (checkbox.checked) {
        hobbies.push(checkbox.value);
      }
    });
    
    const qualifications = [];
    const qualificationRows = document.querySelectorAll("#qualificationTable tr:not(:first-child)");
    qualificationRows.forEach(row => {
      const qualificationInput = row.querySelector('input[name="qualification"]');
      const institutionInput = row.querySelector('input[name="institution"]');
      if (qualificationInput && institutionInput) {
        const qualification = qualificationInput.value;
        const institution = institutionInput.value;
        if (qualification && institution) {
          qualifications.push({ qualification, institution });
        }
      }
    });
  
    // Display or handle the collected data (customize this part)
    console.log("Name:", name);
    console.log("Enrollment No:", enrollmentNo);
    console.log("Registration Number:", registrationNo);
    console.log("Phone Number:", phoneNumber);
    console.log("Year:", year);
    console.log("Hobbies:", hobbies);
    console.log("Qualifications:", qualifications);
  });
  