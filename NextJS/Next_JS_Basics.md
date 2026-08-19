# Next.js Basics

Simple, interview-ready questions and answers for a frontend SDE
interview.

------------------------------------------------------------------------

## 1. What is Next.js?

Next.js is a React framework for building web applications.

It provides features such as routing, server-side rendering, static
generation, API routes, and performance optimizations.

**Simple answer:**

> "Next.js is a React framework that provides additional features such
> as routing, rendering strategies, and performance optimization for web
> applications."

------------------------------------------------------------------------

## 2. What is the difference between React.js and Next.js?

React is a JavaScript library for building user interfaces.

Next.js is a framework built on top of React and provides additional
application-level features.

 | **React.js**                                 | **Next.js**                                   |
| -------------------------------------------- | --------------------------------------------- |
| UI library                                   | React framework                               |
| Routing usually requires a separate library  | Built-in file-system routing                  |
| Primarily client-side rendering by default   | Supports multiple rendering strategies        |
| More setup and configuration may be required | Provides application-level conventions and fe |


**Simple answer:**

> "React mainly provides the UI layer, while Next.js is a framework
> built with React that provides routing, rendering options, and other
> features needed for complete web applications."

------------------------------------------------------------------------

## 3. What is file-based routing in Next.js?

In Next.js, routes can be created based on the application's file and
folder structure.

For example:

``` text
app/
├── page.js
├── about/
│   └── page.js
└── contact/
    └── page.js
```

This can represent:

``` text
/
/about
/contact
```

**Simple answer:**

> "Next.js uses file-based routing, where the folder and file structure
> determines the application's routes."

------------------------------------------------------------------------

## 4. What is the difference between Server Components and Client Components?

In the modern Next.js App Router, components are Server Components by
default.

A Client Component is used when the component needs client-side features
such as state, event handlers, or browser APIs.

Client Components can be marked using:

``` jsx
'use client';
```

**Simple answer:**

> "Server Components run on the server by default, while Client
> Components are used when we need client-side interactivity such as
> state, event handlers, or browser APIs."

------------------------------------------------------------------------

## 5. What is SSR in Next.js?

SSR stands for **Server-Side Rendering**.

The page is rendered on the server and the generated HTML is sent to the
browser.

**Simple answer:**

> "SSR means rendering a page on the server for a request and sending
> the rendered result to the client."

------------------------------------------------------------------------

## 6. What is SSG in Next.js?

SSG stands for **Static Site Generation**.

The page is generated ahead of time and can be served as static content.

It is useful for pages whose content does not need to be generated for
every request.

**Simple answer:**

> "SSG generates pages ahead of time so they can be served as static
> content."

------------------------------------------------------------------------

## 7. What is ISR in Next.js?

ISR stands for **Incremental Static Regeneration**.

It allows statically generated pages to be updated after deployment
without rebuilding the entire application.

**Simple answer:**

> "ISR allows static pages to be regenerated or updated periodically
> while keeping the benefits of static generation."

------------------------------------------------------------------------

## 8. What is the App Router in Next.js?

The App Router is the routing system introduced with the `app`
directory.

It supports modern Next.js features such as:

-   Server Components
-   Nested layouts
-   Loading UI
-   Error handling
-   Streaming

Example:

``` text
app/
├── layout.js
├── page.js
└── dashboard/
    └── page.js
```

**Simple answer:**

> "The App Router is Next.js's modern routing system based on the `app`
> directory and supports features such as layouts and Server
> Components."

------------------------------------------------------------------------

## 9. What is the difference between `pages` and `app` directories?

The `pages` directory belongs to the older Pages Router.

The `app` directory is the modern App Router.

The App Router provides features such as Server Components, layouts, and
loading/error UI.

**Simple answer:**

> "The Pages Router uses the `pages` directory, while the newer App
> Router uses the `app` directory and provides newer React and Next.js
> features."

------------------------------------------------------------------------

## 10. What are dynamic routes in Next.js?

Dynamic routes allow a route to contain a variable part.

Example:

``` text
app/users/[id]/page.js
```

This can represent:

``` text
/users/1
/users/2
/users/100
```

The value can be accessed as a route parameter.

**Simple answer:**

> "Dynamic routes allow one route structure to handle different values,
> such as different user IDs."

------------------------------------------------------------------------

## 11. How do you navigate between pages in Next.js?

Next.js provides the `Link` component for navigation.

Example:

``` jsx
import Link from 'next/link';

<Link href="/about">About</Link>
```

For programmatic navigation in Client Components, you can use the router
APIs.

**Simple answer:**

> "I would use Next.js's `Link` component for normal navigation and
> router APIs for programmatic navigation."

------------------------------------------------------------------------

## 12. What is `next/image`?

