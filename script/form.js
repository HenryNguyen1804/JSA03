function signUp(e) {
  event.preventDefault();
  var username = document.getElementById("fullname").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  user = {
    username: username,
    email: email,
    password: password,
  };
  var json = JSON.stringify(user);
  localStorage.setItem(username, json);
  alert("dang ky thanh cong");
}

function login(e) {
  event.preventDefault();
  var username = document.getElementById("fullname").value;
  var password = document.getElementById("password").value;
  var user = localStorage.getItem(username);
  var data = JSON.parse(user);
  if (user == null) {
    alert("vui long nhap ten dang nhap va password");
  } else if (username == data.username && password == data.password) {
    alert("dang nhap thanh cong");
    window.location.href = "./index2.html";
  } else {
    alert("dang nhap that bai, vui long kiem tra lai thong tin");
  }
}
