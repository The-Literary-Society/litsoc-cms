import React, { useState } from 'react'

const CommentForm = ({ btnLabel, formSubmitHandler, formCancelHandler =null, initialText = "" }) => {
    const [value, setValue] = useState(initialText);

    const submitHandler = (e) => {
        e.preventDefault();
        formSubmitHandler(value);
        setValue("");
    }
    return (
        <form onSubmit={submitHandler}>
            <div className='flex flex-col items-end border border-amber-700 rounded-lg p-4'>
                <textarea
                    rows="5"
                    className='w-full focus:outline-none bg-transparent placeholder:text-xs placeholder:text-amber-700 placeholder:text-opacity-75'
                    placeholder='Add some comment here....'
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <div className='flex flex-col-reverse gap-y-2items-end gap-x-2 pt-2 min-[420px]:flex-row'>
                    {formCancelHandler && (
                        <button type='button' onClick={formCancelHandler} className='px-4 py-1.5 rounded-md border border-red-500 text-red-500 mt-2 text-xs'>Cancel</button>
                    
                    )}
                <button type='submit' className='px-4 py-1.5 text-xs rounded-md bg-amber-700 font-semibold mt-2 text-white'>{btnLabel}</button>
                </div>
                
            </div>
        </form>
    )
}

export default CommentForm