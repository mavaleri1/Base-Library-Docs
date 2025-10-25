# Getting Started

Welcome to the Base Library Backend Documentation. This comprehensive guide will help you understand, deploy, and integrate with our AI-powered educational content generation platform.

## What is Base Library Backend?

Base Library Backend is a sophisticated educational technology platform that leverages artificial intelligence to generate high-quality learning materials. The system combines multiple AI services to create a comprehensive content generation workflow with Web3 authentication and blockchain integration.

### Key Features

- **AI-Powered Content Generation**: Utilizes advanced language models to create educational materials
- **Web3 Authentication**: Secure blockchain-based user authentication
- **Multi-Service Architecture**: Modular design with specialized services
- **Human-in-the-Loop (HITL)**: Interactive content refinement process
- **Material Management**: Comprehensive system for storing and organizing educational content
- **Export Capabilities**: PDF and Markdown export functionality

## Architecture Overview

The platform consists of three main services:

1. **core Core Service** - Main orchestration service with LangGraph workflow
2. **article Service** - Material storage and export functionality
3. **Prompt Config Service** - Dynamic prompt generation and personalization

## Quick Start

### Prerequisites

- Docker and Docker Compose
- API keys for AI providers (OpenAI, DeepSeek, or compatible services)
- PostgreSQL database (included in Docker setup)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/base-library/backend.git
   cd backend
   ```

2. **Configure environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your API keys and configuration
   ```

3. **Start the services**
   ```bash
   docker compose up -d
   ```

4. **Verify installation**
   ```bash
   curl http://localhost:8000/health  # core API
   curl http://localhost:8001/health  # article Service
   curl http://localhost:8002/health  # Prompt Config Service
   ```

## Service Endpoints

Once running, the following services will be available:

- **core API**: http://localhost:8000
- **article Service**: http://localhost:8001
- **Prompt Config Service**: http://localhost:8002
- **API Documentation**: http://localhost:8000/docs (Swagger UI)

## Next Steps

- [Architecture Overview](./architecture/overview.md) - Understand the system design
- [API Reference](./api-reference/core.md) - Learn about available endpoints
- [Deployment Guide](./deployment/docker.md) - Production deployment instructions
- [Materials API Guide](./guides/materials-api.md) - Working with educational materials

## Support

For questions and support:
- GitHub Issues: [Create an issue](https://github.com/base-library/backend/issues)
- Documentation: Browse the comprehensive guides below
- API Documentation: Use the interactive Swagger UI at `/docs`

---

**Ready to get started?** Continue to the [Architecture Overview](./architecture/overview.md) to understand how the system works.
