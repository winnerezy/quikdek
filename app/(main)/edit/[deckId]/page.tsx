import EditForm from '@/components/EditForm'
import React from 'react'

export default function EditDeck({
  params: { deckId },
}: {
  params: { deckId: string };
}) {
  return (
    <div>
      <EditForm deckId={deckId}/>
    </div>
  )
}
