import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import serviceRoutes from './routes/service.route.js';
import cors from 'cors';
import path from 'path';
dotenv.config();


const app = express();

app.use(cors());
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve(); // get the current directory name

app.use(express.json()); // allows us to access json data in the req.body

app.use('/api/services', serviceRoutes); // use the service routes



if(process.env.NODE_ENV === 'production'){
    // Log the current directory for debugging
    console.log('Current directory:', __dirname);
    
    // Use a simpler path without going up a directory
    const staticPath = path.join(__dirname, "StatusApp/dist");
    console.log('Static path:', staticPath);
    
    app.use(express.static(staticPath));
    
    app.get('*', (req, res) => {
        const indexPath = path.join(staticPath, "index.html");
        console.log('Index path:', indexPath);
        res.sendFile(indexPath);
    });
}



app.listen(PORT, () => {
  	connectDB();
	console.log('Server is running on port http://localhost:'+ PORT);
});




