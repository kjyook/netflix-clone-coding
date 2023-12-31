import { Input } from "@/components/Input";
import { useState, useCallback, use } from "react";
import axios from "axios";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useRouter } from "next/router";
import { RouteController } from "@/models/RouteController";

const Auth = () => {
    const router = useRouter();

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [name, setName] = useState<string>('');

    const [variant, setVariant] = useState('login');
    const toggleVariant = useCallback(() => {
        setVariant((prev) => prev === 'login' ? 'signup' : 'login');
    }, []);

    const login = useCallback(async () => {
        try {
            await signIn('credentials', {
                email,
                password,
                callbackUrl: '/profile'
            });
        } catch (error) {
            console.log(error);
        }
    }, [email, password]);

    const register = useCallback(async () => {
        try {
            await axios.post('/api/register', {
                email,
                name,
                password
            })
            
            login();
        } catch (error) {
            console.log(error);
        }
    }, [email, name, password, login]);

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            variant === 'login' ? login() : register();
        }
    };

    RouteController();

    return (
        <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
            <div className="bg-black w-full h-full bg-opacity-50">
                <nav onClick={() => router.push('/')} className="px-12 py-5">
                    <img src="/images/logo.png" alt="logo" className="h-12" />
                </nav>
                <div className="flex justify-center">
                    <div className="bg-black bg-opacity-70 px-16 py-16 self-center my-2 lg:max-w-md rounded-md w-full">
                        <h2 className="text-white text-4xl mb-8 font-semibold">
                            {variant === 'login' ? '로그인' : '회원가입'}
                        </h2>
                        <div className="flex flex-col gap-4">
                            {variant === 'signup' && (
                                <Input id="username" description="이름" secret="text" value={name} onChange={(ev) => setName(ev.target.value)} onKeyPress={handleKeyPress} />
                            )}
                            <Input id="email" description="이메일 주소 또는 전화번호" secret="email" value={email} onChange={(ev) => setEmail(ev.target.value)} onKeyPress={handleKeyPress} />
                            {/* {email === "" && (
                                <p className="text-orange-500 text-sm">정확한 이메일 주소나 전화번호를 입력하세요.</p>
                            )} */}
                            <Input id="password" description="비밀번호" secret="password" value={password} onChange={(ev) => setPassword(ev.target.value)} onKeyPress={handleKeyPress}/>
                            {/* {password === "" && (
                                <p className="text-orange-500 text-sm">비밀번호는 4~60자 사이여야 합니다.</p>
                            )} */}
                        </div>
                        <button onClick={variant === 'login' ? login : register} className="bg-red-600 py-3 text-white rounded-md w-full mt-10">
                            {variant === 'login' ? '로그인' : '회원가입'}
                        </button>
                        <div className="flex flex-row items-center justify-center gap-4 mt-8">
                            <div onClick={() => signIn('google', { callbackUrl: '/profile' })} className="w-10 h-10 rounded-full bg-white flex items-center justify-center cursor-pointer hover:opacity-80 transition">
                                <FcGoogle size={30} />
                            </div>
                            <div onClick={() => signIn('github', { callbackUrl: '/profile' })} className="w-10 h-10 rounded-full bg-white flex items-center justify-center cursor-pointer hover:opacity-80 transition">
                                <FaGithub size={30} />
                            </div>
                        </div>
                        <p className="text-neutral-500 mt-12">
                            {variant === 'login' ? 'Netflix 회원이 아니신가요?' : '이미 회원이신가요?'}
                            <span onClick={toggleVariant} className="text-white ml-1 hover:underline cursor-pointer">
                                {variant === 'login' ? '지금 가입하세요' : '로그인 하세요'}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth;