

export const PopularDeckCard = () => {
    return (
      <div className="max-w-[600px] w-full min-w-[250px] h-[200px] text-[--text-2] bg-[--card] border border-[--border] rounded-[20px] flex flex-col py-8 px-4 items-start justify-between">
          <p className="font-semibold text-xl">Java</p>
          <div className="flex gap-2">
          <div className="w-24 h-6 bg-[--hover] rounded-full text-[--text-card] text-xs flex justify-center items-center">
              <p>5 Flash Cards</p>
          </div>
          <div className="w-24 h-6 bg-[--hover] rounded-full text-[--text-card] text-xs flex justify-center items-center">
              <p>25 Additionss</p>
          </div>
          </div>
          <p className="font-semibold">By @winnerezy</p>
      </div>
    )
  }
  