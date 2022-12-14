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
import HeadMeta from "../components/HeadMeta";
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
        <>
            <HeadMeta />
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
                        <Welcome>{name}??? ???????????????.</Welcome>
                    </VerticalLeft>
                    <SectionTitle>?????? ?????????</SectionTitle>
                    {isLoading ? (
                        <NoLetter>
                            <img
                                src="/asset/noletter.png"
                                alt="?????? ?????? ?????????"
                                width={140}
                            />
                            <br />
                            ??????????????????!
                            <br />
                            ????????? ??????????????????...
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
                                alt="?????? ?????? ?????????"
                                width={140}
                            />
                            <br />
                            ?????? ????????? ????????? ?????????
                            <br />
                            ???????????? ????????? ??????????????????
                        </NoLetter>
                    )}
                </PageTop>
                <PageEnd>
                    <LargeButton onClick={(e) => handleWrite(e)}>
                        ?????? ??????
                    </LargeButton>
                    <div
                        style={{
                            height: "30px",
                        }}
                    ></div>
                </PageEnd>
            </PageWrapper>
        </>
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
