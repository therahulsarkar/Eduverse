
'use client'
import { useRouter } from 'next/navigation'

const GoBackButton = () => {
  const router = useRouter()

  const goBack = () => {
    router.back()
  }

  return (
    <div className='w-full flex justify-center items-center my-10'>

    <button onClick={goBack} className="inline-flex justify-center hover:gap-x-4 transition-all duration-300 items-center gap-x-1 text-center shadow-lg shadow-transparent border border-transparent  text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white py-3 sm:py-2 px-3 sm:px-6  bg-gradient-to-tl from-slate-200  to-gray-200 hover:shadow-gray-300/30 text-gray-800  ">
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="#888888" d="m3.55 12l7.35 7.35q.375.375.363.875t-.388.875q-.375.375-.875.375t-.875-.375l-7.7-7.675q-.3-.3-.45-.675T.825 12q0-.375.15-.75t.45-.675l7.7-7.7q.375-.375.888-.363t.887.388q.375.375.375.875t-.375.875z"/></svg> Go Back
    </button>
    </div>

  )
}

export default GoBackButton