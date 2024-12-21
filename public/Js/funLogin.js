document.addEventListener("DOMContentLoaded", function() {
  // Función para limpiar los campos de entrada
  function resetFields() {
    document.getElementById("InpUser").value = "";
    document.getElementById("InpPassword").value = "";
  }

  function LoginRedirect(event) {
    event.preventDefault();
    var usuario = document.getElementById("InpUser").value;
    var pass = document.getElementById("InpPassword").value;

    // Evaluar usuario
    switch (usuario) {
      case "admin":
        switch (pass) {
          case "1":
            window.location.href = "http://localhost/PDW202416/Formulario1";
            break;
          case "2":
            window.location.href = "http://localhost/PDW202416/Formulario2";
            break;
          case "3":
            window.location.href = "http://localhost/PDW202416/Formulario3";
            break;
          default:
            alert("Ingreso incorrecto");
            resetFields();
            break;
        }
        break;
      default:
        alert("Ingreso incorrecto");
        resetFields();
        break;
    }
  }
});