# Diversity Resources Limited Website

A premium, production-ready Next.js 14+ website for Diversity Resources Limited — a fully integrated agribusiness company in Nigeria.

## Features

- **Premium Design**: Government-demo quality, trustworthy, and professional
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile
- **Smooth Animations**: Framer Motion animations throughout
- **Static Export**: 100% compatible with Hostinger shared hosting
- **Contact Form**: EmailJS integration with React Hook Form + Zod validation
- **Modern Stack**: Next.js 14+, TypeScript, Tailwind CSS, shadcn/ui

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form + Zod
- **Email Service**: EmailJS (@emailjs/browser)
- **Notifications**: Sonner

## Project Structure

```
app/
├── src/
│   ├── app/
│   │   ├── globals.css       # Global styles
│   │   ├── layout.tsx        # Root layout with metadata
│   │   └── page.tsx          # Main page with all sections
│   ├── components/
│   │   ├── ui/               # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── form.tsx
│   │   │   ├── input.tsx
│   │   │   ├── label.tsx
│   │   │   ├── sheet.tsx
│   │   │   └── textarea.tsx
│   │   └── sections/         # Page sections
│   │       ├── Navbar.tsx
│   │       ├── Hero.tsx
│   │       ├── About.tsx
│   │       ├── Services.tsx
│   │       ├── Team.tsx
│   │       ├── Contact.tsx
│   │       └── Footer.tsx
│   └── lib/
│       └── utils.ts          # Utility functions (cn helper)
├── public/                   # Static assets
├── next.config.js            # Next.js configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
├── postcss.config.js         # PostCSS configuration
└── package.json              # Dependencies
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Navigate to the project directory**:
   ```bash
   cd app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Building for Production

### Local Build

```bash
npm run build
```

This creates a `dist/` folder with the static export.

### Build Output

The build output is configured to go to the `dist/` folder (as specified in `next.config.js`). This folder contains:

- `index.html` - Main entry point
- `_next/` - Static assets (JS, CSS, images)
- All static files ready for deployment

## EmailJS Setup (IMPORTANT)

The contact form uses EmailJS to send emails directly to `info@diversityresourceslimited.com`. Follow these steps to set it up:

### Step 1: Sign Up for EmailJS

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Create a free account
3. Verify your email address

### Step 2: Create an Email Service

1. In the EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. **Name your service** (e.g., `diversity_resources`)
6. Note down the **Service ID**

### Step 3: Create an Email Template

1. Go to **Email Templates**
2. Click **Create New Template**
3. Design your email template with these fields:
   - `{{from_name}}` - Sender's full name
   - `{{from_email}}` - Sender's email
   - `{{phone}}` - Sender's phone
   - `{{company}}` - Company/Organization (optional)
   - `{{message}}` - The message content

4. **IMPORTANT**: Set the "To Email" field to:
   ```
   info@diversityresourceslimited.com
   ```

5. **Template Example**:
   ```
   Subject: New Contact Form Submission from {{from_name}}

   From: {{from_name}} <{{from_email}}>
   Phone: {{phone}}
   Company: {{company}}

   Message:
   {{message}}
   ```

6. Save the template and note down the **Template ID**

### Step 4: Get Your Public Key

1. Go to **Account** → **General**
2. Find your **Public Key**

### Step 5: Update the Code

Open `src/components/sections/Contact.tsx` and replace the placeholder values:

```typescript
// EmailJS Configuration
// IMPORTANT: Replace these with your actual EmailJS credentials
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID"; // Replace with your EmailJS Service ID
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID"; // Replace with your EmailJS Template ID
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY"; // Replace with your EmailJS Public Key
```

**Example**:
```typescript
const EMAILJS_SERVICE_ID = "service_abc123";
const EMAILJS_TEMPLATE_ID = "template_xyz789";
const EMAILJS_PUBLIC_KEY = "your_public_key_here";
```

### Step 6: Test the Form

1. Run the development server: `npm run dev`
2. Fill out the contact form
3. Submit and check if you receive the email

## Deployment to Hostinger

### Step 1: Build the Project

```bash
npm run build
```

### Step 2: Upload to Hostinger

1. **Log in to your Hostinger control panel**

2. **Navigate to File Manager** or use FTP

3. **Upload the contents of the `dist/` folder** to your `public_html` directory:
   - `index.html`
   - `_next/` folder (contains all JS/CSS assets)

4. **Ensure the file structure looks like this**:
   ```
   public_html/
   ├── index.html
   ├── _next/
   │   ├── static/
   │   │   ├── chunks/
   │   │   ├── css/
   │   │   └── media/
   │   └── ...
   ```

### Step 3: Verify Deployment

1. Visit your domain (e.g., `https://diversityresourceslimited.com`)
2. Test all sections and the contact form
3. Verify EmailJS is working

### Troubleshooting Hostinger Deployment

**Issue**: 404 errors or assets not loading
- **Solution**: Ensure the `_next` folder is uploaded correctly and the paths match

**Issue**: Contact form not sending emails
- **Solution**: Verify EmailJS credentials are correct and the service is active

**Issue**: Images not loading
- **Solution**: The site uses placeholder images from picsum.photos. Replace with actual images in the `public/` folder and update the references.

## Customization

### Changing Colors

The color scheme uses Tailwind's emerald palette. Edit `tailwind.config.js` to change:

```javascript
colors: {
  primary: {
    DEFAULT: "hsl(var(--primary))", // Currently emerald-800 (#166534)
    foreground: "hsl(var(--primary-foreground))",
  },
  accent: {
    DEFAULT: "hsl(var(--accent))", // Currently emerald-400 (#4ade80)
    foreground: "hsl(var(--accent-foreground))",
  },
}
```

### Replacing Images

1. Add your images to the `public/` folder
2. Update the image URLs in the section components:
   - `Hero.tsx` - Background image
   - `About.tsx` - Company image
   - `Team.tsx` - Team member photos

### Updating Content

All content is in the section components:
- `Navbar.tsx` - Navigation links and logo
- `Hero.tsx` - Hero section content
- `About.tsx` - Company overview, vision, mission
- `Services.tsx` - Service cards and descriptions
- `Team.tsx` - Team member profiles
- `Contact.tsx` - Contact form and info
- `Footer.tsx` - Footer content

## Environment Variables (Optional)

For better security, you can use environment variables for EmailJS:

1. Create a `.env.local` file:
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

2. Update `Contact.tsx`:
   ```typescript
   const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
   const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
   const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";
   ```

**Note**: Environment variables must be prefixed with `NEXT_PUBLIC_` to be accessible in client-side code.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Static export for fast loading
- Optimized images
- Minimal JavaScript bundle
- CSS animations where possible
- Lazy loading for below-fold content

## License

This project is proprietary to Diversity Resources Limited.

## Support

For technical support or questions:
- Email: info@diversityresourceslimited.com
- Phone: +234 (0) XXX XXX XXXX

---

**Built with Next.js 14+, TypeScript, and Tailwind CSS**
