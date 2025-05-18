# Branch Management and Deployment Workflow

## Current Status

✅ All changes are committed and pushed to the main branch.
✅ The site is successfully deployed on Vercel.
✅ Animations with prefers-reduced-motion support are implemented.

## Standard Git Workflow for Future Development

For future feature development, follow this workflow:

1. **Create a feature branch**
   ```bash
   git checkout -b feature/new-feature
   ```

2. **Make changes and commit**
   ```bash
   git add .
   git commit -m "Add new feature"
   ```

3. **Push to feature branch**
   ```bash
   git push origin feature/new-feature
   ```

4. **Create a Pull Request on GitHub**
   - Go to https://github.com/jaskiel123/modern-site
   - Click "Compare & pull request"
   - Add description and reviewers
   - Create the pull request

5. **Review and QA on the staging deployment**
   - Vercel automatically creates a preview deployment for each PR
   - Test features and functionality
   - Verify performance and accessibility

6. **Merge to main after approval**
   ```bash
   git checkout main
   git pull origin main
   git merge feature/new-feature
   git push origin main
   ```

7. **Verify production deployment**
   - Vercel automatically deploys changes to main
   - Confirm changes on the production site

## Hotfix Workflow

For urgent fixes to production:

1. **Create a hotfix branch from main**
   ```bash
   git checkout main
   git pull origin main
   git checkout -b hotfix/issue-description
   ```

2. **Fix the issue and commit**
   ```bash
   git add .
   git commit -m "Fix critical issue"
   ```

3. **Push and create a PR for the hotfix**
   ```bash
   git push origin hotfix/issue-description
   ```

4. **After approval, merge directly to main**
   ```bash
   git checkout main
   git pull origin main
   git merge hotfix/issue-description
   git push origin main
   ```

## Deployment Environments

- **Preview**: Automatically created for each PR
- **Staging**: Deployment from the staging branch
- **Production**: Deployment from the main branch

## Build and Deployment Configuration

- Build Command: `npm run build`
- Output Directory: `dist`
- Node.js Version: 16.x
- Framework Preset: Astro
