import React from 'react'

const List = ({name,fatherName,rollNo,img}) => {
  return (
    <div >
     
{<ul class="divide-y divide-slate-100">
    <li class="flex items-center gap-4 px-4 py-3">
        <div class="shrink-0">
            <span  class="relative flex items-center justify-center w-10 h-10 text-white rounded-full">
                <img src={img} alt="user name" title="user name" width="40" height="40" class="max-w-full rounded-full" />
                <span class=" absolute -bottom-0.5 -right-0.5 inline-flex items-center justify-center gap-1 rounded-full border-2 border-white bg-green-500 p-1 text-sm text-white"><span class="sr-only"> offline </span></span>
                </span>
        </div>
        <div class="flex flex-col gap-0 min-h-[2rem] items-start justify-center w-full min-w-0">
            <h4 class="text-base text-slate-700">{name}</h4>
            <p class="w-full text-sm truncate text-slate-500">Fathername : {fatherName}<br></br> RollNo : {rollNo} </p>
        </div>
    </li>
    
    
</ul> }
<hr></hr>

{/* <ul class="max-w-md divide-y divide-gray-200 flex  flex-col justify-center dark:divide-gray-700">
   <li class="pb-3 sm:pb-4">
      <div class="flex items-center space-x-4 rtl:space-x-reverse">
         <div class="flex-shrink-0">
            <img class="w-8 h-8 rounded-full" src={img} alt="Neil image"/>
         </div>
         <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
            {name}
            </p>
            <p class="text-sm text-gray-500 truncate dark:text-gray-400">
               Fathername : {fatherName}
            </p>
         </div>
         <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
        Roll NO : {rollNo}
         </div>
      </div>
   </li>
   </ul>
   <hr></hr> */}
    </div>
  )
}

export default List
