
# Mi Primera Aplicación en React

**Estudiante:** Deyanira Aguayo  
**Institución:** Instituto Profesional IPG  
**Asignatura:** Programación Front End  
**Unidad:** 2  
**Evaluación:** Semana 4  

## Descripción

Aplicación web desarrollada con React y Vite para
gestionar una lista de tareas personales.

Permite agregar, completar y eliminar actividades,
visualizar el progreso y cambiar entre modo claro
y oscuro.

## Tecnologías utilizadas

- React 19
- Vite 8
- JavaScript y JSX
- HTML5 y CSS3
- Node.js y npm
- Git y GitHub
- Nginx

## Componentes principales

- **App.jsx:** administra los estados y la lógica.
- **Header.jsx:** presenta el encabezado.
- **TaskForm.jsx:** permite ingresar tareas.
- **TaskList.jsx:** muestra la lista de actividades.
- **TaskItem.jsx:** representa cada tarea individual.

## Uso de useState

Se utiliza el hook useState para administrar:

1. La lista de tareas.
2. El texto ingresado en el formulario.
3. El tema claro y oscuro.

Cada cambio de estado actualiza la interfaz
automáticamente, sin recargar la página.

## Instalación

Requisitos: Node.js compatible con Vite 8,
npm y Git.

Clonar el repositorio:

```bash
git clone https://github.com/deyaniraaguayo-c/mi-primera-app-react.git
cd mi-primera-app-react
```

Instalar dependencias:

```bash
npm install
```

Iniciar la aplicación:

```bash
npm run dev
```

## Compilación

Validar el código:

```bash
npm run lint
```

Compilar para producción:

```bash
npm run build
```

## Funcionamiento

1. Escribir una actividad en el formulario.
2. Presionar Agregar.
3. Marcar las tareas completadas.
4. Eliminar actividades cuando sea necesario.
5. Consultar la barra de progreso.
6. Cambiar entre modo claro y oscuro.

Las tareas se almacenan temporalmente
en el estado de React.

## Diseño

La interfaz utiliza colores rosados y lilas,
bordes redondeados, una tarjeta central y
estilos adaptables a dispositivos móviles.

## Evidencias

Las capturas de pantalla se encuentran
en la carpeta docs/capturas/.

## Publicación

La aplicación está disponible en la red local:

http://10.0.10.183:8081

## Conclusión

Este proyecto permitió aplicar los fundamentos
de React mediante componentes reutilizables,
manejo de estados, eventos y estilos CSS.

También permitió comprender la importancia
de GitHub para documentar y organizar un
proyecto de programación Front End.

## Autora

Deyanira Aguayo

Repositorio:
https://github.com/deyaniraaguayo-c/mi-primera-app-react

## Evidencias visuales del proyecto

Las siguientes capturas muestran el funcionamiento
de la aplicación desarrollada con React y Vite.

### 1. Pantalla principal

La interfaz presenta el formulario de ingreso,
el contador de actividades y la lista de tareas.

![Pantalla principal](docs/capturas/01-pantalla-principal.png)

### 2. Gestión y seguimiento de tareas

La aplicación permite ingresar actividades,
marcarlas como completadas y eliminarlas.

El contador y la barra de progreso se actualizan
automáticamente gracias al uso de useState.

![Tareas completadas](docs/capturas/02-tareas-completadas.png)

### 3. Personalización del tema

El botón de tema permite alternar entre
modo claro y oscuro sin recargar la página.

![Modo oscuro](docs/capturas/03-modo-oscuro.png)

## Pruebas funcionales

Se consideran las siguientes verificaciones:

| Prueba | Resultado esperado |
|---|---|
| Agregar tarea | Se muestra en la lista |
| Completar tarea | Se actualiza el progreso |
| Eliminar tarea | Desaparece de la lista |
| Entrada vacía | No agrega una tarea |
| Cambiar tema | Cambian los colores |
| Compilación | Vite compila sin errores |

Estas pruebas permiten verificar la interacción
entre los componentes y el estado de React.

## Decisiones de diseño

Se eligió una aplicación de lista de tareas
porque permite demostrar de manera práctica
el uso de componentes reutilizables, props,
eventos y el hook useState.

La interfaz utiliza una paleta de colores
rosados y lilas, tarjetas con bordes redondeados
y una distribución adaptable a distintas
resoluciones de pantalla.

La lógica principal se encuentra en App.jsx,
mientras que el formulario, el encabezado y
los elementos de la lista se distribuyen en
componentes independientes.

Esta separación facilita la comprensión,
mantenimiento y evolución del proyecto.

## Limitaciones y mejoras futuras

Actualmente las tareas se almacenan
temporalmente en el estado de React, por
lo que se pierden al recargar la página.

Como mejora futura, se podría incorporar
localStorage para conservar las actividades
sin necesitar una base de datos.

También se podría agregar un filtro para
visualizar tareas pendientes y completadas.

