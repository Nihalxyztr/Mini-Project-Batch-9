# System Architecture

## Overview
The API Gateway acts as a central entry point for all client requests. It manages:
- Request tracing
- Rate limiting
- Routing to backend services
- Logging and debugging

## Components

### 1. API Gateway (Node.js + Express)
- Handles incoming requests
- Generates a unique Request ID
- Applies rate limiting
- Routes request to backend services

### 2. Request Tracing System
- Middleware assigns unique trace IDs
- Tracks request lifecycle
- Stores logs in MongoDB

### 3. MongoDB
- Stores request traces
- Stores error logs
- Helps debugging production issues

### 4. Async Context Tracking
- Maintains request context across async operations
- Ensures trace ID consistency

### 5. Backend Services
- Communicate through Unix sockets
- Process requests forwarded by gateway

### 6. Version Control (Git)
- Tracks API schema versions
- Maintains API contract history

## Architecture Flow
Client → API Gateway → Middleware → Rate Limiter → Tracing → Backend Services → Response
