# health-bridge-hub
# Health Bridge Hub

Health Bridge Hub is a healthcare directory and registration platform covering all India states and union territories. It now runs with a PowerShell backend API that:

- serves the website locally
- stores donor, hospital, pharmacy, medicine, diagnostic, and partner-request records in backend JSON files
- queues or sends email notifications for new registrations and partner requests

## Local run

Run the backend server:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File .\server.ps1 -Port 8080
```

Open:

```text
http://localhost:8080/
```

## Backend storage

Persistent backend data is stored in:

```text
backend-data\
```

Files are created automatically for:

- donors
- blood banks
- hospitals
- medicine inventory
- diagnostics
- pharmacies
- contacts and partner requests
- queued email notifications

## Gmail email setup

By default, new requests are saved to the backend and queued for email delivery. To send directly to `healthbridgehub0@gmail.com`, set these environment variables before starting the server:

```powershell
$env:HHB_GMAIL_USER="healthbridgehub0@gmail.com"
$env:HHB_GMAIL_APP_PASSWORD="YOUR_GMAIL_APP_PASSWORD"
powershell -NoProfile -ExecutionPolicy Bypass -File .\server.ps1 -Port 8080
```

Notes:

- use a Gmail App Password, not your normal Gmail password
- recipient mail is fixed to `healthbridgehub0@gmail.com`
- if SMTP is not configured or sending fails, notifications are stored in `backend-data\mail-queue.json`

## GitHub publish target

This environment does not currently have `git` installed, so the project cannot be pushed from here yet. When `git` is available, use a repository such as:

```text
https://github.com/Santosh-962/health-bridge-hub.git
```

Suggested commands after installing `git`:

```powershell
git init
git branch -M main
git remote add origin https://github.com/Santosh-962/health-bridge-hub.git
git add .
git commit -m "Build Health Bridge Hub"
git push -u origin main
```
