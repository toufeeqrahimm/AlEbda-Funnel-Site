# AlEbda Funnel Site - مؤسسة إبداع المستثمر

Arabic landing page for hangar construction services with lead generation form.

## 🚀 Quick Deploy to DigitalOcean

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/apps/new?repo=https://github.com/toufeeqrahimm/AlEbda-Funnel-Site/tree/main)

**Cost**: $5/month | **Setup Time**: 5 minutes

### Deployment Steps:
1. Click the deploy button above
2. Connect your GitHub account
3. Select this repository
4. Use the included `.do/app.yaml` configuration
5. Deploy!

📖 **[Full Deployment Guide](./DEPLOYMENT.md)**

## ✨ Features

### 🎯 Lead Generation Form
- **City Selection**: Text input (no dropdown restrictions)
- **Project Type**: Text input (no dropdown restrictions)  
- **Data Persistence**: Automatic saving to JSON file
- **WhatsApp Integration**: Opens WhatsApp after form submission
- **Real-time Validation**: Form validation with Arabic error messages

### 🎨 Design
- **Arabic RTL Support**: Proper right-to-left layout
- **Responsive Design**: Works on all devices
- **Modern UI**: Tailwind CSS with smooth animations
- **Dark Theme**: Professional dark color scheme

### 🔧 Technical Stack
- **Frontend**: React 18 + Vite
- **Backend**: Express.js + Node.js
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Storage**: JSON file (upgradeable to database)

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start development (frontend only)
npm run dev

# Build for production
npm run build

# Start production server (frontend + backend)
npm start
```

## 📊 API Endpoints

- `POST /api/submit-form` - Save form submission
- `GET /api/submissions` - View all submissions
- `GET /api/submissions/count` - Get submission count
- `GET /api/health` - Health check

## 📁 Project Structure

```
├── .do/app.yaml          # DigitalOcean configuration
├── src/App.jsx           # Main React component
├── server.js             # Express server
├── public/               # Static assets
├── dist/                 # Built files (auto-generated)
└── form-submissions.json # Data storage (auto-created)
```

## 🌐 Live Demo

After deployment, your site will be available at:
`https://your-app-name.ondigitalocean.app`

## 📞 Contact

For support or customization requests, contact the development team.

---

**Built with ❤️ for مؤسسة إبداع المستثمر للمقاولات العامة**
