# Architecture Diagrams

This page demonstrates how to use Mermaid diagrams in Base Library documentation.

## Application Structure

```mermaid
graph TD
    A[App] --> B[Layout]
    B --> C[Navigation]
    B --> D[Main Content]
    D --> E[Page Components]
    E --> F[Feature Components]
    F --> G[UI Components]
    G --> H[Base Components]
```

## Backend Architecture

```mermaid
graph TB
    subgraph "Frontend Layer"
        A[React App]
        B[Web3 Wallet]
        C[UI Components]
    end
    
    subgraph "API Gateway"
        D[Express Server]
        E[Authentication]
        F[Rate Limiting]
    end
    
    subgraph "Microservices"
        G[Core Service]
        H[Article Service]
        I[Prompt Studio]
        J[AI Service]
    end
    
    subgraph "Data Layer"
        K[PostgreSQL]
        L[Redis Cache]
        M[File Storage]
    end
    
    subgraph "External Services"
        N[Blockchain Network]
        O[AI Models]
        P[IPFS Storage]
    end
    
    A --> D
    B --> D
    C --> D
    D --> E
    D --> F
    D --> G
    D --> H
    D --> I
    G --> K
    H --> K
    I --> K
    J --> K
    G --> L
    H --> L
    I --> L
    J --> M
    G --> N
    J --> O
    J --> P
```

## User Authentication Flow

```mermaid
sequenceDiagram
    participant U as User
    participant W as Web3 Wallet
    participant F as Frontend
    participant B as Backend
    participant BC as Blockchain
    
    U->>W: Connect Wallet
    W->>BC: Sign Message
    BC-->>W: Signature
    W->>F: Wallet Address + Signature
    F->>B: Verify Signature
    B->>BC: Validate Address
    BC-->>B: Confirmation
    B-->>F: JWT Token
    F-->>U: Authenticated
```

## Content Generation Workflow

```mermaid
flowchart LR
    A[User Input] --> B[Content Request]
    B --> C[AI Processing]
    C --> D[Content Generation]
    D --> E[Quality Check]
    E --> F{Valid?}
    F -->|Yes| G[Save Content]
    F -->|No| H[Regenerate]
    H --> C
    G --> I[Return to User]
    I --> J[User Review]
    J --> K{Approve?}
    K -->|Yes| L[Publish]
    K -->|No| M[Edit Request]
    M --> B
```

## Database Schema

```mermaid
erDiagram
    USERS {
        uuid id PK
        string wallet_address
        string username
        timestamp created_at
    }
    
    ARTICLES {
        uuid id PK
        uuid author_id FK
        string title
        text content
        string status
        timestamp created_at
    }
    
    PROMPTS {
        uuid id PK
        string name
        text template
        json parameters
        timestamp created_at
    }
    
    NFT_MATERIALS {
        uuid id PK
        uuid article_id FK
        string token_id
        string contract_address
        string metadata_uri
    }
    
    USERS ||--o{ ARTICLES : creates
    ARTICLES ||--o{ NFT_MATERIALS : generates
    PROMPTS ||--o{ ARTICLES : uses
```

## Deployment Architecture

```mermaid
graph TB
    subgraph "Production Environment"
        subgraph "Load Balancer"
            LB[Nginx]
        end
        
        subgraph "Application Servers"
            APP1[App Server 1]
            APP2[App Server 2]
            APP3[App Server 3]
        end
        
        subgraph "Database Cluster"
            DB1[Primary DB]
            DB2[Replica DB]
            CACHE[Redis Cluster]
        end
        
        subgraph "Storage"
            S3[Object Storage]
            CDN[CDN]
        end
    end
    
    subgraph "External Services"
        BC[Blockchain Network]
        AI[AI Services]
        MONITOR[Monitoring]
    end
    
    LB --> APP1
    LB --> APP2
    LB --> APP3
    
    APP1 --> DB1
    APP2 --> DB1
    APP3 --> DB1
    
    DB1 --> DB2
    APP1 --> CACHE
    APP2 --> CACHE
    APP3 --> CACHE
    
    APP1 --> S3
    APP2 --> S3
    APP3 --> S3
    
    S3 --> CDN
    
    APP1 --> BC
    APP2 --> BC
    APP3 --> BC
    
    APP1 --> AI
    APP2 --> AI
    APP3 --> AI
    
    MONITOR --> APP1
    MONITOR --> APP2
    MONITOR --> APP3
```

## Development Workflow

```mermaid
gitgraph
    commit id: "Initial"
    branch develop
    checkout develop
    commit id: "Feature 1"
    commit id: "Feature 2"
    branch feature/auth
    checkout feature/auth
    commit id: "Auth Setup"
    commit id: "Web3 Integration"
    checkout develop
    merge feature/auth
    commit id: "Auth Complete"
    branch feature/content
    checkout feature/content
    commit id: "AI Integration"
    commit id: "Content Generation"
    checkout develop
    merge feature/content
    commit id: "Content Complete"
    checkout main
    merge develop
    commit id: "Release v1.0"
```

## How to Use Mermaid Diagrams

To add Mermaid diagrams to your documentation:

1. **Wrap your diagram in code blocks** with `mermaid` language identifier
2. **Use proper syntax** for different diagram types:
   - `graph` or `flowchart` for flowcharts
   - `sequenceDiagram` for sequence diagrams
   - `erDiagram` for entity relationship diagrams
   - `gitgraph` for Git workflows
   - `pie` for pie charts
   - `gantt` for Gantt charts

3. **Example syntax:**
   ```mermaid
   graph TD
       A[Start] --> B[Process]
       B --> C[End]
   ```

4. **Themes are automatically applied** based on your site's color mode (light/dark)

## Tips for Better Diagrams

- Use descriptive node labels
- Group related elements with subgraphs
- Use consistent styling and colors
- Keep diagrams simple and readable
- Test diagrams in both light and dark modes
