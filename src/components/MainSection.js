import React from "react";
import { Link } from "gatsby";
import { slugify } from "../common/helpers";
import tw from "tailwind.macro";
import styled from "@emotion/styled";

export const MainSection = () => {
    return <WrappedMainSection className="my-44">
        <h1>Dołącz do akcji  #LaptopydlaUkrainy</h1>
        <p>Oddając nam sprzęt pomożesz uchodzcom z Ukrainy</p>
        <Link to={`/#${slugify('Jak mogę wziąć udział w inicjatywie?')}`}>Przekaż laptop</Link>
    </WrappedMainSection>
}

const WrappedMainSection = styled.div`
${tw`max-w-6xl mx-auto px-4 text-center`}
h1 {
    ${tw`text-4xl md:text-6xl`}
}
p {
${tw`text-xl md:text-2xl`}
}
a {
    ${tw`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded my-4 inline-block`}
}
`;