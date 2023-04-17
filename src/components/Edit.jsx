import React from 'react'

function Edit({state,setState}) {
  const handleStae = () => {
    const findOpen = state.filter(item => {
      return item.pop === true
    })
    let temp = [...state];
    temp[findOpen[0].id - 1].pop = false 
    // console.log(state,findOpen)
    setState(temp)
  }
  return (
    <div className='absolute bg-white p-3 right-0 rounded-md top-[30px] shadow-md'>
      <label htmlFor="edit mb-[15px]"> Edit Title
        <input type='text' className='border rounded-sm mb-5 border-slate-300 mt-1 py-1 px-2' id="edit" />
      </label>

      <label htmlFor="edit"> Edit Description
        <input type='text' className='border border-slate-300 rounded-sm mb-5 mt-1 py-1 px-2' id="edit" />
      </label>

      <button className='bg-blue-400 hover:bg-blue-600 text-white px-3 py-2 rounded-md mr-2'>Change</button>
      <button className='bg-slate-100 hover:bg-slate-600 hover:text-[#fff] px-3 py-2 rounded-md' onClick={handleStae}>Cancel</button>
    </div>
  )
}

export default Edit
