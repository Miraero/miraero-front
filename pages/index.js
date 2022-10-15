import {
    PageWrapper,
    VerticalLeft,
    DateText,
    Welcome,
    LargeButton,
} from "../components/Atomic";
import styled from "@emotion/styled";

const Home = () => {
    return (
        <PageWrapper
            style={{
                justifyContent: "space-between",
            }}
        >
            <PageTop>
                <VerticalLeft
                    style={{
                        marginTop: "101px",
                        gap: "3px",
                    }}
                >
                    <DateText>2022.10.03</DateText>
                    <Welcome>주륵님 안녕하세요!</Welcome>
                </VerticalLeft>
                <SectionTitle>받은 편지함</SectionTitle>
                <LetterView></LetterView>
            </PageTop>
            <LargeButton
                style={{
                    marginBottom: "20px",
                }}
            >
                편지 쓰기
            </LargeButton>
        </PageWrapper>
    );
};

const PageTop = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
`;

const LetterView = styled.div`
    width: 100%;
    display: flex;
`;
const SectionTitle = styled.div`
    margin-top: 38px;
    font-weight: 500;
    font-size: 16px;
    color: var(--textColor);
`;

export default Home;
