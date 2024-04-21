'use client'

import { UserContext } from "@/context/userContext";
import React, { useState, useEffect, useContext } from 'react';
import saveScoreInfo from '@/utils/saveScore';
import toast from "react-hot-toast";

const questionsData = [
  {
    question: 'What is the output of the following C code? \n int x = 5; \n printf("%d", x++ + ++x);',
    options: ['10', '11', '12', '13'],
    correctAnswer: '12',
    marks: 5,
  },
  {
    question: 'Which of the following is not a valid database normalization form?',
    options: ['1NF', '2NF', '3NF', '4NF'],
    correctAnswer: '4NF',
    marks: 5,
  },
  {
    question: 'What is the primary function of a router in a computer network?',
    options: ['Filtering packets', 'Connecting multiple networks', 'Providing security', 'Storing data'],
    correctAnswer: 'Connecting multiple networks',
    marks: 5,
  },
  {
    question: 'Which of the following is not a fundamental operating system concept?',
    options: ['Processes', 'Threads', 'Memory management', 'Compilers'],
    correctAnswer: 'Compilers',
    marks: 5,
  },
  {
    question: 'In the context of theory of computation, what does the term "regular language" refer to?',
    options: ['Languages accepted by finite automata', 'Languages accepted by push-down automata', 'Languages accepted by Turing machines', 'None of the above'],
    correctAnswer: 'Languages accepted by finite automata',
    marks: 5,
  },
  {
    question: 'What is the purpose of the "static" keyword in C?',
    options: ['To allocate memory dynamically', 'To restrict the scope of a variable or function', 'To define a constant value', 'To create a new data type'],
    correctAnswer: 'To restrict the scope of a variable or function',
    marks: 5,
  },
  {
    question: 'Which of the following is not a type of database index?',
    options: ['Clustered index', 'Non-clustered index', 'Bitmap index', 'Hash index'],
    correctAnswer: 'Hash index',
    marks: 5,
  },
  {
    question: 'What is the purpose of the "default gateway" in a computer network?',
    options: ['To connect to the internet', 'To route traffic between different networks', 'To provide security', 'To store network configuration'],
    correctAnswer: 'To route traffic between different networks',
    marks: 5,
  },
  {
    question: 'Which of the following is not a scheduling algorithm for operating systems?',
    options: ['First-Come, First-Served (FCFS)', 'Shortest Job First (SJF)', 'Round Robin', 'Depth-First Search (DFS)'],
    correctAnswer: 'Depth-First Search (DFS)',
    marks: 5,
  },
  {
    question: 'In the theory of computation, what does the term "Turing machine" refer to?',
    options: ['A mathematical model of computation', 'A programming language', 'A type of computer hardware', 'A database management system'],
    correctAnswer: 'A mathematical model of computation',
    marks: 5,
  },
  {
    question: 'What is the output of the following C code? \n int x = 10, y = 20; \n printf("%d", x > y ? x : y);',
    options: ['10', '20', '0', 'Compiler error'],
    correctAnswer: '20',
    marks: 5,
  },
  {
    question: 'Which of the following is not a type of database transaction isolation level?',
    options: ['Read Uncommitted', 'Read Committed', 'Repeatable Read', 'Serializable'],
    correctAnswer: 'None of the above',
    marks: 5,
  },
  {
    question: 'What is the primary function of a switch in a computer network?',
    options: ['Connecting multiple networks', 'Filtering packets', 'Providing security', 'Forwarding data between connected devices'],
    correctAnswer: 'Forwarding data between connected devices',
    marks: 5,
  },
  {
    question: 'Which of the following is not a type of operating system?',
    options: ['Batch operating system', 'Time-sharing operating system', 'Distributed operating system', 'Relational operating system'],
    correctAnswer: 'Relational operating system',
    marks: 5,
  },
  {
    question: 'In the theory of computation, what does the term "context-free grammar" refer to?',
    options: ['A set of rules for generating languages', 'A type of programming language', 'A mathematical model of computation', 'None of the above'],
    correctAnswer: 'A set of rules for generating languages',
    marks: 5,
  },
  {
    question: 'What is the output of the following C code? \n int x = 5, y = 10; \n printf("%d", x++ + ++y);',
    options: ['16', '17', '18', '19'],
    correctAnswer: '17',
    marks: 5,
  },
  {
    question: 'Which of the following is not a type of database index?',
    options: ['B-tree index', 'Hash index', 'Bitmap index', 'Linked list index'],
    correctAnswer: 'Linked list index',
    marks: 5,
  },
  {
    question: 'What is the purpose of the "subnet mask" in a computer network?',
    options: ['To divide a network into smaller subnetworks', 'To provide security', 'To store network configuration', 'To connect to the internet'],
    correctAnswer: 'To divide a network into smaller subnetworks',
    marks: 5,
  },
  {
    question: 'Which of the following is not a type of memory management technique used in operating systems?',
    options: ['Paging', 'Segmentation', 'Virtual memory', 'Garbage collection'],
    correctAnswer: 'Garbage collection',
    marks: 5,
  },
  {
    question: 'In the theory of computation, what does the term "undecidable problem" refer to?',
    options: ['A problem that cannot be solved by any algorithm', 'A problem that can be solved efficiently', 'A problem that has no practical applications', 'None of the above'],
    correctAnswer: 'A problem that cannot be solved by any algorithm',
    marks: 5,
  },
  {
    question: 'What is the output of the following C code? \n int x = 10; \n x = x++ + ++x;  \n printf("%d", x);',
    options: ['21', '22', '23', '24'],
    correctAnswer: '22',
    marks: 5,
  },
  {
    question: 'Which of the following is not a type of database join operation?',
    options: ['Inner join', 'Outer join', 'Cross join', 'Union join'],
    correctAnswer: 'Union join',
    marks: 5,
  },
  {
    question: 'What is the primary function of a firewall in a computer network?',
    options: ['Connecting multiple networks', 'Filtering packets', 'Providing security', 'Forwarding data between connected devices'],
    correctAnswer: 'Providing security',
    marks: 5,
  },
  {
    question: 'Which of the following is not a type of operating system kernel?',
    options: ['Monolithic kernel', 'Microkernel', 'Hybrid kernel', 'Application kernel'],
    correctAnswer: 'Application kernel',
    marks: 5,
  },
  {
    question: 'Which of the following is not a valid data type in C?',
    options: ['float', 'double', 'real', 'char'],
    correctAnswer: 'real',
    marks: 5,
  },
  {
    question: 'Which statement is used to terminate a loop in C?',
    options: ['exit', 'return', 'terminate', 'break'],
    correctAnswer: 'break',
    marks: 5,
  },
  {
    question: 'In DBMS, ACID properties stand for:',
    options: ['Atomicity, Consistency, Integrity, Durability', 'Agility, Consistency, Integrity, Durability', 'Atomicity, Compliance, Integrity, Durability', 'Atomicity, Consistency, Isolation, Durability'],
    correctAnswer: 'Atomicity, Consistency, Isolation, Durability',
    marks: 5,
  },
  {
    question: 'What protocol is used for transferring files over the internet?',
    options: ['HTTP', 'SMTP', 'FTP', 'TCP'],
    correctAnswer: 'FTP',
    marks: 5,
  },
  {
    question: 'Which of the following is not a process scheduling algorithm in an operating system?',
    options: ['Round Robin', 'First Come, First Served (FCFS)', 'Shortest Job Next (SJN)', 'Random Access'],
    correctAnswer: 'Random Access',
    marks: 5,
  },
  {
    question: 'Which of the following is a non-deterministic finite automaton (NFA)?',
    options: ['Pushdown Automaton', 'Turing Machine', 'DFA', 'Mealy Machine'],
    correctAnswer: 'Mealy Machine',
    marks: 5,
  }];

