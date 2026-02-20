# Project Folder Structure

project-root/
│
├── docs/
│   ├── architecture.md
│   ├── workflow.md
│   ├── roadmap.md
│   └── folder-structure.md
│
├── src/
│   ├── middleware/
│   │   ├── trace.middlewarejs
│   │
│   ├── routes/
│   │   ├── gateway.routes.js
│   │
│   ├── models/
│   │   ├── trace.model.js
|   |   ├── user.model.js
│   │
│   ├── config/
│   │   ├── db.js
│   │
│   └── app.js
│
├── backend-service/
│   ├── server.js
│
├── package.json
└── README.md

## Description
- docs → Project documentation
- src → Main application code
- middleware → Request processing logic
- services → Backend communication
- scripts → Deployment scripts
