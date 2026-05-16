@echo off
setlocal

cd /d "%~dp0"

echo.
echo ========================================
echo  Control Punch - Iniciar site
echo ========================================
echo.

where node >nul 2>nul
if errorlevel 1 (
  echo Node.js nao foi encontrado neste computador.
  echo Instale o Node.js e execute este arquivo novamente.
  echo.
  pause
  exit /b 1
)

where npm.cmd >nul 2>nul
if errorlevel 1 (
  echo npm.cmd nao foi encontrado neste computador.
  echo Verifique a instalacao do Node.js e tente novamente.
  echo.
  pause
  exit /b 1
)

powershell -NoProfile -ExecutionPolicy Bypass -Command "try { $response = Invoke-WebRequest -UseBasicParsing 'http://127.0.0.1:3000' -TimeoutSec 2; if ($response.StatusCode -ge 200) { exit 0 } } catch { exit 1 }"
if not errorlevel 1 (
  echo O site ja esta ligado.
  echo Abrindo http://127.0.0.1:3000
  start "" "http://127.0.0.1:3000"
  echo.
  pause
  exit /b 0
)

if not exist "node_modules" (
  echo Instalando dependencias do projeto...
  call npm.cmd install
  if errorlevel 1 (
    echo.
    echo Nao foi possivel instalar as dependencias.
    pause
    exit /b 1
  )
  echo.
)

echo Abrindo o site em http://127.0.0.1:3000
start "" "http://127.0.0.1:3000"
echo.
echo Servidor iniciado. Para desligar o site, feche esta janela ou pressione Ctrl+C.
echo.

call npm.cmd run dev -- --hostname 127.0.0.1 --port 3000

echo.
echo Servidor encerrado.
pause
