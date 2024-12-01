'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { supabase } from '../supabaseClient';
import { useRouter } from 'next/navigation'; // Importă useRouter

const Login = () => {

  const [formData, setFormData] = useState({
    email: '', password: ''
  });

  const router = useRouter(); // Folosește useRouter pentru navigare

  console.log(formData);

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value
      };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (error) throw error;
      console.log(data);

      // Redirecționează utilizatorul către Dashboard după login cu succes
      router.push('/Dashboard');
      
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          placeholder='Email'
          name='email'
          onChange={handleChange}
        />

        <input 
          placeholder='Password'
          name='password'
          type="password"
          onChange={handleChange}
        />

        <button type='submit'>
          Submit
        </button>
      </form>

      Don't have an account? <Link href='/Register'>Register</Link> 
    </div>
  );
};

export default Login;
