'use client'
export default function Error({error, reset}){
  return (
    <div>
      <h2>Algo errado aconteceu!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Tente de novo
      </button>
    </div>
  )
}