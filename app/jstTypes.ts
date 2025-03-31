type Polarity = 'best' | 'worst'

type ChoiceId = '' | 'choice_A' | 'choice_B' | 'choice_C' | 'choice_D';

type Choosings = {
  choice_A: string;
  choice_B: string;
  choice_C: string;
  choice_D: string;
}

type Qustion = {
  scenario: string;
  choosings: Choosings;
  rubricBest: keyof Choosings;
  rubricWorst: keyof Choosings;
}

type Exam = {
  title: string;
  questionsArr: Qustion[];
}

export type { Polarity, ChoiceId, Choosings, Qustion, Exam }