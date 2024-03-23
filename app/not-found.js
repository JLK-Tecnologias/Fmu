import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div>
      <h2>Pagina Não encontrada</h2>
      <Link href="/">Retorne para Home</Link>
    </div>
  )
}