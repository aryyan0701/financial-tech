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
            <div className="flex pt-20">
                <Sidebar />
                <section className="bg-gray-100 text-white ml-64 w-full">
                    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-6">
                        <div className="mx-auto max-w-lg text-center">
                            <h2 className="text-3xl text-black font-bold sm:text-4xl">Kickstart your learnings</h2>
                        </div>

                        {error && <div className="text-red-500 text-center">{error}</div>}

                        <div className="mt-8">
                            {advice ? (
                                <>
                                    <div className="text-center mb-8">
                                        <p className="text-lg text-gray-700">{advice.intro}</p>
                                    </div>
                                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                                        {advice.topics && advice.topics.length > 0 ? (
                                            advice.topics.map((topic, index) => (
                                                <div key={index} className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-blue-500/10 hover:shadow-blue-500/10">
                                                    <h2 className="mt-4 text-xl font-bold text-black">{topic.headline}</h2>
                                                    <p className="mt-1 text-sm text-gray-500">{topic.description}</p>
                                                </div>
                                            ))
                                        ) : (
                                            <div className="text-center mt-8">No topics available</div>
                                        )}
                                    </div>
                                </>
                            ) : (
                                <div className="text-center mt-8">Loading...</div>
                            )}
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}

export default Foundations;
