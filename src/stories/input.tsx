import React from 'react';

interface InputProps {
    description: string;
    /* secret: boolean; */
};

export const Input = ({description}:InputProps) => {
    return (
        <>
        <div className='relative'>
            <label htmlFor='input' className='
                text-white
            '>
                {description}
            </label>
            <input id="input" className='
                block
                rounded-md
                px-6
                pt-6
                pb-1
                w-full
                text-md
                text-white
                bg-neutral-700
                appearance-none
                focus:outline-none
                focus:ring-0
                peer
            ' />
        </div>
        </>
        
    );
};
