export default function Progress({ questionIndex, examLength }: { questionIndex: number, examLength: number }) {
  return (
    <div className="progress">
      <label htmlFor="progress">Progress:- </label>
      <progress id="progress" value={questionIndex} max={examLength}></progress>
    </div>
  )
}