export default function Outro({ mark, outOf }: { mark: number, outOf: number }) {
  function gradeSubmission(mark: number, outOf: number) {
    const percent = 100 * mark / outOf
    const grade = percent > 80 ? 'Distinction'
      : percent > 60 ? 'Merit'
        : percent > 40 ? 'Pass'
          : percent > 30 ? 'Near Pass'
            : 'Unclassified'
    return grade
  }

  return (
    <main className="outro">
      <h1>Congratulations</h1>
      <p>You successfully finished this demo test.</p>
      <p className="grade">You achieved {gradeSubmission(mark, outOf)}.</p>
      <p>Thank you and goodbye.</p>
      <p><a href="../">Return to demo page</a></p>
    </main>
  )
}