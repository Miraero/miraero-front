import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router.asPath === "/write" ? "편지 쓰기" : router.push("/");
  };
  return (
    <Container>
      <ArrowButton src="asset/icon.png" onClick={handleClick} />
      {router.asPath === "/write" ? "편지 쓰기" : "편지 보기"}
      <VerticalRight></VerticalRight>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 55px;
`;

const ArrowButton = styled.img`
  width: 34px;
  cursor: pointer;
`;

const VerticalRight = styled.div`
  width: 34px;
  height: auto;
`;

export default Header;
