This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build

Use this command for build:

```bash
npm run build
```

## Overview

This web-based application allows users to filter vehicles based on make and year and view detailed results. Built using Next.js, TypeScript, and Tailwind CSS, this application provides a modern and responsive user experience.

Features
Filter Vehicles:

Select vehicle makes and years from dynamically populated dropdown menus.
Filters are fetched from an external API.
Fetch and Display Results:

Navigate to a results page to view vehicles that match selected filters.
Error Handling:

User-friendly notifications are shown if there's an error during data fetching.
Responsive Design:

Built with Tailwind CSS for a responsive and modern design across different devices.
Client-Side Interactivity:

Components use client-side rendering for enhanced interactivity and performance.
Architecture
Project Structure
/app: Contains the core application logic and components.

/components: Reusable UI components such as Filter, NextButton, and FilterSection.
/services: API data fetching functions like getFilters.
/types: TypeScript type definitions, including Vehicle and Item.
/page.tsx: Entry point of the application, housing the Home component.
/pages: (If using the pages directory)

/result: Contains logic for displaying result pages.
Key Components
Home Component:

Renders the main page with filter options and a button for navigating to the results page.
Utilizes Suspense to manage loading states for dynamically fetched filters.
FilterSection Component:

Manages filter state and renders the Filter and NextButton components.
Filter Component:

Provides dropdown menus for selecting filter options.
Passes selected values to parent components.
NextButton Component:

Handles navigation to the results page based on selected filters.
ResultPage Component:

Displays vehicle results based on the selected make and year.
Fetches vehicle data from an external API and handles errors.
Data Fetching
API Integration:

Uses fetch requests to interact with external APIs for vehicle data.
getFilters Function:

Fetches filter options and handles errors.
ResultPage Component:
Retrieves vehicle models and generates static paths with generateStaticParams for performance.

Error Handling
Handles errors both in data fetching functions and results fetching logic.

Styling
Tailwind CSS:
Provides utility-first CSS for a responsive and modern design.
Ensures consistency in component styling.

Static Site Generation (SSG)
generateStaticParams:
Pre-renders result pages at build time based on filter options.
Enhances performance by generating and caching paths.

Client-Side Rendering (CSR)
Client-Side Components:
Uses client-side rendering for components like FilterSection and NextButton to manage state and interactivity.
