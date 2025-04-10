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
	app.use(express.static(path.join(__dirname, '/StatusApp/dist'))); // serve the static files from the client/build directory
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, "StatusApp", "dist", "index.html"));
	});
}



app.listen(PORT, () => {
  	connectDB();
	console.log('Server is running on port http://localhost:'+ PORT);
});



// mongodb+srv://suranjaniitkgp:it2i047VfTwL6lIg@cluster0.qjwtmwb.mongodb.net/