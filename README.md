# ColorGenius Website

Professional website for ColorGenius AI color analysis app.

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
app/
├── layout.tsx       # Root layout with metadata
├── page.tsx         # Home page
└── globals.css      # Global styles
```

## Integration with Backend

Currently using mock data. To integrate with the OpenServ backend:

1. Update `app/page.tsx` to fetch from the backend API
2. Create an `api/` folder for API utility functions
3. Replace mock color palettes with real API calls

Example when backend is ready:

```typescript
const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/palettes`)
const palettes = await response.json()
```

## Building & Deployment

```bash
# Build for production
npm run build

# Start production server
npm start
```

Deploy to Vercel:

```bash
npm i -g vercel
vercel
```

## Environment Variables

Create a `.env.local` file:

```
NEXT_PUBLIC_API_URL=http://localhost:3001
```

## License

Copyright © 2026 ColorGenius. All rights reserved.
