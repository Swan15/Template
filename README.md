This is a [Next.js](https://nextjs.org/) project which uses Supabase, Tailwind CSS, DaisyUI and Stripe.

## Getting Started

First, copy your environment variables and fill them in:

```bash
cp .env.local.example .env.local
```

Then, download the NPM packages

```bash
yarn
```

Then, run the server

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Additional requirements

To get database types

```bash

supabase login

supabase gen types typescript --project-id your-project-id > src/database.types.ts
```

You will need to change in supabase the 'Confirm signup' and 'Magic Link' emails to the following

```html
<h2>Confirm your signup</h2>

<p>Follow this link to confirm your user:</p>
<p><a href="{{ .ConfirmationURL }}">Confirm your mail</a></p>
<p>Or you can enter this code if the link is not working: {{ .Token }}</p>
```

Make sure to add the URL configs in supabase to redirect to the following:
"https://your-website.com/\*"
"http://localhost:3000/\*"
So you can test locally and it works.

You can use your Gmail initially to handle the Supabase SMTP:
Host: smtp.gmail.com
Port: 465
Username: you@gmail.com
Password: (you'll need to setup an app password)
https://support.google.com/mail/thread/205453566/how-to-generate-an-app-password?hl=en
