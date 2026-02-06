# Portfólio em React + Tailwind

Página de portfólio com foco em demos **interativas via iframe**. O layout coloca **título e resumo acima da mídia** para facilitar o entendimento de cada projeto.

## Stack
- React + Vite
- Tailwind CSS
- Deploy recomendado: Vercel

## Estrutura de pastas (principais)
- `src/App.jsx`
- `src/index.css`
- `tailwind.config.js`

## Projetos hospedados (iframe)
Quando o projeto já está publicado, usamos `embedUrl` para exibir um iframe interativo:
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
O conteúdo está em `src/App.jsx`. Basta alterar o array `projects`.

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

## Observações sobre iframe
Alguns sites bloqueiam embed por `X-Frame-Options` ou `Content-Security-Policy`.  
Se um projeto não carregar dentro do iframe, ajuste o deploy desse projeto para permitir `frame-ancestors`.

## Personalização rápida
- Tipografia: ajuste em `tailwind.config.js` e `src/index.css`
- Cores: edite os gradientes e cards em `src/App.jsx`
- Seções: adicione ou remova cards no array `highlights`
