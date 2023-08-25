# WIP Boilerplate for Hackathons

# PG

docker pull postgres <br/>
docker run --name postgres-db -p 5432:5432 -e POSTGRES_USER=user_demo -e POSTGRES_PASSWORD=pg_strong_password -e POSTGRES_DB=demo_db -d postgres

# Nestjs

npm i -g @nestjs/cli <br/>
nest new project-name

src/.env file anlegen <br/>
yarn backend add @nestjs/config
ConfigModule.forRoot({
envFilePath: '.env',
});

## Prisma

https://docs.nestjs.com/recipes/prisma#set-up-prisma
yarn backend add prisma -D
yarn backend add @prisma/client

### TOODs:


Frontend: tailwind
