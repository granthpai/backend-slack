# Slack Clone

A modern Slack-like messaging application built with Node.js and Express.

## Features

- Real-time messaging using Socket.IO
- User authentication and authorization
- Message persistence using MongoDB
- File upload and sharing capabilities
- AWS integration for file storage
- Email notifications
- Background job processing with Bull

## Prerequisites

- Node.js (v16 or higher)
- MongoDB
- Redis
- AWS Account (for file storage)

## Installation

1. Clone the repository:
```bash
git clone [repository-url]
```

2. Install dependencies:
```bash
npm install
```

3. Copy `.env.example` to `.env` and configure:
```bash
cp .env.example .env
```

4. Start the development server:
```bash
npm run dev
```

## Project Structure

```
src/
├── middlewares/    # Custom middleware functions
├── models/        # MongoDB models
├── routes/        # API routes
├── services/      # Business logic
├── utils/         # Utility functions
└── index.js       # Entry point
```

## Technologies Used

- Backend: Node.js, Express
- Database: MongoDB
- Real-time: Socket.IO
- Authentication: JWT
- Queue: Bull
- File Storage: AWS S3
- Redis: Caching and Bull queue

