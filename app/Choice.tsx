import { ChoiceId, Polarity } from "./jstTypes"

export default function Choice(
  { handleChoice, choiceId, choice, best, worst }:
    {
      handleChoice: (polarity: Polarity, choiceId: ChoiceId) => void,
      choiceId: ChoiceId,
      choice: string,
      best: ChoiceId,
      worst: ChoiceId,
    },
) {
  if (!choice) {
    return null;
  }
  return (
    <div>
      <hr />
      <button disabled={best !== '' || worst === choiceId} onClick={() => handleChoice('best', choiceId)}>Best</button>
      <span>{choice}</span>
      <button disabled={worst !== '' || best === choiceId} onClick={() => handleChoice('worst', choiceId)}>Worst</button>
    </div>
  )
}