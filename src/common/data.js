import { Button } from "../components";

export const FAQquestions = [
    { question: 'Kto może oddać swój sprzęt?', 
    answer: <div>
        <p>Każda firma, która chce wziąć udział w akcji i dysponuje sprawnymi laptopami, które może przekazać uchodźczyniom i uchodźcom z terenu Ukrainy.</p>
        <p>Firma przekazująca sprzęt, podpisze umowę darowizny z jednym z naszych Partnerów wspierających czyli organizacją pozarządową, która ma doświadczenie w pomocy migrantom i dzieciom.</p>
        <p>UWAGA: Nie zbieramy sprzętu od osób fizycznych.</p>
    </div> },
    { question: 'Co zbieramy?', 
    answer: <div>Zbieramy tylko i wyłącznie sprawny sprzęt komputerowy:
        <ul>
    <li>laptopy wraz z ładowarkami (warunek obowiązkowy)</li>
    <li>torba na loptopa, pudełko</li> 
    <li>myszka, słuchawki (opcjonalnie)</li>
    </ul>
    UWAGA: Sprawdź, czy sprzęt, który chcesz przekazać, jest sprawny.</div> },
    { question: 'Czego nie zbieramy?', answer: 
    <div>
        <p>Nie zbieramy ELEKTROŚMIECI czyli sprzętu nienadającego się do użytku, wybrakowanego, niedziałającego.</p>
        <p>UWAGA: Zastrzegamy sobie możliwość zwrotu sprzętu niedziałającego lub w złym stanie technicznym.</p>
        </div> },
    { question: 'Jak przygotować sprzęt do przekazania uchodźcom?', answer: 
    <div>Przed oddaniem sprzętu:
        <ol>
    <li> upewnij się, że laptop jest sprawny</li>
    <li> usuń wszystkie pliki, które znajdują się w laptopie</li>
    <li> sformatuj system operacyjny do ustawień fabrycznych. </li>
    <li> ustaw język systemu na ukraiński, rosyjski lub (trzeci wybór) angielski </li>
    <li> zaktualizuj oprogramowanie</li>
    <li> jeszcze raz upewnij się, że laptop jest sprawny</li>
    </ol>
    </div> },
    { question: 'Jak długo trwa zbiórka?', answer: 
<p>Zbiórka „Laptopy dla Ukrainy” trwać będzie od 10 marca do 31 maja 2022 r.</p> },
    { question: 'Do kogo trafią laptopy?', answer: 
    <p>Zgromadzony sprzęt komputerowy zostanie przekazany uchodźczyniom i uchodźcom z terenu Ukrainy za pośrednictwem organizacji pozarządowych.</p> },
    { question: `Gdzie mogę przynieść sprzęt?`, answer: 
    <div>
    <p>Po otrzymaniu od firmy formularza zgłoszeniowego, skontaktujemy się ze wskazaną w nim osobą do kontaktu w celu dopełnienia formalności (umowa darowizny) i ustalenia terminu, kiedy sprzęt komputerowy można dostarczyć na miejsce zbiórki i przekazać podpisany dokument.</p>
    <p>Miejscem zbiórki sprzętu jest siedziba firmy PushPushGo sp.z o.o. mieszcząca się przy ul. Ostatniej 1c/B12.</p>    
    </div>},
    { question: `Czy sprzęt mogę wysłać pocztą/kurierem?`, answer: 
    <p>Tak, ale tylko wtedy, kiedy ustalisz taką formę przekazania sprzętu z Koordynatorem, czyli nami.</p> },
    { question: `Nie potrafię przygotować sprzętu według wytycznych organizatorów akcji. Czy mimo wszystko mogę oddać go na zbiórkę?`, 
    answer: <p>Niestety, nie. Koordynacja zbiórki i dystrybucji zebranego sprzętu jest dla nas i tak dużym wyzwaniem. Dlatego zależy nam, abyście nam pomogli i po swojej stronie przygotowali komputer dla przyszłego użytkownika.</p> },
    { question: `Jak moja firma może rozliczyć się z oddania laptopów na zbiórkę?`, 
    answer: <p>
       Każda firma, która będzie chciała przekazać sprzęt komputerowy, podpisze umowę darowizny z jednym z naszych Partnerów wspierających czyli organizacją pozarządową, które specjalizują się w tego typu pomocy. 
    </p> },
]

