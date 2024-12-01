// src/app/Dashboard/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import { useRouter } from 'next/navigation';

const Dashboard = () => {
  const [user, setUser] = useState<any>(null); // Folosim `any` pentru a gestiona tipul utilizatorului
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { session } } = await supabase.auth.getSession(); // Obținem sesiunea corectă

      if (!session || !session.user) {
        router.push('/login'); // Dacă nu avem sesiune activă, redirecționăm la login
      } else {
        setUser(session.user); // Setăm utilizatorul dacă sesiunea este validă
      }
    };

    fetchUser();
  }, []);

  if (!user) {
    return <div>Loading...</div>; // Afișează "Loading..." până când utilizatorul este obținut
  }

  const logout = async () => {
    await supabase.auth.signOut();
    router.push('/login');
  };

  return (
    <div>
      <h1>Welcome, {user.email}</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
