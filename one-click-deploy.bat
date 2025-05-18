@echo off
echo ===== AutoAI Landing Page - One-Click Deploy =====
echo.
echo This script will deploy your site to Vercel with one click
echo A browser window will open for you to authenticate
echo.
echo Press any key to start deployment...
pause > nul

cd %~dp0
call npm run build

if %ERRORLEVEL% neq 0 (
  echo Build failed! Please check for errors.
  pause
  exit /b %ERRORLEVEL%
)

echo.
echo Build successful!
echo.
echo Launching Vercel deployment...
echo.
echo IMPORTANT: A browser window will open. Please:
echo 1. Log in to Vercel (if needed)
echo 2. Authorize the deployment
echo 3. Follow any additional prompts
echo.
echo Press any key to continue...
pause > nul

npx vercel

echo.
echo If everything went well, your site is now deployed!
echo Check the Vercel dashboard for the deployment URL.
echo.
echo Press any key to exit...
pause > nul
