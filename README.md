# health-bridge-hub
# Health Bridge Hub

Health Bridge Hub is a healthcare directory and registration platform covering all India states and union territories. The frontend already calls `/api/*` endpoints, and this repo now includes Vercel Functions for:

- health and bootstrap checks
- seed import for the India-wide directories
- donor, hospital, pharmacy, and partner-request registrations
- persistent backend storage with Vercel Blob
- queued or direct email notification handling for new registrations

## Backend on Vercel

To make the deployed website store registrations in the backend, connect a **private Vercel Blob store** to the project so Vercel provides:

```text
BLOB_READ_WRITE_TOKEN
```

Without that token, the frontend will fall back to browser-session mode.

The backend stores these collections:

```text
donors
bloodBanks
hospitals
medicineInventory
diagnostics
pharmacies
contacts
mailQueue
```

Each collection is saved as JSON in private Vercel Blob storage.

## Optional email sending

By default, new requests are stored and also added to the backend mail queue. To send email notifications automatically to `healthbridgehub0@gmail.com`, add:

```text
RESEND_API_KEY=your_resend_api_key
MAIL_FROM=onboarding@resend.dev
```

Notes:

- recipient mail is fixed to `healthbridgehub0@gmail.com`
- if `RESEND_API_KEY` is missing or sending fails, notifications stay queued in `mailQueue`
- you can replace `MAIL_FROM` with your verified sending domain later

## Deploy notes

The project uses:

```text
index.html / styles.css / script.js for the frontend
api/*.js for the Vercel backend
vercel.json for function runtime settings
```

After the Blob token is available in Vercel, the live site should be able to seed data and persist new registrations through `/api`.
