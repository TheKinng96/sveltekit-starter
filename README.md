# Colorme App Starter Kit

This is a starter kit for Colorme app development, aimed at separating frontend and backend services. Unlike [previous versions](https://github.com/TheKinng96/sveltekit-pocketbase-starter) that bundled everything in a single Docker container, this setup optimizes deployment flexibility and allows for cost-effective hosting solutions.

## Hosting Strategy

- **Backend**: Using [Pockethost](https://pockethost.io/) for free hosting and monitoring of PocketBase instances, ideal for proof-of-concept (PoC) development without upfront costs. Production projects can eventually migrate to dedicated servers closer to the service area for performance optimization.
- **Frontend**: The frontend can be hosted on any SvelteKit-supported platform like [AWS Amplify](https://aws.amazon.com/amplify/), [Vercel](https://vercel.com/), or [Heroku](https://www.heroku.com/). These platforms provide robust integrations with SvelteKit, making deployment straightforward and efficient.

## Project Structure

```plaintext
.
├── src
│   ├── lib
│   │   ├── api
│   │   ├── auth
│   │   ├── components
│   │   ├── paraglide
│   │   │   └── messages
│   │   ├── server
│   │   ├── stores
│   │   └── types
│   └── routes
│       ├── (actions)
│       │   └── logout
│       ├── (app)
│       │   └── dashboard
│       ├── (auth)
│       │   ├── (ui)
│       │   │   ├── login
│       │   │   └── register
│       │   └── callback
│       │       └── colorme
│       ├── (guest)
│       │   ├── (components)
│       │   ├── privacy
│       │   └── terms
│       └── api
│           └── colorme
│               ├── install
│               └── uninstall
└── static
    └── images
        └── auth
```

## Stack

This starter kit includes the following technologies:

- [Svelte 5](https://svelte.dev/): The latest version of Svelte, providing optimized reactivity and developer experience.
- [Superform](https://superforms.dev/) + [zod](https://zod.dev/): For form validation and schema handling, ensuring robust data handling.
- [Daisy UI](https://daisyui.com/): A UI component library based on TailwindCSS, making it easy to build consistent, responsive layouts.
- [Melt UI](https://melt-ui.com/): Additional UI components to enhance interactivity and design.
- [PocketBase](https://pocketbase.io/): An open-source backend solution with built-in authentication, file storage, and real-time updates.
- [Inlang Paraglide](https://inlang.com/m/gerre34r/library-inlang-paraglideJs): i18n alternative with awesome key listing and machine translation support.

## Backend

[Pocketbase part](https://github.com/TheKinng96/pocketbase-sveltekit-starter) is available here with a custom login function defined in the hook file.

Happy building with the Colorme Starter Kit!
