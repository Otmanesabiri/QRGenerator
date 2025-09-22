# QRGenerator API (Node.js)

This is a minimal Express backend for your QRGenerator app. It can be deployed on Azure App Service or Azure Functions.

## Installation

```bash
cd api
npm install
```

## Usage (local)

```bash
npm start
```

- The API will run on http://localhost:3001
- Test with: http://localhost:3001/api/ping

## Next Steps
- Add routes to handle your data (save QR codes, user info, etc).
- Connect to an Azure database (SQL, Cosmos DB, etc).
- Deploy to Azure and update your frontend to call these endpoints.
