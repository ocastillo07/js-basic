var articulos = [
  { nombre: 'Bici', costo: 3000 },
  { nombre: 'Tv', costo: 5000 },
  { nombre: 'Laptop', costo: 10000 },
  { nombre: 'Celular', costo: 8000 },
  { nombre: 'Bocinas', costo: 2500 },
  { nombre: 'Audifonos', costo: 1500 },
  { nombre: 'Guitarra', costo: 7500 },
];

//Filter (filtra objetos del array de acuerdo a la condicion)
var articulosFiltrados = articulos.filter(function(articulo){
  return articulo.costo <= 6000;
});

// map (recorre todos los objectos del array)
var nombreArticulos = articulos.map(function(articulo){
  return articulo.nombre;
});

// find (retorna el objeto que cumple la condicion)
var findArticulo = articulos.find(function(articulo){
  return articulo.nombre === "Laptop";
});

// forEach (recorre todos los objetos del array)
articulos.forEach(function(articulo){
  console.log(articulo.nombre);
});

// Some (solo valida True o False)
var articulosBaratos = articulos.some(function(articulo){
  return articulo.costo <= 2000;
});
