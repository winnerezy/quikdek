import EditForm from '@/components/EditForm'
import React from 'react'

export default function EditDeck({
  params: { deckId },
}: {
  params: { deckId: string };
}) {
  return (
    <section className='w-full min-h-screen'>
      <EditForm deckId={deckId}/>
    </section>
  )
}
