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
  
    // Función para redirigir a los formularios sin autenticación
    function navigateToForm(formNumber) {
      switch (formNumber) {
        case 1:
          window.location.href = "http://localhost/PDW202416/Formulario1";
          break;
        case 2:
          window.location.href = "http://localhost/PDW202416/Formulario2";
          break;
        case 3:
          window.location.href = "http://localhost/PDW202416/Formulario3";
          break;
        default:
          alert("Formulario no encontrado");
      }
    }
  
    // Asignar eventos a los botones de navegación
    document.getElementById("navForm1").onclick = function() { navigateToForm(1); };
    document.getElementById("navForm2").onclick = function() { navigateToForm(2); };
    document.getElementById("navForm3").onclick = function() { navigateToForm(3); };
  });