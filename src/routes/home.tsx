import styled from "styled-components";
import PostTweetForm from "../comoponents/post-tweet-form";
import Timeline from "../comoponents/timeline";

const Wrapper = styled.div`
    display: grid;
    gap: 50px;
    //overflow-y: scroll;
    //grid-template-rows: 1fr 5fr;
`;

export default function Home() {
    return <Wrapper>
        <PostTweetForm />
        <Timeline />
    </Wrapper>;
}