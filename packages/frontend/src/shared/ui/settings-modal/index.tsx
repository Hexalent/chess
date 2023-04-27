import { Dispatch, SetStateAction } from 'react'
import { IoMdClose } from 'react-icons/io'

interface Props {
  setShowModal: Dispatch<SetStateAction<boolean>>
}
export const SettingsModal = ({ setShowModal }: Props) => {
  return (
    <>
      <div className='absolute top-0 w-full h-full bg-black opacity-50' />
      <div className='fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[300px] h-[300px] rounded bg-[#E8EDF9] text-[#34364C] backdrop-blur-none font-medium'>
        <div className='w-full flex justify-end p-1'>
          <button onClick={() => setShowModal(false)}>
            <IoMdClose size={24} />
          </button>
        </div>
      </div>
    </>
  )
}
