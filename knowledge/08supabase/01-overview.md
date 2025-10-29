---
sidebar_position: 1
---

# Supabase

## Consiste en

---

### 🧭 Supabase Studio – el panel web conveniente

**Supabase Studio** es una interfaz web intuitiva que permite administrar tu base de datos, autenticación, almacenamiento y funciones sin necesidad de escribir código SQL directamente. Es el centro de control visual de todo tu proyecto Supabase.

---

### 🔐 Supabase Auth (GoTrue) – el manejador de autenticación

**Supabase Auth** (basado en el servicio **GoTrue**) se encarga de la autenticación de usuarios. Soporta correo y contraseña, OAuth (Google, GitHub, etc.), enlaces mágicos, y más, con reglas de seguridad integradas y administración sencilla de sesiones y tokens JWT.

---

### 🔗 PostgREST – API REST y GraphQL para la base de datos

**PostgREST** convierte automáticamente tus tablas y vistas de PostgreSQL en una **API RESTful** y **GraphQL**, segura y lista para producción. Así puedes interactuar con la base de datos sin necesidad de construir endpoints manualmente.

---

### ⚡ Realtime – mejorando la experiencia del usuario

**Realtime** permite recibir actualizaciones instantáneas cuando los datos cambian en la base de datos, usando websockets. Esto es ideal para chats, paneles dinámicos o cualquier aplicación que requiera sincronización en tiempo real.

---

### 🗂️ Storage – almacenamiento de objetos simple y escalable

**Storage** ofrece un sistema de almacenamiento de archivos (imágenes, videos, documentos, etc.) seguro y basado en buckets, con control de acceso a nivel de usuario y reglas personalizables, todo integrado con la autenticación de Supabase.

---

### 🖼️ Image Proxy – transformación de imágenes en tiempo real

**Image Proxy** permite optimizar y transformar imágenes al vuelo (por ejemplo, redimensionar, recortar o cambiar formato) antes de entregarlas al cliente. Esto mejora la velocidad de carga y la experiencia del usuario final.

---

### 🌐 Edge Functions – completando la pila de optimización

**Edge Functions** son funciones sin servidor (serverless) que se ejecutan cerca del usuario, en la red perimetral (edge). Sirven para lógica personalizada, validaciones, webhooks o cualquier tarea que necesite baja latencia y alta disponibilidad.

---

### 🧩 pg-meta – servicio interno auxiliar para la base de datos

**pg-meta** es un servicio interno que proporciona metadatos sobre la base de datos (tablas, columnas, relaciones, etc.). Supabase lo usa para mostrar información estructural en el panel y permitir introspección sin comprometer la seguridad.

---

### 🕹️ Kong – el orquestador principal de servicios

**Kong** actúa como **API Gateway** y orquestador de todos los servicios internos de Supabase. Administra el tráfico, seguridad, autenticación y enrutamiento entre los distintos componentes (Auth, Realtime, PostgREST, etc.), garantizando estabilidad y escalabilidad.

---
