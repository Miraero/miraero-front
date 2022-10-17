import styled from "@emotion/styled"; //css
import { SmallWeek, SmallFill } from "../components/Atomic";
import { useRef, useState } from "react"; //react hooks
import { DropDown } from "../components/DropDown";
import React from "react";
import { userDataState } from "../store/atom";
import { useRecoilState } from "recoil";

const font_DATA = [
  { id: null, value: "글꼴을 선택하세요." },
  { id: "1", value: "잘난체" },
  { id: "2", value: "객체" },
  { id: "3", value: "잡채" },
];

const letter_DATA = [
  { id: null, value: "편지지를 선택하세요." },
  { id: "1", value: "종이" },
  { id: "2", value: "비행" },
  { id: "3", value: "기" },
];

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  margin: auto;
  justify-content: center;
  align-items: center;
`;

export const ModalBtn = styled.button`
  background-color: blue;
  text-decoration: none;
  border: none;
  padding: 20px;
  color: white;
  border-radius: 30px;
  cursor: grab;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  padding: 30px;
  background-color: white;
  width: 85%;
  height: auto;
  border-radius: 1rem;
  position: relative;
  box-shadow: 0px 16px 9px 0 rgb(0 0 0 / 20%);
`;

export const LargeHeader = styled.div`
  display: flex;
  font-weight: 500;
  font-size: 32px;
  padding: 20px 0;
`;

export const SmallHeader = styled.div`
  display: flex;
  font-weight: 500;
  font-size: 26px;
  padding: 20px 0;
`;

export const ModalBtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  margin-top: 100px;
`;

export const Modal = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [userData, setUserData] = useRecoilState(userDataState);

  const openModalHandler = () => {
    return setIsOpen(!isOpen);
  };

  const outSection = useRef();

  return (
    <>
      <SmallWeek onClick={openModalHandler}>편지 설정</SmallWeek>

      {isOpen && (
        <ModalBackdrop
          ref={outSection}
          onClick={(e) => {
            if (outSection.current === e.target) {
              openModalHandler();
            }
          }}
        >
          <Container>
            <ModalContainer>
              <LargeHeader>편지지 설정</LargeHeader>
              <SmallHeader>글꼴</SmallHeader>
              <DropDown data={font_DATA} targetValue="font"></DropDown>
              <SmallHeader>편지지</SmallHeader>
              <DropDown data={letter_DATA} targetValue="letterType"></DropDown>

              <ModalBtnContainer>
                <SmallWeek onClick={openModalHandler}>닫기</SmallWeek>
                <SmallFill onClick={openModalHandler}>확인</SmallFill>
              </ModalBtnContainer>
            </ModalContainer>
          </Container>
        </ModalBackdrop>
      )}
    </>
  );
};
