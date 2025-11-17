---
sidebar_position: 3
---

# Creando un nuevo projecto

Perfecto, acá tienes **el mejor mapa posible para aprender Supabase de forma profesional**, inspirado en el flujo del libro *Building Production-Grade Web Applications with Supabase* pero actualizado al 2025, y organizado para que no te pierdas ni saltes pasos.

Lo dividí en **niveles**, **temas**, **orden exacto**, **qué deberías practicar** y **por qué es importante**.

---

# 🚀 **MAPA COMPLETO DE APRENDIZAJE SUPABASE (VERSIÓN PROFESIONAL 2025)**

---

# 🟦 **NIVEL 1 — FUNDAMENTOS (Instalación, configuración y cliente)**

## **1. Instalar/Crear un proyecto Supabase**

**Objetivo:** Tener tu instancia lista (local o cloud).

* Supabase CLI (`supabase start`)
* Containers Docker (Postgres + Kong + Realtime + Studio)
* Proyecto remoto en cloud (opcional)

**Práctica:**
Levanta un proyecto local → accede a Studio → inspecciona tablas.

---

## **2. Crear las variables de entorno**

**Objetivo:** Guardar llaves de manera segura.

* URL del proyecto
* anon key (cliente)
* service_role key (backend)

**Práctica:**
Crea `.env.local` y coloca:

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```

---

## **3. Crear los clientes de Supabase**

**Objetivo:** Entender la separación frontend/backend.

* Cliente público (para el browser)
* Cliente seguro (para el server)
* Diferencia entre anon key y service role

**Práctica:**
Crea:

```
lib/supabase/client.ts
lib/supabase/admin.ts
```

---

# 🟩 **NIVEL 2 — AUTENTICACIÓN (lo más importante en RLS)**

## **4. Usuarios y sesiones**

**Objetivo:** Manejar login y registro.

* signUp
* signInWithPassword
* signOut
* getSession / getUser

**Práctica:**
Crea un formulario simple de login.

---

## **5. Auth Helpers (para Next.js)**

**Objetivo:** Manejar cookies JWT y sesión automática.

Aquí aprender:

* Server Components vs Client Components
* Supabase SSR
* Middleware
* `createServerClient` y `createBrowserClient`

**Práctica:**
Implementa un navbar con “Hola, {user.email}”.

---

## **6. RLS (Row Level Security)**

**Objetivo:** Seguridad real en Supabase.

Aprender:

* RLS ON
* Policies (`auth.uid()`, `auth.role()`, etc.)
* Por qué Supabase es seguro por defecto

**Práctica:**
Habilita RLS y crea una policy tipo:

```sql
create policy "Users can read own data"
on profiles
for select using ( auth.uid() = id );
```

---

# 🟧 **NIVEL 3 — DISEÑO DE BASE DE DATOS (el alma de Supabase)**

## **7. Tablas y relaciones**

**Objetivo:** Disenar entidades limpias.

Aprender:

* Primary keys
* Foreign keys
* Composite indexes
* Enums
* Schemas

**Práctica:**
Crea un esquema tipo:

```
usuarios
propiedades
imagenes_propiedad
favoritos
```

---

## **8. SQL migraciones**

**Objetivo:** Cambios controlados de schema.

Aprender:

* CLI migrations
* Versionado
* Deploy reproducible

**Práctica:**
Modifica columnas usando migraciones en lugar de la UI.

---

# 🟨 **NIVEL 4 — OPERACIONES AVANZADAS**

## **9. Storage**

**Objetivo:** Guardar imágenes/archivos.

Aprender:

* Buckets privados vs públicos
* Policies
* Signed URLs (muy importante)

**Práctica:**
Sube imágenes a un bucket privado → descarga vía signedUrl.

---

## **10. Edge Functions (Deno)**

**Objetivo:** Backend sin servidor dentro de Supabase.

Aprender:

* Crear funciones
* Llamarlas desde JS
* Service role en funciones
* Webhooks

**Práctica:**
Crea una función que envía correo o hace cálculos pesados.

---

## **11. Realtime**

**Objetivo:** Apps en vivo (chats, dashboards, mapas).

Aprender:

* Channels
* Broadcast
* Presence
* Listen to DB changes (ROW INSERT/UPDATE)

**Práctica:**
Haz que un listado de propiedades se actualice en vivo.

---

# 🟪 **NIVEL 5 — PRODUCCIÓN REAL**

## **12. Seguridad avanzada**

**Objetivo:** Apps reales sin agujeros de seguridad.

Incluye:

* Policies complejas
* JWT claims personalizados
* Uso correcto de la service_role

---

## **13. Optimización**

**Objetivo:** Apps rápidas.

Incluye:

* Indexes
* EXPLAIN ANALYZE
* Materialized views
* Caching

---

## **14. Deploy**

**Objetivo:** Pasar de dev a producción.

Aprender:

* Deploy Next.js en Vercel con Supabase
* Variables seguras
* SSR cache
* Edge runtime o Node runtime

---

# 🎯 **RESUMEN EN UNA SOLA LÍNEA**

> Primero Supabase → luego env → luego cliente → luego auth → luego RLS → luego tablas → luego storage → luego funciones → luego realtime → luego producción.

Este es exactamente el orden en que se construyen apps profesionales.

---

# 🚀 **Si quieres te puedo crear:**

✅ Un **roadmap visual**
✅ Un checklist imprimible
✅ Un proyecto guía paso a paso (tipo Airbnb / Marketplace)
✅ Un archivo con la estructura de carpetas de un proyecto real Next.js + Supabase

Dime cuál quieres y lo hacemos.
