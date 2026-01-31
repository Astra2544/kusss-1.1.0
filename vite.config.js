import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  publicDir: false,
  build: {
    outDir: 'dist',
    copyPublicDir: false,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        dashboard: resolve(__dirname, 'pages/dashboard.html'),
        courses: resolve(__dirname, 'pages/courses.html'),
        schedule: resolve(__dirname, 'pages/schedule.html'),
        grades: resolve(__dirname, 'pages/grades.html'),
        exams: resolve(__dirname, 'pages/exams.html'),
        registration: resolve(__dirname, 'pages/registration.html'),
        certificates: resolve(__dirname, 'pages/certificates.html'),
        profile: resolve(__dirname, 'pages/profile.html'),
        news: resolve(__dirname, 'pages/news.html'),
        help: resolve(__dirname, 'pages/help.html'),
        contact: resolve(__dirname, 'pages/contact.html'),
        courseDetail: resolve(__dirname, 'pages/course-detail.html'),
      },
    },
    assetsInlineLimit: 0,
  },
  server: {
    port: 3000,
    open: true,
  },
});