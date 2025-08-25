# DigitalOcean Deployment Guide

This guide will help you deploy the AlEbda Funnel Site to DigitalOcean App Platform.

## 🚀 Quick Deployment Steps

### 1. Prerequisites
- GitHub repository: `https://github.com/toufeeqrahimm/AlEbda-Funnel-Site`
- DigitalOcean account
- All code pushed to the `main` branch

### 2. Deploy to DigitalOcean App Platform

#### Option A: Using App Spec File (Recommended)
1. Go to [DigitalOcean App Platform](https://cloud.digitalocean.com/apps)
2. Click "Create App"
3. Choose "GitHub" as source
4. Select repository: `toufeeqrahimm/AlEbda-Funnel-Site`
5. Select branch: `main`
6. Click "Next"
7. **Import App Spec**: Upload the `.do/app.yaml` file from this repository
8. Review settings and click "Create Resources"

#### Option B: Manual Configuration
1. Go to [DigitalOcean App Platform](https://cloud.digitalocean.com/apps)
2. Click "Create App"
3. Choose "GitHub" as source
4. Select repository: `toufeeqrahimm/AlEbda-Funnel-Site`
5. Select branch: `main`
6. Configure the following settings:
   - **Service Type**: Web Service
   - **Environment**: Node.js
   - **Build Command**: `npm run build`
   - **Run Command**: `npm start`
   - **HTTP Port**: 8080
   - **Instance Size**: Basic (512 MB RAM, 1 vCPU) - $5/month

### 3. Environment Variables
Set these environment variables in DigitalOcean:
- `NODE_ENV`: `production`
- `PORT`: `8080`

### 4. Domain Configuration (Optional)
- Add your custom domain in the DigitalOcean dashboard
- Update DNS records to point to your app

## 📁 Project Structure

```
├── .do/
│   └── app.yaml              # DigitalOcean App Platform configuration
├── dist/                     # Built React app (auto-generated)
├── public/                   # Static assets
├── src/
│   ├── App.jsx              # Main React component
│   └── ...
├── server.js                # Express server (serves React + API)
├── package.json             # Dependencies and scripts
└── form-submissions.json    # Form data storage (auto-created)
```

## 🔧 How It Works

### Frontend
- **React app** built with Vite
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Arabic RTL** support

### Backend
- **Express.js** server
- **JSON file storage** for form submissions
- **API endpoints**:
  - `POST /api/submit-form` - Save form data
  - `GET /api/submissions` - View all submissions
  - `GET /api/submissions/count` - Get submission count
  - `GET /api/health` - Health check

### Form Features
- ✅ **City field**: Text input (no dropdown)
- ✅ **Project Type field**: Text input (no dropdown)
- ✅ **Data persistence**: Saves to JSON file
- ✅ **WhatsApp integration**: Opens WhatsApp after form submission
- ✅ **Loading states**: Shows "جاري الإرسال..." during submission
- ✅ **Success/Error messages**: User feedback

## 📊 Accessing Form Data

### View Submissions
Visit: `https://your-app-url.ondigitalocean.app/api/submissions`

### View Submission Count
Visit: `https://your-app-url.ondigitalocean.app/api/submissions/count`

### Health Check
Visit: `https://your-app-url.ondigitalocean.app/api/health`

## 💰 Cost Estimate

- **Basic Plan**: $5/month
  - 512 MB RAM
  - 1 vCPU
  - 1 GB storage
  - Perfect for small-medium traffic

## 🔄 Automatic Deployments

DigitalOcean will automatically redeploy when you push to the `main` branch on GitHub.

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start development server (frontend only)
npm run dev

# Start production server (frontend + backend)
npm run build
npm start
```

## 📝 File Storage Notes

- Form submissions are stored in `form-submissions.json`
- File persists during app runtime
- Data resets only if DigitalOcean redeploys the container (rare)
- For high-traffic sites, consider upgrading to PostgreSQL

## 🚨 Troubleshooting

### Build Fails
- Check that all dependencies are in `package.json`
- Ensure `npm run build` works locally

### Form Submissions Not Saving
- Check `/api/health` endpoint
- Verify server is running on correct port
- Check DigitalOcean app logs

### Images Not Loading
- Ensure all images are in the `public/` folder
- Check image paths start with `/` (e.g., `/sora-hero.jpg`)

## 📞 Support

If you need help with deployment, contact the development team or check DigitalOcean's documentation.
