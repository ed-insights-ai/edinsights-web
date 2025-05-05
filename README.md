# ED-Insights AI Web Site

## Development Setup

1. Clone the repository
   ```sh
   git clone <repository-url>
   cd edinsights-web
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

## Updating Dependencies

To keep the project dependencies up to date:

1. Update the browserslist database:
   ```sh
   npx update-browserslist-db@latest
   ```

2. Update minor and patch versions (safer updates):
   ```sh
   npm update
   ```

3. For major version updates (may include breaking changes):
   ```sh
   npx npm-check-updates -u
   npm install
   ```

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