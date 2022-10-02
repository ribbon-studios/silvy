_**⚠️ This repo is still a WIP and things are always subject to change. ⚠️**_

[![Docker Hub Version](https://img.shields.io/docker/v/rainbowcafe/silvy?label=Docker%20Hub%20Version)](https://hub.docker.com/repository/docker/rainbowcafe/silvy)

[![Coveralls](https://img.shields.io/coveralls/github/rain-cafe-xiv/silvy)](https://coveralls.io/github/rain-cafe-xiv/silvy)

## Silvy

An app for creating, sharing, and collaborating on strats for XIV.

### Supports

- 💻 Self-hosting!
- 💿 [Almost any database you'd ever want!](#supported-databases)
- ✏️ Creating Strats
- 🎉 Creating Teams

### Supported Databases

- 🐘 Postgres
- 🦭 MariaDB (MySQL)
- Ⓜ️ SQL Server
- 🪶 SQLite


### Getting Started

#### Docker

```sh
$ docker run -d \
      --restart=always \
      -e NEXTAUTH_URL="<your-next-auth-url>" \
      -e NEXTAUTH_SECRET="<your-next-auth-secret>" \
      -e DISCORD_CLIENT_ID="<your-discord-client-id>" \
      -e DISCORD_SECRET="<your-discord-token>" \
      -e DATABASE_URL="<your-database-url>" \
      --name discord-bot \
      rainbowcafe/silvy
```

#### Docker Compose

```yml
version: "3"

services:
  discord-bot:
    image: rainbowcafe/silvy:latest
    container_name: discord-bot
    tty: true
    stdin_open: true
    restart: unless-stopped
    environment:
      NEXTAUTH_URL: "<your-next-auth-url>"
      NEXTAUTH_SECRET: "<your-next-auth-secret>"
      DISCORD_CLIENT_ID: "<your-discord-client-id>"
      DISCORD_SECRET: "<your-discord-token>"
      DATABASE_URL: "<your-database-url>"
```

[_**Want to Contribute?**_](/CONTRIBUTING.md)

[![Vercel][vercel-image]][vercel-url]

[vercel-image]: https://user-images.githubusercontent.com/9692284/192920193-fc967232-e0ba-425f-af63-c8eff3fe3216.png
[vercel-url]: https://vercel.com/?utm_source=rainbow-cafe&utm_campaign=oss