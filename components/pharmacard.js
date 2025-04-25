import React from 'react'

const Pharmacard = ({name,pharm,cat,additional,abbr,application}) => {
  return (
    <div className=' flex bg-[#F6F7FA] p-2 border-[1px] border-[#BBC9E3] rounded-lg  flex-col w-[400px] ' >
        <div className=' w-full flex items-center justify-between pb-3 px-2 ' >
            <div className=' font-helvetica text-[18px] font-bold text-[#39393D] ' >
                {name}
            </div>

            <div className=' bg-figblue leading-[1] text-[white] px-[16px] py-[10px] rounded-full font-helvetica font-medium ' >
                {abbr} </div>
        </div>

        <div className=' bg-white p-2 rounded-xl flex flex-col h-[250px] justify-between   ' >
            <div className=' flex flex-col gap-2 ' >
            <div className=' flex items-center gap-2 ' >
            <div className=' font-helvetica text-[16px] font-bold text-[#39393D] ' >
            Pharmacopeia : 
            </div>
            <div className=' font-helvetica text-[16px]  text-[#3C3C42] ' >
            {pharm.map((nam,index)=>{
                return `${nam} ${pharm.length==index+1 ? "":","}`
              })}
        
            </div>
            
            </div>

            <div className=' flex items-center gap-2 ' >
            <div className=' font-helvetica text-[16px] font-bold text-[#39393D] ' >
            Applications : 
            </div>
            <div className=' font-helvetica text-[16px]  text-[#3C3C42] ' >
            {application}
        
            </div>

            </div>

          
          {additional &&  <div className=' flex items-center gap-2 ' >
            <div className=' font-helvetica text-[16px] font-bold text-[#39393D] ' >
            Additional Info : 
            </div>
            <div className=' font-helvetica text-[16px]  text-[#3C3C42] ' >
            {additional}
        
            </div>

            </div>}
            </div>

            <div className=" bg-[#084BCE10] border-[#084BCE40] text-[#084BCE] text-[16px] font-helvetica font-medium w-full flex justify-center py-[14px] px-6 border rounded-full cursor-pointer leading-[1]   " >
                Request Information
             </div>
        </div>

      
    </div>
  )
}

export default Pharmacard
