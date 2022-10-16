import React, { useState } from "react";
import {
    PageWrapper,
    VerticalLeft,
    DateText,
    Welcome,
    LargeButton,
} from "../components/Atomic";
import styled from "@emotion/styled";
import LetterBox from "../components/LetterBox";
import Header from "../components/Header";

const Home = () => {
    const [letters, setLetters] = useState([
        {
            id: "1",
            title: "아이스크림 먹는 캄토노",
            to: "2022.10.10",
            from: "2022.10.12",
            isRead: true,
        },
        {
            id: "2",
            title: "40살 햄버거를 먹고 있는 YAM",
            to: "2022.10.11",
            from: "2022.10.14",
            isRead: false,
        },
        {
            id: "3",
            title: "킨드의 킨더초콜릿 ",
            to: "2022.10.14",
            from: "2022.10.15",
            isRead: false,
        },
        {
            id: "3",
            title: "킨드의 킨더초콜릿 ",
            to: "2022.10.14",
            from: "2022.10.15",
            isRead: false,
        },
        {
            id: "3",
            title: "킨드의 킨더초콜릿 ",
            to: "2022.10.14",
            from: "2022.10.15",
            isRead: false,
        },
    ]);

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
                {letters.length > 0 ? (
                    <LetterView>
                        {letters.map((letter) => (
                            <LetterBox key={letter.id} letter={letter} />
                        ))}
                    </LetterView>
                ) : (
                    <NoLetter>
                        아직 날아온 편지가 없어요
                        <br />
                        자신에게 추억을 선물해주세요
                    </NoLetter>
                )}
            </PageTop>
            <PageEnd>
                <LargeButton>편지 쓰기</LargeButton>
                <div
                    style={{
                        height: "30px",
                    }}
                ></div>
            </PageEnd>
        </PageWrapper>
    );
};

const PageEnd = styled.div`
    display: flex;
    flex-direction: column;
`;

const PageTop = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
`;

const LetterView = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    max-height: calc(100vh - 330px);
    overflow: scroll;
    margin-top: 20px;
`;

const NoLetter = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 360px);
    font-size: 16px;
    color: var(--gray02);
    text-align: center;
    line-height: 23px;
`;
const SectionTitle = styled.div`
    margin-top: 38px;
    font-weight: 500;
    font-size: 16px;
    color: var(--textColor);
`;

export default Home;
