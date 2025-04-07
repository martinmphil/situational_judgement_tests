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
    <div className="choice">
      <button className="bestButton" type="button"
        disabled={
          (best !== '' && best !== choiceId) || worst === choiceId
        }
        aria-label={`${choiceId} is best`}
        onClick={() => handleChoice('best', choiceId)}>Best</button>
      <span aria-label={choiceId}>{choice}</span>
      <button className="worstButton" type="button"
        disabled={
          (worst !== '' && worst !== choiceId) || best === choiceId
        }
        aria-label={`${choiceId} is worst`}

        onClick={() => handleChoice('worst', choiceId)}>Worst</button>
    </div>
  )
}