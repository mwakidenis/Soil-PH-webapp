import React, { useState } from 'react';
import Header from './components/Header';
import UploadSection from './components/UploadSection';
import InputSection from './components/InputSection';
import ReportSection from './components/ReportSection';
import EducationSection from './components/EducationSection';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const [image, setImage] = useState(null);
  const [location, setLocation] = useState('');
  const [phLevel, setPhLevel] = useState('');
  const [phType, setPhType] = useState('');
  const [reports, setReports] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleImageUpload = (file) => {
    setImage(URL.createObjectURL(file));
    // Simulate upload progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += 20;
      setUploadProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        // Mock API call for pH estimation
        setTimeout(() => {
          setPhLevel('6.8');
          setPhType('Neutral');
        }, 500);
      }
    }, 300);
  };

  const handleSubmit = () => {
    if (!image || !location) {
      alert('Please upload an image and enter a location');
      return;
    }
    const newReport = { image, location, phLevel, phType, date: new Date().toLocaleDateString() };
    setReports([...reports, newReport]);
    setImage(null);
    setLocation('');
    setPhLevel('');
    setPhType('');
    setUploadProgress(0);
  };

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <UploadSection
          image={image}
          uploadProgress={uploadProgress}
          onImageUpload={handleImageUpload}
        />
        <InputSection
          location={location}
          setLocation={setLocation}
          phLevel={phLevel}
          phType={phType}
          onSubmit={handleSubmit}
        />
        <ReportSection reports={reports} />
        <EducationSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;