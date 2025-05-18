@echo off
echo ===== AutoAI Landing Page Deployment Script =====

echo.
echo 1. Building project for production...
call npm run build
if %ERRORLEVEL% neq 0 (
  echo Build failed! Aborting deployment.
  exit /b %ERRORLEVEL%
)
echo Build completed successfully!

echo.
echo 2. Adding all files to git...
git add .
if %ERRORLEVEL% neq 0 (
  echo Git add failed! Aborting deployment.
  exit /b %ERRORLEVEL%
)

echo.
echo 3. Committing changes...
set /p COMMIT_MSG="Enter commit message: "
git commit -m "%COMMIT_MSG%"
if %ERRORLEVEL% neq 0 (
  echo Git commit failed! Aborting deployment.
  exit /b %ERRORLEVEL%
)

echo.
echo 4. Pushing to GitHub...
git push origin main
if %ERRORLEVEL% neq 0 (
  echo Git push failed! Deployment not complete.
  exit /b %ERRORLEVEL%
)

echo.
echo 5. Deployment complete!
echo The changes will be automatically deployed to Vercel at:
echo https://modern-saas-2025.vercel.app/
echo.

echo ===== Deployment process finished =====
