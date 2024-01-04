# Boilerplate for Hackathons

<img align="left" alt="TypeScript" width="40px" src="https://user-images.githubusercontent.com/41573499/129371694-5d17af2c-8109-4f0b-a809-760cc8895aa4.png" />
<img align="left" alt="Nest.js" width="40px" src="https://github.com/marwin1991/profile-technology-icons/assets/136815194/519bfaf3-c242-431e-a269-876979f05574" />
<img align="left" alt="Postgres" width="40px" src="https://user-images.githubusercontent.com/25181517/117208740-bfb78400-adf5-11eb-97bb-09072b6bedfc.png" />
<img align="left" alt="React" width="40px" src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png"/>
<img align="left" alt="Tailwind" width="40px" src="https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png" /> <br/> <br/>

## Prerequistes

- node > 18.0.0
- yarn

## Monorepo run

### Backend

- `docker run --name postgres-db -p 5432:5432 -e POSTGRES_USER=user_demo 
-e POSTGRES_PASSWORD=pg_strong_password -e POSTGRES_DB=demo_db -d postgres`
- `yarn backend dev`
- http://localhost:3000/swagger

### Frontend

- `yarn frontend dev`
- http://localhost:5173/

## Inital Setup Notes

### PG

- `docker pull postgres`
- `docker run --name postgres-db -p 5432:5432 -e POSTGRES_USER=user_demo 
-e POSTGRES_PASSWORD=pg_strong_password -e POSTGRES_DB=demo_db -d postgres`

### Nest.js

- `npm i -g @nestjs/cli`
- `nest new project-name`
- create src/.env file
- `yarn backend add @nestjs/config`
- `ConfigModule.forRoot({ envFilePath: '.env', })`

### Prisma

- https://docs.nestjs.com/recipes/prisma#set-up-prisma
- `yarn backend add`
- `prisma -D yarn backend add @prisma/client`

### React/Tailwind

- `yarn create vite` --> React --> Typescript
- run `yarn` in project folder again to install packages !
- `yarn dev`
- react query: https://tanstack.com/query/latest/docs/react/installation
- tailwind: https://tailwindcss.com/docs/guides/vite
