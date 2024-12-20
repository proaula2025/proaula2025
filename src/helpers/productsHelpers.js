export const stateProducts = [
  { id: 1, state: "Nuevo" },
  { id: 2, state: "Usado" },
  { id: 3, state: "Reacondicionado" },
  { id: 4, state: "Como Nuevo" },
  { id: 5, state: "Muy Bueno" },
  { id: 6, state: "Bueno" },
  { id: 7, state: "Aceptable" },
  { id: 8, state: "Para Repuestos" },
  { id: 9, state: "En Embalaje Original" },
  { id: 10, state: "Sin Embalaje Original" },
  { id: 11, state: "Con Defectos" },
  { id: 12, state: "Restaurado" },
  { id: 13, state: "Sin Uso" },
  { id: 14, state: "Dañado" },
  { id: 15, state: "Caducado" },
];

export const categoryProducts = [
  { id: 1, category: "Accesorios" },
  { id: 2, category: "Alimentación" },
  { id: 3, category: "Audio y Vídeo" },
  { id: 4, category: "Bebés" },
  { id: 5, category: "Belleza" },
  { id: 6, category: "Cámaras" },
  { id: 7, category: "Coches y motos" },
  { id: 8, category: "Deportes" },
  { id: 9, category: "Electrodomésticos" },
  { id: 10, category: "Electrónica" },
  { id: 11, category: "Herramientas" },
  { id: 12, category: "Hogar" },
  { id: 13, category: "Iluminación" },
  { id: 14, category: "Informática" },
  { id: 15, category: "Jardín" },
  { id: 16, category: "Joyería" },
  { id: 17, category: "Juguetes" },
  { id: 18, category: "Libros" },
  { id: 19, category: "Música" },
  { id: 20, category: "Oficina" },
  { id: 21, category: "Ropa" },
  { id: 22, category: "Salud" },
  { id: 23, category: "Software" },
  { id: 24, category: "Telefonía" },
  { id: 25, category: "TV" },
  { id: 26, category: "Vehículos" },
  { id: 27, category: "Videojuegos" },
  { id: 28, category: "Otros" },
];

export const formatearPrecioColombiano = (precio) => {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  }).format(precio);
};

export const formatTime = (dateString) => {
  const date = new Date(dateString);
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12; // Convierte 0 en 12
  const minutesFormatted = minutes.toString().padStart(2, "0"); // Asegura dos dígitos
  return `${hours}:${minutesFormatted} ${ampm}`;
};
