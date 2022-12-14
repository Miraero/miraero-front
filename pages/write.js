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
import HeadMeta from "../components/HeadMeta";

const Contents = styled.div`
  margin-top: 102px;
  margin-bottom: 30px;
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
  flex-direction: "column";
`;

const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SecondStepHeader = styled.div`
  font-weight: 600;
  font-size: 27px;
  line-height: 35px;
`;

const DateContainer = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  margin-top: 40px;
`;

const DateItem = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const DateLabel = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
`;

const DateInput = styled.input`
  width: 80px;
  height: 50px;
  border: none;
  outline: none;
  border-bottom: 1px solid var(--gray02);
  font-size: 24px;
  cursor: pointer;
`;

const SecondContainerTwo = styled.div`
  gap: 15px;
  display: flex;
  flex-direction: column;
  height: 75vh;
`;

const Write = () => {
  const router = useRouter();
  const date = new Date();
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      router.push("/login");
    }

    client.defaults.headers["Authorization"] = `Bearer ${localStorage.getItem(
      "accessToken"
    )}`;
  }, []);

  const [year, setYear] = useState(date.getFullYear());
  const [month, setMonth] = useState(date.getMonth() + 1);
  const [day, setDay] = useState(date.getDate());
  let [inputTitle, setInputTitle] = useState("");
  let [inputContent, setInputContent] = useState("");

  const handleYear = (e) => {
    setYear(e.target.value);
  };
  const handleMonth = (e) => {
    setMonth(e.target.value);
  };
  const handleDay = (e) => {
    setDay(e.target.value);
  };

  const [userData, setUserData] = useRecoilState(userDataState);

  const handleTitleInput = (e) => {
    setInputTitle(e.target.value);
  };

  const handleContentInput = (e) => {
    setInputContent(e.target.value);
  };

  const handleNextStep = () => {
    if (inputTitle === "" || inputContent === "") {
      alert("?????? ????????? ??????????????????.");
      return;
    }
    let temp = {
      ...userData,
      currentStep: true,
    };
    setUserData(temp);
  };

  const handleSubmit = () => {
    if (year === "" || month === "" || day === "") {
      alert("?????? ????????? ??????????????????.");
      return;
    }
    if (
      new Date(date.getFullYear(), date.getMonth() + 1, date.getDate()) >=
      new Date(year, month, day)
    ) {
      alert("?????? ????????? ????????? ??????????????????.");
      return;
    }

    client
      .post("/api/letter", {
        title: inputTitle,
        content: inputContent,
        receiveDate: `${year}-${month}-${day}T00:00`,
        font: userData.font,
        letterType: userData.letterType,
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
    <>
      <HeadMeta title="????????????" />
      <PageWrapper
        style={{
          justifyContent: "space-around",
        }}
      >
        <Header />

        {!userData.currentStep ? (
          <>
            <Contents style={{}}>
              <WriteTop>
                <DateText>
                  {date.getFullYear()}.{date.getMonth() + 1}.{date.getDate()}
                </DateText>

                <InputTitle
                  type="text"
                  onChange={handleTitleInput}
                  placeholder="????????? ??????????????????"
                  value={inputTitle}
                ></InputTitle>
              </WriteTop>

              <InputContent
                onChange={handleContentInput}
                placeholder="????????? ???????????? ???????????????"
                value={inputContent}
              ></InputContent>
            </Contents>
            <BtnContainer>
              <Modal title={inputTitle} content={inputContent} />
              <SmallFill onClick={handleNextStep}>??????</SmallFill>
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
              <SecondContainerTwo>
                <SecondStepHeader>
                  ?????? ????????? <br />
                  ????????? ??????????
                </SecondStepHeader>
                <DateContainer>
                  <DateItem>
                    <DateInput
                      type="number"
                      value={year}
                      onChange={handleYear}
                    />
                    <DateLabel>???</DateLabel>
                  </DateItem>
                  <DateItem>
                    <DateInput
                      type="number"
                      value={month}
                      onChange={handleMonth}
                    />
                    <DateLabel>???</DateLabel>
                  </DateItem>
                  <DateItem>
                    <DateInput type="number" value={day} onChange={handleDay} />
                    <DateLabel>???</DateLabel>
                  </DateItem>
                </DateContainer>
              </SecondContainerTwo>

              <LargeButton onClick={handleSubmit}>??????</LargeButton>
            </Contents>
          </>
        )}
      </PageWrapper>
    </>
  );
};

export default Write;
