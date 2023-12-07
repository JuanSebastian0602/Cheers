let fila = document.querySelectorAll('.seccion-reserva .reservation-grid .fila button');
let h2 = document.querySelector('section .reservation-box h2');
let formBox = document.querySelector('.form-box');

let categorias = document.getElementById('categoria');
let bebidas = document.getElementById('bebidas');
let cantidad = document.getElementById('cantidad');

let precio = document.getElementById("subtotal");

let add = document.getElementById("añadir");

let montoTotal = 0;
let allow = false;

let botonReserva = document.getElementById('reservar');

// Selección de mesas

fila.forEach(item => {
  item.addEventListener('click', () => {
    // Desactiva todas las filas
    fila.forEach(item => {
      item.classList.remove('selected');
    });

    // Activa solo la fila actual
    item.classList.add('selected');

    h2.innerHTML = ('<h2>Has seleccionado la <span class="colored">'+ item.value +'</span> para reservar.</h2>')
    formBox.classList.remove('hidden');
  });
});

categorias.addEventListener('change', () => {
  let categoria = categorias.value;

  // Limpia las bebidas en cada categoría
  bebidas.innerHTML = '';

  // Si la categoría es una en específico, activará la función de la bebida correspondiente
  if (categoria == "clasico") {
    bebidasClasicas();
  } else if (categoria == "gintonic") {
    bebidasGintonic();
  } else if (categoria == "martinis") {
    bebidasMartinis();
  } else if (categoria == "shots") {
    bebidasShots();
  } else if (categoria == "vinos") {
    bebidasVinos();
  } else if (categoria == "cervezas") {
    bebidasCervezas();
  }

  // Disparar la función de "Subtotal" cada vez que cambie el input de categoría

  subtotal(cantidad);
})

// Event listener para disparar la función "Subtotal" cada vez que cambie el input de bebidas

bebidas.addEventListener('change', () => {
  subtotal(cantidad);
})

// Event listener para disparar alguna función a la hora de añadir una bebida

add.addEventListener('click', () => {
  if (categoriaVacia() || cantidadInvalida()) {
    Swal.fire({
      showCloseButton: true,
      title: 'Error!',
      html: categoriaVacia() + cantidadInvalida(),
      icon: 'error',
      showConfirmButton: false,
      background: "#414141",
      color: "rgb(223, 223, 223)"
    })
  } else {
    añadirBebida();
  }
});

botonReserva.addEventListener('click', reservar);

// Funciones

// Función para añadir el subtotal de acuerdo a bebida * cantidad

function subtotal(cantidad) {
  let precioBebida = bebidas.value * cantidad.value;
  precio.innerHTML = (precioBebida.toLocaleString('es-CO')+"$");

  return precio;
}

// Funciones de arreglos de las bebidas de cada categoría

function bebidasClasicas() {
  let clasico = [
    { value: '10000', text: 'Old Fashion - 10.000$' },
    { value: '9500', text: 'Tom Collins - 9.500$' },
    { value: '11000', text: 'Cosmopolitan - 11.000$' },
    { value: '8800', text: 'Mojito - 8.800$' },
    { value: '9200', text: 'Kamikaze - 9.200$' },
    { value: '7500', text: 'Piña colada - 7.500$' }
  ]

  clasico.forEach(bebida => {
    let option = document.createElement('option');
    option.value = bebida.value;
    option.text = bebida.text;
    bebidas.appendChild(option);
  })
}

function bebidasGintonic() {
  let gintonic = [
    { value: '11000', text: 'Tonico - 11.000$' },
    { value: '10500', text: 'Citricos - 10.500$' },
    { value: '10000', text: 'Jamaica - 10.000$' },
    { value: '11500', text: 'Canela - 11.500$' },
    { value: '12000', text: 'Frutos del bosque - 12.000$' },
    { value: '11200', text: 'Fresa - 11.200$' }
  ]

  gintonic.forEach(bebida => {
    let option = document.createElement('option');
    option.value = bebida.value;
    option.text = bebida.text;
    bebidas.appendChild(option);
  })
}

function bebidasMartinis() {
  let martini = [
    { value: '9500', text: 'Martini Seco - 9.500$' },
    { value: '10000', text: 'Martini Sucio - 10.000$' },
    { value: '10500', text: 'Martini de Tamarindo - 10.500$' },
    { value: '10500', text: 'Martini de Guayaba - 10.500$' },
    { value: '10500', text: 'Martini de Fresa - 10.500$' },
    { value: '10500', text: 'Martini de Sandía - 10.500$' },
    { value: '10500', text: 'Martini de Manzana - 10.500$' },
  ]

  martini.forEach(bebida => {
    let option = document.createElement('option');
    option.value = bebida.value;
    option.text = bebida.text;
    bebidas.appendChild(option);
  })
}

function bebidasShots() {
  let shots = [
    { value: '12000', text: 'ABC - 12.000$' },
    { value: '9500', text: 'Armadillo (Flameado) - 9.500$' },
    { value: '10000', text: 'Musolini (Flameado) - 10.000$' },
    { value: '10500', text: 'Monroe - 10.500$' },
    { value: '9000', text: 'Fresco - 9.000$' },
    { value: '11500', text: 'Guayabin - 11.500$' },
  ]

  shots.forEach(bebida => {
    let option = document.createElement('option');
    option.value = bebida.value;
    option.text = bebida.text;
    bebidas.appendChild(option);
  })
}

