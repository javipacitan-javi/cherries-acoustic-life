function goLogin() {
  window.location.href = "/cherries-acoustic-life/login/";
}

window.onload = function () {
  const user = localStorage.getItem("user");
  const authArea = document.getElementById("authArea");

  if (user) {
    authArea.innerHTML = `
      <p>Halo, ${user}</p>
      <button onclick="logout()">Logout</button>
    `;
  } else {
    authArea.innerHTML = `
      <button onclick="goLogin()" class="nav-cta">Login</button>
    `;
  }
};

function logout() {
  localStorage.removeItem("user");
  window.location.reload();
}
