import Choice from "./Choice"
import { Polarity, ChoiceId } from "./jstTypes"

type Choosings = {
  choice_A: string;
  choice_B: string;
  choice_C: string;
  choice_D: string;
}

export default function Choosings({
  handleChoice,
  choosings,
  best,
  worst }:
  {
    handleChoice:
    (polarity: Polarity, choiceId: ChoiceId) => void,
    choosings: Choosings,
    best: ChoiceId
    worst: ChoiceId
  }) {
  return (
    <>
      <p>Do you:</p>
      {Object.entries(choosings).map(([choiceId, choice]) => (
        <Choice
          handleChoice={handleChoice}
          key={choiceId}
          choiceId={choiceId as ChoiceId}
          choice={choice}
          best={best}
          worst={worst} />
      ))}
    </>
  )
}