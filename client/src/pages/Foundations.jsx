import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { CiCalculator2 } from "react-icons/ci";
import { MdOutlineSavings } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";
import { BsGraphUpArrow } from "react-icons/bs";
import { Link } from 'react-router-dom';

function Foundations() {
    return (
        <>
            <Navbar />
            <div className="flex pt-20">
                <Sidebar />
                <section className="bg-gray-100 text-white ml-64">
                    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-6">
                        <div className="mx-auto max-w-lg text-center">
                            <h2 className="text-3xl text-black font-bold sm:text-4xl">Kickstart your learnings</h2>
                        </div>

                        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-blue-500/10 hover:shadow-blue-500/10"
                                href="#"
                            >
                                <RiMoneyRupeeCircleLine className='text-3xl text-blue-500' />

                                <h2 className="mt-4 text-xl font-bold text-black">Money Management</h2>

                                <p className="mt-1 text-sm text-gray-500">
                                    Effectively overseeing income and expenses to secure financial stability and achieve personal goals.
                                </p>
                            </a>

                            <Link to='./debt'>
                                <a
                                    className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-blue-500/10 hover:shadow-blue-500/10"
                                    href="#"
                                >
                                    <GiTakeMyMoney className='text-3xl text-blue-500' />

                                    <h2 className="mt-4 text-xl font-bold text-black">Debt Management</h2>

                                    <p className="mt-1 text-sm text-gray-500">
                                        Strategically handling and paying off debts to minimize financial stress and improve creditworthiness.
                                    </p>
                                </a>
                            </Link>
                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-blue-500/10 hover:shadow-blue-500/10"
                                href="#"
                            >
                                <CiCalculator2 className='text-3xl text-blue-500 font-bold' />

                                <h2 className="mt-4 text-xl font-bold text-black">Budget </h2>

                                <p className="mt-1 text-sm text-gray-500">
                                    Creating a plan to allocate income towards essential needs, savings, and discretionary spending.
                                </p>
                            </a>

                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-blue-500/10 hover:shadow-blue-500/10"
                                href="#"
                            >
                                <MdOutlineSavings className='text-3xl text-blue-500' />

                                <h2 className="mt-4 text-xl font-bold text-black">Saving Strategies</h2>

                                <p className="mt-1 text-sm text-gray-500">
                                    Employing methods to set aside money for future needs, emergencies, and financial goals.
                                </p>
                            </a>

                            <a
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-blue-500/10 hover:shadow-blue-500/10"
                                href="#"
                            >
                                <BsGraphUpArrow className='text-3xl text-blue-500' />

                                <h2 className="mt-4 text-xl font-bold text-black">Investing </h2>

                                <p className="mt-1 text-sm text-gray-500">
                                    Putting money into various assets to grow wealth and secure financial independence
                                </p>
                            </a>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}

export default Foundations;
