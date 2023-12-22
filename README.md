# API de Información de Animales Domésticos

Esta API es un servicio del lado del servidor diseñado para gestionar información sobre animales domésticos, tanto con hogar como sin él. Permite a los usuarios acceder a datos sobre diferentes animales, añadir nuevos registros y actualizar o eliminar información existente.

## Tecnologías Utilizadas

- **Nest.js**: Un framework progresivo de Node.js para construir aplicaciones del lado del servidor eficientes y escalables.
- **TypeORM**: Un ORM (Object-Relational Mapper) que facilita la interacción con bases de datos SQL.
- **Class-validator**: Para la validación de datos en las clases DTO.
- **SQLite**: Como base de datos para el desarrollo. Se puede cambiar a otro sistema de gestión de base de datos SQL como PostgreSQL o MySQL para producción.

## Estructura del Proyecto

El proyecto sigue la estructura de carpetas y módulos estándar de Nest.js:

src/
|-- animal/
| |-- dto/
| | |-- create-animal.dto.ts
| | |-- update-animal.dto.ts
| |-- entities/
| | |-- animal.entity.ts
| |-- animal.module.ts
| |-- animal.service.ts
| |-- animal.controller.ts
|-- app.module.ts
|-- main.ts


## Instalación

Para comenzar a utilizar la API, clona el repositorio y ejecuta los siguientes comandos:

```bash
npm install
npm run start

```

## Uso

La API expone varios endpoints para interactuar con la información de los animales:

POST /animal: Añade un nuevo registro de animal.
GET /animal: Obtiene una lista de todos los animales.
GET /animal/{id}: Obtiene la información de un animal específico por su ID.
PATCH /animal/{id}: Actualiza la información de un animal específico por su ID.
DELETE /animal/{id}: Elimina un registro de animal por su ID.


## Pruebas
Para probar la API, puedes usar herramientas como Postman o Swagger, que permiten realizar solicitudes HTTP fácilmente y ver las respuestas de la API.

## Contribuciones
Las contribuciones son bienvenidas. Por favor, siente libre de fork el repositorio y presentar tus pull requests.

## Licencia
Este proyecto está bajo la Licencia MIT. Consulte el archivo LICENSE para más detalles.