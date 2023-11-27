import { type } from 'os';
import React from 'react';

interface InputProps {
    id: string
    description: string;
    secret: string;
    value: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

export const Input : React.FC<InputProps> = ({ id, description, secret, value, onChange, onKeyPress }) => {
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
            onKeyPress={onKeyPress}
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
            {/* {value === "" && ({
                'email': <p className="text-orange-500 text-sm">정확한 이메일 주소나 전화번호를 입력하세요.</p>,
                'password': <p className="text-orange-500 text-sm">비밀번호는 4~60자 사이여야 합니다.</p>,
                'text': <p className="text-orange-500 text-sm">이름은 2~30자 사이여야 합니다.</p>,
            }[secret])
            } */}
        </div>
        </>
    );
};
