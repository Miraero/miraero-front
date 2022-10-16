import styled from "@emotion/styled";

const Login = () => {
  return (
    <Container>
      <Title>미래로 보내는 편지</Title>
      <Align>
        <Description>기억할 추억을 남기는 방법</Description>
        <LoginBtn src="asset/loginbutton.png" />
      </Align>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  width: 95vw;
  height: 95vh;
`;

// 이미지 받으면 이미지로 변경 예정
const Title = styled.h1`
  width: 100px;
  margin: 150px 0 0 0;
  font-weight: normal;
  font-family: "Noto Serif KR", serif;
  &::after {
    content: "";
    display: inline-block;
    position: relative;
    bottom: 10px;
    right: -2px;
    width: 0.8em;
    height: 0.1em;
    background-color: black;
    border-radius: 1em;
  }
`;

const Description = styled.p`
  margin-top: 20px;
  font-family: "Noto Serif KR", serif;
`;

const LoginBtn = styled.img`
  width: 100%;
  cursor: pointer;
`;

const Align = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export default Login;
