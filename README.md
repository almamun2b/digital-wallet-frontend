# Digital Wallet Frontend

A comprehensive digital wallet application built with React, TypeScript, and modern web technologies. This platform provides role-based dashboards for Users, Agents, and Admins with secure financial transaction capabilities.

## 🌟 Project Overview

The Digital Wallet Frontend is a modern, secure, and user-friendly web application that enables digital financial transactions. It features three distinct role-based interfaces:

- **User Dashboard**: Personal wallet management, send/receive money, transaction history
- **Agent Dashboard**: Assist users with deposits/withdrawals, earn commissions
- **Admin Dashboard**: System monitoring, user management, transaction oversight

## 🚀 Live URLs

- **Frontend**: [https://digital-wallet-frontend-mamun.vercel.app/](https://digital-wallet-frontend-mamun.vercel.app/)
- **Backend API**: [https://digital-wallet-mamun-api.vercel.app/](https://digital-wallet-mamun-api.vercel.app/)

## ✨ Key Features

### User Features

- **Wallet Overview**: Check balance, wallet status, and limits
- **Send Money**: Transfer funds to other users with PIN verification
- **Receive Money**: Accept transfers from other users
- **Transaction History**: View detailed transaction records with filtering
- **Profile Management**: Update personal information and change PIN
- **Agent Application**: Apply to become an agent for additional services

### Agent Features

- **Cash In/Out Services**: Help users deposit and withdraw funds
- **Commission Tracking**: Monitor earnings from transactions
- **User Assistance**: Provide financial services to wallet users
- **Transaction Management**: Handle user requests securely

### Admin Features

- **User Management**: Monitor and manage all users and agents
- **Transaction Oversight**: Review all system transactions with advanced filters
- **System Configuration**: Adjust fees, commissions, and limits
- **Analytics Dashboard**: View system-wide statistics and reports

## 🛠️ Technology Stack

### Frontend

- **React 19.1.0** - Modern UI library
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS 4.1.11** - Utility-first CSS framework
- **React Router 7.7.1** - Client-side routing
- **Redux Toolkit 2.8.2** - State management
- **React Hook Form 7.62.0** - Form handling
- **Zod 4.0.15** - Schema validation
- **Axios 1.11.0** - HTTP client

### UI Components

- **Radix UI/ShadCn** - Accessible component primitives
- **Lucide React** - Beautiful icons
- **Sonner** - Toast notifications
- **React Day Picker** - Date selection
- **TanStack Table** - Data tables

### Development Tools

- **ESLint** - Code linting
- **TypeScript ESLint** - TypeScript-specific linting
- **Vite Plugin React** - React support for Vite

## 📦 Setup Instructions

### Prerequisites

- Node.js (v18 or higher)
- npm, yarn, or bun package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/almamun2b/digital-wallet-frontend.git
   cd digital-wallet-frontend
   ```

2. **Install dependencies**

   ```bash
   # Using npm
   npm install

   # Using yarn
   yarn install

   # Using bun
   bun install
   ```

3. **Environment Setup**
   Create a `.env.local` file in the root directory and add your environment variables:

   ```env
   VITE_API_BASE_URL=https://digital-wallet-mamun-api.vercel.app/api/v1
   # Add other environment variables as needed
   ```

4. **Start the development server**

   ```bash
   # Using npm
   npm run dev

   # Using yarn
   yarn dev

   # Using bun
   bun dev
   ```

5. **Build for production**

   ```bash
   # Using npm
   npm run build

   # Using yarn
   yarn build

   # Using bun
   bun run build
   ```

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components (buttons, inputs, etc.)
│   └── modules/        # Feature-specific components
├── pages/              # Page components
│   ├── Auth/           # Authentication pages
│   ├── User/           # User dashboard pages
│   ├── Agent/          # Agent dashboard pages
│   ├── Admin/          # Admin dashboard pages
│   ├── Transactions/   # Transaction-related pages
│   └── Wallet/         # Wallet management pages
├── redux/              # State management
│   ├── features/       # Feature-based slices
│   └── store.ts        # Redux store configuration
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
├── hooks/              # Custom React hooks
├── lib/                # Third-party library configurations
└── assets/             # Static assets
```

## 🔐 Security Features

- **PIN-based Authentication**: Secure 4-digit PIN for sensitive transactions
- **Role-based Access Control**: Different permissions for Users, Agents, and Admins
- **Session Management**: Persistent and secure user sessions
- **Input Validation**: Client-side and server-side validation using Zod schemas
- **Secure API Communication**: HTTPS-only API calls with proper error handling

## 💳 Wallet Features

- **Multi-currency Support**: Currently supports BDT (Bangladeshi Taka)
- **Transaction Limits**: Daily and monthly spending limits for security
- **Real-time Balance**: Live wallet balance updates
- **Transaction History**: Comprehensive transaction records with filtering
- **Status Management**: Active, Inactive, and Blocked wallet states

## 🎨 UI/UX Features

- **Responsive Design**: Mobile-first approach with desktop optimization
- **Dark/Light Theme**: Theme switching with next-themes
- **Accessible Components**: Built with Radix UI for accessibility
- **Loading States**: Skeleton loaders and proper loading indicators
- **Toast Notifications**: User-friendly success and error messages
- **Form Validation**: Real-time form validation with helpful error messages

## 📱 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint

# Using other package managers
yarn dev / bun dev   # Start development server
yarn build / bun run build  # Build for production
```

## 🌐 Deployment

The application is deployed on Vercel with automatic deployments from the main branch.

### Deploy to Vercel

1. Fork this repository
2. Connect your GitHub account to Vercel
3. Import the project
4. Set environment variables in Vercel dashboard
5. Deploy

### Environment Variables

```env
VITE_API_BASE_URL=your_backend_api_url
# Add other environment variables as needed
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Abdullah Al Mamun**

- GitHub: [@almamun2b](https://github.com/almamun2b)
- Email: almamun2b@gmail.com

## 🙏 Acknowledgments

- Built with modern React ecosystem
- UI components from Radix UI
- Icons from Lucide React
- Styling with Tailwind CSS
- State management with Redux Toolkit

## 📞 Support

If you have any questions or need support, please:

1. Check the [Issues](https://github.com/almamun2b/digital-wallet-frontend/issues) page
2. Create a new issue if your problem isn't already reported
3. Contact the author via email

---

**Note**: This is the frontend application. Make sure to set up the corresponding backend API for full functionality.
