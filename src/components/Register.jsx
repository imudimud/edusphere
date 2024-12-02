import React, { useState } from 'react';
    import axios from 'axios';

    const Register = () => {
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');

      const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('/api/auth/register', { email, password });
      };

      return (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label>Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit">Register</button>
        </form>
      );
    };

    export default Register;
