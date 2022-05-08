import { Button3 } from "../button"

const Hiking = () => {
    return(
        <div className="w-48 mx-2 h-52 rounded-2xl bg-[url('/hikingcard.png')]">
           <div className='bg-gray-600 bg-opacity-25 h-16 rounded-b-xl mt-36 flex flex-col items-center'>
               <p className='font-semibold text-white text-sm mt-1.5'>Menakhlukan 10 gunung</p>
               <div className='w-28 h-5 mt-2'>
               <Button3 type="submit" label={'Lihat tantangan'}/>
            </div>
        </div>
   </div>
    )
}

export default Hiking;