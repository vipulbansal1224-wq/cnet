"use client";

import React, { useState, useEffect } from 'react';
import { cccMockQuestions, MockQuestion } from '../data/mockTestData';
import { 
  X, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  HelpCircle, 
  ArrowLeft, 
  ArrowRight, 
  RotateCcw, 
  Award, 
  Bookmark,
  Check,
  Send
} from 'lucide-react';

interface MockExamModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MockExamModal({ isOpen, onClose }: MockExamModalProps) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, 'A' | 'B' | 'C' | 'D'>>({});
  const [flagged, setFlagged] = useState<Record<number, boolean>>({});
  const [timeLeft, setTimeLeft] = useState(900); // 15 minutes (900 seconds)
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [candidateName, setCandidateName] = useState('Guest Student');
  const [examStarted, setExamStarted] = useState(false);

  // Timer effect
  useEffect(() => {
    if (!isOpen || !examStarted || isSubmitted) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmitExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen, examStarted, isSubmitted]);

  if (!isOpen) return null;

  const currentQ = cccMockQuestions[currentIdx];

  const handleSelectOption = (opt: 'A' | 'B' | 'C' | 'D') => {
    setUserAnswers(prev => ({
      ...prev,
      [currentQ.id]: opt
    }));
  };

  const handleClearAnswer = () => {
    setUserAnswers(prev => {
      const copy = { ...prev };
      delete copy[currentQ.id];
      return copy;
    });
  };

  const handleToggleFlag = () => {
    setFlagged(prev => ({
      ...prev,
      [currentQ.id]: !prev[currentQ.id]
    }));
  };

  const handleSubmitExam = () => {
    setIsSubmitted(true);
  };

  const handleRestart = () => {
    setUserAnswers({});
    setFlagged({});
    setTimeLeft(900);
    setCurrentIdx(0);
    setIsSubmitted(false);
    setExamStarted(true);
  };

  // Score calculation
  const totalQuestions = cccMockQuestions.length;
  let correctCount = 0;
  cccMockQuestions.forEach(q => {
    if (userAnswers[q.id] === q.correctAnswer) {
      correctCount += 1;
    }
  });

  const percentage = Math.round((correctCount / totalQuestions) * 100);
  const isPass = percentage >= 50;

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl w-full max-w-5xl h-[95vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Top Header */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-950 text-white p-4 sm:p-5 flex items-center justify-between border-b border-blue-800 flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 font-black flex items-center justify-center text-sm shadow">
              CCC
            </div>
            <div>
              <h3 className="font-extrabold text-base sm:text-lg">
                NIELIT CCC Online Mock Examination
              </h3>
              <p className="text-xs text-blue-200">
                C-NET Multimedia Computer Education Centre, Ludhiana Portal
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {examStarted && !isSubmitted && (
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 text-amber-300 font-mono font-bold text-sm border border-slate-700 shadow-inner">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>{formatTime(timeLeft)}</span>
              </div>
            )}
            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
              title="Close Exam Window"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Start Screen */}
        {!examStarted ? (
          <div className="p-6 sm:p-12 overflow-y-auto flex-grow flex flex-col items-center justify-center text-center space-y-6">
            <div className="w-16 h-16 rounded-3xl bg-blue-100 text-blue-700 flex items-center justify-center shadow-lg">
              <Award className="w-8 h-8" />
            </div>

            <div className="max-w-xl space-y-2">
              <h4 className="text-2xl font-black text-slate-900">
                Welcome to Online CCC Mock Test Paper
              </h4>
              <p className="text-slate-600 text-sm">
                This test simulates the actual NIELIT CCC (Course on Computer Concepts) online examination pattern. 
                Questions are provided in both Hindi and English.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-left max-w-md w-full space-y-3 text-xs sm:text-sm text-slate-700">
              <p className="font-bold text-slate-900 border-b pb-2">Exam Instructions & Rules:</p>
              <p>• Total Questions: <strong>10 Sample Questions</strong></p>
              <p>• Time Limit: <strong>15 Minutes</strong></p>
              <p>• Passing Marks: <strong>50% (Grade D or above)</strong></p>
              <p>• No Negative Marking for incorrect answers.</p>
              
              <div className="pt-2">
                <label className="block text-xs font-semibold text-slate-700 mb-1">Enter Candidate / Student Name:</label>
                <input
                  type="text"
                  value={candidateName}
                  onChange={(e) => setCandidateName(e.target.value)}
                  placeholder="e.g. Aman Sharma"
                  className="w-full px-3 py-2 border border-slate-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
            </div>

            <button
              onClick={() => setExamStarted(true)}
              className="bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3.5 rounded-2xl shadow-lg shadow-blue-600/30 text-base transition transform hover:-translate-y-0.5"
            >
              Start Online CCC Exam Now
            </button>
          </div>
        ) : isSubmitted ? (
          /* Result Summary & Analysis Screen */
          <div className="p-6 sm:p-10 overflow-y-auto flex-grow space-y-8">
            <div className={`p-8 rounded-3xl text-center space-y-4 border ${
              isPass ? 'bg-emerald-50 border-emerald-300' : 'bg-red-50 border-red-300'
            }`}>
              <div className={`w-16 h-16 rounded-full mx-auto flex items-center justify-center font-black text-2xl ${
                isPass ? 'bg-emerald-600 text-white' : 'bg-red-600 text-white'
              }`}>
                {isPass ? '✓' : '✕'}
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
                  Examination Result for {candidateName}
                </span>
                <h3 className={`text-2xl sm:text-3xl font-black ${
                  isPass ? 'text-emerald-900' : 'text-red-900'
                }`}>
                  {isPass ? 'Congratulations! You Passed the CCC Mock Exam' : 'Needs Practice - You Did Not Qualify'}
                </h3>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-6 pt-2">
                <div className="bg-white px-5 py-3 rounded-2xl shadow-sm border border-slate-200">
                  <span className="text-xs text-slate-500 block">Total Score</span>
                  <strong className="text-xl font-black text-slate-900">{correctCount} / {totalQuestions}</strong>
                </div>

                <div className="bg-white px-5 py-3 rounded-2xl shadow-sm border border-slate-200">
                  <span className="text-xs text-slate-500 block">Percentage</span>
                  <strong className="text-xl font-black text-blue-700">{percentage}%</strong>
                </div>

                <div className="bg-white px-5 py-3 rounded-2xl shadow-sm border border-slate-200">
                  <span className="text-xs text-slate-500 block">Grade Awarded</span>
                  <strong className="text-xl font-black text-amber-600">
                    {percentage >= 85 ? 'Grade S' : percentage >= 75 ? 'Grade A' : percentage >= 65 ? 'Grade B' : percentage >= 50 ? 'Grade C' : 'Fail (F)'}
                  </strong>
                </div>
              </div>

              <div className="pt-2 flex justify-center gap-3">
                <button
                  onClick={handleRestart}
                  className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 py-2.5 rounded-xl text-sm transition shadow"
                >
                  <RotateCcw className="w-4 h-4" />
                  Retake Test
                </button>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-sm transition"
                >
                  Close Portal
                </button>
              </div>
            </div>

            {/* Question by Question Detailed Solutions */}
            <div className="space-y-4">
              <h4 className="font-extrabold text-lg text-slate-900 flex items-center gap-2">
                <span>Detailed Question Review & Explanations</span>
                <span className="text-xs font-normal text-slate-500">({totalQuestions} Questions)</span>
              </h4>

              <div className="space-y-4">
                {cccMockQuestions.map((q, idx) => {
                  const userAnswer = userAnswers[q.id];
                  const isCorrect = userAnswer === q.correctAnswer;
                  return (
                    <div 
                      key={q.id}
                      className={`p-5 rounded-2xl border ${
                        isCorrect ? 'bg-emerald-50/40 border-emerald-200' : 'bg-red-50/40 border-red-200'
                      } space-y-3`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <span className="font-bold text-xs px-2.5 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700">
                          Q{idx + 1} • {q.topic}
                        </span>
                        <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                          isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {isCorrect ? '✓ Correct (+1)' : userAnswer ? '✕ Incorrect' : '○ Not Attempted'}
                        </span>
                      </div>

                      <div>
                        <p className="font-bold text-slate-900 text-sm">{q.questionHindi}</p>
                        <p className="text-xs text-slate-600 italic mt-0.5">{q.questionEnglish}</p>
                      </div>

                      {/* Options */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        {(['A', 'B', 'C', 'D'] as const).map(opt => {
                          const isOptionCorrect = q.correctAnswer === opt;
                          const isOptionUser = userAnswer === opt;
                          let style = 'bg-white border-slate-200 text-slate-700';
                          if (isOptionCorrect) {
                            style = 'bg-emerald-100 border-emerald-400 font-bold text-emerald-900';
                          } else if (isOptionUser && !isOptionCorrect) {
                            style = 'bg-red-100 border-red-400 font-bold text-red-900';
                          }
                          return (
                            <div key={opt} className={`p-2.5 rounded-xl border flex items-center justify-between ${style}`}>
                              <span>{opt}. {q.options[opt]}</span>
                              {isOptionCorrect && <Check className="w-4 h-4 text-emerald-700" />}
                            </div>
                          );
                        })}
                      </div>

                      {/* Explanation */}
                      <div className="p-3 bg-white/90 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-1">
                        <span className="font-bold text-blue-700 block">Explanation (स्पष्टीकरण):</span>
                        <p>{q.explanationHindi}</p>
                        <p className="text-slate-500 italic">{q.explanationEnglish}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          /* Live Exam Arena */
          <div className="flex-grow flex flex-col md:flex-row overflow-hidden">
            
            {/* Left/Center: Active Question Area */}
            <div className="flex-grow p-4 sm:p-8 overflow-y-auto flex flex-col justify-between space-y-6">
              <div className="space-y-6">
                
                {/* Question Header & Meta */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <span className="font-black text-sm px-3 py-1 rounded-lg bg-blue-100 text-blue-800">
                      Question {currentIdx + 1} of {totalQuestions}
                    </span>
                    <span className="text-xs text-slate-500 font-medium hidden sm:inline-block">
                      Section: {currentQ.topic}
                    </span>
                  </div>

                  <button
                    onClick={handleToggleFlag}
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold border transition ${
                      flagged[currentQ.id]
                        ? 'bg-amber-100 border-amber-300 text-amber-800'
                        : 'bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    <Bookmark className="w-3.5 h-3.5" />
                    <span>{flagged[currentQ.id] ? 'Marked for Review' : 'Mark for Review'}</span>
                  </button>
                </div>

                {/* Question Text (Hindi & English) */}
                <div className="space-y-2 bg-slate-50 p-5 rounded-2xl border border-slate-200/80">
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                    {currentQ.questionHindi}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 italic">
                    {currentQ.questionEnglish}
                  </p>
                </div>

                {/* Multiple Choice Options */}
                <div className="space-y-3">
                  {(['A', 'B', 'C', 'D'] as const).map(opt => {
                    const isSelected = userAnswers[currentQ.id] === opt;
                    return (
                      <button
                        key={opt}
                        onClick={() => handleSelectOption(opt)}
                        className={`w-full text-left p-4 rounded-2xl border-2 transition-all flex items-center justify-between text-xs sm:text-sm ${
                          isSelected
                            ? 'bg-blue-50 border-blue-600 text-blue-900 font-bold shadow-sm'
                            : 'bg-white border-slate-200 text-slate-800 hover:bg-slate-50 hover:border-slate-300'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs ${
                            isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700'
                          }`}>
                            {opt}
                          </span>
                          <span>{currentQ.options[opt]}</span>
                        </div>
                        {isSelected && <Check className="w-5 h-5 text-blue-600" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Control Buttons */}
              <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
                <div className="flex gap-2">
                  <button
                    disabled={currentIdx === 0}
                    onClick={() => setCurrentIdx(prev => prev - 1)}
                    className="inline-flex items-center gap-1 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 disabled:opacity-40 text-xs sm:text-sm font-semibold transition"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Previous
                  </button>
                  <button
                    onClick={handleClearAnswer}
                    className="px-3 py-2 rounded-xl text-slate-500 hover:text-slate-800 text-xs font-semibold transition"
                  >
                    Clear Response
                  </button>
                </div>

                <div className="flex gap-2">
                  {currentIdx < totalQuestions - 1 ? (
                    <button
                      onClick={() => setCurrentIdx(prev => prev + 1)}
                      className="inline-flex items-center gap-1 px-5 py-2 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-xs sm:text-sm font-bold transition shadow"
                    >
                      <span>Save & Next</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmitExam}
                      className="inline-flex items-center gap-1.5 px-6 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold transition shadow"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Exam</span>
                    </button>
                  )}
                </div>
              </div>

            </div>

            {/* Right: Question Navigation Palette */}
            <div className="w-full md:w-72 bg-slate-50 border-t md:border-t-0 md:border-l border-slate-200 p-4 sm:p-6 flex flex-col justify-between flex-shrink-0">
              <div className="space-y-4">
                <div>
                  <h5 className="font-bold text-xs uppercase tracking-wider text-slate-700">
                    Question Palette
                  </h5>
                  <p className="text-[11px] text-slate-500">Candidate: {candidateName}</p>
                </div>

                {/* Legend */}
                <div className="grid grid-cols-2 gap-2 text-[10px] text-slate-600">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3.5 h-3.5 rounded bg-emerald-500"></span>
                    <span>Answered ({Object.keys(userAnswers).length})</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-3.5 h-3.5 rounded bg-slate-300"></span>
                    <span>Not Answered ({totalQuestions - Object.keys(userAnswers).length})</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-3.5 h-3.5 rounded bg-amber-400"></span>
                    <span>Marked ({Object.values(flagged).filter(Boolean).length})</span>
                  </div>
                </div>

                {/* Palette buttons grid */}
                <div className="grid grid-cols-5 gap-2 pt-2">
                  {cccMockQuestions.map((q, idx) => {
                    const isAnswered = userAnswers[q.id] !== undefined;
                    const isFlagged = flagged[q.id];
                    const isCurrent = currentIdx === idx;

                    let bg = 'bg-slate-200 text-slate-700 hover:bg-slate-300';
                    if (isAnswered) bg = 'bg-emerald-600 text-white font-bold';
                    if (isFlagged) bg = 'bg-amber-400 text-slate-950 font-bold';

                    return (
                      <button
                        key={q.id}
                        onClick={() => setCurrentIdx(idx)}
                        className={`h-9 rounded-xl text-xs font-semibold flex items-center justify-center transition border ${
                          isCurrent ? 'ring-2 ring-blue-600 ring-offset-2' : ''
                        } ${bg}`}
                      >
                        {idx + 1}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4 border-t border-slate-200">
                <button
                  onClick={handleSubmitExam}
                  className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm transition shadow flex items-center justify-center gap-1.5"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit CCC Test</span>
                </button>
              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
}
