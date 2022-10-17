import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import {
    DateText,
    SmallFill,
    PageWrapper,
    LargeButton,
} from "../components/Atomic";
import { Modal } from "../components/Modal";
import styled from "@emotion/styled";
import { userDataState } from "../store/atom";
import { useRecoilState } from "recoil";
import client from "../lib/client";
import { useRouter } from "next/router";

const Contents = styled.div`
    margin-top: 102px;
`;

const InputTitle = styled.input`
    padding: 10px 0px;
    margin: 10px 0px;
    border: none;
    font-size: 24px;
    border-bottom: 1px solid var(--gray02);
    width: 100%;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:focus {
        border-bottom: 1px solid black;
    }
`;

const InputContent = styled.textarea`
    height: 60vh;
    border: none;
    outline: none;
    width: 100%;
    resize: none;
    cursor: pointer;
    margin-top: 15px;
    font-size: 16px;
    line-height: 30px;
`;
const WriteTop = styled.div`
    display: "flex";
    flexdirection: "column";
`;

const BtnContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const SecondStepHeader = styled.div`
    font-size: 32px;
    margin-bottom: 100px;
`;

const DateInput = styled.input`
    width: 100%;
    height: 50px;
    border: none;
    outline: none;
    border-bottom: 1px solid var(--gray02);
    font-size: 24px;
    margin-bottom: 675px;
    cursor: pointer;
`;

const Write = () => {
    useEffect(() => {
        if (!localStorage.getItem("accessToken")) {
            router.push("/login");
        }

        client.defaults.headers[
            "Authorization"
        ] = `Bearer ${localStorage.getItem("accessToken")}`;
    }, []);
    const router = useRouter();
    let [inputTitle, setInputTitle] = useState("");
    let [inputContent, setInputContent] = useState("");
    let [inputDate, setInputDate] = useState("");

    const [userData, setUserData] = useRecoilState(userDataState);

    const handleTitleInput = (e) => {
        setInputTitle(e.target.value);
    };
    const handleContentInput = (e) => {
        setInputContent(e.target.value);
    };
    const handleDateInput = (e) => {
        setInputDate(e.target.value);
    };

    const handleNextStep = () => {
        if (inputTitle === "" || inputContent === "") {
            alert("모든 항목을 입력해주세요.");
            return;
        }
        let temp = {
            ...userData,
            currentStep: true,
        };
        setUserData(temp);
    };

    const handleSubmit = () => {
        if (inputDate === "") {
            alert("모든 항목을 입력해주세요.");
            return;
        }

        client
            .post("/api/letter", {
                title: inputTitle,
                content: inputContent,
                receiveDate: `${inputDate}T00:00:00`,
            })
            .then((res) => {
                console.log(res);
                router.push("/");
            })
            .catch((err) => {
                console.log(err);
            });
        console.log("submit");
    };

    return (
        <PageWrapper>
            <Header />

            {!userData.currentStep ? (
                <>
                    <Contents>
                        <WriteTop>
                            <DateText>2022.10.16</DateText>

                            <InputTitle
                                type="text"
                                onChange={handleTitleInput}
                                placeholder="제목을 입력해주세요"
                                value={inputTitle}
                            ></InputTitle>
                        </WriteTop>

                        <InputContent
                            onChange={handleContentInput}
                            placeholder="당신의 이야기를 들려주세요"
                            value={inputContent}
                        ></InputContent>
                    </Contents>
                    <BtnContainer>
                        <Modal title={inputTitle} content={inputContent} />
                        <SmallFill onClick={handleNextStep}>다음</SmallFill>
                    </BtnContainer>
                </>
            ) : (
                <>
                    <Contents
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                        }}
                    >
                        <SecondStepHeader>받는 날짜 설정</SecondStepHeader>
                        <DateInput
                            type="date"
                            value={inputDate}
                            onChange={handleDateInput}
                        />
                        <LargeButton onClick={handleSubmit}>완료</LargeButton>
                    </Contents>
                </>
            )}
        </PageWrapper>
    );
};

export default Write;
