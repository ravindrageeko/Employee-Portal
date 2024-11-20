const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./config/swaggerConfig');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use(cors());

// Serve Swagger documentation at /api-docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

//admin
app.use('/admin', require('./Routes/admin/auth.routes'));
app.use('/admin/projectDetails', require('./Routes/ProjectDetails.routes'));


//Employee
app.use('/Employee', require('./Routes/Employee.routes'));
app.use('/Employee', require('./Routes/Attrition.routes'));
app.use('/Employee', require('./Routes/Attendance.routes'));
app.use('/Employee', require('./Routes/checkOutDetails.routes'));
app.use('/Employee', require('./Routes/sessionChange.routes'));

app.get("/", async (req, res) => {
  res.send("Welcome")
})
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});