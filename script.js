function salvaValore() {
  let nome = document.getElementById("nome").value;
  localStorage.setItem("nome", nome);
  document.getElementById("valoreSalvato").innerHTML =
    "Valore salvato: " + nome;
}

function rimuoviValore() {
  localStorage.removeItem("nome");
  document.getElementById("valoreSalvato").innerHTML =
    "Valore precedentemente salvato: ";
}

let valorePrecedente = localStorage.getItem("nome");
if (valorePrecedente) {
  document.write(valorePrecedente);
}

//secondo esercizio

function startContatore() {
  let startTime = sessionStorage.getItem("startTime");
  if (!startTime) {
    startTime = new Date().getTime();
    sessionStorage.setItem("startTime", startTime);
  }
  updateContatore();
}

function updateContatore() {
  let startTime = sessionStorage.getItem("startTime");
  if (startTime) {
    let currentTime = new Date().getTime();
    let timeDiff = currentTime - parseInt(startTime, 10);
    let seconds = Math.floor(timeDiff / 1000);
    document.getElementById("contatore").textContent = seconds;
  }
}

function resetContatore() {
  sessionStorage.removeItem("startTime");
}

window.addEventListener("DOMContentLoaded", function () {
  startContatore();
  setInterval(updateContatore, 1000);
});
