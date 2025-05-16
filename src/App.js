// src/App.js
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase'; 

function App() {
  const [user, setUser] = useState(null);      // Authenticated user
  const [loading, setLoading] = useState(true); // Track loading status

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);     // Will be null if logged out
      setLoading(false);         // Done checking auth status
    });

    return () => unsubscribe();  // Cleanup listener on unmount
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="App">
      <Header user={user} />
      <Body user={user} />
    </div>
  );
}

export default App;
