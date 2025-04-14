'use client';

import { useState } from 'react';
import { Polarity, ChoiceId } from './jstTypes';
import Instruct from "./Instruct";
import Progress from "./Progress";
import Choosings from "./Choosings";
import Outro from "./Outro";
import exam from './demoExam';

export default function Home() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [best, setBest] = useState<ChoiceId>('');
  const [worst, setWorst] = useState<ChoiceId>('');
  const [tally, setTally] = useState(0);
  const examLength = exam.questionsArr.length;

  function scoreQuestion() {
    let questionScore = 0;
    if (best === exam.questionsArr[questionIndex].rubricBest) {
      questionScore += 1;
    }
    if (worst === exam.questionsArr[questionIndex].rubricWorst) {
      questionScore += 1;
    }
    setTally(tally + questionScore);
    return
  }

  function selectBest(choiceId: ChoiceId) {
    if (best === choiceId) {
      // user is reseting "best" buttons
      setBest('');
      return;
    }
    setBest(choiceId);
    return
  }

  function selectWorst(choiceId: ChoiceId) {
    if (worst === choiceId) {
      // user is reseting "worst" buttons
      setWorst('');
      return;
    }
    setWorst(choiceId);
    return
  }

  function handleChoice(polarity: Polarity, choiceId: ChoiceId) {
    if (polarity === 'worst') {
      selectWorst(choiceId);
      return
    }
    // assume polarity === 'best'
    selectBest(choiceId);
    return
  }

  function handleSubmit() {
    scoreQuestion();
    setBest('');
    setWorst('');
    setQuestionIndex(questionIndex + 1);
    return
  }

  if (questionIndex >= examLength) {
    return <Outro mark={tally} outOf={2 * exam.questionsArr.length} />
  }
  return (
    <main>
      <h1>Situational Judgement Test</h1>
      <Instruct />
      <Progress questionIndex={questionIndex} examLength={examLength} />
      <hr />
      <section className='question'>
        <h2>Question {questionIndex + 1}</h2>
        <p>{exam.questionsArr[questionIndex].scenario}</p>

        <Choosings
          handleChoice={handleChoice}
          choosings={exam.questionsArr[questionIndex].choosings}
          best={best}
          worst={worst}
        />
        <div>
          <button className='submitButton' disabled={best === '' || worst === ''} type="button" onClick={handleSubmit}>Submit</button>
        </div>
      </section>
    </main>
  );
}
