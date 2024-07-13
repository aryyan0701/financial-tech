import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import axios from 'axios';

function Foundations() {
  const [advice, setAdvice] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAdvice = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/get-generated-topics');
        const data = response.data;
        if (data) {
          setAdvice(data);
        } else {
          setError('No data available');
        }
      } catch (error) {
        console.error('Error fetching generated topics:', error);
        setError('Failed to fetch data. Please try again later.');
      }
    };

    fetchAdvice();
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-8 bg-gray-100 min-h-screen">
          <div className="max-w-4xl mx-auto">
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                <strong className="font-bold">Error:</strong>
                <span className="block sm:inline"> {error}</span>
              </div>
            )}
            {advice ? (
              <div>
                <h1 className="text-2xl font-bold mb-4">{advice.intro}</h1>
                <div className="space-y-6">
                  {advice.topics.map((topic, index) => (
                    <div key={index} className="p-6 bg-white rounded-lg shadow-md">
                      <h2 className="text-xl font-semibold mb-2">{topic.headline}</h2>
                      <p className="text-gray-700">{topic.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <p className="text-center text-gray-500">Loading...</p>
            )}
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Foundations;
