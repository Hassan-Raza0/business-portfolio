# Hassan Raza - Portfolio Website

A modern, production-ready portfolio website showcasing AI/ML expertise, automation solutions, and data science capabilities. Built with React, TypeScript, and Supabase for a seamless, high-performance experience.

## About

Professional portfolio for Hassan Raza - Data Scientist, AI/ML Engineer, and Automation Developer. This website demonstrates expertise in building intelligent systems and transforming businesses through machine learning solutions.

## Features

- **Modern Design**: Clean, responsive UI with smooth animations and transitions
- **Multi-Page Navigation**: Home, About, Services, Portfolio, Blog, and Contact pages
- **Contact Form**: Integrated with Supabase for reliable message storage
- **Responsive Layout**: Optimized for all devices from mobile to desktop
- **Fast Performance**: Built with Vite for lightning-fast load times
- **Type-Safe**: Full TypeScript implementation for better code quality
- **Dark Theme**: Professional dark color scheme with cyan accents

## Tech Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Routing**: React Router DOM v7
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Database**: Supabase
- **Deployment**: Ready for production deployment

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd project
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory with your Supabase credentials:
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navigation.tsx  # Main navigation bar
│   ├── Hero.tsx        # Hero section
│   ├── Services.tsx    # Services showcase
│   ├── Projects.tsx    # Project portfolio
│   ├── Skills.tsx      # Skills display
│   ├── Certifications.tsx
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer component
├── pages/              # Page components
│   ├── Home.tsx        # Homepage
│   ├── About.tsx       # About page
│   ├── ServicesPage.tsx
│   ├── Portfolio.tsx   # Portfolio page
│   ├── Blog.tsx        # Blog page
│   └── ContactPage.tsx # Contact page
├── App.tsx             # Main app component
├── main.tsx            # Entry point
└── index.css           # Global styles
```

## Database Schema

The application uses Supabase with the following tables:

- **contact_submissions**: Stores contact form submissions with user details and messages

## Deployment

### Build for Production

```bash
npm run build
```

The production-ready files will be generated in the `dist` directory.

### Deploy to Hosting

This project can be deployed to various platforms:
- Vercel
- Netlify
- AWS Amplify
- Cloudflare Pages

Make sure to set up environment variables in your hosting platform's settings.

## Customization

### Update Personal Information

1. Update name and titles in `src/components/Navigation.tsx`
2. Modify hero content in `src/components/Hero.tsx`
3. Add your projects in `src/components/Projects.tsx`
4. Update services in `src/components/Services.tsx`
5. Customize skills in `src/components/Skills.tsx`

### Update Social Links

Update social media links in `src/components/Hero.tsx` and `src/components/Footer.tsx`

### Modify Color Scheme

The color scheme is defined in `src/index.css`. Update the gradient and color classes to match your brand.

## Features Highlight

### Contact Form
- Form validation
- Supabase integration for data persistence
- Success/error notifications
- Spam protection with rate limiting

### Portfolio Section
- Project showcase with descriptions
- Technology tags
- Live demo and GitHub links
- Responsive grid layout

### Services Section
- AI/ML consulting
- Automation solutions
- Data science services
- Custom software development

## Performance

- Fast initial page load with Vite
- Code splitting for optimal bundle size
- Lazy loading for images
- Optimized production builds

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is private and proprietary.

## Contact

Hassan Raza - Data Scientist · AI/ML Engineer · Automation Developer

- GitHub: [Your GitHub Profile]
- LinkedIn: [Your LinkedIn Profile]
- Email: [Your Email]

---

Built with React, TypeScript, and Supabase
