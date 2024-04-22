import Navbar from './components/Navbar/Navbar'
import HomepageIntro from './components/HomepageIntro/HomepageIntro'
import './App.css'
import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const API_KEY = import.meta.env.VITE_API_KEY;

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "defind-1972f.firebaseapp.com",
  projectId: "defind",
  storageBucket: "defind.appspot.com",
  messagingSenderId: "87769990736",
  appId: "1:87769990736:web:97d09c7c38c966623b7355"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const App = () => {
  return (
    <>
      <div className='App'>
          <Navbar />
          <HomepageIntro />
      </div>
    </>
  )
}

export default App
