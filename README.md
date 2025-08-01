# **TailorTales**
TailorTales is an AI-powered storytelling platform designed to help small businesses and niche brands craft personalized, emotionally resonant content effortlessly. This project is an MVP built with a modern full-stack Next.js architecture to demonstrate intuitive user experience and advanced content generation capabilities.

---

## **Features**
- **Dashboard:** Centralized access to user activity, content generation history, and account settings.
- **AI Content Generator:** Automatically generate personalized and engaging content tailored to your audience.
- **Templates Library:** Access pre-designed templates for different content types (social media, blogs, email campaigns).
- **Dynamic Demo Generator:** Real-time AI-generated content previews based on user inputs.
- **Multi-Channel Distribution:** Export content in formats optimized for social media, blogs, and newsletters.
- **Analytics Integration:** Monitor user engagement with Google Analytics.

---

## **Tech Stack**
- **Full-Stack Framework:**
  - **Next.js 14+**: Full-stack React framework with App Router, API routes, and server-side rendering
  - **React 18+**: For building dynamic and interactive UI with modern features
  - **TypeScript**: For robust codebase and type safety
  
- **Styling & UI:**
  - **Tailwind CSS**: For responsive and modern styling
  - **Shadcn/ui**: For consistent and accessible UI components
  - **Lucide React**: For modern iconography

- **Backend & Database:**
  - **Next.js API Routes**: Server-side API endpoints built into the framework
  - **Supabase**: PostgreSQL database with real-time capabilities, authentication, and storage
  - **Prisma** (Optional): Type-safe database ORM for enhanced developer experience

- **AI Integration:**
  - **OpenAI API**: For generating creative and personalized content
  - **Vercel AI SDK**: Streamlined AI integration for Next.js applications

- **Authentication & Security:**
  - **Supabase Auth**: Built-in authentication with social providers
  - **NextAuth.js** (Alternative): Flexible authentication for Next.js

- **Development & Deployment:**
  - **ESLint & Prettier**: Code linting and formatting
  - **Vercel**: Optimized deployment platform for Next.js
  - **Docker**: For containerized deployment (optional)

- **Analytics & Monitoring:**
  - **Google Analytics 4**: For tracking user behavior and interaction
  - **Vercel Analytics**: Built-in performance and user analytics

---

## **Getting Started**

### **Prerequisites**
Before you begin, ensure you have the following installed:
- **Node.js** (v18 or later)
- **npm, yarn, or pnpm** (package manager)
- **Git** for version control

### **Installation**

1. **Clone the Repository**
   ```bash
   git clone https://github.com/badhon252/TailorTales.git
   cd tailortales
   ```

2. **Install Dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Environment Setup**
   Create a `.env.local` file in the root directory:
   ```bash
   cp .env.example .env.local
   ```
   
   Update the `.env.local` file with your configuration:
   ```env
   # Supabase Configuration
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
   
   # OpenAI Configuration
   OPENAI_API_KEY=your_openai_api_key
   
   # Google Analytics (Optional)
   NEXT_PUBLIC_GA_MEASUREMENT_ID=your_ga_measurement_id
   
   # NextAuth Configuration (if using)
   NEXTAUTH_SECRET=your_nextauth_secret
   NEXTAUTH_URL=http://localhost:3000
   ```

4. **Database Setup**
   Set up your Supabase database tables by running the provided SQL migrations in your Supabase dashboard or using the Supabase CLI:
   ```bash
   # If using Supabase CLI
   npx supabase db reset
   ```

5. **Start Development Server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```
   
   The application will start at `http://localhost:3000`.

---

## **Usage**

1. **Access the Application**  
   Navigate to `http://localhost:3000` in your browser.

2. **Create Account/Sign In**  
   Use the authentication system to create an account or sign in.

3. **Generate Content**  
   - Input keywords and select content type
   - Choose from available templates
   - Preview AI-generated content in real-time
   - Customize tone, style, and format

4. **Manage Templates**  
   - Browse the templates library
   - Customize existing templates
   - Create new templates for your brand

5. **Export & Share**  
   - Download generated content in various formats
   - Share directly to social media platforms
   - Schedule content for later publication

---

## **Project Structure**

```
TailorTales/
├── app/                    # Next.js App Router directory
│   ├── (auth)/            # Authentication pages
│   ├── dashboard/         # Dashboard pages
│   ├── generator/         # Content generation pages
│   ├── templates/         # Templates management
│   ├── api/              # API routes
│   │   ├── auth/         # Authentication endpoints
│   │   ├── content/      # Content generation endpoints
│   │   ├── templates/    # Template management endpoints
│   │   └── user/         # User management endpoints
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout component
│   └── page.tsx          # Home page
├── components/            # Reusable React components
│   ├── ui/               # Shadcn/ui components
│   ├── forms/            # Form components
│   ├── layouts/          # Layout components
│   └── features/         # Feature-specific components
├── lib/                  # Utility libraries and configurations
│   ├── supabase.ts       # Supabase client configuration
│   ├── openai.ts         # OpenAI client setup
│   ├── auth.ts           # Authentication utilities
│   └── utils.ts          # General utilities
├── types/                # TypeScript type definitions
├── hooks/                # Custom React hooks
├── middleware.ts         # Next.js middleware for auth/routing
├── next.config.js        # Next.js configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
├── package.json          # Dependencies and scripts
└── README.md             # This documentation
```

---

## **API Routes**

The application uses Next.js API routes for backend functionality:

- **Authentication**: `/api/auth/*`
- **Content Generation**: `/api/content/generate`
- **Templates**: `/api/templates/*`
- **User Management**: `/api/user/*`
- **Analytics**: `/api/analytics/*`

---

## **Development Scripts**

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Run type checking
npm run type-check

# Run tests (if configured)
npm run test
```

---

## **Deployment**

### **Vercel (Recommended)**
1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### **Manual Deployment**
```bash
# Build the application
npm run build

# Start production server
npm start
```

### **Docker Deployment**
```bash
# Build Docker image
docker build -t tailortales .

# Run container
docker run -p 3000:3000 tailortales
```

---

## **Contributing**

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
5. **Push to your branch**
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open a Pull Request**

### **Development Guidelines**
- Follow TypeScript best practices
- Use ESLint and Prettier for code formatting
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

---

## **License**
This project is licensed under the [MIT License](LICENSE).

---

## **Support**
For questions, feedback, or support:
- **Email**: dev.khalidhossain@gmail.com
- **GitHub Issues**: [Create an issue](https://github.com/badhon252/tailortales/issues)

---

## **Roadmap**
- [ ] Advanced template customization
- [ ] Multi-language content generation
- [ ] Team collaboration features
- [ ] Advanced analytics dashboard
- [ ] Content scheduling system    
- [ ] Mobile application
- [ ] Third-party integrations (Zapier, Buffer, etc.)

---
