# 📰 Web de Noticias v2 - React App

## 📌 Descripción

Versión mejorada de la aplicación web desarrollada con **React** que consume una API de noticias (https://newsapi.org o https://newsdata.io). Ahora permite seleccionar **país** y **categoría** desde un formulario para mostrar noticias personalizadas.

---

## 🧩 Estructura de Componentes

- **Título**: Encabezado principal de la app.
- **Formulario**:
  - `Select` para elegir **categoría** de noticias (deportes, salud, negocios, etc.).
  - `Select` para elegir el **país** (Argentina, México, EE.UU., etc.).
- **ListaNoticias**: Contenedor que renderiza todas las noticias obtenidas de la API.
- **Noticia**: Componente que muestra los detalles de una noticia en una card (imagen, título, resumen, enlace).

---

## 🎯 Funcionalidades

- 🔌 Conexión a una API de noticias externa.
- 🗂️ Filtrado de noticias por **categoría** y **país**.
- 🧠 Renderizado dinámico de noticias según las selecciones.
- 🖼️ Presentación amigable con cards que muestran:
  - Título
  - Imagen
  - Descripción
  - Link a la fuente

---

## 🌎 Ejemplo de países disponibles (según la API)

- `us` - Estados Unidos 🇺🇸
- `ar` - Argentina 🇦🇷
- `mx` - México 🇲🇽
- `gb` - Reino Unido 🇬🇧
- `fr` - Francia 🇫🇷

---

## 🛠️ Tecnologías utilizadas

- **React**
- **Axios / Fetch API**
- **React Bootstrap** o estilos propios
- **React Hooks** (`useState`, `useEffect`)
- **APIs externas**:
  - [https://newsapi.org](https://newsapi.org) – solo para desarrollo local.
  - [https://newsdata.io](https://newsdata.io/docs) – funciona en producción.

---

## 📁 Estructura de carpetas sugerida

/src
/components
Titulo.jsx
Formulario.jsx
ListaNoticias.jsx
Noticia.jsx
App.jsx
index.js

yaml
Copiar
Editar

---

## ▶️ Instrucciones para ejecutar

1. Clonar el repositorio.
2. Instalar las dependencias:

npm install

markdown
Copiar
Editar

3. Crear un archivo `.env` y agregar tu clave API:

VITE_API_KEY=tu_clave_api

markdown
Copiar
Editar

4. Ejecutar el proyecto:

npm run dev

yaml
Copiar
Editar

---

## ⚠️ Consideraciones

- La API de **NewsAPI.org** solo funciona en local. Para deploys en Netlify o Vercel, usá **NewsData.io**.
- Verificá en la documentación de la API los códigos de país y categoría disponibles.

---

## ✍️ Autor

**Juan Mnauel Blanco**  
Proyecto React - Web de Noticias v2

---

Explorá las noticias del mundo por país y categoría 🌍📰