import tw from "tailwind.macro";
import styled from "@emotion/styled";

export const FooterContainer = styled.div`
${tw`bg-gray-100`}
> div {
${tw`max-w-6xl mx-auto px-4`}
}`;

export const FooterContent = styled.div`
${tw`flex justify-between flex-col md:flex-row`}`;

export const LogoWrapper = styled.div`
${tw`flex justify-center md:justify-start`}
a {
  ${tw`flex items-center py-5 px-2 text-gray-700 hover:text-gray-900`}
}
`;

export const LinkList = styled.div`
${tw`flex items-center  flex-col md:flex-row`}
a {
  ${tw`py-5 px-3 text-gray-700 hover:text-gray-900`}
}
`;