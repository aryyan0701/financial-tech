import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import ChatbotIcon from '../components/ChatbotIcon';
import ChatWindow from '../components/ChatWindow';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const [isChatOpen, setIsChatOpen] = useState(false);

    return (
        <>
            <Navbar />
            <div className="flex pt-20">
                <Sidebar />
                <main className="flex-1 p-6 bg-gray-100 ml-64">
                    <div className="flex flex-wrap gap-6 mt-4 justify-center">
                        <div className="card bg-base-100 w-96 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img
                                    src="https://media.licdn.com/dms/image/D4D12AQEJKjzawEPbYw/article-cover_image-shrink_720_1280/0/1689850188056?e=2147483647&v=beta&t=sfpzf7cmxMxARs95FxW5LsIUES1aTrLo5H0vh5Ehg7M"
                                    alt="Shoes"
                                    className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Financial Foundations</h2>
                                <p>Basics of investing in stocks, bonds, mutual funds, and other investment vehicles.</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary"><Link to='/dashboard/foundations'>Learn More..</Link></button>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-base-100 w-96 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img
                                    src="https://www.idfcfirstbank.com/content/dam/idfcfirstbank/images/blog/credit-card/credit-card-balance-transfer-for-debt-management-717X404.jpg"
                                    alt="Shoes"
                                    className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Money Management!</h2>
                                <p>Understanding how credit works and how to maintain a good credit score.</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary">Learn More..</button>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-base-100 w-96 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img
                                    src="https://www.silverleafwealth.com/sites/default/files/users/silverleafwealth/blog%20post%20financial%20goals.jpg"
                                    alt="Shoes"
                                    className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Government Schemes and Benefits</h2>
                                <p>"Learning how to set financial goals and create a plan to achieve them.</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary"><Link to='/dashboard/scheme'>Learn More..</Link></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
            {isChatOpen && <ChatWindow onClose={() => setIsChatOpen(false)} />}
            <ChatbotIcon onClick={() => setIsChatOpen(!isChatOpen)} />
        </>
    );
};

export default Dashboard;
