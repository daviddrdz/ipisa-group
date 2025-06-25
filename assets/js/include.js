function includeFooter() {
  fetch("./assets/components/footer.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer").innerHTML = data;
    })
    .catch(error => {
      console.error('Error cargando el footer:', error);
    });
}

document.addEventListener("DOMContentLoaded", includeFooter)
