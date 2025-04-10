import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

import serviceRoutes from './routes/service.route.js';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json()); // allows us to access json data in the req.body

app.use('/api/services', serviceRoutes); // use the service routes





app.listen(PORT, () => {
  	connectDB();
	console.log('Server is running on port http://localhost:'+ PORT);
});



// mongodb+srv://suranjaniitkgp:it2i047VfTwL6lIg@cluster0.qjwtmwb.mongodb.net/