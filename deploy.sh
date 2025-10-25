#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}╔══════════════════════════════════════╗${NC}"
echo -e "${BLUE}║   Docusaurus Docker Deployment      ║${NC}"
echo -e "${BLUE}╚══════════════════════════════════════╝${NC}\n"

# Check Docker
echo -e "${YELLOW}[1/5] Checking Docker...${NC}"
if ! command -v docker &> /dev/null; then
    echo -e "${RED}Docker is not installed. Installing...${NC}"
    curl -fsSL https://get.docker.com -o get-docker.sh
    sudo sh get-docker.sh
    sudo usermod -aG docker $USER
    echo -e "${GREEN}Docker installed. Please log out and log back in.${NC}"
    exit 1
else
    echo -e "${GREEN}✓ Docker installed ($(docker --version))${NC}"
fi

# Check Docker Compose
if ! docker compose version &> /dev/null; then
    echo -e "${RED}Docker Compose is not installed.${NC}"
    exit 1
fi
echo -e "${GREEN}✓ Docker Compose installed ($(docker compose version))${NC}\n"

# Stop old containers
echo -e "${YELLOW}[2/5] Stopping old containers...${NC}"
docker compose down 2>/dev/null
echo -e "${GREEN}✓ Old containers stopped${NC}\n"

# Build images
echo -e "${YELLOW}[3/5] Building Docker images...${NC}"
docker compose build --no-cache
echo -e "${GREEN}✓ Images built${NC}\n"

# Start containers
echo -e "${YELLOW}[4/5] Starting containers...${NC}"
docker compose up -d
echo -e "${GREEN}✓ Containers started${NC}\n"

# Check status
echo -e "${YELLOW}[5/5] Checking status...${NC}"
sleep 3
docker compose ps

echo -e "\n${GREEN}══════════════════════════════════════${NC}"
echo -e "${GREEN}✅ Deployment completed!${NC}"
echo -e "${GREEN}══════════════════════════════════════${NC}\n"

echo -e "${BLUE}Your site is available at:${NC}"
echo -e "${GREEN}→ http://147.93.144.61${NC}\n"

echo -e "${YELLOW}Useful commands:${NC}"
echo -e "  ${BLUE}docker compose logs -f${NC}        - view logs"
echo -e "  ${BLUE}docker compose ps${NC}              - container status"
echo -e "  ${BLUE}docker compose restart${NC}         - restart"
echo -e "  ${BLUE}docker compose down${NC}            - stop\n"
