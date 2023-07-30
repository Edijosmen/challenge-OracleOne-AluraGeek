const listaProductos = async () =>
  fetch("https://json-server-ashen-mu.vercel.app/productos").then((respuesta) => respuesta.json());

const crearProductos = (nombre, email) => {
  return fetch("https://json-server-ashen-mu.vercel.app/productos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nombre, email, id: uuid.v4() }),
  });
};

const eliminarProductos = (id) => {
  return fetch(`https://json-server-ashen-mu.vercel.app/productos/${id}`, {
    method: "DELETE",
  });
};

const detalleProductos = (id) => {
  return fetch(`https://json-server-ashen-mu.vercel.app/productos/${id}`).then((respuesta) => respuesta.json());
};

const updateProductos = (perfil) => {
  return fetch(`https://json-server-ashen-mu.vercel.app/productos/${perfil.id}`,{
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(perfil),
  })
};
export const clientServices = {
  listaProductos,
  crearProductos,
  eliminarProductos,
  detalleProductos,
  updateProductos
};
