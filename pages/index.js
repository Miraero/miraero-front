import React, { useState, useEffect } from "react";
import {
    PageWrapper,
    VerticalLeft,
    DateText,
    Welcome,
    LargeButton,
} from "../components/Atomic";
import styled from "@emotion/styled";
import LetterBox from "../components/LetterBox";
import { useQuery } from "@tanstack/react-query";
import client from "../lib/client";
import { useRouter } from "next/router";
import { userDataState } from "../store/atom";
import { useRecoilState } from "recoil";

const Home = () => {
    const [userData, setUserData] = useRecoilState(userDataState);
    const date = new Date();
    const router = useRouter();

    const [name, setName] = useState("");
    useEffect(() => {
        if (!localStorage.getItem("accessToken")) {
            router.push("/login");
        }
        client.defaults.headers[
            "Authorization"
        ] = `Bearer ${localStorage.getItem("accessToken")}`;
        setName(localStorage.getItem("name"));
    }, []);

    const handleWrite = (e) => {
        e.preventDefault();
        let temp = {
            ...userData,
            currentStep: false,
        };
        setUserData(temp);
        router.push("/write");
    };

    const getLetters = async () => {
        const { data } = await client.get("/api/letters");
        return data.letters;
    };

    const { data: letters, isLoading } = useQuery(["letters"], getLetters, {});

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
                    <DateText>
                        {" "}
                        {date.getFullYear()}.{date.getMonth() + 1}.
                        {date.getDate()}
                    </DateText>
                    <Welcome>{name}님 안녕하세요.</Welcome>
                </VerticalLeft>
                <SectionTitle>받은 편지함</SectionTitle>
                {isLoading ? (
                    <NoLetter>
                        <img
                            src="/asset/noletter.png"
                            alt="편지 없음 이미지"
                            width={140}
                        />
                        <br />
                        로딩중이에요!
                        <br />
                        잠시만 기다려주세요...
                    </NoLetter>
                ) : letters.length > 0 ? (
                    <LetterView>
                        {letters.map((letter) => (
                            <LetterBox key={letter.id} letter={letter} />
                        ))}
                    </LetterView>
                ) : (
                    <NoLetter>
                        <img
                            src="/asset/noletter.png"
                            alt="편지 없음 이미지"
                            width={140}
                        />
                        <br />
                        아직 날아온 편지가 없어요
                        <br />
                        자신에게 추억을 선물해주세요
                    </NoLetter>
                )}
            </PageTop>
            <PageEnd>
                <LargeButton onClick={(e) => handleWrite(e)}>
                    편지 쓰기
                </LargeButton>
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
