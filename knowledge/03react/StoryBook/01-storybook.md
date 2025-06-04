---
sidebar_position: 1
---

# Storybook

Toda la informacion se consigue obviamente de los docs, sin embargo Storybook actualiza su api constantemente y hay diferentes formas de crear historias y definir parametros de los componentes.

- De chatGPT

En Storybook, la API ha evolucionado y se han introducido diferentes formas de definir historias. Las dos formas que mencionas son válidas y representan diferentes estilos de definir historias. A continuación, explicaré ambas:

## 1. Stories

Una historia es una state aislado de un componente, una historia, un state.

### 1.1. Definición de historias sin tipo explícito

```javascript
export const Default = {
  args: {
    task: {
      id: "1",
      title: "Test Task",
      state: "TASK_INBOX",
    },
  },
};
```

En este caso, `Default` se define como un objeto que contiene una propiedad `args`. Esta es una forma simple y directa de definir historias en Storybook 6.4 y versiones posteriores. Esta forma no utiliza tipos explícitos, lo cual es perfectamente válido en JavaScript y en algunos casos en TypeScript.

### 1.2. Definición de historias con tipo explícito (`Story`)

```javascript
export const Primary: Story = {
  args: {
    primary: "primario",
    label: "ProductListItem",
  },
};
```

Aquí, `Primary` está definido como un objeto con un tipo explícito `Story`. Esto es más común en configuraciones de TypeScript, donde se quiere asegurar que el objeto cumpla con la estructura esperada para una historia. Al definir el tipo `Story`, se obtiene la validación de tipos y autocompletado en editores que soportan TypeScript.

### 1.3. Diferencias y razones para usar una u otra

1. **Tipo explícito (`Story`)**:

   - **Ventajas**: Proporciona verificación de tipos, lo cual es útil en proyectos TypeScript para asegurar que las historias siguen la estructura correcta.
   - **Uso**: Preferido en proyectos TypeScript o cuando se desea tener una capa adicional de seguridad y claridad sobre la estructura de las historias.

   ```typescript
   import { Meta, Story } from "@storybook/react";

   // Definición de tipos para el componente
   const meta: Meta = {
     title: "Components/ProductListItem",
     component: ProductListItem,
   };

   export default meta;

   // Definición de una historia con tipo explícito
   const Template: Story = (args) => <ProductListItem {...args} />;

   export const Primary: Story = Template.bind({});
   Primary.args = {
     primary: "primario",
     label: "ProductListItem",
   };
   ```

2. **Sin tipo explícito**:

   - **Ventajas**: Más sencillo y menos código, especialmente útil en proyectos JavaScript o en configuraciones rápidas donde no se requiere la verificación de tipos.
   - **Uso**: Ideal para proyectos JavaScript o para configuraciones iniciales rápidas.

   ```javascript
   export const Default = {
     args: {
       task: {
         id: "1",
         title: "Test Task",
         state: "TASK_INBOX",
       },
     },
   };
   ```

### 1.4. Conclusión

Ambas formas son válidas y tienen sus propios usos y ventajas. La elección entre usar un tipo explícito (`Story`) o no, depende de tus necesidades específicas, el lenguaje que estés usando (JavaScript vs. TypeScript), y el nivel de verificación de tipos y autocompletado que desees en tu proyecto. En proyectos TypeScript, es común y beneficioso usar tipos explícitos para aprovechar la verificación de tipos y el autocompletado. En proyectos JavaScript, puede ser más sencillo y rápido usar la forma sin tipos explícitos.
