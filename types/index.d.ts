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


interface FlashCardData {
    id: number
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
    createdat: Date
}
type DeckProps = {
    title: string
    description: string | null
    folderid: string
    // visibility: visibility
    flashcards: FlashCardData[]
}

enum visibility {
    PUBLIC = 'PUBLIC',
    PRIVATE = 'PRIVATE'
}