const express = require('express');
const app = express();
const PORT = 3000;

// --- ¡NUEVO! ---
// Un array de objetos que simula nuestra base de datos de artículos.
const posts = [
  {
    id: 1,
    title: 'Iniciando con Angular',
    content: 'Aprende los conceptos básicos de Angular, desde la instalación de la CLI hasta la creación de tus primeros componentes. Un viaje paso a paso para construir aplicaciones web modernas y potentes.',
    author: 'Makyultron',
    publishDate: '2025-06-22',
    imageUrl: 'https://via.placeholder.com/750x300'
  },
  {
    id: 2,
    title: 'Entendiendo Node.js y Express',
    content: 'Node.js nos permite ejecutar JavaScript en el servidor, y Express nos da las herramientas para crear APIs de forma rápida y sencilla. Descubre cómo funcionan juntos.',
    author: 'Makyultron',
    publishDate: '2025-06-21',
    imageUrl: 'https://via.placeholder.com/750x300'
  }
];
// --- FIN DE LO NUEVO ---


// Ruta principal de bienvenida (la dejamos como estaba)
app.get('/', (req, res) => {
  res.json({ message: '¡El backend del blog está funcionando!' });
});

// --- ¡NUEVA RUTA! ---
// Cuando alguien visite /api/posts, le enviaremos la lista completa de artículos.
app.get('/api/posts', (req, res) => {
  res.json(posts);
});


app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});