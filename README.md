# Leeq's Portfolio

A modern, immersive developer portfolio web application built with React, Three.js, and GSAP. This project showcases 3D interactive elements, smooth animations, and a responsive design to present my skills and projects.

![Portfolio Preview](public/images/readme.png)

## 🚀 Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [GSAP](https://gsap.com/) (GreenSock Animation Platform)
- **3D Graphics**: [Three.js](https://threejs.org/) & [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- **Email Service**: [EmailJS](https://www.emailjs.com/)

## ✨ Features

- **3D Hero Section**: Interactive 3D room and avatar using React Three Fiber.
- **Smooth Animations**: High-performance entrance and scroll animations powered by GSAP.
- **Responsive Design**: Fully responsive layout optimized for mobile, tablet, and desktop.
- **Project Showcase**: specific section to highlight top projects.
- **Contact Form**: Functional contact form integrated with EmailJS.
- **Modern UI**: Clean aesthetics with glassmorphism and custom gradients.

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio-site.git
   cd portfolio-site
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the root directory and add your EmailJS credentials:
   ```env
   VITE_APP_EMAILJS_SERVICE_ID=your_service_id
   VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

## 📦 Build for Production

To create a production-ready build:

```bash
npm run build
```

The output will be in the `dist` directory, ready to be deployed to Vercel, Netlify, or GitHub Pages.

## 📄 License

This project is licensed under the MIT License.
