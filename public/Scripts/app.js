// IIFE -- Immediately Invoked Function Expression
/*
File name: app.js
Student’s Name: Apple Coleene Duquinal
StudentID:  301000645
Date: October 24, 2021
*/

//for deleting any contact from the business contact list
(function () {

    function Start() {
        console.log("App Started...");

        let delButton = document.querySelectorAll('.btn-danger');

        for (button of delButton) {
            button.addEventListener('click', (event) => {
                if (!confirm("Are you sure you want to delete contact?")) { //asking user a follow up question if they want to delete contact
                    event.preventDefault();
                    window.location.assign('/contact-list');
                }
            });
        }
    }

    window.addEventListener("load", Start);

})();


var nbar = document.querySelector('nav');
//var bannerPicture = document.getElementById("banner");

//code referenced to WebCode video tutorial
//show the navbar background when scrolled down
window.addEventListener('scroll', function () {
    if (window.pageYOffset > 100) {
        nbar.classList.add('bg-dark', 'shadow');
        //bannerPicture.style.opacity = 1.0;
    } else {
        nbar.classList.remove('bg-dark', 'shadow');
        //bannerPicture.style.opacity = 0.5;
    }
});

//value variables
function showName() {
    var fname = document.getElementById("fnamelInput").value;
    var lname = document.getElementById("lnameInput").value;
    var telPhone = document.getElementById("telInput").value;
    var email = document.getElementById("emailInput").value;
    var message = document.getElementById("messageInput").value;

    //output the contact informarion
    document.getElementById("outMod").innerHTML = "Name:  " + fname + " " + lname + "<br>" + "Contact Number: " + telPhone + "<br>" + "Email: " + email + "<br>" + "Message: " + message;

}

//sort the table for business contact-list
//the reference for this code is from w3schools.com
function sort() {
    var table = document.getElementById("listTable");
    var switching = true;
    var shouldSwitch;
    while (switching) {
      switching = false;
      var rows = table.rows;
      for (var i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        var x = rows[i].getElementsByTagName("td")[0];
        var y = rows[i + 1].getElementsByTagName("td")[0];
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }