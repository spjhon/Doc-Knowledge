---
sidebar_position: 3
---

# Modulo Auth

El modulo auth tiene tres formas de crear un cliente de supabase, createClient, createBrowerClient y creatServerClient, esto es especifico para next js.

Estos clientes se usan para poder manejar la autenticacion por medio de coockies.

Con los archivos de App Router, tenemos cuatro lugares donde podemos usar el cliente backend de Supabase – solo uno utiliza req y res; los demás usan la utilidad cookies():

• En el archivo middleware.js: req y res
• En un componente renderizado en el servidor (por ejemplo, /app/foo/page.js): cookies()
• En un Route Handler: cookies()
• En una server action: cookies()
