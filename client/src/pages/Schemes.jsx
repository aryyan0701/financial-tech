import React, {useState}  from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import ChatbotIcon from '../components/ChatbotIcon';
import ChatWindow from '../components/ChatWindow';

function Schemes() {
    
    const [isChatOpen, setIsChatOpen] = useState(false);
    return (
        <>
            <Navbar />
            <div className="flex pt-20">
                <Sidebar />
                <main className="flex-1 p-6 bg-gray-100 ml-64">
                    <div className="flex flex-wrap gap-6 mt-4 justify-center">
                        <div className="mx-auto max-w-lg text-center">
                            <h2 className="text-3xl text-black font-bold sm:text-4xl">Available Schemes</h2>
                        </div>
                        <div tabIndex={0} className="collapse collapse-arrow border-base-300 bg-base-200 border">
                            <div className="collapse-title text-xl font-medium">Atal Pension Yojana</div>
                            <div className="collapse-content">
                                <p>Atal Pension Yojana (APY) is an old age income security scheme for a savings account holder in the age group of 18-40 years, who is not an income tax-payee. It helps to address longevity risks among workers in unorganized sector and encourages the workers to voluntarily save for retirement.
                                </p>
                            </div>
                        </div>

                        <div tabIndex={0} className="collapse collapse-arrow border-base-300 bg-base-200 border">
                            <div className="collapse-title text-xl font-medium">Post Office Monthly Income Scheme                            </div>
                            <div className="collapse-content">
                                <p>POMIS is an investment scheme recognized and validated by the Ministry of Finance. It is one of the highest-earning schemes with an interest rate of 6.6%. The interest in this scheme is disbursed monthly. After opening a POMIS account, individuals can invest a minimum amount of ₹1500.
                                </p>
                            </div>
                        </div>

                        <div tabIndex={0} className="collapse collapse-arrow border-base-300 bg-base-200 border">
                            <div className="collapse-title text-xl font-medium">Pradhan Mantri Suraksha Bima Yojana
                            </div>
                            <div className="collapse-content">
                                <p>An Accident Insurance Scheme offering accidental death and disability cover for death or disability on account of an accident.
                                </p>
                            </div>
                        </div>

                        <div tabIndex={0} className="collapse collapse-arrow border-base-300 bg-base-200 border">
                            <div className="collapse-title text-xl font-medium">Pradhan Mantri Jan Dhan Yojana</div>
                            <div className="collapse-content">
                                <p>A National Mission for Financial Inclusion (NMFI), namely, Pradhan Mantri Jan Dhan Yojana (PMJDY) was launched by the Prime Minister across the country on 28th August, 2014. It envisages to provide universal banking services for every unbanked adult in the country.
                                </p>
                            </div>
                        </div>

                        <div tabIndex={0} className="collapse collapse-arrow border-base-300 bg-base-200 border">
                            <div className="collapse-title text-xl font-medium">Pradhan Mantri Garib Kalyan Anna Yojana
                            </div>
                            <div className="collapse-content">
                                <p>The scheme provides free food grain through the Public Distribution System, to all the priority households (ration card holders and those identified by the Antyodaya Anna Yojana scheme) - Migrants and the Poor.
                                </p>
                            </div>
                        </div>

                        <div tabIndex={0} className="collapse collapse-arrow border-base-300 bg-base-200 border">
                            <div className="collapse-title text-xl font-medium">Pradhan Mantri Jeevan Jyoti Bima Yojana
                            </div>
                            <div className="collapse-content">
                                <p>Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY) is an insurance scheme offering life insurance cover for death due to any reason. It is a one-year cover, renewable from year to year. The scheme is offered by banks/post offices and administered through life insurance companies.</p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
            {isChatOpen && <ChatWindow onClose={() => setIsChatOpen(false)} />}
            <ChatbotIcon onClick={() => setIsChatOpen(!isChatOpen)} />
        </>
    )
}

export default Schemes