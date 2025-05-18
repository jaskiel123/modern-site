@echo off
echo Creating Git repository...
mkdir .git
mkdir .git\objects
mkdir .git\objects\info
mkdir .git\objects\pack
mkdir .git\refs
mkdir .git\refs\heads
mkdir .git\refs\tags
mkdir .git\hooks
mkdir .git\info

echo ref: refs/heads/master > .git\HEAD

echo [core] > .git\config
echo    repositoryformatversion = 0 >> .git\config
echo    filemode = false >> .git\config
echo    bare = false >> .git\config
echo    logallrefupdates = true >> .git\config

echo # Landing-AutoAI > README.md
echo This is a legacy snapshot of the AutoAI landing page. >> README.md

type NUL > .git\objects\info\packs
echo # Landing-AutoAI Git Repository > .git\description

echo Created Git repository structure
echo.
echo NOTE: This is a minimal Git repository structure.
echo To make proper commits, you'll need to install Git software.
echo.