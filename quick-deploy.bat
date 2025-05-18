@echo off
echo ===== Quick Vercel Deploy =====
echo.
echo This script will help you deploy to Vercel
echo.

echo 1. Building the project...
call npm run build
if %ERRORLEVEL% neq 0 (
  echo Build failed! Please fix errors before deployment.
  pause
  exit /b %ERRORLEVEL%
)

echo.
echo Build completed successfully!
echo.
echo 2. Now launching Vercel login in your browser...
echo.
echo You'll need to:
echo - Sign in to Vercel in the browser window that opens
echo - Authorize the connection
echo - Follow the prompts to deploy your project
echo.
pause
echo.

npx vercel

echo.
echo ===== Deployment complete! =====
echo.
echo If everything went well, your site should now be deployed.
echo.
echo Check your Vercel dashboard for the deployment URL.
pause
