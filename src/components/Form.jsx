import React,{useState} from 'react'

function Form() {
  const [dialog,setDialog] = useState(true)
  return (
    <>
        {dialog && <div className='w-full h-full fixed top-0 left-0 flex items-center justify-center'>
            <div onClick={()=> setDialog(false)} className='w-full h-full absolute bg-[rgba(0,0,0,0.4)] cursor-pointer'></div>
            <div className="container px-4">
                <form className='md:w-[500px] mx-auto py-6 px-6 md:py-10 md:px-20 bg-white relative rounded-sm'>
                    <label className="block mb-5">
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                            Title
                        </span>
                        <input type="email" name="email" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Title" />
                    </label>
                    <label className="block mb-5">
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                            Description
                        </span>
                        <input type="email" name="email" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Description" />
                    </label>
                    <label className="block mb-5">
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                        Select Priority
                        </span>
                        <select type="email" name="email" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com">
                            <option value="Select Priority">Select Priority</option>
                            <option value="High">High</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                        </select>
                    </label>
                    <button className='bg-slate-200 px-3 py-2 rounded-md' type="submit">Submit</button>
                </form>
            </div>
        </div>}
    </>
    
  )
}

export default Form 
