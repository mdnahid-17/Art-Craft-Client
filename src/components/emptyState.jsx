import { Link } from "react-router";

export default function EmptyState({ message, address, label }){
    return (
        <div className='h-screen gap-5 flex flex-col justify-center items-center pb-16 '>
          <p className='text-gray-600 text-xl lg:text-5xl'>{message}</p>
    
          <Link
            to={address}
            className='relative inline-block px-4 py-2 font-semibold group'
          >
             <button className="btn text-xl p-5 border-violet-500 hover:bg-linear-65 from-purple-500 to-pink-500 font-semibold hover:text-white hover:border-transparent">
                  {label}
                </button>
          </Link>
        </div>
      )
}