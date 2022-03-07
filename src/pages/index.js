import * as React from "react";
import { Layout, TextComponent, MainSection, FAQ } from "../components";

const IndexPage = () => {
  return <Layout>
  <MainSection/>
  <TextComponent title={'O akcji'} 
  content={content1}/>
  <TextComponent title={ 'Kim jesteśmy' } 
  content={content2}/>
  <TextComponent title={'Chcę jako firma przekazać laptop'} 
  content={content3}/>
  <TextComponent title={'Współpracujemy z'} 
  content={'LISTA FIRM'}/>
  <TextComponent title={'Potrzebujesz laptopa?'} 
  content={content4}/>
  <FAQ/>
  <TextComponent title={'Partnerzy'} 
  content={'PARTNERZY'}/>
  <TextComponent title={'Regulamin'} 
  content={'https://drive.google.com/file/d/1zxCiJ2fgSp23Hmo__VG1YTYc7Wwykk_h/view?usp=sharing'}/>
  <TextComponent title={'Kontakt'} 
  content={content5}/>
</Layout>
}

export default IndexPage

const content1 = `Uchodźcy i uchodźczynie - a także ich dzieci - potrzebują namiastki normalności w tej nowej, trudnej rzeczywistości. 
W dzisiejszych czasach ciężko sobie poradzić bez komputera. Dlatego chcemy zebrać dla tych, którzy znaleźli się w Krakowie, laptopy potrzebne w codziennym życiu. 

Dzięki temu będą mogli pozostawać w kontakcie z bliskimi, śledzić na bieżąco informacje,
szukać zatrudnienia, pracować zdalnie, składać wnioski online do urzędów.
Nie zapominajmy też o najmłodszych. Niech oglądają na laptopach ulubione bajki, grają w swoje gry i uczą się - w końcu wciąż mamy rok szkolny. 

Dlatego zachęcamy firmy w Krakowie: być może w Waszych szafach i magazynach leżą laptopy, myszki, ładowarki, słuchawki, których już nie używacie, a mogłyby się jeszcze przydać? Chcemy dostarczyć je do potrzebujących w naszym mieście.`

const content2 = `Pracujemy w jednej z krakowskich firm z branży IT. Każde z nas jest w jakiś sposób zaangażowane w pomoc dla ofiar tego konfliktu. Wspólnie zastanawialiśmy się, co jeszcze możemy zrobić dla uchodźczyń i uchodźców z terenu Ukrainy, którzy potrzebują teraz naszego wsparcia. Pomysł z laptopami wydawał nam się najbardziej oczywisty. Zawiązaliśmy Komitet Społeczny “Laptopy dla Ukrainy”, skontaktowaliśmy się z krakowskimi organizacjami, które pomogą nam w ich dystrybucji i… rozpoczynamy zbiórkę laptopów!`;

const content3 = `Twoja firma ma wolne i sprawne laptopy i chce je przekazać uchodźczyniom i uchodźcom z Ukrainy?
Wypełnij poniższy formularz i skontaktujemy się z Tobą, by uzgodnić dalsze kroki. 
`;

const content4 = `
Znasz kogoś, komu przydałby się laptop? Wypełnij nasz formularz. 

Jeśli jesteś z NGO albo innej instytucji:
https://docs.google.com/forms/d/e/1FAIpQLSeTg069WphQgRFh8ztSshnlZrZ4vp0-d_hSmZ6f5AnwI871mQ/viewform

Jeśli jesteś osobą prywatną, uciekasz z Ukrainy albo pomagasz ukraińskiej rodzinie: 
`;

// https://docs.google.com/forms/d/e/1FAIpQLSeOA4kZIefNO0dxEGhuQN0ZlhWxiCXjHztVIqz1XbFP0mz3Vw/viewform

const content5 =`
Komitet Społeczny “Laptopy dla Ukrainy”
Ostatnia 1c/b12
31-444 Kraków
Mail: laptopydlaukrainy.pl
`;