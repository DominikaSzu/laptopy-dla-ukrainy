import tw from "tailwind.macro";
import styled from "@emotion/styled";

export const Nav = styled.nav`
background-color: #fff; 
position: -webkit-sticky;
position: sticky; 
top: 0;
z-index: 999;
`;

export const MenuWrapper = styled.div`
${tw`max-w-6xl mx-auto px-4`}
>div {
  ${tw`flex justify-between`}
}
`;

export const Logo = styled.div`
${tw`flex`}
a {
  ${tw`flex items-center py-5 px-2 text-gray-700 hover:text-gray-900`}
}`;

export const LinkList = styled.div`
${tw`hidden lg:flex items-center`
}`;

export const Link = styled.div`
display: inline-block;
a{
  ${tw`my-5 mx-3 text-gray-700 hover:text-gray-900`}
  display: inline-block;
  position: relative;
	&::before {
		content: "";
		position: absolute;
		width: 100%;
		height: 3px;
		bottom: 0;
		margin: -5px 0;
		background-color: #005bbb;
		visibility: hidden;
		transform: scaleX(0);
		transition: all 0.4s ease-in-out 0s;
	}
	&:hover::before {
		visibility: visible;
		transform: scaleX(1);
	}
}
`;

export const MobileButton = styled.div`
${tw`lg:hidden flex items-center`}
button svg {
  ${tw`w-6 h-6`}
}
`;