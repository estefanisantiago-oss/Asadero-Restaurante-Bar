let empleados = JSON.parse(localStorage.getItem("empleados")) || [];

function render() {
  const lista = document.getElementById("lista");
  lista.innerHTML = "";

  empleados.forEach((emp, index) => {
    lista.innerHTML += `
      <div class="fila">
        <span>${emp.nombre}</span>
        <span>${emp.edad}</span>
        <span>${emp.genero}</span>
        <span>${emp.telefono}</span>
        <span>${emp.rol}</span>
        <span>${emp.horario}</span>
        <span>${emp.password}</span>

        <span class="acciones">
          <button onclick="editar(${index})">✏️</button>
          <button onclick="eliminar(${index})">X</button>
        </span>
      </div>
    `;
  });

  localStorage.setItem("empleados", JSON.stringify(empleados));
}

function agregarEmpleado() {
  const emp = {
    nombre: document.getElementById("nombre").value,
    edad: document.getElementById("edad").value,
    genero: document.getElementById("genero").value,
    telefono: document.getElementById("telefono").value,
    rol: document.getElementById("rol").value.trim().toLowerCase(),
    horario: document.getElementById("horario").value,
    password: document.getElementById("password").value
  };

  if (!emp.nombre || !emp.password) {
    alert("Falta nombre o contraseña");
    return;
  }

  empleados.push(emp);
  localStorage.setItem("empleados", JSON.stringify(empleados));

  render();

  document.querySelectorAll("input").forEach(i => i.value = "");
}

function eliminar(index) {
  empleados.splice(index, 1);
  render();
}

/* ✏️ EDITAR */
function editar(index){
  let emp = empleados[index];

  document.getElementById("nombre").value = emp.nombre;
  document.getElementById("edad").value = emp.edad;
  document.getElementById("genero").value = emp.genero;
  document.getElementById("telefono").value = emp.telefono;
  document.getElementById("rol").value = emp.rol;
  document.getElementById("horario").value = emp.horario;
  document.getElementById("password").value = emp.password;

  // eliminamos el original para reemplazarlo
  empleados.splice(index, 1);
  render();
}

function volver() {
  window.location.href = "Administrador.html"; 
}

render();