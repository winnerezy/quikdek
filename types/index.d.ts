import { visibility } from "@prisma/client"

type State = {
    sidebar: sidebar
    newfoldermodal: newfoldermodal,
    folder: FolderState
}

type sidebar = {
    isOpen: boolean
}

type newFolderModal = {
    isOpen: boolean
}

type FolderState = {
    folders: Folder[]
    loading: boolean
    error: string | null
}


type FlashCardData = {
    id: string
    question: string
    answer: string
  }
  
type User = {
    id: string
    username: string
    email: string
    avatar: string | null
    joinedat: Date
}

type Folder = {
    id: string
    name: string
    userid: string
    createdat: Date,
    decks?: DeckProps[]
}

type DeckProps = {
    id: string
    title: string
    description: string | null
    userid: string;
    folderid: string;
    createdat: Date;
    visibility: visibility
    flashcards: FlashCardData[]
    user?: User
}
