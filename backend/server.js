const express = require('express');
    const bodyParser = require('body-parser');
    const { Pool } = require('pg');
    const jwt = require('jsonwebtoken');
    const bcrypt = require('bcrypt');

    const app = express();
    const pool = new Pool({
      user: 'your_db_user',
      host: 'your_db_host',
      database: 'your_db_name',
      password: 'your_db_password',
      port: 5432,
    });

    app.use(bodyParser.json());

    // User Registration
    app.post('/api/auth/register', async (req, res) => {
      const { email, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      try {
        await pool.query('INSERT INTO Users (email, password) VALUES ($1, $2)', [email, hashedPassword]);
        res.status(201).json({ message: 'User registered successfully' });
      } catch (err) {
        res.status(500).json({ message: 'Error registering user' });
      }
    });

    // User Login
    app.post('/api/auth/login', async (req, res) => {
      const { email, password } = req.body;
      try {
        const user = await pool.query('SELECT * FROM Users WHERE email = $1', [email]);
        if (user.rows.length === 0) {
          return res.status(401).json({ message: 'Invalid credentials' });
        }
        const validPassword = await bcrypt.compare(password, user.rows[0].password);
        if (!validPassword) {
          return res.status(401).json({ message: 'Invalid credentials' });
        }
        const token = jwt.sign({ userId: user.rows[0].id }, 'your_jwt_secret', { expiresIn: '1h' });
        res.status(200).json({ message: 'Login successful', token, user: user.rows[0] });
      } catch (err) {
        res.status(500).json({ message: 'Error logging in' });
      }
    });

    // Get Courses
    app.get('/api/courses', async (req, res) => {
      const { language, level } = req.query;
      try {
        let query = 'SELECT * FROM Courses';
        const values = [];
        if (language) {
          query += ' WHERE language = $1';
          values.push(language);
        }
        if (level) {
          query += values.length > 0 ? ' AND level = $2' : ' WHERE level = $1';
          values.push(level);
        }
        const courses = await pool.query(query, values);
        res.status(200).json(courses.rows);
      } catch (err) {
        res.status(500).json({ message: 'Error retrieving courses' });
      }
    });

    // Get Course Detail
    app.get('/api/courses/:id', async (req, res) => {
      const { id } = req.params;
      try {
        const course = await pool.query('SELECT * FROM Courses WHERE id = $1', [id]);
        if (course.rows.length === 0) {
          return res.status(404).json({ message: 'Course not found' });
        }
        res.status(200).json(course.rows[0]);
      } catch (err) {
        res.status(500).json({ message: 'Error retrieving course' });
      }
    });

    // Track User Progress
    app.post('/api/progress', async (req, res) => {
      const { userId, courseId, progressPercentage } = req.body;
      try {
        await pool.query(
          'INSERT INTO UserProgress (userId, courseId, progressPercentage) VALUES ($1, $2, $3) ON CONFLICT (userId, courseId) DO UPDATE SET progressPercentage = EXCLUDED.progressPercentage, lastAccessed = CURRENT_TIMESTAMP',
          [userId, courseId, progressPercentage]
        );
        res.status(200).json({ message: 'Progress tracked successfully' });
      } catch (err) {
        res.status(500).json({ message: 'Error tracking progress' });
      }
    });

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
