import styled from "@emotion/styled";
import { useRouter } from "next/router";
import Header from "../components/Header";

const Inbox = () => {
    const router = useRouter();

    const getLetter = async () => {
        const { data } = await client.get(
            `/api/letter/${router.query.letterId}`
        );
        return data;
    };

    const { data: letter } = useQuery(["letter"], getLetter, {
        refetchInterval: 500,
    });
    return (
        <MainWrapper>
            <Header />
            <Main>
                <MainTop>
                    <DateText>{data.receiveDate}</DateText>
                    <LetterTitle>{data.title}</LetterTitle>
                </MainTop>
                <LetterView>{data.content}</LetterView>
            </Main>
        </MainWrapper>
    );
};

export default Inbox;

const MainWrapper = styled.div`
    box-sizing: border-box;
    margin-left: 20px;
    width: 95vw;
    height: 95vh;
`;
const Main = styled.div`
    margin-top: 102px;
`;

const MainTop = styled.div``;

const DateText = styled.div`
    font-weight: 500;
    font-size: 16px;
    color: var(--gray01);
`;

const LetterTitle = styled.div`
    margin: 5px 0;
    font-size: 24px;
    font-weight: 600;
`;

const LetterView = styled.div`
    width: 350px;
    height: 529px;
    margin-top: 15px;
    font-size: 16px;
    line-height: 30px;
`;
