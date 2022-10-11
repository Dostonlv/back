require('dotenv').config();
const express = require('express');
const app = express()
const cors = require('cors');

const connectDB = require('./config/db')
const serviceRoutes = require('./routes/serviceRoutes')
const staffRoutes = require('./routes/staffRoutes')
const orderRoutes = require('./routes/orderRoutes') 
const contactRoutes = require('./routes/contactRoutes') 

connectDB()
app.use(express.json());
app.use(cors());
 
//root route
app.get('/', (req, res) => {
  res.send('App works properly!'); 
});

//this for route will need for store front, also for admin dashboard
app.use('/api/service/', serviceRoutes);
app.use('/api/staff/', staffRoutes);
app.use('/api/order/', orderRoutes);
app.use('/api/contact/', contactRoutes);

// Use express's default error handling middleware
app.use((err, req, res, next) => {
  if (res.headersSent) return next(err);
  res.status(400).json({ message: err.message });
});

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
