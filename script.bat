@echo off
cd /d %~dp0
start /b cmd /c "npm start"
timeout /t 5 /nobreak
start chrome "http://localhost:5173"
pause