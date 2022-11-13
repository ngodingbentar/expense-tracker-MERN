import React from 'react'
import 'boxicons';

export default function List() {

    const handlerClick = (e) => {
        if(!e.target.dataset.id) return 0;
    }

  return (
    <div className="flex flex-col py-6 gap-3">
        <h1 className='py-4 font-bold text-xl'>History</h1>
        <Transaction category={{ name : 'Sallary', color : '#e5e5e5'}} handler={handlerClick} ></Transaction>
    </div>
  )
}

function Transaction({ category, handler }){
    if(!category) return null;
    return (
        <div className="item flex justify-center bg-gray-50 py-2 rounded-r" style={{ borderRight : `8px solid ${category.color ??  "#e5e5e5"}`}}>
            <button className='px-3' onClick={handler}><box-icon data-id={category._id ?? ''}  color={category.color ??  "#e5e5e5"} size="15px" name="trash" ></box-icon></button>            
            <span className='block w-full'>{category.name ?? ''}</span>
        </div>
    )
}