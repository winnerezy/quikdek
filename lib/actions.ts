"use server";

import { auth, signOut } from "@/auth";
import { prisma } from "./prisma";

export const getCurrentUser = async () => {
  try {
    const session = await auth();
    const user = await prisma.users.findUnique({
      where: {
        username: session?.user?.name!
      }
    })
    return user
  } catch (error: any) {
    console.log('Getting current user error' + error.message)
    return null
  }
};

// export const getFolders = async () => {
//   try {
//     const session = await auth();
//     const folders = await prisma.users.findUnique({
//       where: {
//         username: session?.user?.name!
//       },
//       select: {
//         folders: true
//       }
//     })
//     return folders
//   } catch (error: any) {
//     console.log('Getting current user error' + error.message)
//     return null
//   }
// }

export const saveDeck = async (deckData: DeckProps) => {
  try {
    const user = await getCurrentUser()
    const deck = await prisma.decks.create({
      data: {
        title: deckData.title,
        description: deckData.description,
        userid: user?.id!,
        folderid: deckData.folderid
      }
    })
    deckData.flashcards.map(async (flashcard) => (
      await prisma.flashcards.create({
        data: {
          question: flashcard.question,
          answer: flashcard.answer,
          userid: user?.id!,
          deckid: deck.id
        }
      })
    ))
  } catch (error: any) {
    console.log('Getting current saving deck' + error.message)
  }
}

export const handleSignOut = async () => {
  await signOut()
}

export const createFolder = async (name: string) => {
  try {
    const user = await getCurrentUser()
    await prisma.folders.create({
      data: {
        name,
        userid: user?.id!
      }
    })
  } catch (error: any) {
    console.log('Error creating folder' + error.message)
  }
}

export const getFolders = async () => {
  try {
    const user = await getCurrentUser()
    const folders: Folder[] = await prisma.folders.findMany({
        where: {
            userid: user?.id!
        }
    })
    return folders
} catch (error: any) {
    console.log('Error fetching folders' + error.message)
    return []
}
}