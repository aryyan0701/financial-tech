import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { BsCreditCard } from 'react-icons/bs';
import { RiExchangeDollarLine } from 'react-icons/ri';
import { BiCalculator } from 'react-icons/bi';
import { IoIosRocket } from 'react-icons/io';

function Debt() {
    return (
        <>
            <Navbar />
            <div className="flex pt-20">
                <Sidebar />
                <main className="flex-1 p-6 bg-gray-100 ml-64">
                    <div className="max-w-4xl mx-auto">
                        {/* Know your credit score */}
                        <div className="mb-8">
                            <h1 className="text-3xl font-bold text-gray-800 mb-4">Debt Management Tips</h1>
                            <div className="bg-white rounded-lg shadow-md p-6">
                                <div className="flex items-center mb-4">
                                    <BsCreditCard className="text-4xl text-blue-500 mr-4" />
                                    <h2 className="text-xl font-bold text-gray-800">Know your credit score</h2>
                                </div>
                                <p className="text-gray-600">
                                    Your credit score is like your financial report card. Lenders use it to determine your creditworthiness and offer you loans at competitive rates. A higher credit score means better loan terms.
                                </p>
                            </div>
                        </div>

                        {/* Compare loan options */}
                        <div className="mb-8">
                            <div className="bg-white rounded-lg shadow-md p-6">
                                <div className="flex items-center mb-4">
                                    <RiExchangeDollarLine className="text-4xl text-blue-500 mr-4" />
                                    <h2 className="text-xl font-bold text-gray-800">Compare loan options</h2>
                                </div>
                                <p className="text-gray-600">
                                    There are different types of loans like personal, home, and education loans. Each comes with its interest rate, repayment period, and eligibility criteria. Compare these factors from different lenders before committing.
                                </p>
                            </div>
                        </div>

                        {/* Calculate your EMI */}
                        <div className="mb-8">
                            <div className="bg-white rounded-lg shadow-md p-6">
                                <div className="flex items-center mb-4">
                                    <BiCalculator className="text-4xl text-blue-500 mr-4" />
                                    <h2 className="text-xl font-bold text-gray-800">Calculate your EMI</h2>
                                </div>
                                <p className="text-gray-600">
                                    Your Equated Monthly Installment (EMI) is the fixed amount you pay back every month. Use an EMI calculator to understand how much your EMI will be based on the loan amount, interest rate, and tenure.
                                </p>
                            </div>
                        </div>

                        {/* Prioritize debt repayment */}
                        <div className="mb-8">
                            <div className="bg-white rounded-lg shadow-md p-6">
                                <div className="flex items-center mb-4">
                                    <IoIosRocket className="text-4xl text-blue-500 mr-4" />
                                    <h2 className="text-xl font-bold text-gray-800">Prioritize debt repayment</h2>
                                </div>
                                <p className="text-gray-600">
                                    Make sure your loan repayments are on time to avoid late fees and damage your credit score. Consider prioritizing high-interest loans for faster debt reduction.
                                </p>
                            </div>
                        </div>

                        {/* example debt repayment */}
                        <div>
                            <div className="bg-white rounded-lg shadow-md p-6">
                                <div className="flex items-center mb-4">
                                    <IoIosRocket className="text-4xl text-blue-500 mr-4" />
                                    <h2 className="text-xl font-bold text-gray-800">Example</h2>
                                </div>
                                <p className="text-gray-600">
                                    Priya wants to buy a new scooter for her commute. She has 50,000 rs saved but needs 1,00,000 rs in total. She explores loan options:
                                </p>
                                <p className="text-gray-600">
                                   <b>Option 1:</b> A personal loan from a bank offers 10% interest and a 3-year repayment period.
                                </p>
                                <p className="text-gray-600">
                                  <b>Option 2:</b>  A loan from a finance company offers 12% interest and a 2-year repayment period.
                                </p>
                                <p className="text-gray-600">
                                Using an EMI calculator, Priya finds:
                                </p>
                                <p className="text-gray-600">
                                <b>Option 1:</b> EMI = 3,150 rs
                                </p>
                                <p className="text-gray-600">
                                 <b>Option 2: </b>EMI = 4,600 rs
                                </p>
                                <p className="text-gray-600 mt-4">
                                Priya chooses Option 1 as it has a lower EMI, despite a longer repayment period, fitting better into her budget.
                                </p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
        </>
    );
}

export default Debt;