`next/image` is Next.js's image component.

It provides image-related optimizations such as appropriate image sizing
and optimization.

Example:

``` jsx
import Image from 'next/image';

<Image
  src="/profile.png"
  alt="Profile"
  width={200}
  height={200}
/>
```

**Simple answer:**

> "`next/image` is Next.js's optimized image component that helps
> improve image loading and performance."

------------------------------------------------------------------------

## 13. What is `next/font`?

`next/font` is used to load and optimize fonts in a Next.js application.

It helps manage fonts while improving performance.

**Simple answer:**

> "`next/font` provides a way to load and optimize fonts in a Next.js
> application."

------------------------------------------------------------------------

## 14. How can you fetch data in Next.js?

Data can be fetched using JavaScript's `fetch` API or other HTTP
libraries.

With the App Router, data fetching can commonly happen in Server
Components.

Example:

``` jsx
async function Users() {
  const response = await fetch('https://example.com/api/users');
  const users = await response.json();

  return <div>{users.length} users</div>;
}
```

**Simple answer:**

> "Next.js applications can fetch data using `fetch` or other HTTP
> libraries, and with the App Router, data fetching can be performed
> directly in Server Components."

------------------------------------------------------------------------

## 15. What is middleware in Next.js?

Middleware allows code to run before a request is completed.

It can be used for tasks such as:

-   Authentication checks
-   Redirects
-   Request handling
-   Access control

**Simple answer:**

> "Middleware allows us to run logic before a request is completed, for
> example to check authentication or redirect a user."

------------------------------------------------------------------------

## 16. How do you handle environment variables in Next.js?

Environment variables can be stored in `.env` files.

For example:

``` env
DATABASE_URL=your_database_url
```

Variables that need to be exposed to the browser generally use the
`NEXT_PUBLIC_` prefix.

``` env
NEXT_PUBLIC_API_URL=https://example.com
```

Sensitive values should not be exposed to the client.

**Simple answer:**

> "I would use environment variables for configuration and keep
> sensitive server-side values private. Variables intended for the
> browser use the `NEXT_PUBLIC_` prefix."

------------------------------------------------------------------------

## 17. What is hydration in Next.js?

Hydration is the process where React attaches event handlers and
client-side behavior to HTML that was already rendered.

This makes the server-rendered page interactive in the browser.

**Simple answer:**

> "Hydration makes server-rendered HTML interactive by attaching React's
> client-side behavior to it."

------------------------------------------------------------------------

## 18. Why would you use Next.js instead of React alone?

Next.js provides several features around React, including:

-   Routing
-   Multiple rendering strategies
-   Server Components
-   Data-fetching patterns
-   Image optimization
-   Font optimization
-   Middleware
-   Application structure

**Simple answer:**

> "I would use Next.js when I need a more complete React framework with
> routing, rendering options, performance features, and server-side
> capabilities."

------------------------------------------------------------------------

# Quick Revision

  Topic                   Key Point
  ----------------------- ----------------------------------------
  Next.js                 React framework
  React vs Next.js        UI library vs complete framework
  File-based routing      File/folder structure defines routes
  Server Component        Runs on server by default
  Client Component        Used for client-side interactivity
  SSR                     Render on server for a request
  SSG                     Generate pages ahead of time
  ISR                     Update static pages after deployment
  App Router              Modern `app` directory routing
  Pages Router            Older `pages` directory routing
  Dynamic route           Route with variable segment
  `Link`                  Navigation between routes
  `next/image`            Image optimization
  `next/font`             Font optimization
  Data fetching           `fetch` or other HTTP libraries
  Middleware              Logic before request completion
  Environment variables   External configuration
  Hydration               Makes server-rendered HTML interactive

------------------------------------------------------------------------

# Important for Your Interview

Your resume says you have **basic Next.js knowledge**, so do not claim
extensive production experience if you have not used it extensively.

A safe answer is:

> "I have basic hands-on exposure to Next.js. My stronger frontend
> experience is with React.js. I understand the core Next.js concepts
> such as file-based routing, rendering strategies, and the App Router,
> but I would not claim deep production-level expertise."

If asked something you do not know:

> "I haven't worked with that feature directly, so I don't want to give
> you an inaccurate answer. I understand the related concept, but I
> would need more hands-on experience with that specific feature."

------------------------------------------------------------------------

# Must-Know Questions Before the Interview

If you have limited time, prioritize these:

1.  What is Next.js?
2.  React.js vs Next.js?
3.  What is file-based routing?
4.  Server Components vs Client Components?
5.  SSR vs SSG vs ISR?
6.  What is the App Router?
7.  What are dynamic routes?
8.  How does navigation work?
9.  How do you fetch data?
10. What is middleware?
