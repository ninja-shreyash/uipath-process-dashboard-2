# UiPath Process Dashboard

A modern, responsive dashboard for viewing and managing UiPath Orchestrator processes. Built with React, TypeScript, and Cloudflare Workers for enterprise-grade performance and reliability.

[cloudflarebutton]

## Features

- **Real-time Process Monitoring** - View all UiPath Orchestrator processes with live status updates
- **Process Management** - Start processes directly from the dashboard with one-click execution
- **Beautiful UI** - Modern, responsive interface built with shadcn/ui components
- **Enterprise Ready** - Powered by Cloudflare Workers for global edge deployment
- **Type Safe** - Full TypeScript support with UiPath SDK integration
- **Dark/Light Mode** - Automatic theme switching with user preference persistence

## Technology Stack

### Frontend
- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe development with full IntelliSense
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **shadcn/ui** - High-quality, accessible component library
- **React Query** - Powerful data fetching and caching
- **React Router** - Client-side routing
- **Lucide React** - Beautiful, customizable icons

### Backend
- **Cloudflare Workers** - Serverless edge computing platform
- **Hono** - Fast, lightweight web framework
- **Durable Objects** - Consistent, low-latency storage

### UiPath Integration
- **UiPath TypeScript SDK** - Official SDK for UiPath Orchestrator API
- **Process Management** - Full CRUD operations for UiPath processes
- **Real-time Updates** - Live status monitoring and notifications

## Prerequisites

- **Bun** - Fast JavaScript runtime and package manager
- **UiPath Orchestrator** - Access to UiPath Orchestrator instance
- **Cloudflare Account** - For deployment (free tier available)

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd uipath-process-dashb-ccit6wvvvm2p78qdejhab
   ```

2. **Install dependencies**
   ```bash
   bun install
   ```

3. **Configure UiPath connection**
   
   Update the UiPath configuration in `src/lib/uipath.ts`:
   ```typescript
   export const uipath = new UiPath({
       baseUrl: 'https://your-orchestrator-url.com',
       orgName: 'your-organization',
       tenantName: 'your-tenant',
       secret: 'your-api-secret'
   });
   ```

4. **Start development server**
   ```bash
   bun run dev
   ```

   The application will be available at `http://localhost:3000`

## Development

### Available Scripts

- `bun run dev` - Start development server with hot reload
- `bun run build` - Build for production
- `bun run preview` - Preview production build locally
- `bun run lint` - Run ESLint for code quality
- `bun run deploy` - Deploy to Cloudflare Workers

### Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── uipath/         # UiPath-specific components
│   └── layout/         # Layout components
├── hooks/              # Custom React hooks
├── lib/                # Utility libraries and configurations
├── pages/              # Application pages/routes
└── main.tsx           # Application entry point

worker/                 # Cloudflare Workers backend
├── index.ts           # Worker entry point
├── userRoutes.ts      # API route definitions
└── durableObject.ts   # Durable Object implementation

shared/                 # Shared types and utilities
├── types.ts           # TypeScript type definitions
└── mock-data.ts       # Development mock data
```

### Adding New Features

1. **UiPath Integration** - Use the provided hooks in `src/hooks/useUiPathProcesses.ts`
2. **UI Components** - Leverage shadcn/ui components from `src/components/ui/`
3. **API Endpoints** - Add new routes in `worker/userRoutes.ts`
4. **Data Storage** - Extend Durable Object methods in `worker/durableObject.ts`

## Usage

### Viewing Processes

The dashboard automatically loads and displays all available UiPath processes from your configured Orchestrator instance. Each process card shows:

- Process name and description
- Unique process key
- Last execution status
- Last execution timestamp

### Starting Processes

Click the "Start Process" button on any process card to execute it immediately. The dashboard will:

- Send the start command to UiPath Orchestrator
- Show real-time feedback with loading states
- Display success/error notifications
- Refresh the process list automatically

### Real-time Updates

The dashboard automatically refreshes process data every 30 seconds to ensure you always see the latest status information.

## Deployment

### Cloudflare Workers

[cloudflarebutton]

#### Manual Deployment

1. **Install Wrangler CLI**
   ```bash
   bun add -g wrangler
   ```

2. **Authenticate with Cloudflare**
   ```bash
   wrangler login
   ```

3. **Deploy to Cloudflare Workers**
   ```bash
   bun run deploy
   ```

#### Environment Configuration

The application uses the following configuration:

- **Durable Objects** - Enabled for persistent storage
- **Assets** - Static files served from the edge
- **Compatibility Date** - 2025-04-24

### Custom Domain

To use a custom domain:

1. Add your domain to Cloudflare
2. Configure DNS settings
3. Update the Worker route in Cloudflare dashboard

## Configuration

### UiPath Orchestrator

Ensure your UiPath Orchestrator instance is configured with:

- **API Access** - Enable external API access
- **Authentication** - Generate API keys for the application
- **Permissions** - Grant necessary permissions for process management

### Folder Configuration

Update the folder ID in `src/pages/HomePage.tsx`:

```typescript
const folderId = 1878866; // Replace with your folder ID
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support and questions:

- Check the [UiPath Documentation](https://docs.uipath.com/)
- Review [Cloudflare Workers Documentation](https://developers.cloudflare.com/workers/)
- Open an issue in this repository

## Acknowledgments

- Built with [shadcn/ui](https://ui.shadcn.com/) for beautiful, accessible components
- Powered by [Cloudflare Workers](https://workers.cloudflare.com/) for global edge deployment
- Integrated with [UiPath Orchestrator](https://www.uipath.com/product/orchestrator) for process automation