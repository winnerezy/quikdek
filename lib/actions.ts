"use server";

import { auth, signOut } from "@/auth";
import { prisma } from "./prisma";
import { DeckProps, FlashCardData, Folder } from "@/types";

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

export const saveDeck = async ({ title, description, flashcards, folderid  }: { title: string, description: string | null, flashcards: FlashCardData[], folderid: string }) => {
  try {
    const user = await getCurrentUser();
    const deck = await prisma.decks.create({
      data: {
        title,
        description,
        userid: user?.id!,
        folderid,
      },
    });
    flashcards.map(
      async (flashcard) =>
        await prisma.flashcards.create({
          data: {
            question: flashcard.question,
            answer: flashcard.answer,
            userid: user?.id!,
            deckid: deck.id,
          },
        })
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
