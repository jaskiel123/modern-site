@echo off
echo ===== Super Easy Vercel Deploy =====
echo.
echo This script will help deploy your site to Vercel
echo.

echo Step 1: Building your project...
cd %~dp0
call npm run build

if %ERRORLEVEL% neq 0 (
  echo Build failed! Fix the errors and try again.
  pause
  exit /b %ERRORLEVEL%
)

echo.
echo Build successful!
echo.

echo Step 2: Opening Vercel deployment...
echo.
echo A browser window will open. Please:
echo 1. Log in to your Vercel account
echo 2. Follow the prompts to deploy
echo.
echo Press any key to start...
pause > nul

start https://vercel.com/new

echo.
echo Browser opened! Now follow these steps:
echo 1. Select "Import Project"
echo 2. Enter this local folder path: %cd%\dist
echo 3. Click "Deploy"
echo.
echo Your project will be deployed to Vercel!
echo.
pause
