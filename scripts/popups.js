document.addEventListener("DOMContentLoaded", function() {
    var documentsPopup = document.getElementById("documents-popup");
    var contactPopup = document.getElementById("contact-popup");
    var impressumPopup = document.getElementById("impressum-popup");

    var documentsBtn = document.getElementById("documents-button");
    var contactBtn = document.getElementById("contact-button");
    var impressumBtn = document.getElementById("impressum-button");

    var closeButtons = document.querySelectorAll(".close");

    documentsBtn.onclick = function() {
        documentsPopup.style.display = "block";
    }

    contactBtn.onclick = function() {
        contactPopup.style.display = "block";
    }

    impressumBtn.onclick = function() {
        impressumPopup.style.display = "block";
    }

    closeButtons.forEach(function(button) {
        button.onclick = function() {
            this.parentElement.parentElement.style.display = "none";
        }
    });

    window.onclick = function(event) {
        if (event.target == documentsPopup) {
            documentsPopup.style.display = "none";
        } else if (event.target == contactPopup) {
            contactPopup.style.display = "none";
        } else if (event.target == impressumPopup) {
            impressumPopup.style.display = "none";
        }
    }
});
