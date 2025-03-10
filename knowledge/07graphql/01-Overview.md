---
sidebar_position: 1
---

# GraphQL

Es una forma mas especializada de hacer peticiones por medio de APIs web.

[**Link de los Docs**](https://graphql.org/learn/).

## 1. REST

### **1.1. ¿Qué es REST?:**

REST (Representational State Transfer) es un estilo de arquitectura para diseñar servicios web. Se basa en principios que permiten que los sistemas se comuniquen de manera eficiente a través de HTTP.

**Principios de REST:**

- **Cliente-Servidor:** Separa la interfaz de usuario (cliente) de la lógica del servidor.
- **Stateless (Sin estado):** Cada petición del cliente al servidor debe contener toda la información necesaria. No se mantiene el estado entre solicitudes.
- **Cacheable:** Las respuestas pueden ser almacenadas en caché para mejorar el rendimiento.
- **Interfaz uniforme:** Se usan métodos estándar de HTTP (GET, POST, PUT, DELETE, PATCH).
- **Sistema en capas:** Se pueden agregar intermediarios (como proxies y gateways) sin que el cliente lo note.

---

### **1.2. ¿Qué es una REST API?**  

Una REST API es una interfaz que sigue los principios de REST y permite que los clientes interactúen con un servidor a través de HTTP.

Ejemplo de endpoints en una REST API:  

```javascript
GET    /users       → Obtiene una lista de usuarios  
GET    /users/{id}  → Obtiene los datos de un usuario  
POST   /users       → Crea un nuevo usuario  
PUT    /users/{id}  → Actualiza un usuario  
DELETE /users/{id}  → Elimina un usuario  
```

Estas rutas reflejan el acceso a recursos utilizando métodos HTTP estándar.

---

### **3. ¿Qué es Full REST (o RESTful puro)?**  
"Full REST" (o RESTful puro) significa que la API sigue **estrictamente** los principios de REST.  
- Usa **solamente** los métodos HTTP estándar.  
- No usa sesiones ni almacena estado en el servidor.  
- Usa respuestas HTTP con los códigos de estado correctos (`200 OK`, `201 Created`, `400 Bad Request`, etc.).  
- Sigue el formato de URLs bien estructuradas y semánticas (`/users` en lugar de `/getUsers`).  
- Usa **HATEOAS (Hypermedia As The Engine Of Application State)**, lo que significa que las respuestas incluyen enlaces a otras acciones posibles.

Ejemplo de HATEOAS:  
```json
{
  "id": 1,
  "name": "Juan Pérez",
  "email": "juan@example.com",
  "links": [
    { "rel": "self", "href": "/users/1" },
    { "rel": "orders", "href": "/users/1/orders" }
  ]
}
```
Esto permite que el cliente descubra más rutas sin necesidad de conocer la API de antemano.

---

### **4. REST vs. GraphQL (adelanto)**
| Característica  | REST API | GraphQL |
|---------------|---------|---------|
| **Forma de obtener datos** | Múltiples endpoints | Un solo endpoint |
| **Cantidad de datos recibidos** | Puede traer más de lo necesario | Solo lo que se solicita |
| **Versionado** | Se crean nuevas versiones (v1, v2, etc.) | No requiere versionado |
| **Flexibilidad** | Respuestas fijas según endpoint | El cliente define qué datos quiere recibir |
| **Eficiencia** | Puede hacer muchas peticiones | Optimiza las consultas en una sola petición |

REST es más tradicional y sigue un enfoque basado en recursos, mientras que GraphQL es más flexible y centrado en consultas.

---

### **¿Listo para meternos en GraphQL?**  
GraphQL cambia la forma en que se interactúa con una API. ¿Te gustaría que empecemos viendo su sintaxis o la arquitectura general? 🚀