export const aboutAction = {
    title: "O akcji",
    content: <div>
        <p>Uchodźczynie i uchodźcy - a także ich dzieci - potrzebują namiastki normalności w tej nowej, trudnej rzeczywistości.</p> 
        <p>W dzisiejszych czasach ciężko sobie poradzić bez komputera. Dlatego chcemy zebrać dla nich laptopy potrzebne w codziennym życiu. Dzięki temu będą mogli pozostawać w kontakcie z bliskimi, śledzić na bieżąco informacje, szukać zatrudnienia, pracować zdalnie, składać wnioski online do urzędów. </p>
        <p>Nie zapominajmy też o najmłodszych. Niech oglądają na laptopach ulubione bajki, grają w swoje gry i uczą się - w końcu wciąż mamy rok szkolny. </p>
        <p>Dlatego zwracamy się do krakowskich firm: być może w Waszych szafach i magazynach leżą laptopy, myszki, ładowarki, słuchawki, których już nie używacie, a mogłyby się jeszcze przydać? Pomóżcie naszym ukraińskim sąsiadom i weźcie udział w akcji “Laptopy dla Ukrainy”.</p>
        <div>
            <p>Dołącz do naszego <a className="fb-group" href="https://fb.me/e/36HdSYCRC" target="_blank">wydarzenia na Facebooku #LaptopyDlaUkrainy</a></p>
            <p>Приєднуйтесь до нашої <a className="fb-group" href="https://fb.me/e/36HdSYCRC" target="_blank">події у Facebook #LaptopyDlaUkrainy</a></p>
        </div>
    </div>
}

export const aboutUs = {
    title: "Kim jesteśmy",
    content: <div>
        <p>Pracujemy w jednej z krakowskich firm z branży IT. Każde z nas jest w jakiś sposób zaangażowane w pomoc dla ofiar wojny w Ukrainie. Wspólnie zastanawialiśmy się, co jeszcze możemy zrobić dla osób, które przybyły do naszego kraju, a które potrzebują teraz bardzo mocno naszego wsparcia. </p>
        <p>Pomysł z laptopami wydawał nam się najbardziej oczywisty. Nasza firma dała nam zielone światło do działania i udostępniła miejsce w biurze na zbierany sprzęt. Nawiązaliśmy współpracę z kilkoma krakowskimi organizacjami pozarządowymi, które specjalizują się w pomocy migrantom, dzieciom.</p> 
    </div>
}

export const actionExplained = {
    title: "Jak to działa krok po kroku",
    content: <ol>
        <li>Współpracujemy z kilkoma krakowskimi organizacjami pozarządowymi, które pomogą nam w przekazaniu sprzętu bezpośrednio osobom potrzebującym oraz w kwestiach księgowo-prawnych. Firma, która przekaże sprzęt komputerowy, podpisze z jedną z nich umowę darowizny. To są nasi Partnerzy wspierający.</li>
        <li>Aby wziąć udział w akcji, Twoja firma musi wypełnić formularz zgłoszeniowy online znajdujący się na naszej stronie, w którym podaje swoje dane oraz informacje o przekazywanych laptopach (numer seryjny, system operacyjny, język, itp.).</li>
        <li>Jak tylko otrzymamy zgłoszenie, skontaktujemy się z osobą wskazaną do kontaktu z ramienia Twojej firmy. Przekażemy jej wzór umowy darowizny oraz ustalimy termin, kiedy można dostarczyć sprzęt na miejsce zbiórki.</li>
        <li>Miejscem zbiórki sprzętu jest biuro naszej firmy PushPushGo sp. z o.o. znajdujące się przy ul. Ostatniej 1C/B12 w Krakowie. </li>
        <li>Na naszej stronie znajduje się także formularz do zgłoszenia zapotrzebowania na laptopy dla organizacji pozarządowych, które opiekują się uchodźczyniami i uchodźcami, znają ich potrzeby i chcą przekazać laptopy swoimi podopiecznymi.</li>
        <li>W momencie zgromadzenia wystarczającej liczby laptopów, to przekazujemy je tym organizacjom za pośrednictwem naszych Partnerów wspierających, którzy podpiszą z nimi umowę darowizny.</li>
        <li>Każda firma, biorąca udział w akcji, otrzyma informację, gdzie trafił ich sprzęt komputerowy.</li>
    </ol>
}

