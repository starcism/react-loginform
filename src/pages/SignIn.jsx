import axios from "axios";
import { useState } from "react";
import { LoginInput, LoginSubmit } from "../ components/LoginInput";
import { LginFrmSpan } from "./loginFormStyle";

const SignIn = () => {
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: '', 
        err: {
            email: true, 
            username: false,
            password: false
        }
    });
    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const res = await axios.post('/auth/signup', formData);
            console.log(res);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <LginFrmSpan>아이디</LginFrmSpan>
            <LoginInput
                placeholder="username"
                name="username"
                value={formData.username}
                setValue={handleChange}
                err={formData.err.username}
            />
            <LginFrmSpan>이메일</LginFrmSpan>
            <LoginInput
                placeholder="email"
                name="email"
                value={formData.email}
                setValue={handleChange}
                err={formData.err.email}
            />
            <LginFrmSpan>비밀번호</LginFrmSpan>
            <LoginInput
                placeholder="password"
                name="password"
                value={formData.password}
                setValue={handleChange}
                err={formData.err.password}
            />
            <LoginSubmit value="로그인" width="100%"/>
        </form>
    );
}
export default SignIn;