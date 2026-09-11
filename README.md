# Bazar Turbo 2004

Uma experiência maximalista inspirada na internet brasileira do começo dos anos 2000. O projeto usa React, Vinext, Vite e Cloudflare Workers, com todo o conteúdo e identidade visual criados especificamente para este site.

## Requisitos

- Node.js `>=22.13.0`
- npm com suporte a `npm ci`

## Desenvolvimento

```bash
npm ci
npm run dev
```

Abra `http://localhost:3000`.

## Verificação

```bash
npm run lint
npm test
npm audit
```

`npm test` cria o build de produção e valida a renderização e os principais cabeçalhos defensivos.

## Segurança

- Dependências fixadas no `package-lock.json`.
- Scripts de instalação de pacotes desativados por padrão em `.npmrc`.
- Content Security Policy, HSTS, proteção contra framing e MIME sniffing.
- Recursos sensíveis do navegador bloqueados por `Permissions-Policy`.
- Dependabot semanal para npm e GitHub Actions.
- CodeQL e auditoria automatizada em pushes e pull requests.
- Arquivos `.env*`, `.dev.vars*`, artefatos locais e referências visuais não entram no repositório.

Relatos de vulnerabilidade devem seguir [SECURITY.md](SECURITY.md).

## Publicação no GitHub

Crie um repositório vazio e conecte-o sem colocar tokens na URL:

```bash
git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
git push -u origin main
```

Depois do primeiro push, ative em **Settings → Security** as opções disponíveis de Dependabot alerts, secret scanning e push protection.
