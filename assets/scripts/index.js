$(document).ready(function () {
  $(".button-menu").click(function () {
    $(".menu").toggleClass("dropdownmenu");
  });
  $(".icon").click(function () {
    $(this).toggleClass("fa-minus").toggleClass("fa-plus");
  });
});
function validateEmail() {
  var email = document.getElementById("email").value;
  var email_error = document.getElementById("email_error");
  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  if (email == "" || email == null) {
    $("#email_error").text("Email không được để trống!");
  }
  if (!emailReg.test(email)) {
    $("#email_error").text("Email không đúng định dạng!");
  }
  return false;
}
