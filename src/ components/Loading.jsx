import styled, { keyframes } from 'styled-components';


const Loading = () => <StyledLoading> 💫 </StyledLoading>;


const rot = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const StyledLoading = styled.div`
  display: inline-block;
  animation: ${rot} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 5rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%) translateX(-50%);
  left: 50%;
`;

export default Loading;