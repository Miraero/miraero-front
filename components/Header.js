import styled from "@emotion/styled";

const Header = () => {
    return (
        <Container>
            <ArrowButton src="asset/icon.png" />
            편지 작성
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
`;

const VerticalRight = styled.div`
    width: 34px;
    height: auto;
`;

export default Header;
