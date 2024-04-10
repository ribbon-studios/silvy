_**⚠️ This repo is still a WIP and things are always subject to change. ⚠️**_

[![Coveralls](https://img.shields.io/coveralls/github/ribbon-studios/silvy)](https://coveralls.io/github/ribbon-studios/silvy)

## Silvy

An app for creating, sharing, and collaborating on strats for XIV.

### Supports

- 💻 Self-hosting!
- 💿 [Almost any database you'd ever want!](#supported-databases)
- ✏️ Creating Strats
- 🎉 Creating Teams

### Supported Databases

- 🐘 Postgres
- 🐬 MariaDB (MySQL)
- Ⓜ️ SQL Server
- 🐤 SQLite

### Getting Started

#### 🐳 Docker

```sh
$ docker run -d \
      --restart=always \
      -e NEXTAUTH_URL="<your-next-auth-url>" \
      -e NEXTAUTH_SECRET="<your-next-auth-secret>" \
      -e DISCORD_CLIENT_ID="<your-discord-client-id>" \
      -e DISCORD_SECRET="<your-discord-token>" \
      -e DATABASE_URL="<your-database-url>" \
      --name silvy \
      ghcr.io/ribbon-studios/silvy:latest
```

#### 🐋 Docker Compose

```yml
version: "3"

services:
  silvy:
    image: ghcr.io/ribbon-studios/silvy:latest
    container_name: silvy
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

[![Deploys by Netlify][netlify-image]][netlify-url]

[netlify-image]: https://www.netlify.com/v3/img/components/netlify-color-accent.svg
[netlify-url]: https://www.netlify.com
