import { Input } from "@/components/Input";
import { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    return (
        <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
            <div className="bg-black w-full h-full bg-opacity-50">
                <nav className="px-12 py-5">
                    <img src="/images/logo.png" alt="logo" className="h-12" />
                </nav>
                <div className="flex justify-center">
                    <div className="bg-black bg-opacity-70 px-16 py-16 self-center my-2 lg:max-w-md rounded-md w-full">
                        <h2 className="text-white text-4xl mb-8 font-semibold">
                            로그인
                        </h2>
                        <div className="flex flex-col gap-4">
                            <Input id="email" description="이메일 주소 또는 전화번호" secret="email" onChange={(ev) => setEmail(ev.target.value)} />
                            <Input id="password" description="비밀번호" secret="password" onChange={(ev) => setPassword(ev.target.value)}/>
                        </div>
                        
                    </div>
                </div>
            </div>
            <h1>Login</h1>
        </div>
    )
}

export default Login;