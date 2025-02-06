
console.log("Script loaded!");

document.addEventListener('DOMContentLoaded', function() {

    var showCourseBtn = document.getElementById('showCourseBtn');
    if (showCourseBtn) {
        showCourseBtn.addEventListener('click', function() {
          // Your event handling code
        });
      } else {
        console.error("Element with ID 'showCourseBtn' was not found.");
      }
    });
    document.getElementById('showCourseBtn').addEventListener('click', function() {
        var courseSelect = document.getElementById('course');
        var selectedCourse = courseSelect.value;

        if (selectedCourse === ""){
            document.getElementById('courseLink').innerHTML = "Please select a course from the dropdown.";
            return
        }

        var courseLinks ={
            "cs50": "https://cs50.harvard.edu/x/",             // CS50: Introduction to Computer Science
            "medicine": "https://www.medicalcourse.com",         // Introduction to Medicine
            "civil": "https://www.civilengineeringcourses.com",  // Introduction to Civil Engineering
            "ux": "https://www.uxdesign.cc",                     // Designing UX
            "ecommerce": "https://www.ecommercecourse.com"       // Ecommerce
        };

        var link = courseLinks [selectedCourse];
        var resultHtml = '<p>Your selected course Link is: <a href="' + link + '"target="_blank">' + link + '</a></p>';
        document.getElementById('courseLink').innerHTML = resultHtml

    });

