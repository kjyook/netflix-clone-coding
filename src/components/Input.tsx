import React from 'react';

interface InputProps {
    id: string
    description: string;
    secret: string;
    value: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input : React.FC<InputProps> = ({ id, description, secret, value, onChange }) => {
    return (
        <>
        <div className='relative'>
            <input
            id={id}
            className='
            block
            rounded-md
            px-6
            pt-6
            pb-1.5
            w-full 
            text-md
            text-white
            bg-neutral-700 
            appearance-none
            focus:outline-none
            focus:ring-0
            peer
            '
            type={secret}
            value={value}
            onChange={onChange}
            placeholder=""
            /> 
            <label
            className='
            absolute
            text-md
            text-zinc-400 
            transform
            -translate-y-3
            scale-75
            top-3.5
            z-10
            origin-[0]
            left-6
            peer-placeholder-shown:scale-100
            peer-placeholder-shown:translate-y-0
            peer-focus:scale-75
            peer-focus:-translate-y-3
            '
            htmlFor={id}
            >{description}</label>
        </div>
        </>
    );
};
