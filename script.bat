@echo off
cd /d %~dp0
start /b cmd /c "npm start"
timeout /t 3 /nobreak
start chrome "http://localhost:5173"
pause