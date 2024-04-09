import React, { useState } from "react";

const QuizX = () => {
  const questionsData = [
    {
      s_no: 1,
      question: "What is Hamming Code?",
      answers: [
        { text: "A type of error-detecting and error-correcting code", isCorrect: true },
        { text: "A type of encryption algorithm", isCorrect: false },
        { text: "A sorting algorithm", isCorrect: false },
        { text: "A compression technique", isCorrect: false },
      ],
    },
    {
      s_no: 2,
      question: "How does Hamming Code detect errors?",
      answers: [
        { text: "By comparing parity bits", isCorrect: false },
        { text: "By using checksums", isCorrect: false },
        { text: "By counting the number of 0s and 1s", isCorrect: false },
        { text: "By detecting and correcting single-bit errors", isCorrect: true },
      ],
    },
    {
      s_no: 3,
      question: "What is the minimum number of parity bits required in Hamming Code?",
      answers: [
        { text: "2", isCorrect: false },
        { text: "3", isCorrect: true },
        { text: "4", isCorrect: false },
        { text: "5", isCorrect: false },
      ],
    },
    {
      s_no: 4,
      question: "What is the purpose of parity bits in Hamming Code?",
      answers: [
        { text: "To increase data storage capacity", isCorrect: false },
        { text: "To add redundancy for error detection and correction", isCorrect: true },
        { text: "To decrease transmission time", isCorrect: false },
        { text: "To improve data compression", isCorrect: false },
      ],
    },
    {
      s_no: 5,
      question: "Which mathematical concept is fundamental to Hamming Code?",
      answers: [
        { text: "Modular arithmetic", isCorrect: false },
        { text: "Number theory", isCorrect: false },
        { text: "Linear algebra", isCorrect: true },
        { text: "Calculus", isCorrect: false },
      ],
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(questionsData.length).fill(null));
  const [showResult, setShowResult] = useState(false);

  const handleAnswerButtonClick = (isCorrect) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestionIndex] = isCorrect;
    setUserAnswers(updatedAnswers);

    if (currentQuestionIndex + 1 < questionsData.length) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers(Array(questionsData.length).fill(null));
    setShowResult(false);
  };

  const renderQuestion = (question) => {
    return (
      <div className="flex flex-col items-center font-Mooli w-full ">
        <div className="text-2xl font-serif p-6 rounded-lg bg-gray-400 w-full text-center ">
          <h2>{"Question " + question.s_no + ": " + question.question}</h2>
        </div>
        <div className="grid grid-cols-2 w-full">
          {question.answers.map((answer, index) => (
            <div key={index} className="text-center grid mx-1">
              <button className="md:w-full bg-gray-300 border-2 my-4 p-6 mt-4 rounded-xl mx-2 hover:bg-blue-500" onClick={() => handleAnswerButtonClick(answer.isCorrect)}>
                {answer.text}
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderResult = () => {
    return (
      <div className="text-center flex flex-col items-center">
        <h2 className="font-serif text-2xl font-bold m-2">Quiz Result</h2>
        <p className="font-serif text-2xl font-bold m-2">Your Score: {userAnswers.filter((answer) => answer).length}</p>
        <div className="font-serif text-lg font-bold text-justify mx-12 flex flex-wrap justify-center">
          {questionsData.map((question, index) => (
            <div className="question-answer flex flex-col items-center" key={question.s_no}>
              <p>
                <button onClick={() => setCurrentQuestionIndex(index)} className="ml-2 focus:outline-none">
                  <span className={`rounded-full h-8 w-8 flex items-center justify-center text-white ${userAnswers[index] === null ? '' : userAnswers[index] ? 'bg-green-500' : 'bg-red-500'}`}>
                    {question.s_no}
                  </span>
                </button>
              </p>
              <br />
              {/* Display the question number only */}
            </div>
          ))}
        </div>
        <button onClick={restartQuiz} className="border-2 m-4 md:ml-20 rounded-lg shadow-2xl drop-shadow-xl p-2 bg-blue-900 font-sans text-white font-semibold hover:transform hover:scale-110 hover:bg-opacity-75 hover:duration-300">Restart Quiz</button>
      </div>
    );
  };

  return (
    <div>
      <div className=" mx-20 my-6 p-6 bg-gray-200 shadow-2xl drop-shadow-xl quiz-box">
        {showResult ? renderResult() : renderQuestion(questionsData[currentQuestionIndex])}
      </div>
    </div>
  );
};

export default QuizX;
