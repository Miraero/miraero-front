import React, { useState } from "react";
import Header from "../components/Header";
import { DateText, SmallFill } from "../components/Atomic";
import { Modal } from "../components/Modal";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  box-sizing: border-box;
  width: calc(100vw - 40px);
  min-height: 100vh;
`;

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

const Write = () => {
  let [inputTitle, setInputTitle] = useState("");
  let [inputContent, setInputContent] = useState("");

  const handleTitleInput = (e) => {
    setInputTitle(e.target.value);
  };
  const handleContentInput = (e) => {
    setInputContent(e.target.value);
  };

  return (
    <Wrapper>
      <Header />
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
        <Modal />
        <SmallFill onClick={() => alert("짠")}>다음</SmallFill>
      </BtnContainer>
    </Wrapper>
  );
};

export default Write;
