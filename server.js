import express from 'express';
import cors from 'cors';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;
const DATA_FILE = path.join(__dirname, 'form-submissions.json');

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from the dist directory (built React app)
app.use(express.static(path.join(__dirname, 'dist')));

// Initialize data file if it doesn't exist
async function initializeDataFile() {
  try {
    await fs.access(DATA_FILE);
  } catch (error) {
    // File doesn't exist, create it with empty array
    await fs.writeFile(DATA_FILE, JSON.stringify([], null, 2));
  }
}

// Read submissions from file
async function readSubmissions() {
  try {
    const data = await fs.readFile(DATA_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading submissions:', error);
    return [];
  }
}

// Write submissions to file
async function writeSubmissions(submissions) {
  try {
    await fs.writeFile(DATA_FILE, JSON.stringify(submissions, null, 2));
  } catch (error) {
    console.error('Error writing submissions:', error);
    throw error;
  }
}

// Routes
app.post('/api/submit-form', async (req, res) => {
  try {
    const formData = req.body;
    
    // Add timestamp and ID
    const submission = {
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
      ...formData
    };

    // Read existing submissions
    const submissions = await readSubmissions();
    
    // Add new submission
    submissions.push(submission);
    
    // Write back to file
    await writeSubmissions(submissions);
    
    console.log('New form submission:', submission);
    
    res.json({ 
      success: true, 
      message: 'تم حفظ البيانات بنجاح',
      id: submission.id 
    });
  } catch (error) {
    console.error('Error saving form submission:', error);
    res.status(500).json({ 
      success: false, 
      message: 'حدث خطأ في حفظ البيانات' 
    });
  }
});

// Get all submissions (for admin purposes)
app.get('/api/submissions', async (req, res) => {
  try {
    const submissions = await readSubmissions();
    res.json(submissions);
  } catch (error) {
    console.error('Error fetching submissions:', error);
    res.status(500).json({ 
      success: false, 
      message: 'حدث خطأ في جلب البيانات' 
    });
  }
});

// Get submission count
app.get('/api/submissions/count', async (req, res) => {
  try {
    const submissions = await readSubmissions();
    res.json({ count: submissions.length });
  } catch (error) {
    console.error('Error fetching submission count:', error);
    res.status(500).json({ 
      success: false, 
      message: 'حدث خطأ في جلب عدد الطلبات' 
    });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// Catch-all handler: send back React's index.html file for client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start server
async function startServer() {
  await initializeDataFile();
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Form submissions will be saved to: ${DATA_FILE}`);
  });
}

startServer().catch(console.error);
