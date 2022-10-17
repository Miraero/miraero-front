import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { userDataState } from "../store/atom";

const Header = () => {
    const [userData, setUserData] = useRecoilState(userDataState);
    const router = useRouter();
    const handleClick = (e) => {
        e.preventDefault();
        if (router.asPath === "/write") {
            if (userData.currentStep) router.push("/");
            else {
                let temp = {
                    ...userData,
                    currentStep: false,
                };
                setUserData(temp);
            }
        }
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
