# Projeto Next.js com Autenticação Google

## 📋 Descrição

Este projeto é uma aplicação Next.js com TypeScript que implementa autenticação usando NextAuth.js e provedor Google OAuth. A aplicação está estruturada com uma pasta `src` para melhor organização do código.

## 🚀 Funcionalidades

- Autenticação com Google OAuth
- Rota protegida (/dashboard)
- Interface responsiva
- Tipagem TypeScript completa
- Gerenciamento de sessões

## 🛠️ Tecnologias

- Next.js 14 (App Router)
- TypeScript
- NextAuth.js
- Tailwind CSS (opcional - caso esteja usando)

## 📁 Estrutura do Projeto

```bash
src/
├── app/
│ ├── api/
│ │ └── auth/
│ │ └── [...nextauth]/
│ │ └── route.ts
│ ├── auth/
│ │ └── sign-in/
│ │ └── page.tsx
│ ├── dashboard/
│ │ └── page.tsx
│ ├── components/
│ │ └── Navbar.tsx
│ ├── layout.tsx
│ ├── page.tsx
│ └── globals.css
├── lib/
│ └── auth.ts
└── types/
└── next-auth.d.ts
```

## ⚙️ Configuração

### Variáveis de Ambiente

### Crie um arquivo `.env` na raiz do projeto:

```bash
GOOGLE_CLIENT_ID=seu_google_client_id_aqui
GOOGLE_CLIENT_SECRET=seu_google_client_secret_aqui
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=sua_chave_secreta_aqui
```

## Configuração do Google OAuth
- Acesse o Google Cloud Console
- Crie um novo projeto ou selecione um existente
- Vá para "APIs e Serviços" > "Credenciais"

### Crie um ID do cliente OAuth

- Adicione http://localhost:3000/api/auth/callback/google como URI de redirecionamento autorizado

## Instalação de Dependências

```bash
npm install next-auth @auth/core
```

## 🚀 Como Executar

- Clone o repositório
- Instale as dependências:

```bash
npm install
```

- Configure as variáveis de ambiente no arquivo .env.local
- Execute o projeto em modo de desenvolvimento:

```bash
npm run dev
```

- Abra http://localhost:3000 no navegador

## 📦 Build para Produção
```bash
npm run build
npm start
```

## Deploy na Vercel

### Método 1: Conexão com GitHub (Recomendado)

- Faça push do código para um repositório GitHub
- Acesse vercel.com e faça login com sua conta GitHub
- Clique em "Add New" > "Project"
- Selecione seu repositório
- Configure as variáveis de ambiente no painel da Vercel:

```bash
NEXTAUTH_SECRET
GOOGLE_CLIENT_ID
GOOGLE_CLIENT_SECRET
NEXTAUTH_URL (https://seu-dominio.vercel.app)
```
- Clique em "Deploy"

### Método 2: Usando Vercel CLI

- Instale a CLI da Vercel:

```bash
npm i -g vercel
```
- Execute o comando no diretório do projeto:

```bash
vercel
```

- Siga as instruções no terminal

#### 🔧 Configuração do NextAuth
- O arquivo principal de configuração está em src/lib/auth.ts:

```bash
typescript
import GoogleProvider from "next-auth/providers/google";
import type { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (session?.user) {
        session.user.id = token.sub as string;
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/signin",
  },
};
```

## 📝 Licença
- Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 🤝 Contribuições
- Contribuições são sempre bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.
