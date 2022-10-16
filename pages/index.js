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
        <LetterView>
          {letters.map((letter) => (
            <LetterBox key={letter.id} letter={letter} />
          ))}
        </LetterView>
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
  flex-direction: column;
`;
const SectionTitle = styled.div`
  margin-top: 38px;
  font-weight: 500;
  font-size: 16px;
  color: var(--textColor);
`;

export default Home;
