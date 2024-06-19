# Instruções de utilização

Este é um projeto desenvolvido com Next.js 13, integrado com o Contentful para gerenciar posts de blog e produtos. A aplicação utiliza MongoDB como banco de dados e está hospedada no Vercel (frontend) e Fly.io (backend).

## Sumário

- [Instalação](#instalação)
- [Uso](#uso)
- [Componentes](#componentes)
- [Configuração](#configuração)
- [Hospedagem](#hospedagem)
- [Ferramentas Utilizadas](#ferramentas-utilizadas)
- [Acessibilidade](#acessibilidade)

## Instalação
Certifique-se de ter o Node.js na versão 20.x instalada. Então, clone o repositório e instale as dependências:

```bash
git clone pmv-ads-2024-1-e5-proj-empext-t4-pmv-ads-2024-1-e5-golosinas-imports

cd codigo-fonte/frontend
npm install

cd codigo-fonte/backend
npm install
```

## Uso
Para rodar o projeto em ambiente de desenvolvimento em odigo-fonte/frontend:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```
Para visualizar os componentes no Storybook:

```bash
npm run storybook
# ou
yarn storybook
# ou
pnpm storybook
```

## Componentes

Os componentes desenvolvidos podem ser visualizados tanto rodando o npm run dev quanto o npm run storybook. O Storybook foi configurado com foco em acessibilidade e, especialmente, na documentação dos átomos, moléculas e organismos desenvolvidos.

## Configuração

Certifique-se de configurar as variáveis de ambiente necessárias. Crie um arquivo .env na raiz do projeto com as informações/variáveis disponibilizadas em .env.example

## Hospedagem

- Frontend: O frontend foi hospedado na Vercel.
- Backend: O backend foi hospedado no Fly.io.

## Ferramentas Utilizadas

- Next.js 13: Framework React para desenvolvimento web.
- Contentful: CMS para gerenciar conteúdo dos posts de blog e produtos.
- MongoDB: Banco de dados NoSQL.
- Vercel: Plataforma de hospedagem para frontend.
- Fly.io: Plataforma de hospedagem para backend.
- Storybook: Ferramenta para desenvolvimento de componentes UI isolados.

## Acessibilidade

Todo o Storybook foi configurado com foco em acessibilidade para garantir que os componentes sejam acessíveis a todos os usuários. A extensão Lighthouse foi utilizada para auditar a aplicação em termos de acessibilidade, SEO, desempenho e boas práticas. O Lighthouse é uma ferramenta automatizada de código aberto que ajuda a melhorar a qualidade das páginas da web. Ele gera relatórios detalhados com sugestões de melhorias para:

### Para executar uma auditoria com o Lighthouse, siga estes passos:

- Abra o site em um navegador Chrome.
- Vá para as Ferramentas de Desenvolvedor (F12 ou Ctrl+Shift+I).
- Clique na aba "Lighthouse".
- Selecione as categorias que deseja auditar (Desempenho, Acessibilidade, SEO, etc.).
- Clique em "Generate report" para gerar o relatório.
