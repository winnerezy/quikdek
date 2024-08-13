"use server";

import { auth, signOut } from "@/auth";
import { prisma } from "./prisma";
import { DeckProps, FlashCardData, Folder } from "@/types";
import { Decks, visibility } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const getCurrentUser = async () => {
  try {
    const session = await auth();
    const user = await prisma.users.findUnique({
      where: {
        username: session?.user?.name!,
      },
    });
    return user;
  } catch (error: any) {
    console.log("Getting current user error" + error.message);
    return null;
  }
};

export const saveDeck = async ({
  title,
  description,
  visibility,
  flashcards,
  folderid,
}: {
  title: string;
  description: string | null;
  visibility: visibility;
  flashcards: FlashCardData[];
  folderid: string;
}) => {
  try {
    const user = await getCurrentUser();

    const deck = await prisma.decks.create({
      data: {
        title,
        description,
        userid: user?.id!,
        visibility,
        folderid,
      },
    });
    // saving all the flash cards individually
    await Promise.all(
      flashcards.map(
        async (flashcard) => (
          console.log("Saving flashcard:", flashcard),
          await prisma.flashcards.create({
            data: {
              question: flashcard.question,
              answer: flashcard.answer,
              userid: user?.id!,
              deckid: deck.id,
            },
          })
        )
      )
    );
  } catch (error: any) {
    console.log("Getting current saving deck" + error.message);
  }
};

export const handleSignOut = async () => {
  await signOut();
};

export const createFolder = async (name: string) => {
  try {
    const user = await getCurrentUser();
    await prisma.folders.create({
      data: {
        name,
        userid: user?.id!,
      },
    });
  } catch (error: any) {
    console.log("Error creating folder" + error.message);
  }
};

export const getFolders = async () => {
  try {
    const user = await getCurrentUser();
    const folders: Folder[] = await prisma.folders.findMany({
      where: {
        userid: user?.id!,
      },
    });
    return folders;
  } catch (error: any) {
    console.log("Error fetching folders" + error.message);
    return [];
  }
};

export const getDecks = async () => {
  try {
    const user = await getCurrentUser();
    const folders: Folder[] = await prisma.folders.findMany({
      where: {
        userid: user?.id!,
      },
      select: {
        id: true,
        userid: true,
        createdat: true,
        name: true,
        decks: {
          select: {
            id: true,
            title: true,
            userid: true,
            folderid: true,
            visibility: true,
            createdat: true,
            description: true,
            flashcards: true,
            user: true,
          },
        },
      },
    });
    return folders;
  } catch (error: any) {
    console.log("Error fetching folders" + error.message);
    return [];
  }
};

export const getDeck = async (deckId: string) => {
  try {
    const deck: DeckProps | null = await prisma.decks.findUnique({
      where: {
        id: deckId
      },
      include: {
        flashcards: true,
        user: true,
      }
    });
    return deck;
  } catch (error: any) {
    console.log("Error fetching folders" + error.message);
    return null;
  }
};

export const deleteDeck = async (id: string) => {
  try {
     await prisma.decks.delete({
      where: {
        id
      }
    });
  } catch (error: any) {
    console.log("Error fetching folders" + error.message);
  }
};


export const getPopularDecks = async () => {
  try {
    const decks: DeckProps[] = await prisma.decks.findMany({
      where: {
        visibility: visibility.PUBLIC,
      },
      select: {
        id: true,
        title: true,
        userid: true,
        folderid: true,
        visibility: true,
        createdat: true,
        description: true,
        flashcards: true,
        additionalusers: true,
        user: {
          select: {
            id: true,
            email: true,
            avatar: true,
            joinedat: true,
            username: true,
            saveddecks: true,
          },
        },
      },
    });
    return decks;
  } catch (error: any) {
    console.log("Error getting popular decks" + error.message);
    return [];
  }
};

export const addDeck = async (id: string) => {
  try {
    const user = await getCurrentUser();

    await prisma.decks.update({
      where: {
        id,
      },
      data: {
        additionalusers: {
          push: user?.id!,
        },
      },
    });

    await prisma.users.update({
      where: {
        id: user?.id!,
      },
      data: {
        saveddecks: {
          push: id,
        },
      },
    });
    revalidatePath("/my-decks")
  } catch (error: any) {
    console.log("Error adding decks" + error.message);
    return [];
  }
};
