import { useCallback, useState } from 'react';
import { InputWrapper, LginFrmBody, LginFrmContainer, LginFrmWrapper, SelectorWrapper, StyledLink } from './loginFormStyle';
import SignIn from './Signin';
import SignUp from './Signup';

const LoginForm = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const handleSignIn = useCallback(()=>{
        if(isSignIn){
            setIsSignIn(false)
        } else {
            setIsSignIn(true)
        }
    }, [isSignIn]);

    return (
        <LginFrmContainer>
            <LginFrmWrapper>
                { isSignIn ? (
                    <LginFrmBody>
                        <SelectorWrapper>
                            <StyledLink className={ isSignIn && "router-active" }>로그인  </StyledLink>
                            <StyledLink to="/sign_up" onClick={handleSignIn}>회원가입</StyledLink>
                        </SelectorWrapper>
                        <InputWrapper>
                            <SignIn />
                        </InputWrapper>
                    </LginFrmBody>
                    ) : (
                    <LginFrmBody>
                        <SelectorWrapper>
                            <StyledLink to="/sign_in" onClick={handleSignIn}>로그인  </StyledLink>
                            <StyledLink className={ !isSignIn && "router-active" }>회원가입</StyledLink>
                        </SelectorWrapper>
                        <InputWrapper>
                            <SignUp />
                        </InputWrapper>
                    </LginFrmBody>
                    )}
            </LginFrmWrapper>
        </LginFrmContainer>
    );
}

export default LoginForm;