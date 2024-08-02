

export const DeckCard = () => {
  return (
    <div className="max-w-[600px] w-full min-w-[250px] h-[200px] bg-[--blue] rounded-[20px] shadow-lg flex flex-col py-8 px-4 items-start justify-between">
        <p className="font-semibold text-xl">Java</p>
        <div className="w-24 h-6 bg-white rounded-full text-[--blue] text-xs flex justify-center items-center">
            <p>5 Flash Cards</p>
        </div>
        <p>By @winnerezy</p>
    </div>
  )
}
