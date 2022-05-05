import tw from "tailwind.macro";
import styled from "@emotion/styled";


export const WrappedMainSection = styled.div`
${tw`max-w-6xl mx-auto px-4 text-center relative`}
margin-top: 8rem;
margin-bottom: 11rem;
h1 {
    ${tw`text-4xl md:text-6xl`}
    
    @media (max-width: 380px) {
        word-break: break-all;
    }
}
p {
${tw`text-xl md:text-2xl`}
}
img {
  ${tw`absolute right-0`}
  top: 80px;
  z-index: -1;
  width: 90%;
}
@media (max-width: 600px) {
   img {
       top: 150px;
   } 
}
@media (max-width: 450px) {
   img {
       top: 200px;
   } 
}
@media (max-width: 370px) {
   img {
       top: 300px;
   } 
}
`;