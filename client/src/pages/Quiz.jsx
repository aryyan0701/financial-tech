import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';

const quizData = [
    // Easy Questions
    {
      id: 1,
      question: "What is the primary purpose of a budget?",
      options: ["To track spending", "To save money", "To plan for future expenses", "All of the above"],
      answer: "All of the above",
      difficulty: "easy"
    },
    {
      id: 2,
      question: "What does APR stand for?",
      options: ["Annual Percentage Rate", "Annual Payment Rate", "Average Percentage Rate", "Annual Payment Ratio"],
      answer: "Annual Percentage Rate",
      difficulty: "easy"
    },
    {
      id: 3,
      question: "What is a checking account?",
      options: ["A savings account", "An investment account", "A type of insurance", "An account for daily transactions"],
      answer: "An account for daily transactions",
      difficulty: "easy"
    },
    {
      id: 4,
      question: "What is a credit score?",
      options: ["A number representing your financial health", "Your income level", "The amount of money you have saved", "The interest rate on a loan"],
      answer: "A number representing your financial health",
      difficulty: "easy"
    },
    {
      id: 5,
      question: "What does FDIC stand for?",
      options: ["Federal Deposit Insurance Corporation", "Federal Department of Investments and Commerce", "Financial Development and Investment Center", "Federal Department of Income and Capital"],
      answer: "Federal Deposit Insurance Corporation",
      difficulty: "easy"
    },
    {
      id: 6,
      question: "What is a mortgage?",
      options: ["A type of loan for buying property", "A retirement plan", "An insurance policy", "A type of investment"],
      answer: "A type of loan for buying property",
      difficulty: "easy"
    },
  
    // Medium Questions
    {
      id: 7,
      question: "What is compound interest?",
      options: ["Interest on the initial principal only", "Interest on interest", "Simple interest", "None of the above"],
      answer: "Interest on interest",
      difficulty: "medium"
    },
    {
      id: 8,
      question: "What is the difference between a stock and a bond?",
      options: ["Stocks are equity; bonds are debt", "Bonds are equity; stocks are debt", "Both are forms of equity", "Both are forms of debt"],
      answer: "Stocks are equity; bonds are debt",
      difficulty: "medium"
    },
    {
      id: 9,
      question: "What is an index fund?",
      options: ["A fund that tracks a specific index", "A type of bond", "An insurance policy", "A retirement account"],
      answer: "A fund that tracks a specific index",
      difficulty: "medium"
    },
    {
      id: 10,
      question: "What is diversification in investing?",
      options: ["Putting all your money in one stock", "Spreading your investments across various assets", "Investing only in safe assets", "None of the above"],
      answer: "Spreading your investments across various assets",
      difficulty: "medium"
    },
    {
      id: 11,
      question: "What is the purpose of a credit report?",
      options: ["To show your income level", "To track your spending habits", "To provide a history of your credit activities", "To calculate your net worth"],
      answer: "To provide a history of your credit activities",
      difficulty: "medium"
    },
    {
      id: 12,
      question: "What is an emergency fund?",
      options: ["Money set aside for unexpected expenses", "A retirement account", "An investment account", "A loan"],
      answer: "Money set aside for unexpected expenses",
      difficulty: "medium"
    },
  
    // Hard Questions
    {
      id: 13,
      question: "What is a mutual fund?",
      options: ["A single company's stock", "A type of bond", "A diversified portfolio of stocks and bonds", "None of the above"],
      answer: "A diversified portfolio of stocks and bonds",
      difficulty: "hard"
    },
    {
      id: 14,
      question: "What is a 401(k) plan?",
      options: ["A retirement savings plan", "A type of insurance", "A loan", "A credit card"],
      answer: "A retirement savings plan",
      difficulty: "hard"
    },
    {
      id: 15,
      question: "What is an IRA?",
      options: ["International Revenue Account", "Individual Retirement Account", "Investment Revenue Account", "Interest Rate Account"],
      answer: "Individual Retirement Account",
      difficulty: "hard"
    },
    {
      id: 16,
      question: "What is a hedge fund?",
      options: ["A fund that pools capital from accredited investors", "A government savings plan", "A type of insurance", "A low-risk investment"],
      answer: "A fund that pools capital from accredited investors",
      difficulty: "hard"
    },
    {
      id: 17,
      question: "What does ROI stand for?",
      options: ["Rate of Investment", "Return on Investment", "Revenue on Investment", "Ratio of Investment"],
      answer: "Return on Investment",
      difficulty: "hard"
    },
    {
      id: 18,
      question: "What is a capital gain?",
      options: ["Profit from the sale of an asset", "Loss from the sale of an asset", "Interest earned on a savings account", "Dividend received from stocks"],
      answer: "Profit from the sale of an asset",
      difficulty: "hard"
    },
  ];
  

const QuizPage = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState('easy');
  const [answers, setAnswers] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [score, setScore] = useState(0);

  const handleDifficultyChange = (event) => {
    setSelectedDifficulty(event.target.value);
  };

  const handleOptionChange = (questionId, option) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: option
    }));
  };

  const handleSubmit = () => {
    let newScore = 0;
    quizData.forEach((question) => {
      if (question.difficulty === selectedDifficulty && answers[question.id] === question.answer) {
        newScore++;
      }
    });
    setScore(newScore);
    setShowModal(true);
  };

  const filteredQuestions = quizData.filter((question) => question.difficulty === selectedDifficulty);

  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-8">Financial Literacy Quiz</h1>
        <div className="mb-4 text-center">
          <label htmlFor="difficulty" className="mr-2">Select Difficulty:</label>
          <select
            id="difficulty"
            value={selectedDifficulty}
            onChange={handleDifficultyChange}
            className="p-2 border border-gray-300 rounded"
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredQuestions.map((question) => (
            <div key={question.id} className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-2">{question.question}</h2>
              {question.options.map((option, index) => (
                <div key={index}>
                  <label className="block">
                    <input
                      type="radio"
                      name={`question-${question.id}`}
                      value={option}
                      checked={answers[question.id] === option}
                      onChange={() => handleOptionChange(question.id, option)}
                      className="mr-2"
                    />
                    {option}
                  </label>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white p-2 rounded"
          >
            Submit
          </button>
        </div>
      </div>
      
      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Quiz Result</h2>
            <p className="mb-4">Your score: {score} / {filteredQuestions.length}</p>
            <button
              onClick={() => setShowModal(false)}
              className="bg-blue-500 text-white p-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
      </div>

      <Footer/>
    </>
  );
};

export default QuizPage;
