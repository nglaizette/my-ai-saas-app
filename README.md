# my-ai-saas-app
Tutorial de youtube

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

https://replicate.com/

Exbase de données: plus de truc gratuit
https://app.planetscale.com/

base de données
https://supabase.com/

payement
https://dashboard.stripe.com/




pm i next@12 react@17 react-dom@17 eslint-config-next@12
npm run dev
npx create-next-app@latest my-ai-saas-app --typescript --tailwind --eslint
npx shadcn-ui@latest init
npx shadcn-ui@latest add card
npx shadcn-ui@latest add form
npx shadcn-ui@latest add input
npm i openai
npm i axios
npx shadcn-ui@latest add select
npm i replicate
npm i -D prisma
npx prisma init
npm i @prisma/client
installation extension vscode pour prisma.
npx prisma db push (pousser le schéma)
npx prisma generate (générer la base)
npx prisma studio (examiner /  changer les valeur dans la base sur localhost: http://localhost:5555/)

npx shadcn-ui@latest add progress

npm i zustand

npx shadcn-ui@latest add dialog
npx shadcn-ui@latest add badge

npm i stripe

Après changement de shéma prisma
npx prisma generate
puis pousser la création à la base
npx prisma db push

installation de la cli stripe
brew install stripe/stripe-cli/stripe
stripe login
Ouvrir l'url fourni et accepter la connexion
stripe listen --forward-to localhost:3000/api/webhook

nettoyer la basededonnées entière:
npx prisma migrate reset puis npx prisma generate et npx prisma db push

npm i react-hot-toast
npm i crisp-sdk-web

npm i typewriter-effect