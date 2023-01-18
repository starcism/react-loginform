import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LoginForm = () => {
    return (
        <Container>
            <StyledLink to="/sign_in">로그인</StyledLink>
            <StyledLink to="/sign_up">회원가입</StyledLink>  
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: 0;
    margin-top: 10px;
    margin-bottom: 0;
`
const StyledLink = styled(Link)`
    margin-left: 5px;
    margin-right: 5px;
    font-size: 30px;
`

export default LoginForm;