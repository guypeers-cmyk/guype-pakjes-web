@echo off
REM Quick local server: uses Python 3 if available
python -V >nul 2>&1
if %ERRORLEVEL%==0 (
  echo Starting Python HTTP server on port 8000...
  python -m http.server 8000
) else (
  echo Python not found. If you have Node.js installed, run:
  echo   npx http-server -p 8000
  pause
)
