# Portfólio em React + Tailwind

Página de portfólio com foco em vídeos curtos e demos interativas para demonstrar projetos. O layout coloca **título e resumo acima da mídia** para facilitar o entendimento de cada projeto.

## Stack
- React + Vite
- Tailwind CSS
- Deploy recomendado: Vercel

## Estrutura de pastas (principais)
- `public/videos/`
- `src/App.jsx`
- `src/index.css`
- `tailwind.config.js`

## Onde colocar os vídeos
Os vídeos devem ficar dentro de `public/videos/`.

Exemplos:
- `public/videos/atlas-financeiro.mp4`
- `public/videos/aurora-habit-tracker.mp4`
- `public/videos/orion-support-desk.mp4`

No código, os caminhos são referenciados assim:
```
/videos/atlas-financeiro.mp4
```

Isso funciona porque o conteúdo de `public/` é servido diretamente na raiz do site.

### Dica para compatibilidade
- Formato recomendado: MP4 (H.264 + AAC).
- Use vídeos curtos e otimizados para web.

Se quiser posters (imagem de capa), você pode criar:
- `public/videos/posters/`
E usar em:
```
<video poster="/videos/posters/atlas-financeiro.jpg" ... />
```

## Projetos hospedados (iframe)
Quando o projeto já está publicado, use `embedUrl` para exibir um iframe interativo:
```
const projects = [
  {
    title: "Meu app",
    summary: "Resumo breve do projeto.",
    year: "2024",
    role: "Front-end",
    tags: ["React"],
    embedUrl: "https://meu-app.vercel.app",
  },
]
```

## Como editar os projetos
O conteúdo está em `src/App.jsx`. Basta alterar o array `projects`:
```
const projects = [
  {
    title: "Nome do projeto",
    summary: "Resumo breve do projeto.",
    year: "2025",
    role: "Full Stack",
    tags: ["React", "Tailwind"],
    video: "/videos/seu-video.mp4",
  },
]
```

Também ajuste:
- E-mails em `mailto:seuemail@exemplo.com`
- Nome no rodapé

## Rodando localmente
```
npm install
npm run dev
```

## Build de produção
```
npm run build
npm run preview
```

## Deploy na Vercel
1. Suba o repositório no GitHub.
2. Conecte o repo na Vercel.
3. A Vercel detecta automaticamente Vite/React.
4. Comandos padrão:
   - Build: `npm run build`
   - Output: `dist`

## Personalização rápida
- Tipografia: ajuste em `tailwind.config.js` e `src/index.css`
- Cores: edite os gradientes e cards em `src/App.jsx`
- Seções: adicione ou remova cards no array `highlights`

## Observações
O arquivo `public/videos/.gitkeep` existe apenas para versionar a pasta. Você pode apagar depois que adicionar seus vídeos.
