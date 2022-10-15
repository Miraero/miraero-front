import styled from "@emotion/styled";
import { useState } from "react";

export const SelectContainer = styled.select`
  width: auto;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid var(--gray02);
  padding-bottom: 5px;
  padding: 5px;
`;

export const DropDown = ({ data }) => {
  const [selectedDropValue, setSelectedDropValue] =
    useState("상품을 선택하세요.");

  const handleDropProduct = (e) => {
    const { value } = e.target;
    // 상품코드에 넣을 데이터
    setSelectedDropValue(data.filter((el) => el.value === value)[0].id);
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
