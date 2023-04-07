import { Dispatch, SetStateAction, useState } from 'react'

interface Props {
  title: string
  options: { id: number; option: string }[]
  boardStyle: { id: number; option: string }
  setBoardStyle: Dispatch<SetStateAction<{ id: number; option: string }>>
}
export const DropDown = ({ title, options, boardStyle, setBoardStyle }: Props) => {
  const [drop, setDrop] = useState(false)
  return (
    <div className='relative'>
      <button
        className='text-[#34364C] flex ml-auto bg-white font-bold cursor-pointer rounded text-base px-3 py-2 text-center  items-center mb-2'
        type='button'
        onClick={() => setDrop(prevState => !prevState)}
      >
        {title}
        <svg
          className='w-6 h-6 ml-2'
          aria-hidden='true'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7'></path>
        </svg>
      </button>
      {drop && (
        <div className='z-10 absolute right-0 bg-white divide-y divide-gray-100 rounded shadow min-w-36 dark:bg-gray-700'>
          <ul className='py-2 text-sm text-gray-700 dark:text-gray-200'>
            {options.map(({ id, option }) => {
              return (
                <li key={id}>
                  <button
                    className={`block w-full text-left cursor-pointer px-4 py-2 ${
                      option === boardStyle.option ? 'bg-gray-200' : ''
                    }`}
                    onClick={() => {
                      setBoardStyle({ id, option })
                      setDrop(false)
                    }}
                  >
                    {option}
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </div>
  )
}
