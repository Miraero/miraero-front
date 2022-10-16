import styled from "@emotion/styled";

const LetterBox = () => {
  return (
    <LetterContainer>
      <LetterImage src="asset/letter.png" />
      <LetterInfo>
        <LetterTitle>아이스크림 먹는 캄토노</LetterTitle>
        <LetterToSection>
          <LetterToTitle>To</LetterToTitle>
          <LetterToDate>2022.10.16</LetterToDate>
        </LetterToSection>
        <LetterFromSection>
          <LetterFromTitle>From</LetterFromTitle>
          <LetterFromDate>2022.10.18</LetterFromDate>
        </LetterFromSection>
      </LetterInfo>
    </LetterContainer>
  );
};

const LetterContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 0.6em;
  margin-top: 0.8em;
  padding: 1em 1em;
  box-shadow: var(--boxShadow);
  cursor: pointer;

  @media (max-width: 15rem) {
    flex-direction: column;
  }
`;

const LetterInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0.5em;
  padding: 0.5em;
`;

const LetterImage = styled.img`
  max-width: 10em;
  height: 5em;
  margin-left: auto;
  margin-right: auto;
`;

const LetterTitle = styled.div`
  margin-bottom: 1.5em;
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--textColor);
`;

const LetterToSection = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const LetterToTitle = styled.div`
  width: 3.5rem;
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--textColor);
`;

const LetterToDate = styled.div`
  flex: auto;
  font-size: 0.7rem;
  color: var(--gray01);
`;

const LetterFromSection = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const LetterFromTitle = styled.div`
  width: 3.5rem;
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--textColor);
`;

const LetterFromDate = styled.div`
  flex: auto;
  font-size: 0.7rem;
  color: var(--gray01);
`;

export default LetterBox;
