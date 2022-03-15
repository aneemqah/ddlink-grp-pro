import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from "react";
import { Routes, Route, Link } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ChatPage from './pages/ChatPage';
import NewProjectPage from './pages/NewProjectPage';
import SettingsPage from './pages/SettingsPage';


function App() {
  return (
    <div>
      <Routes>
         <Route path="/mainpage" element={<MainPage />} />
         <Route path="/chatpage" element={<ChatPage />} />
         <Route path="/newprojectpage" element={<NewProjectPage />} />
         <Route path="/settingspage" element={<SettingsPage />} />
      </Routes>
    </div>
  );
}

export default App;
