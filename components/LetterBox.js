import styled from "@emotion/styled";

const LetterBox = () => {
  return (
    <Letter>
      <LetterImage src="asset/letter.png" />
      <LetterInfo>
        <LetterTitle>아이스크림 먹는 캄토노</LetterTitle>
        <LetterTo>
          <LetterToTitle>To</LetterToTitle>
          <LetterToDate>2022.10.16</LetterToDate>
        </LetterTo>
        <LetterFrom>
          <LetterFromTitle>From</LetterFromTitle>
          <LetterFromDate>2022.10.16</LetterFromDate>
        </LetterFrom>
      </LetterInfo>
    </Letter>
  );
};

const Letter = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100px;
  border-radius: 1em;
  margin-top: 10px;
  padding: 0.2em 0;
  box-shadow: var(--boxShadow);
`;

const LetterInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-right: 1em;
`;

const LetterImage = styled.img`
  width: 150px;
  height: 80px;
  margin-left: 1em;
  margin-right: 1em;
  cursor: pointer;
`;

const LetterTitle = styled.div`
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 16px;
  color: var(--textColor);
`;

const LetterTo = styled.div`
  display: flex;
  flex-direction: row;
`;

const LetterToTitle = styled.div`
  width: 50px;
  font-size: 12px;
  font-weight: 600;
  color: var(--textColor);
`;

const LetterToDate = styled.div`
  font-size: 12px;
  color: var(--gray01);
`;
const LetterFrom = styled.div`
  display: flex;
  flex-direction: row;
`;

const LetterFromTitle = styled.div`
  width: 30px;
  margin-right: 20px;
  font-size: 12px;
  font-weight: 600;
  color: var(--textColor);
`;

const LetterFromDate = styled.div`
  margin: 0;
  font-size: 12px;
  color: var(--gray01);
`;

export default LetterBox;
