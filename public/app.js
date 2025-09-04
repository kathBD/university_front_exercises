document.addEventListener("DOMContentLoaded", () => {
  const carrito = [];
  const botonesAgregar = document.querySelectorAll(".btn-agregar");
  const contadorCarrito = document.getElementById("contador-carrito");

  botonesAgregar.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();

      const id = btn.getAttribute("data-id");

      // Aquí puedes personalizar: producto ficticio
      const producto = {
        id: id,
        nombre: "Zapato moderno",
        precio: 145000,
      };

      carrito.push(producto);
      actualizarContador();
      console.log("Carrito:", carrito);
    });
  });

  function actualizarContador() {
    if (contadorCarrito) {
      contadorCarrito.textContent = carrito.length;
    }
  }
});
