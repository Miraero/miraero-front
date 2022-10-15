import styled from "@emotion/styled";

export const VerticalLeft = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export const DateText = styled.span`
  font-weight: 500;
  font-size: 16px;
  color: var(--gray01);
`;

export const Welcome = styled.span`
  font-weight: 600;
  font-size: 24px;
  color: var(--textColor);
`;

export const PageWrapper = styled.div`
  display: flex;

  flex-direction: column;
  width: calc(100vw - 40px);
  min-height: 100vh;
`;

export const LargeButton = styled.button`
  width: 100%;
  height: 56px;
  background-color: var(--textColor);
  font-weight: 500;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  border-radius: 9px;
  border: none;
  &:hover {
    background-color: var(--pressed);
  }
`;

export const SmallFill = styled.button`
  width: 47%;
  height: 56px;
  font-weight: 500;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  border-radius: 9px;
  background-color: var(--textColor);
  border: none;
  &:hover {
    background-color: var(--pressed);
  }
`;

export const SmallWeek = styled.button`
  width: 47%;
  height: 56px;
  font-weight: 500;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--textColor);
  background-color: var(--white);
  border-radius: 9px;
  border: 1px solid #f2f2f2;
`;