function bebidasVinos() {
  let vinos = [
    { value: '175000', text: 'Surco Rojo Botella 750ML - 175.000$' },
    { value: '30000', text: 'Surco Rojo Copa - 30.000$' },
    { value: '220000', text: 'Herencia Botella 750ML - 220.000$' },
    { value: '35000', text: 'Herencia Copa - 35.000$' },
    { value: '160000', text: 'Origen 43 Casa Magoni 750ML - 160.000$' },
    { value: '25000', text: 'Origen 43 Casa Magoni Copa - 25.000$' }
  ]

  vinos.forEach(bebida => {
    let option = document.createElement('option');
    option.value = bebida.value;
    option.text = bebida.text;
    bebidas.appendChild(option);
  })
}

function bebidasCervezas() {
  let cervezas = [
    { value:'4000', text: 'Pilsen - 4.000$' },
    { value:'8500', text: 'Pilsenón - 8.500$' },
    { value:'4000', text: 'Aguila - 4.000$' },
    { value:'4200', text: 'Aguila Light - 4.200$' },
    { value:'6000', text: 'Heineken - 6.000$' },
    { value:'5500', text: 'Budweiser - 5.500$' },
  ]

  cervezas.forEach(bebida => {
    let option = document.createElement('option');
    option.value = bebida.value;
    option.text = bebida.text;
    bebidas.appendChild(option);
  })
}

// función para añadir una nueva bebida

function añadirBebida() {
  let nuevaBebida = document.createElement('div');
  nuevaBebida.classList.add('drink-list-rows');

  let contenido = [
    categorias.value,
    bebidas.options[bebidas.selectedIndex].text,
    cantidad.value,
    precio.textContent
  ];

  contenido.forEach((texto, index) => {
    let parrafo = document.createElement('p');
    parrafo.textContent = texto;
    nuevaBebida.appendChild(parrafo);
  });

  // Crear el botón de eliminar
  let botonEliminar = document.createElement('button');
  botonEliminar.classList.add('btn', 'btn-eliminar');
  botonEliminar.style.margin = '0 auto';
  botonEliminar.innerHTML = '<strong>X</strong>';
  botonEliminar.addEventListener('click', () => {
    // Eliminar el elemento al hacer clic en el botón de eliminar
    eliminarBebida(nuevaBebida);
  });

  // Agregar el botón de eliminar al nuevo div
  nuevaBebida.appendChild(botonEliminar);

  // Agregar el nuevo div al documento
  let contenedorNuevo = document.getElementById('contenedor-nueva-bebida');
  contenedorNuevo.appendChild(nuevaBebida);

  // Calcular el subtotal para el div actual
  let montoSelect = nuevaBebida.querySelectorAll('p')[3];
  let extractCharacters = montoSelect.textContent.replace('.', '').replace('$', '');
  let montoValor = parseInt(extractCharacters);

  // Sumar el subtotal al montoTotal
  montoTotal += montoValor;

  checkBebida = document.querySelectorAll('.drink-list-rows');

  // Actualizar el elemento HTML con el nuevo montoTotal
  let montoNumero = document.getElementById('montoTotal');
  montoNumero.innerHTML = (montoTotal.toLocaleString('es-CO')+"$");
}

// función para eliminar una bebida añadida

function eliminarBebida(nuevaBebida) {
  // Calcular el subtotal para el div actual
  let montoSelect = nuevaBebida.querySelectorAll('p')[3];
  let extractCharacters = montoSelect.textContent.replace('.', '').replace('$', '');
  let subtotalRestar = parseInt(extractCharacters);

  // Restar el valor al montoTotal
  montoTotal -= subtotalRestar;

  // Actualizar el elemento HTML con el nuevo montoTotal
  let montoNumero = document.getElementById('montoTotal');
  montoNumero.innerHTML = (montoTotal.toLocaleString('es-CO')+"$");

  // Eliminar el div
  nuevaBebida.remove();
}

function categoriaVacia() {
  if (categorias.options[categorias.selectedIndex].value == '') {
    return '<p class="swal-error mb-3">Tienes que seleccionar una categoría válida</p>'
  } else {
    return ""
  }
}

function cantidadInvalida() {
  if (cantidad.value <= 0) {
    return '<p class="swal-error">Tienes que seleccionar una cantidad válida</p>'
  } else {
    return ""
  }
}

function reservar() {
  let montoNumero = document.getElementById('montoTotal');

  Swal.fire({
    showCloseButton: true,
    title: 'Reservar',
    html: '<p>¿Estás seguro de hacer la reserva?</p><br><p>El monto total de la reserva es: </p>' + montoNumero.textContent,
    icon: 'warning',
    showCancelButton: true,
    cancelButtonText: 'Cancelar',
    confirmButtonText: "¡Reservar!",
    confirmButtonColor: "blueviolet",
    background: "#414141",
    color: "rgb(223, 223, 223)"
  }).then((result) => {
    if(result.isConfirmed) {
      Swal.fire({
        showCloseButton: true,
        title: 'Reservar',
        text: 'Tu reservación fue exitosa!',
        icon: 'success',
        showConfirmButton: false,
        background: "#414141",
        color: "rgb(223, 223, 223)"
      })
    }
  })
}
