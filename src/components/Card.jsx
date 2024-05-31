import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion"
const Card = ({data, reference}) => {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic={0.5}  className="relative flex-shrink-0 bg-zinc-900/90 w-60 h-72 rounded-[40px] text-white py-10 px-8 overflow-hidden">
      <FaRegFileAlt />
     <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
     <div className="footer absolute bottom-0  w-full  left-0 ">
      <div className='flex items-center justify-between  px-8 py-3 mb-5'>
        <h5>{data.filesize} </h5>
        <span className='w-7 h-7 bg-zinc-700 rounded-full flex items-center justify-center'>
        {data.close?<IoIosClose />:<LuDownload size=".7em" color='#fff'/>}
        

        </span>
      </div>
      {data.tag.isOpen && ( <div className={`tag w-full py-4 ${data.tag.tagColor==="blue"?"bg-blue-600":"bg-green-600"} flex items-center justify-center`}>
        <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
      </div>
      )}
     </div>
    </motion.div>
    
  )
}

export default Card