TODO => README
TODO => Agregar filtros al segundo carrousel
TODO => Eliminación de usuarios
TODO => Cambiar font de la alert a Inter
TODO => Crear carrousel de img en detail

# Cómo empezar

Cloná el repositorio en tu carpeta:

```bash
git clone https://github.com/TomasSorgetti/todosgamers-challenge-front.git
```

Entrá en la carpeta del proyecto e instalá las dependencias

```bash
cd todosgamers-challenge-front
npm install
```

Para abrir en tu ide:

```bash
code .
```

Creá un archivo .env.local en la carpeta principal del proyecto con las siguientes varibales

```bash
NEXT_PUBLIC_BREWERIES_API_URL=https://api.openbrewerydb.org/v1/breweries
NEXT_PUBLIC_BACKEND_URL=http://localhost:8080/api/v1
NEXTAUTH_SECRET=password_de_ejemplo
```

Iniciá el proyecto con el siguiente comando:

```bash
npm run dev
```

Seguí las indicaciónes del backend para que funcione la aplicación completa.

Repositorio del Backend

## Arquitectura del Frontend

```bash
    client/
    ├── src/
    │   ├── app/
    │   │      ├── api/
    │   │      ├── fonts/
    │   │      ├── page/
    │   │      ├── layout.tsx
    │   │      └── page.tsx
    │   ├── assets/
    │   ├── components/
    │   │      ├── forms/
    │   │      ├── layout/
    │   │      └── ui/
    │   ├── interfaces/
    │   ├── lib/
    │   ├── providers/
    │   │      ├── AppProviders.tsx
    │   │      └── rest_of_providers...
    │   ├── services/
    │   │      ├── api.ts
    │   │      ├── auth.ts
    │   │      └── comments.mock.ts
    │   │
    │   └── utils/
    │
    ├── .env.local
    └── ...resto_de_archivos_config
```

## Diseño de la aplicación
