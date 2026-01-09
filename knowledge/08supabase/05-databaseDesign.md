---
sidebar_position: 1
---

# Database

Esta seccion esta dedicado al conocimiento necesario de database para crear un projecto e integrarlo a supabase, la sintaxys y teoria propia de SQL y el RDBSM como postgre se encuentran en otro lado.

## 1. Diseño de la base de datos

**Definir:**

* Analisis de requerimientos
* Modelado de datos
* Normalizacion

## 2. 📚 Normalización de Bases de Datos (de 1NF a 6NF)

Perfecto 👍
Esto es **fundamental para modelar bien una base de datos**, y suele explicarse fatal en muchos lados.
Aquí lo vas a ver **en español claro**, con **ejemplos progresivos** y **sin matemáticas innecesarias**.

> Idea clave antes de empezar:
> **Las formas normales son reglas para evitar duplicación, inconsistencias y datos “raros”.**

Usaremos **un mismo dominio** (usuarios y pedidos) para que veas la evolución.

### 2.1. 🥇 Primera Forma Normal (1NF)

#### 2.1.1. 📌 Regla

Una tabla está en **1NF** si:

1. Cada campo contiene **un solo valor (atómico)**
2. No hay listas ni campos repetidos
3. Cada fila es identificable (PK)

#### 2.1.2. ❌ Mal diseño (NO 1NF)

```text
users
--------------------------------
id | name | phones
--------------------------------
1  | Juan | 123,456,789
```

#### 2.1.3. 🔴 Problemas

* `phones` contiene **múltiples valores**
* No puedes buscar / indexar / validar bien

#### 2.1.4. ✅ Diseño correcto (1NF)

```text
users
-------------------
id | name
-------------------
1  | Juan
```

```text
phones
-------------------
id | user_id | phone
-------------------
1  | 1       | 123
2  | 1       | 456
3  | 1       | 789
```

✔️ Cada campo tiene **un solo valor**

---

### 2.2. 🥈 Segunda Forma Normal (2NF)

#### 2.2.1. 📌 Regla

Una tabla está en **2NF** si:

1. Está en 1NF
2. **Todos los campos dependen de TODA la clave primaria**
3. Aplica cuando la PK es **compuesta**

#### 2.2.2. ❌ Mal diseño (NO 2NF)

```text
order_items
------------------------------------
order_id | product_id | product_name
------------------------------------
1        | 10         | Mouse
1        | 11         | Teclado
```

#### 2.2.3. 🔴 Problema

* `product_name` depende solo de `product_id`
* No de `(order_id, product_id)`

#### 2.2.4. ✅ Diseño correcto (2NF)

```text
products
-------------------
id | name
-------------------
10 | Mouse
11 | Teclado
```

```text
order_items
-------------------
order_id | product_id
-------------------
1        | 10
1        | 11
```

✔️ Cada campo depende **de toda la clave**

### 2.3. 🥉 Tercera Forma Normal (3NF)

#### 2.3.1. 📌 Regla

Una tabla está en **3NF** si:

1. Está en 2NF
2. **No hay dependencias transitivas**
   (un campo depende de otro campo que no es PK)

#### 2.3.2. ❌ Mal diseño (NO 3NF)

```text
users
------------------------------------
id | name | city | city_country
------------------------------------
1  | Juan | Bogotá | Colombia
```

#### 2.3.3. 🔴 Problema

* `city_country` depende de `city`
* `city` depende de `id`

#### 2.3.4. ✅ Diseño correcto (3NF)

```text
cities
-------------------
id | name    | country
-------------------
1  | Bogotá  | Colombia
```

```text
users
-------------------
id | name | city_id
-------------------
1  | Juan | 1
```

✔️ Cada campo depende **solo de la PK**

### 2.4. 🏅 Cuarta Forma Normal (4NF)

#### 2.4.1. 📌 Regla

Una tabla está en **4NF** si:

1. Está en 3NF
2. **No hay dependencias multivaluadas independientes**

#### 2.4.2. ❌ Mal diseño (NO 4NF)

```text
users
--------------------------------
id | skill     | language
--------------------------------
1  | JavaScript| Español
1  | Python    | Inglés
```

#### 2.4.3. 🔴 Problema

* Skills y languages **no dependen entre sí**
* Se combinan artificialmente

#### 2.4.4. ✅ Diseño correcto (4NF)

```text
user_skills
-------------------
user_id | skill
-------------------
1       | JavaScript
1       | Python
```

```text
user_languages
-------------------
user_id | language
-------------------
1       | Español
1       | Inglés
```

✔️ Relaciones multivaluadas separadas

### 2.5. 🏆 Quinta Forma Normal (5NF)

#### 2.5.1. 📌 Regla

Una tabla está en **5NF** si:

1. Está en 4NF
2. **No puede dividirse más sin perder información**
3. Trata dependencias de unión (*join dependencies*)

#### 2.5.2. ❌ Mal diseño (NO 5NF)

```text
contracts
----------------------------
supplier | product | region
----------------------------
A        | Mouse   | EU
```

🔴 Esta tabla mezcla **tres relaciones independientes**

#### 2.5.3. ✅ Diseño correcto (5NF)

```text
supplier_product
-------------------
supplier | product
```

```text
supplier_region
-------------------
supplier | region
```

```text
product_region
-------------------
product | region
```

✔️ La relación se reconstruye SOLO con JOINs

📌 **Muy rara en apps normales**

### 2.6. 🧪 Sexta Forma Normal (6NF)

#### 2.6.1. 📌 Regla

Una tabla está en **6NF** si:

* Cada tabla representa **un solo hecho**
* Usada en sistemas **temporales / históricos**

#### 2.6.2. ❌ Diseño tradicional

```text
users
------------------------
id | name | email
------------------------
1  | Juan | a@a.com
```

#### 2.6.3. ✅ Diseño 6NF

```text
user_name
-------------------
user_id | name | valid_from
```

```text
user_email
-------------------
user_id | email | valid_from
```

✔️ Permite versionar cada dato

📌 Usada en:

* sistemas financieros
* data warehouses
* temporal databases

### 2.7. 🧠 Resumen rápido

| Forma | Qué evita                  |
| ----- | -------------------------- |
| 1NF   | listas y valores múltiples |
| 2NF   | dependencias parciales     |
| 3NF   | dependencias transitivas   |
| 4NF   | combinaciones artificiales |
| 5NF   | redundancia por joins      |
| 6NF   | problemas temporales       |

🎯 Lo que realmente se usa en la vida real

* ✅ **1NF, 2NF, 3NF → SIEMPRE**
* ⚠️ **4NF → a veces**
* ❌ **5NF y 6NF → muy raro en apps web**
* 🧠 Muchas apps se quedan bien en **3NF**

Supabase, Postgres, MySQL, etc. **no te obligan** a pasar de 3NF.

Regla práctica para ti

> **Si dudas → 3NF es suficiente**
> Optimiza después con índices o desnormalización controlada.

## 3. Diseño

**Definir:**

* Analisis de requerimientos
* Modelado de datos
* Normalizacion

Un aspecto **importante** es que el punto de vista ofrecido por el libro databases for mere mortals es primero tener definidas las caracteristicas que hacen de una base de datos tenga un buen diseño al final y que pase todas las pruebas de normalizacion y teniendo en cuenta domains, subtypes, relationships, data integrity, and referential integrity.

* **Data is what you store; information is what you retrieve.**
