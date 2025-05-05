# ED-Insights AI Web Site

## Development Setup

1. Clone the repository
   ```sh
   git clone <repository-url>
   cd data-driven-arena-insights
   ```

2. Install dependencies
   ```sh
   npm install
   ```

3. Start the development server
   ```sh
   npm run dev
   ```
   This will start the development server at http://localhost:8080

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview the production build locally
- `npm run deploy` - Deploy to GitHub Pages

## Technologies

This project is built with:

- Vite
- React
- TypeScript
- shadcn/ui
- Tailwind CSS

## Deployment

This project is configured to deploy to GitHub Pages. To deploy:

1. Ensure your repository settings are configured for GitHub Pages deployment from the `gh-pages` branch.
2. Run the deploy command:
   ```sh
   npm run deploy
   ```

Alternatively, pushing to the main branch will trigger automatic deployment via GitHub Actions.