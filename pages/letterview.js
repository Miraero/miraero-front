import styled from "@emotion/styled";
import { useRouter } from "next/router";
import Header from "../components/Header";
import { useQuery } from "@tanstack/react-query";
import client from "../lib/client";
import { useEffect } from "react";

const LetterPage = () => {
    const router = useRouter();

    useEffect(() => {
        if (!localStorage.getItem("accessToken")) {
            router.push("/login");
        }
        client.defaults.headers[
            "Authorization"
        ] = `Bearer ${localStorage.getItem("accessToken")}`;
    }, []);

    const getLetter = async () => {
        const { data } = await client.get(
            `/api/letter/${router.query.letterId}`
        );
        return data;
    };

    const { data, isLoading } = useQuery(["letter"], getLetter, {});
    return (
        <MainWrapper>
            <Header />
            <Main>
                {isLoading ? (
                    <div>로딩중</div>
                ) : (
                    <>
                        <MainTop>
                            <DateText>{data.receiveDate}</DateText>
                            <LetterTitle>{data.title}</LetterTitle>
                        </MainTop>
                        <LetterView>{data.content}</LetterView>
                    </>
                )}
            </Main>
        </MainWrapper>
    );
};

export default LetterPage;

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