const QuizComponent = () => {
  const { user } = useContext(UserContext);
  const userId = user?.uid;
  const testId = "test-2";

  const [selectedAnswers, setSelectedAnswers] = useState(new Array(questionsData.length).fill(null));
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30); // Initial time in seconds

  useEffect(() => {
    const timerId = setTimeout(() => {
      handleSubmit(); // Submit automatically after time runs out
    }, timeLeft * 1000); // Convert seconds to milliseconds

    return () => clearTimeout(timerId); // Cleanup function for timer
  }, [timeLeft]); // Dependency array ensures effect runs when timeLeft changes

  const handleOptionChange = (event, questionIndex) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[questionIndex] = event.target.value;
    setSelectedAnswers(newAnswers);
  };

  const handleSubmit = async () => {
    // if (!selectedAnswers.every(answer => answer !== null)) { // Check if all answers are selected
    //   alert('Please select an answer for all questions.');
    //   return;
    // }

    
    setShowResult(true);
    const finalScore = calculateScore();
    try {
    await saveScoreInfo(userId, finalScore, testId);
    toast.success('Score saved successfully!');
    } catch (error) {
      toast.error('Failed to save score. Please try again later.');
    }
  };

  const calculateScore = () => {
    let totalScore = 0;
    questionsData.forEach((question, index) => {
      if (question.correctAnswer === selectedAnswers[index]) {
        totalScore += question.marks;
      }
    });
    setScore(totalScore);
    return totalScore; 
  };

  const getAnsweredCount = () => selectedAnswers.filter(answer => answer !== null).length;
  const getUnansweredCount = () => questionsData.length - getAnsweredCount();

  const renderQuestion = (question, questionIndex) => (
    <div key={questionIndex} className="question-container shadow-3 mx-8 my-8 px-8">
      <h3 className="text-md py-4">{question.question}</h3>
      <ul>
        {question.options.map((option, optionIndex) => (
          <li key={optionIndex} className="py-1 px-2 ml-2 ">
            <input
              type="radio"
              className="cursor-pointer"
              id={`option-${questionIndex}-${optionIndex}`}
              name={`answer-${questionIndex}`}
              value={option}
              checked={selectedAnswers[questionIndex] === option}
              onChange={(event) => handleOptionChange(event, questionIndex)}
            />
            <label htmlFor={`option-${questionIndex}-${optionIndex}`}>{option}</label>
          </li>
        ))}
      </ul>
    </div>
  );

  const renderResult = () => (
    <div className="shadow-3 mx-8 my-8 px-8 py-12">
      <h2>Your Score: {score}</h2>
      <ul>
        {questionsData.map((question, index) => (
          <li key={index} className="my-2">
            {question.question} -{' '}
            {selectedAnswers[index] === question.correctAnswer ? (
              <span className="text-green-500">Correct</span>
            ) : (
              <span className="text-red-500">Incorrect (Correct Answer: {question.correctAnswer})</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="quiz-app py-16 px-8 min-h-[100vh]">
      <div className="progress-bar">
        <span>Answered: {getAnsweredCount()}/{questionsData.length}</span>
      </div>
      {showResult ? renderResult() : (
        <div >
          {questionsData.map(renderQuestion)}
          <div className="w-full flex justify-center items-center my-12">

          <button className="inline-flex justify-center items-center gap-x-2 text-center hover:gap-x-3 transition-all duration-300 shadow-lg  border border-transparent  text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white py-2 sm:py-3 px-3 sm:px-6  dark:focus:ring-offset-gray-800  bg-gradient-to-tl from-blue-600 to-violet-600  hover:shadow-blue-700/80 focus:ring-blue-600 text-white shadow-blue-300" onClick={handleSubmit} disabled={timeLeft === 0}>
            Submit 
          </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizComponent;