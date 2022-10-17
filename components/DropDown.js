import styled from "@emotion/styled";
import { useState } from "react";
import { userDataState } from "../store/atom";
import { useRecoilState } from "recoil";

export const SelectContainer = styled.select`
  width: auto;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid var(--gray02);
  padding-bottom: 5px;
  padding: 5px;
`;

export const DropDown = ({ data, targetValue }) => {
  const [userData, setUserData] = useRecoilState(userDataState);

  const handleDropProduct = (e) => {
    const { value } = e.target;
    let userTarget = targetValue;
    // 상품코드에 넣을 데이터
    let temp = {
      ...userData,
      [userTarget]: data.filter((el) => el.value === value)[0].id,
    };
    // 상품코드에 넣을 데이터
    setUserData(temp);
  };
  return (
    <>
      <SelectContainer onChange={handleDropProduct}>
        {data.map((el) => {
          return <option key={el.id}>{el.value}</option>;
        })}
      </SelectContainer>
    </>
  );
};
