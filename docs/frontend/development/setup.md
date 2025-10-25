# Development Setup

This guide will help you set up the Base Library frontend development environment for local development and contribution.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download from nodejs.org](https://nodejs.org/)
- **npm** or **yarn** - Package manager
- **Git** - Version control
- **MetaMask** or compatible Web3 wallet - For testing Web3 features
- **Modern Browser** - Chrome, Firefox, Safari, or Edge

## Project Structure

```
front/
├── src/
│   ├── components/          # React components
│   ├── hooks/              # Custom React hooks
│   ├── services/           # API services
│   ├── utils/              # Utility functions
│   ├── types/              # TypeScript type definitions
│   └── styles/             # CSS and styling
├── public/                 # Static assets
├── docs/                   # Documentation
├── tests/                  # Test files
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── vite.config.ts          # Vite configuration
```

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/mavaleri1/Base-Library.git
cd base-library/front
```

### 2. Install Dependencies

Using npm:
```bash
npm install
```

Using yarn:
```bash
yarn install
```

### 3. Environment Configuration

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Edit the `.env` file with your configuration:

```env
# API Configuration
VITE_API_BASE_URL=http://localhost:8000
VITE_article_API_URL=http://localhost:8001
VITE_PROMPT_CONFIG_API_URL=http://localhost:8002

# Web3 Configuration
VITE_WALLET_CONNECT_PROJECT_ID=your_project_id
VITE_CHAIN_ID=1
VITE_RPC_URL=https://mainnet.infura.io/v3/your_project_id

# Feature Flags
VITE_ENABLE_HITL=true
VITE_ENABLE_MATH_RENDERING=true
VITE_ENABLE_EXPORT=true

# Development
VITE_DEBUG_MODE=true
VITE_LOG_LEVEL=info
```

### 4. Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:3001`

## Development Tools

### Code Quality

#### ESLint Configuration
```json
{
  "extends": [
    "eslint:recommended",
    "@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended"
  ],
  "rules": {
    "react/prop-types": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "react-hooks/rules-of-hooks": "error"
  }
}
```

#### Prettier Configuration
```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2
}
```

### Testing Setup

#### Jest Configuration
```javascript
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts'
  ]
};
```

#### Testing Scripts
```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run E2E tests
npm run test:e2e
```

## Development Workflow

### 1. Feature Development

```bash
# Create a new feature branch
git checkout -b feature/your-feature-name

# Make your changes
# ... implement your feature ...

# Run tests
npm run test

# Run linting
npm run lint

# Build the project
npm run build
```

### 2. Component Development

#### Creating a New Component

```tsx
// src/components/MyComponent.tsx
import React from 'react';
import { cn } from '@/utils/cn';

interface MyComponentProps {
  className?: string;
  children: React.ReactNode;
}

export function MyComponent({ className, children }: MyComponentProps) {
  return (
    <div className={cn('my-component', className)}>
      {children}
    </div>
  );
}
```

#### Component Testing

```tsx
// src/components/__tests__/MyComponent.test.tsx
import { render, screen } from '@testing-library/react';
import { MyComponent } from '../MyComponent';

describe('MyComponent', () => {
  it('renders children correctly', () => {
    render(<MyComponent>Test content</MyComponent>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });
});
```

### 3. API Integration

#### Service Layer

```typescript
// src/services/api.ts
import { apiClient } from './client';

export interface Material {
  id: string;
  title: string;
  content: string;
  createdAt: string;
}

export const materialsApi = {
  async getAll(): Promise<Material[]> {
    const response = await apiClient.get('/materials');
    return response.data;
  },

  async create(data: CreateMaterialRequest): Promise<Material> {
    const response = await apiClient.post('/materials', data);
    return response.data;
  }
};
```

#### Custom Hooks

```typescript
// src/hooks/useMaterials.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { materialsApi } from '@/services/api';

export function useMaterials() {
  return useQuery({
    queryKey: ['materials'],
    queryFn: materialsApi.getAll
  });
}

export function useCreateMaterial() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: materialsApi.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['materials'] });
    }
  });
}
```

## Web3 Integration

### Wallet Connection

```typescript
// src/hooks/useWallet.ts
import { useAccount, useConnect, useDisconnect } from 'wagmi';

export function useWallet() {
  const { address, isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();

  return {
    address,
    isConnected,
    connect: () => connect({ connector: connectors[0] }),
    disconnect
  };
}
```

### Authentication Flow

```typescript
// src/services/auth.ts
import { apiClient } from './client';

export interface AuthRequest {
  walletAddress: string;
  signature: string;
  message: string;
}

export const authApi = {
  async requestNonce(address: string): Promise<string> {
    const response = await apiClient.post('/auth/request-nonce', { address });
    return response.data.nonce;
  },

  async verifySignature(data: AuthRequest): Promise<string> {
    const response = await apiClient.post('/auth/verify-signature', data);
    return response.data.token;
  }
};
```

## Styling and Theming

### Tailwind CSS Setup

```typescript
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          900: '#1e3a8a'
        }
      }
    }
  },
  plugins: []
};
```

### Component Styling

```tsx
// src/components/Button.tsx
import { cn } from '@/utils/cn';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  className,
  ...props 
}: ButtonProps) {
  return (
    <button
      className={cn(
        'rounded-md font-medium transition-colors',
        {
          'bg-primary-500 text-white hover:bg-primary-600': variant === 'primary',
          'bg-gray-200 text-gray-900 hover:bg-gray-300': variant === 'secondary',
          'px-3 py-1.5 text-sm': size === 'sm',
          'px-4 py-2 text-base': size === 'md',
          'px-6 py-3 text-lg': size === 'lg'
        },
        className
      )}
      {...props}
    />
  );
}
```

## Performance Optimization

### Code Splitting

```tsx
// src/pages/MaterialsPage.tsx
import { lazy, Suspense } from 'react';

const MaterialCreator = lazy(() => import('@/components/MaterialCreator'));
const MaterialList = lazy(() => import('@/components/MaterialList'));

export function MaterialsPage() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <MaterialCreator />
        <MaterialList />
      </Suspense>
    </div>
  );
}
```

### Memoization

```tsx
// src/components/ExpensiveComponent.tsx
import { memo, useMemo } from 'react';

interface ExpensiveComponentProps {
  data: any[];
  filter: string;
}

export const ExpensiveComponent = memo(({ data, filter }: ExpensiveComponentProps) => {
  const filteredData = useMemo(() => {
    return data.filter(item => item.category === filter);
  }, [data, filter]);

  return (
    <div>
      {filteredData.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
});
```

## Debugging

### Development Tools

#### React Developer Tools
- Install the React Developer Tools browser extension
- Use the Profiler to identify performance issues
- Inspect component state and props

#### Redux DevTools
```typescript
// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import { devTools } from '@reduxjs/toolkit/dist/devtools';

export const store = configureStore({
  reducer: {
    // your reducers
  },
  devTools: process.env.NODE_ENV !== 'production'
});
```

### Debugging Web3

```typescript
// src/utils/debug.ts
export function debugWeb3() {
  if (process.env.NODE_ENV === 'development') {
    console.log('Web3 Debug Info:', {
      ethereum: window.ethereum,
      accounts: window.ethereum?.selectedAddress,
      chainId: window.ethereum?.chainId
    });
  }
}
```

## Deployment

### Build for Production

```bash
# Build the application
npm run build

# Preview the build
npm run preview
```

### Environment Variables for Production

```env
# Production environment variables
VITE_API_BASE_URL=https://api.base-library.com
VITE_WALLET_CONNECT_PROJECT_ID=your_production_project_id
VITE_CHAIN_ID=1
VITE_ENABLE_DEBUG=false
```

### Docker Deployment

```dockerfile
# Dockerfile
FROM node:18-alpine as builder

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## Troubleshooting

### Common Issues

#### Build Errors
- **TypeScript Errors**: Check type definitions and imports
- **Module Resolution**: Verify import paths and file extensions
- **Dependency Issues**: Clear node_modules and reinstall

#### Runtime Errors
- **Web3 Connection**: Ensure wallet is installed and unlocked
- **API Errors**: Check backend service status and CORS configuration
- **State Management**: Verify Redux store configuration

#### Performance Issues
- **Bundle Size**: Use bundle analyzer to identify large dependencies
- **Memory Leaks**: Check for proper cleanup in useEffect hooks
- **Rendering Issues**: Use React DevTools Profiler to identify bottlenecks

### Getting Help

- **Documentation**: Check the comprehensive documentation
- **GitHub Issues**: Report bugs and request features
- **Community Discord**: Get real-time help from the community
- **Code Reviews**: Submit pull requests for code review

---

**Development Setup** complete! You're now ready to contribute to Base Library's frontend development.