export const howToParticipate = {
    title: 'Chcę przekazać laptop',
    content: <div>
        <p>Twoja firma ma nieużywane i sprawne laptopy i chce je przekazać uchodźczyniom i uchodźcom z Ukrainy?</p>
        <p>Wypełnij poniższy formularz, a my skontaktujemy się z Tobą, by uzgodnić dalsze kroki </p> 
        <div className="form-button--wrapper">
        <a className={ "form-button" } 
        href={ 'https://docs.google.com/forms/d/e/1FAIpQLSeOA4kZIefNO0dxEGhuQN0ZlhWxiCXjHztVIqz1XbFP0mz3Vw/viewform' } 
        target="_blank">Przejdź do formularza ></a>
        </div>
    </div>
}

export const howToGetHelped = {
    title: "Potrzebujesz laptopa?",
    content: <div>
        <p>Якщо ви є біженцем з України та перетнули український кордон після 24 лютого 2022 року і у вас є номер PESEL, заповніть форму нижче:</p>
        <div style={{marginBottom: '2rem'}} className="form-button--wrapper">
        <a className={ "form-button" } 
        href={ 'https://docs.google.com/forms/d/e/1FAIpQLSdSdjcSCEJYDPFb6VMBGZHFrFGRpuR1ly3dCSkAnjT2FK-cVA/viewform' } 
        target="_blank">Перейдіть до форми ></a>
        </div>

        <p>Jeśli jesteś organizacją pozarządową, która pomaga uchodźczyniom i uchodźcom z terenu Ukrainy i możesz im przekazać sprzęt komputerowy, wypełnij poniższy formularz:</p>
        <div className="form-button--wrapper">
        <a className={ "form-button" } 
        href={ 'https://docs.google.com/forms/d/e/1FAIpQLSeTg069WphQgRFh8ztSshnlZrZ4vp0-d_hSmZ6f5AnwI871mQ/viewform' } 
        target="_blank">Przejdź do formularza ></a>
        </div>
    </div>
}

export const partners = {
    title: 'Nasi partnerzy',
    content: <div>
        <h4>Partnerzy wspierający:</h4>
        <div className={"logo-wrapper"}>
            <a className="interkuluralni" target="_blank" href="https://interkulturalni.pl/">
            <img alt={"Logo stowarzyszenia Interkulturalni PL"} src={"../../Interkulturalni.jpg"} />
            </a>
            <a className="hearty" target="_blank" href="https://heartyfoundation.com/">
            <img alt={"Logo fundacji Hearty Foundation"} src={"../../hearty-logo.svg"}/>
            </a>
            <a className={"ardk"} target="_blank" href="https://akcjaratunkowadlakrakowa.pl/">
            <img alt={"Logo inicjatywy Akcja Ratunkowa dla Krakowa"} src={"../../ardk-logo.png"}/>
            </a>
            <a className={"ppg"} target="_blank" href="https://pushpushgo.com/pl/">
            <img alt={"Logo PushPushGo"} src={"../../ppg-logo.png"}/>
            </a>
            <a className={"uainkrk"} target="_blank" href="https://uainkrakow.pl/">
            <img alt={"Logo UAinKrakow.pl"} src={"../../ukinkrakow-logo.png"}/>
            </a>
            <a className={"otwartykrk"} target="_blank" href="https://otwarty.krakow.pl">
            <img alt={"Logo Koalicja Otwarty Kraków"} src={"../../kok.png"}/>
            </a>
        </div>
    </div>
}

export const partecipants = {
    title: 'Akcję wsparli',
    content: <div>
        <div className={"logo-wrapper action-supporters"}>
            <a className="bplusb" target="_blank" href="https://bplusb.pl/">
            <img alt={"Logo B plus B"} src={"../../bplusb.png"} />
            </a>
            <a className="poweredbymeaning" target="_blank" href="www.poweredbymeaning.com">
            <img alt={"Logo Powered by Meaning"} src={"../../pbm.png"}/>
            </a>
        </div>
    </div>
}

export const contact = {
    title: 'Kontakt',
    content: <div className={"contact-card"}>
        <p>Koordynatorka akcji:</p>
        <p>Paulina Poniewska</p>
        <a style={{display: "block"}} href="+48799038361">tel. 799 038 361</a>
        @ <a href="mailto:laptopydlaukrainy@gmail.com" target="_blank">laptopydlaukrainy@gmail.com</a><br/>
    </div>
}