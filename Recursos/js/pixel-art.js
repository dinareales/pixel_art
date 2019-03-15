var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change', 
  (function cambiar(e) {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Cambie el indicador-de-color al colorActual
    colorIndicador.style.backgroundColor = colorActual;
  })
);

  
//creamos las variables
var paletas = document.getElementById("paleta");
var grilla = document.getElementById("grilla-pixeles");
var colorIndicador = document.getElementById('indicador-de-color');
var clickPresionado;

//generamos paleta de colores
function crear_paleta() {
  for (var i = 0; i < nombreColores.length; i++) {
    var contenedor = document.createElement('div');
    contenedor.style.backgroundColor =  nombreColores[i]; 
    contenedor.className = "color-paleta";
    contenedor.addEventListener('click',cambiarColor);
    paletas.appendChild(contenedor);
  }
}

//creamos la grilla
function crear_grilla() {
  for (var i = 0; i < 1750; i++) {
    var pixel = document.createElement('div');
    grilla.appendChild(pixel);
  } 
}

//Permite saber que color selecionamos
function cambiarColor(e) {
  colorIndicador.style.backgroundColor = e.target.style.backgroundColor;
}

//pinta el pixel si esta apretado el mouse
function PintarPixel(e) {
  if(clickPresionado)
  e.target.style.backgroundColor = colorIndicador.style.backgroundColor;
}

//funcion que detecta si esta mantenido el click y pinta el trazo al desplazarnos
function click(e){  
  clickPresionado = true;
  PintarPixel(e);
}

//funcion que detecta si se solto el boton del mouse
function noclick(){
  clickPresionado = false;
}

//funcion que borra la grilla
$("#borrar").click(function(){
  $("#grilla-pixeles div").animate({"background-color": "#fff"}, 500);
}); 

//funcion que nos permite guardar nuestra imagen .png
$("#guardar").click(function(){ 
  guardarPixelArt();
});

//eventos del mouse, cambias 
function eventos(){
  grilla.addEventListener('mouseover',PintarPixel);
  grilla.addEventListener('mousedown', click);
  document.addEventListener('mouseup', noclick);
}


//CARGAR SUPERHEROES

$('.imgs img').click(function() { 
    var id = $(this).attr('id');
    var heroes =  {
      "batman":batman,"wonder":wonder, 
      "flash":flash, "invisible":invisible
    };
    cargarSuperheroe(heroes[id]);
});

//llamamos las funciones que nos dibujan la paleta y la grilla y los eventos del mouse
function iniciar(){
  crear_paleta();
  crear_grilla();
  eventos();
}

//ejecutamos la funcion iniciar
iniciar();