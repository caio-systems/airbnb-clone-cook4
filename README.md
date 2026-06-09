# Airbnb Clone

A modern, responsive Airbnb clone built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## Features

- 🏠 Beautiful property listing grid with mock data
- 🎨 Polished landing page with hero section and search functionality
- 📱 Fully responsive design
- ⚡ Built with Next.js 14 App Router for optimal performance
- 🎯 TypeScript for type safety
- 💅 Styled with Tailwind CSS
- 🖼️ Optimized images with Next.js Image component
- ⭐ Property cards with ratings, prices, and superhost badges

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Image Optimization:** Next.js Image

## Getting Started

### Prerequisites

- Node.js 18+ installed on your machine
- npm, yarn, or pnpm package manager

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
├── app/
│   ├── layout.tsx         # Root layout with header
│   ├── page.tsx           # Home page with hero and property grid
│   └── globals.css        # Global styles and Tailwind imports
├── components/
│   ├── Header.tsx         # Navigation header component
│   └── PropertyCard.tsx   # Property card component
├── lib/
│   └── mockData.ts        # Mock property data
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
└── next.config.js
```

## Features Breakdown

### Header Component
- Sticky navigation bar
- Search functionality placeholder
- User menu and globe icon
- "Airbnb your home" call-to-action

### Hero Section
- Eye-catching gradient background
- Search bar with location, check-in/out dates
- Compelling headline and subheadline

### Property Grid
- Responsive grid layout (1-4 columns based on screen size)
- 12 mock properties with realistic data
- Property cards with ratings and prices
- Superhost badges
- Heart icon for favorites (UI only)

### Footer
- Multi-column layout with links
- About, Community, Host, and Support sections
- Copyright and legal links

## Customization

### Adding More Properties

Edit `lib/mockData.ts` to add more properties to the grid:

```typescript
{
  id: 13,
  title: 'Your Property Title',
  type: 'Entire house · 3 beds',
  location: 'City, State',
  price: 350,
  rating: 4.92,
  image: 'https://images.unsplash.com/photo-...',
  isSuperhost: true,
}
```

### Styling

The project uses Tailwind CSS. Customize the theme in `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      airbnb: {
        pink: '#FF385C',
        'pink-dark': '#E31C5F',
      },
    },
  },
}
```

## Build for Production

```bash
npm run build
npm start
```

## Next Steps

This is a starter scaffold. Here are some ideas to extend it:

- Add property detail pages with dynamic routes
- Implement real search functionality with filters
- Add user authentication
- Create booking functionality
- Add a host dashboard
- Implement favorites/wishlist feature
- Connect to a backend API or database
- Add payment integration
- Implement reviews and ratings system

## License

MIT

## Acknowledgments

- Inspired by Airbnb's iconic design
- Images from Unsplash