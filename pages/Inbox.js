import styled from '@emotion/styled'

const Inbox = () => {
  return (
    <MainWrapper>
      <Main>
        <MainTop>
          <DateText>2022.10.03</DateText>
          <LetterTitle>1년 뒤 내모습!</LetterTitle>
        </MainTop>
        <LetterView>어쩌구</LetterView>
      </Main>
    </MainWrapper>
  )
}

export default Inbox

const MainWrapper = styled.div`
  box-sizing: border-box;
  margin-left: 20px;
  width: 95vw;
  height: 95vh;
`
const Main = styled.div`
  margin-top: 102px;
`

const MainTop = styled.div``

const DateText = styled.div`
  font-weight: 500;
  font-size: 16px;
  color: var(--gray01);
`

const LetterTitle = styled.div`
  margin: 5px 0;
  font-size: 24px;
`

const LetterView = styled.div`
  width: 350px;
  height: 529px;
  margin-top: 15px;
  font-size: 16px;
  line-height: 30px;
`
