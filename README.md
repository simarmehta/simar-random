# Anniversary Surprise Website

A fun interactive website with a bouncing, evasive "hi" text that redirects to a beautiful photo grid with your favorite memories after 20 seconds.

## Features

### Main Page
- Interactive bouncing "hi" text that evades mouse clicks
- Beautiful cursive "Pacifico" font
- Smooth animations and purple gradient background
- Automatic redirect after 20 seconds
- Attempt counter to track how many times you tried to click
- Encouraging messages as you try to catch it

### Final Page
- **Interactive Flip Cards**: All 9 photos displayed as flip cards - click/tap any card to flip and reveal a sweet message
- **3D Flip Animation**: Smooth 3D card flip effect (rotates 180° on Y-axis) with 0.6s transition
- **Staggered Pop-Up Animation**: Cards appear one by one with a smooth, cascading animation effect (0.1s delay between each)
- **Unique Messages Per Card**: Each card has a different romantic message on the back:
  - "happy 4 years / dumb bich"
  - "remember when we first met? 🥰"
  - "i miss you man"
  - "best decision i ever made was you"
  - "i love you so much"
  - "you're stuck with me now"
  - And 3 more sweet messages!
- **Front Side**: Photo with white border and padding (original aspect ratio preserved)
- **Back Side**: Purple gradient background with white text in Pacifico font
- **Responsive Grid**: Automatically adjusts from 1 column on mobile to multiple columns on larger screens (max 1200px width)
- **Scrollable Design**: Page scrolls vertically to view all cards comfortably
- **Clean Layout**: No fixed header/footer text - just photos that flip to reveal messages
- **Custom Fonts**: Elegant Pacifico cursive font on card backs
- **Hidden Easter Eggs**:
  - Look for the sparkle ✨ emoji in the bottom right corner with hint text "surprise, tap 3 times"
  - Tap/click the sparkle 3 times to reveal random secret romantic messages
  - Enter the Konami Code (↑ ↑ ↓ ↓ ← → ← →) on desktop to trigger confetti and unlock a special message
- Pink gradient background with floating animations
- **Fully Responsive**: Optimized for all screen sizes from mobile to desktop

### Mobile Features
- Touch-friendly flip card interactions - tap any card to flip
- Responsive photo grid that stacks vertically on mobile
- Responsive text sizing on card backs that adapts to screen size
- Smooth scrolling through all flip cards
- Touch-optimized tap targets for easy card flipping
- Prevents accidental text selection and zoom

## Running Locally

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deploying to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI globally:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to deploy your project

### Option 2: Deploy via Vercel Dashboard

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)

2. Go to [vercel.com](https://vercel.com) and sign in

3. Click "Add New Project"

4. Import your Git repository

5. Vercel will automatically detect Next.js and configure the build settings

6. Click "Deploy"

Your site will be live in a few minutes!

## Tech Stack

- Next.js 15
- React 18
- TypeScript
- CSS-in-JS for styling

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with Google Fonts
│   ├── page.tsx           # Home page with bouncing text
│   ├── final/
│   │   └── page.tsx       # Final message page with photo grid
│   └── globals.css        # Global styles
├── public/
│   └── photos/            # Photo assets (9 JPG images only)
├── package.json
├── tsconfig.json
└── next.config.js
```

## Easter Eggs Guide

1. **Secret Messages**: Triple-click/tap the pulsing sparkle ✨ emoji at the bottom of the final page to reveal random romantic messages
2. **Konami Code**: On desktop, enter the classic Konami Code using arrow keys (↑ ↑ ↓ ↓ ← → ← →) on the final page to trigger a confetti celebration and unlock a nerdy message

## Testing on Mobile

To test the mobile experience:
1. Open **http://localhost:3000** in your browser
2. Open Developer Tools (F12 or Cmd+Option+I)
3. Click the device toolbar icon to enable responsive design mode
4. Select a mobile device (iPhone, Pixel, etc.) or set custom dimensions
5. Scroll through the photo grid and test the pop-up animations and hover effects
