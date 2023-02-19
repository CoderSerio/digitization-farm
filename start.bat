echo "start..."

if "%1" == "dev" (
  start cmd /k "npm run start-fe --mode dev"
) else (
  start cmd /k "npm run start-fe --mode prod"
)

start cmd /k "npm run start-bff"
