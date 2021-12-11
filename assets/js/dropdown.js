/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */

document.querySelector(".dropbtn").addEventListener("click", myFunction);

function myFunction() {
  document.querySelector(".custom-dropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    console.log("HERE");
    var dropdowns = document.getElementsByClassName("custom-dropdown");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
