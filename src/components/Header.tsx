import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 1rem 0;
  background-color: #1976d2;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
`;

export const Header = () => {
  return <Wrapper>Capital Quiz</Wrapper>;
};
