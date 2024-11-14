const express = require('express');
const admin = require('firebase-admin');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// Initialize Firebase Admin with your service account
const serviceAccount = require('./firebase-service-account.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://<YOUR_PROJECT_ID>.firebaseio.com" // Replace with your database URL
});

const db = admin.firestore();

// Middleware setup
app.use(cors());
app.use(bodyParser.json());

const PORT = 5000;

// Welcome endpoint
app.get('/', (req, res) => {
  res.status(200).send({ message: 'Welcome to the Employee Management API!' });
});

// API Endpoints

// Add a new employee
app.post('/employees', async (req, res) => {
  try {
    const { name, surname, email, phone, position, id, image } = req.body;
    await db.collection('employees').doc(id).set({ name, surname, email, phone, position, image });
    res.status(200).send({ message: 'Employee added successfully!' });
  } catch (error) {
    res.status(500).send({ message: 'Error adding employee', error });
  }
});

// Get all employees
app.get('/employees', async (req, res) => {
  try {
    const snapshot = await db.collection('employees').get();
    const employees = snapshot.docs.map(doc => doc.data());
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).send({ message: 'Error fetching employees', error });
  }
});

// Update an employee
app.put('/employees/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    await db.collection('employees').doc(id).update(data);
    res.status(200).send({ message: 'Employee updated successfully!' });
  } catch (error) {
    res.status(500).send({ message: 'Error updating employee', error });
  }
});

// Delete an employee
app.delete('/employees/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await db.collection('employees').doc(id).delete();
    res.status(200).send({ message: 'Employee deleted successfully!' });
  } catch (error) {
    res.status(500).send({ message: 'Error deleting employee', error });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
