import React, { useState } from 'react';
    import { useDispatch } from 'react-redux';
    import axios from 'axios';

    const Login = () => {
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const dispatch = useDispatch();

      const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post('/api/auth/login', { email, password });
        dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
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
          <button type="submit">Login</button>
        </form>
      );
    };

    export default Login;
