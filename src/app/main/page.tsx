import { ClientOnly } from './client'
import Link from 'next/link'

/* export function generateStaticParams() {
  return [{ slug: [''] }]
} */

export default function Page() {
  return (
    <ClientOnly />
  )
}