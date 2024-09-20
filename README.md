# Cómo empezar

Cloná el repositorio en tu carpeta:

```bash
git clone https://github.com/TomasSorgetti/nomada-wifi-challenge-front.git
```

Entrá en la carpeta del proyecto e instalá las dependencias

```bash
cd nomada-wifi-challenge-front
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

Seguí las indicaciónes del Backend para que funcione la aplicación completa.

[Repositorio del Backend](https://github.com/TomasSorgetti/nomada-wifi-challenge-server)

## Arquitectura del Frontend

```bash
    client/
    ├── src/                                #carpeta donde estan los archivos principales de la aplicación
    │   ├── app/                            #carpeta donde estan las páginas
    │   │      ├── api/                         #api de next
    │   │      ├── fonts/                       
    │   │      ├── page/                        #una carpeta con un archivo page.tsx por cada página
    │   │      ├── layout.tsx
    │   │      └── page.tsx
    │   ├── assets/                         #imágenes e iconos
    │   ├── components/                     #componentes
    │   │      ├── forms/                       #formularios
    │   │      ├── layout/                      #componentes de layaut
    │   │      └── ui/                          #componentes reutilizables
    │   ├── interfaces/                     #interfaces
    │   ├── lib/                            #redux
    │   ├── providers/                      #carpeta con todos los providers para importar en layaut
    │   │      ├── AppProviders.tsx             #provider principal
    │   │      └── rest_of_providers...
    │   ├── services/                       #servicios para llamadas a apis
    │   │      ├── api.ts
    │   │      ├── auth.ts
    │   │      └── comments.mock.ts             #un mock de comentarios para simular una llamada a una api
    │   │
    │   └── utils/                          #funciones utiles que pueden ser reutilizables
    │
    ├── .env.local
    └── ...resto_de_archivos_config
```

## Diseño de la aplicación

![image](https://github.com/user-attachments/assets/a047dba4-9e72-4541-b787-e4ccca81edb3)
![image](https://github.com/user-attachments/assets/67eeb0c8-a4cb-44e5-bf98-852e5d9068aa)

## Detalles agregados

### Login

![image](https://github.com/user-attachments/assets/6efc0e13-1a29-4a75-b7b5-eeb2ffc7e617)

### Register

![image](https://github.com/user-attachments/assets/01c1ed8c-ea7a-46ff-af9d-0332dc08a1f2)

### Estado de carga

![image](https://github.com/user-attachments/assets/85194dca-c800-43f8-8884-3e880812c2d6)

### Validaciónes

![image](https://github.com/user-attachments/assets/7cefebe8-db1f-4277-910d-8d8b3e6038a5)
![image](https://github.com/user-attachments/assets/8c6d75dd-3f6b-45e1-934c-03be0b1f6032)
![image](https://github.com/user-attachments/assets/9e21a5bd-0dcc-4bad-99e1-53bdfce977fc)

