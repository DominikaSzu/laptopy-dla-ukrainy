import tw from "tailwind.macro";
import styled from "@emotion/styled";

export const FAQWrapper = styled.div`
${tw`max-w-6xl mx-auto  my-14`}

.react-tabs__tab {
    width: 50%;
    position: relative;
    bottom: -6px;

    img {
        margin: auto;
    }
}

.react-tabs__tab-list {
    border-bottom: none;

    li {
        border-bottom: .5px solid #aaa;

        &.react-tabs__tab--selected {
            border-bottom: none;
        }
    }
}
`;

export const Header = styled.h2`    
${tw`font-bold text-2xl text-center my-6`}
`;
