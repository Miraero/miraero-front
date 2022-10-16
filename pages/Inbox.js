import styled from '@emotion/styled'
import React, { useState, useEffect } from 'react'

const Inbox = () => {
  const [letter, setLetter] = useState({})
  const { letterSendDate, letterTitle, letterText } = letter

  useEffect(() => {
    fetch('/data/letterList.json')
      .then(res => res.json())
      .then(data => setLetter(data.letter))
  })

  return (
    <MainWrapper>
      <Main>
        <MainTop>
          <DateText>{letterSendDate}</DateText>
          <LetterTitle>{letterTitle}</LetterTitle>
        </MainTop>
        <LetterView>{letterText}</LetterView>
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
