# Kicks Shop

A modern e-commerce application for browsing and purchasing sneakers. Built with Next.js 15 and featuring server-side rendering, state management with Redux, and a clean, responsive design.

## Overview

Kicks Shop is a full-featured sneaker store that allows users to browse products, view detailed product information, and manage their shopping cart. The application integrates with an external API to fetch real product data and provides a smooth shopping experience with optimized performance.

## Tech Stack

- **Next.js 15** - React framework with App Router and Server Components
- **React 19** - UI library
- **Redux Toolkit** - State management for cart functionality
- **Tailwind CSS 4** - Utility-first styling
- **Axios** - HTTP client for API requests
- **Lucide React** - Icon library
- **Turbopack** - Fast bundler for development

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_API_URL=https://api.escuelajs.co/api/v1
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

```bash
npm run build
npm start
```

## Live URL

https://kicks-frontend-nine.vercel.app/

## Notes

- The application uses the Platzi Fake Store API for product data
- Cart state is managed client-side with Redux and persists during the session
- Product images fallback to default placeholders if the API doesn't provide enough images
- Error boundaries and 404 pages are implemented for better user experience
