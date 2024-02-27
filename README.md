# React + TypeScript + Vite

Step to start the Application.

Prerequisites: `require Docker`

```bash
cd frontend-responsive-app
docker build -t frontend-responsive-app:1.0 .
docker run --rm -d -p 3000:3000 frontend-responsive-app:1.0
```

you can now access app from web browser at http://localhost:3000/

to install as React production build use this step instead.

```bash
cd frontend-responsive-app
docker build -t frontend-responsive-app:prod -f Dockerfile.prod .
docker run --rm -d -p 3000:3000 frontend-responsive-app:prod
```
