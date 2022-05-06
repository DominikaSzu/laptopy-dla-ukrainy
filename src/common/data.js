import { Button } from "../components";

export const FAQquestions = {
    title: 'FAQ',
    questions: [
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
    { question: `Czy sprzęt mogę wysłać pocztą/kurierem?`, answer: 
    <p>Tak, ale tylko wtedy, kiedy ustalisz taką formę przekazania sprzętu z Koordynatorem, czyli nami.</p> },
    { question: `Nie potrafię przygotować sprzętu według wytycznych organizatorów akcji. Czy mimo wszystko mogę oddać go na zbiórkę?`, 
    answer: <p>Niestety, nie. Koordynacja zbiórki i dystrybucji zebranego sprzętu jest dla nas i tak dużym wyzwaniem. Dlatego zależy nam, abyście nam pomogli i po swojej stronie przygotowali komputer dla przyszłego użytkownika.</p> },
    { question: `Jak moja firma może rozliczyć się z oddania laptopów na zbiórkę?`, 
    answer: <p>
       Każda firma, która będzie chciała przekazać sprzęt komputerowy, podpisze umowę darowizny z jednym z naszych Partnerów wspierających czyli organizacją pozarządową, które specjalizują się w tego typu pomocy. 
    </p> },
]}

export const FAQGetHelpUA = {
    title: 'faq-zbiorka',
    questions: [
    { question: 'Хто є організаторами акції #LaptopyFlaUkrainy?', 
    answer: <div>
        <p>Ми, волонтери, займаємося акцією у вільний після роботи час. Ми всі працюємо повний робочий день, тому, будь ласка, поважайте наш час і не надсилайте нам повідомлення із запитаннями, на які можна знайти відповіді в секції з поширеними запитаннями.</p> 
        <p>Перш ніж задати нам запитання, переконайтеся, що ви не знайдете відповіді на нашому веб-сайті.</p>
        <p>На такі питання ми відповідати не будемо. Але цей час ми присвятимо контактам з компаніями, щоб отримати для вас якомога більше ноутбуків.</p>
    </div> },
    { question: 'Звідки ми беремо ноутбуки?', 
    answer: <div>
        <p>Ми отримуємо ноутбуки від компаній. Це комп’ютери, що були в ужитку кілька років.</p>
        <p>Компанії заявляють, що вони працездатні та перевірені. Кожен комп’ютер був відформатований ними і має завантажену операційну систему. Акумулятор може розрядитися, тому обов’язково підключіть його та зарядіть перед першим використанням. Зауважте, що ми не несемо відповідальності в разі технічних проблем з переданими ноутбуками.</p>
    </div> },
    { question: 'Хто може отримати ноутбук', 
    answer: <div>
        <p>Ви повинні виконати кілька умов:</p>
        <ul>
          <li>ви біженець з війни і можете задокументувати це</li>
          <li>ви перетнули український кордон після 24 лютого</li>
          <li>ви можете забрати комп'ютер особисто</li>
          <li>ви повнолітній (вам більше 18 років)</li>  
        </ul>
        <p>(Якщо вам менше 18 років, прочитайте відповідь на запитання «Чи може неповнолітній отримати ноутбук?»)</p>
        <p>Під час підписання контракту ми перевіримо ваш статус військового біженця та вашу особу. Вам обов’язково потрібно взяти з собою документи.</p>
        <p>Збір обладнання та підписання договору дарування відбувається в Кракові - МИ НЕ НАДСИЛАЄМО НОУТБУКИ І НЕ ПЕРЕДАЄМО ЧЕРЕЗ ПОСРЕДНИКІВ</p>
    </div> },
    { question: 'Як отримати ноутбук?', 
    answer: <div>
        <p>Необхідно заповнити анкету на сайті laptopydlaukrainy.pl. Ноутбуки розподіляються в хронологічному порядку отриманих заявок. Додатковий контакт по телефону чи електронній пошті не прискорить черги.</p>
        <p>Якщо прийде ваша черга, ми зв’яжемося з вами електронною поштою та повідомимо, коли і де забрати обладнання. Будь ласка, наберіться терпіння і розуміння, оскільки потреби величезні.</p>
        <p>Наразі подача заявок призупинена, оскільки ми вже зібрали 40 000 заявок. Ми повернемо можливість реєстрації, як тільки у нас буде відповідна кількість ноутбуків.</p>
        <p>Інформація про це з'явиться у FB: https://fb.me/e/36HdSYCRC Будь ласка, не пишіть нам в цій справі  – як тільки ситуація зміниться, ми повідомимо вас про це в Фейсбуці. </p>
    </div> },
    { question: 'Які документи мені потрібно мати, щоб забрати ноутбук?', 
    answer: <div>
        <ul>
            <li>паспорт</li>
            <li>номер PESEL (якщо він у вас є)</li>
            <li>адресу електронної пошти, яку ви вказали у формі заявки</li>
        </ul>
    </div> },
    { question: 'Де можна взяти ноутбук?', 
    answer: <div>
        <p>Місце отримання ноутбука та час буде вказано в електронному листі, який ви отримаєте від нас, коли у нас буде ноутбук, щоб передати його вам.</p>
    </div> },
    { question: 'Як я дізнаюся, чи можу я забрати свій ноутбук?', 
    answer: <div>
        <p>Ми надішлемо вам інформацію на електронну пошту, де вкажемо місце та час збору. Будь ласка, регулярно перевіряйте свою електронну пошту, а також папку СПАМ.</p>
        <p>Повідомлення буде надіслано з адрес laptopydlaukrainy@gmail.com. Достовірним буде лише повідомлення, надіслане з цієї адреси. Ми не зв'язуємося по телефону чи інші платформи.</p>
        <p>Якщо ви отримали повідомлення про те, що ваш ноутбук готовий до відбору з іншого джерела, не довіряйте йому і цьому відправнику.</p>
    </div> },
    { question: 'Хтось може забрати мій ноутбук для мене?', 
    answer: <div>
        Ні, ви повинні забрати ноутбук особисто.
    </div> },
    { question: 'Чи може неповнолітня взяти ноутбук?', 
    answer: <div>
        Якщо ви неповнолітні, договір буде складено на ваших батьків або законного опікуна. Ви обов’язково повинні прийти з ним.
    </div> },
    { question: 'Ви доставляєте ноутбук?', 
    answer: <div>
        Ні, це неможливо. Місце збору ноутбука – Краків.
    </div> },
    { question: 'Я не зміг прийти вчасно, чи можу я отримати свій ноутбук іншого дня?', 
    answer: <div>
        <p>На жаль, але тільки в дату, зазначену в електронному листі з повідомленням про місце та час отримання, ми гарантуємо, що ви отримаєте свій ноутбук на 100%. Якщо ви не змогли прибути вчасно або вчасно не прочитали наше повідомлення, ви зможете отримати ноутбук, лише якщо хтось інший не забере комп’ютер вчасно.</p>
        <p>Однак, ми не можемо гарантувати, що зможемо вам допомогти. Перш за все, ми передамо техніку новим людям, і якщо хтось із них не прийде у встановлений термін, то ми можемо віддати ноутбук вам. </p>
        <p>Напишіть нам, тоді ми повідомимо, коли ви можете приїхати і, можливо, ви отримаєте ноутбук.</p>
    </div> },
    { question: 'Чи можуть кілька членів сім’ї отримати ноутбук?', 
    answer: <div>
        <p>Ні, одна сім’я може отримати один ноутбук. Таким чином ми допомагаємо більшій кількості сімей. Потреби величезні, тому достатньо, щоб звернувся лише один член сім’ї.</p>
    </div> },
    { question: 'Навіщо нам PESEL і паспортні дані', 
    answer: <div>
        <p>Pesel і номер паспорта необхідні, тому що при отриманні ноутбука ви підписуєте договір дарування, який є документом, що підтверджує, що ви отримали право власності на ноутбук. Ці дані також підтверджують вашу особу, тим більше, що ваша адреса проживання в Польщі може змінитися.</p>
        <p>Таким чином ми також підтверджуємо ваш статус біженця війни.</p>
        <p>Більше того, може статися, що знайдуться люди з однаковими іменами та прізвищами. Тільки номер PESEL, номер паспорта може підтвердити вашу особу.</p>
        <p>Link:  <a className="fb-group" href="https://docs.google.com/document/d/1_aAn1IA1Ti2ZkYb9eu4yVX92c5xXDJkPAtMMNzRotHw/edit?usp=sharing" target="_blank">Інформація про зберігання персональних даних</a></p>
    </div> },
    { question: 'Мій ноутбук не працює. Що робити?', 
    answer: <div>
        <p>Можуть бути випадки, коли у вашого ноутбука можуть виникнути технічні проблеми або зарядний пристрій може не працювати. Якщо ви повідомите нам про дефект протягом 48 годин після отримання, то ми можемо його замінити, якщо у нас є запасний ноутбук або зарядний пристрій. Якщо ні, на жаль, ми не можемо допомогти.</p>
        <p>Будь-який ремонт доведеться робити самостійно.</p>
    </div> },
    { question: 'Як зв’язатися з організаторами збору', 
    answer: <div>
        <p>Якщо ви не знайшли потрібну інформацію в секції поширених запитань, напишіть нам на адресу: <a href="mailto:laptopydlaukrainy@gmail.com" target="_blank">laptopydlaukrainy@gmail.com</a>.</p>
        <p><b>ПРИМІТКА</b> Ми не відповідатимемо на запитання, відповіді на які ви знайдете в розділі поширених запитань. Але цей час ми присвятимо контактам з компаніями, щоб заохотити їх пожертвувати ноутбуки для нашої акції.</p>
        <p>Будь ласка, не пишіть листи нашим партнерам - вони не дадуть відповіді на ваші запитання.</p>
    </div> },
    { question: 'Інформація про зберігання персональних даних:', 
    answer: <div>
        Link:  <a className="fb-group" href="https://docs.google.com/document/d/1_aAn1IA1Ti2ZkYb9eu4yVX92c5xXDJkPAtMMNzRotHw/edit?usp=sharing" target="_blank">Інформація про зберігання персональних даних</a>
    </div> },
    ]
}

export const FAQGetHelpPL = {
    title: 'faq-zbiorka',
    questions: [
    { question: 'Kim są organizatorzy zbiórki #LaptopyDlaUkrainy?', 
    answer: <div>
        <p>Jesteśmy wolontariuszami, zajmujemy się zbiórką w naszym wolnym czasie po pracy. Wszyscy pracujemy na etacie, także prosimy o uszanowanie naszego czasu i nie wysyłanie do nas wiadomości z pytaniami, na które odpowiedzi możecie znaleźć w tym FAQ.</p>
        <p>Zanim zadasz nam pytanie, upewnij się, że nie znajdziesz odpowiedzi na naszej stronie.</p>
        <p>Nie będziemy odpowiadać na takie pytania. Ale za to ten czas poświęcimy na kontakty z firmami, aby zdobyć jak najwięcej laptopów dla Was.</p>
    </div> },
    { question: 'Skąd mamy laptopy?', 
    answer: <div>
        <p>Laptopy otrzymujemy od firm. Są to komputery używane, kilkuletnie. </p>
        <p>Firmy deklarują, że są sprawne i sprawdzone. Każdy komputer został przez nich sformatowany i ma wgrany system operacyjny. Bateria może być rozładowana, dlatego przed pierwszym uruchomieniem komputera, należy go podłączyć do prądu i podładować. Informujemy, że nie odpowiadamy za zgłaszane reklamacje.</p>
    </div> },
    { question: 'Kto może dostać laptopa?', 
    answer: <div>
        <p>Musisz spełnić kilka warunków:</p>
        <ul>
            <li>jesteś uchodźcą wojennym i możesz to udokumentować</li>
            <li>przekroczyłeś granicę ukraińską po 24 lutego</li>
            <li>możesz odebrać osobiście komputer</li>
            <li>jesteś osobą pełnoletnią (masz ukończone 18 lat). (Jeśli nie masz 18 lat przeczytaj odpowiedź na pytanie “Czy osoba niepełnoletnia może odebrać laptopa?”)</li>
        </ul>
        <p>Podczas podpisywania umowy zweryfikujemy Twój status uchodźcy wojennego oraz Twoją tożsamość. Koniecznie musisz wziąć dokumenty ze sobą.</p>
        <p>Odbiór sprzętu i podpisanie umowy darowizny odbywa się w Krakowie - NIE WYSYŁAMY SPRZĘTU, NIE PRZEKAZUJEMY SPRZĘTU PRZEZ POŚREDNIKÓW.</p>
    </div> },
    { question: 'Jak otrzymać laptopa?', 
    answer: <div>
        <p>Należy wypełnić formularz zgłoszeniowy na stronie laptopydlaukrainy.pl. Laptopy są przekazywane według  kolejności chronologicznej zgłoszeń. Dodatkowy kontakt telefoniczny, mailowy nie przyśpieszy kolejki.</p>
        <p>Jeśli przyjdzie Twoja kolej, wtedy się z Tobą skontaktujemy drogą mailową i poinformujemy kiedy i gdzie odebrać sprzęt. Prosimy o cierpliwość i wyrozumiałość, ponieważ potrzeby są ogromne.</p>
        <p>Obecnie formularz jest wyłączony, ponieważ zebraliśmy już 40 tysięcy wniosków. Uruchomimy go ponownie, jak tylko będziemy dysponować odpowiednią liczbą laptopów.</p> 
        <p>Informacja o tym pojawi się na wydarzeniu na FB: https://fb.me/e/36HdSYCRC</p>
        <p>Prosimy nie pisać do nas w tej sprawie - jak tylko sytuacja się zmieni, to poinformujemy o tym na wydarzeniu.</p>
    </div> },
    { question: 'Jakie dokumenty muszę wziąć ze sobą, aby odebrać laptopa?', 
    answer: <div>
        <ul>
            <li>paszport</li>
            <li>numer PESEL (jeśli posiadasz)</li>
            <li>adres email, który podałeś w formularzu zgłoszeniowym</li>
        </ul>
    </div> },
    { question: 'Gdzie jest miejsce odbioru laptopa?', 
    answer: <div>
        <p>Miejsce odbioru laptopa oraz godzina będzie wskazana w mailu, który otrzymasz od nas, jak będziemy mieli laptopa, aby Ci go przekazać.</p>
    </div> },
    { question: 'Jak się dowiem, że mogę odebrać laptopa?', 
    answer: <div>
        <p>Wyślemy Ci informację drogą mailową, gdzie wskażemy miejsce oraz godzinę odbioru. Prosimy sprawdzaj swoją pocztę regularnie, a także folder SPAM. </p>
        <p>Wiadomość zostanie wysłana z adresy <a href="mailto:laptopydlaukrainy@gmail.com" target="_blank">laptopydlaukrainy@gmail.com</a>. Tylko wiadomość wysłana z tego adresu będzie wiarygodna. Nie kontaktujemy się drogą telefoniczną ani poprzez komunikatory.</p>
        <p>Jeśli dostałeś wiadomość o odbiorze laptopa z innego źródła, proszę nie ufaj jej i temu nadawcy.</p>
    </div> },
    { question: 'Czy ktoś może za mnie odebrać laptopa?', 
    answer: <div>
        <p>Nie, musisz odebrać laptopa osobiście. </p>
    </div> },
    { question: 'Czy osoba niepełnoletnia może odebrać laptopa?', 
    answer: <div>
        <p>Jeśli jesteś osobą niepełnoletnią, umowa zostanie sporządzona na Twojego rodzica lub opiekuna prawnego. Koniecznie musisz z nim przyjść.</p>
    </div> },
    { question: 'Czy wysyłacie laptopa?', 
    answer: <div>
        <p>Nie, nie ma takiej możliwości. Miejscem odbioru laptopa jest Kraków.</p>
    </div> },
    { question: 'Nie mogłem przyjść w wyznaczonym czasie, czy dostanę laptopa w innym terminie?', 
    answer: <div>
        <p>Przykro nam, ale tylko w dniu wskazanym w mailu informującym o miejscu i godzinie odbioru gwarantujemy, że na 100% otrzymasz laptopa. Jeśli nie mogłeś przyjść w terminie lub nie odczytałeś na czas naszej wiadomości, jest nam bardzo przykro, ale będziesz mógł otrzymać laptopa tylko wtedy, gdy jakaś inna osoba nie odbierze w terminie komputera.</p>
        <p>Ale nie gwarantujemy, że będziemy mogli Ci pomóc. W pierwszej kolejności będziemy przekazywać sprzęt nowym osobom, a jeśli któraś z nich nie przyjdzie w wyznaczonym terminie, wtedy możemy wydać laptopa Tobie. </p>
        <p>Napisz do nas, wtedy powiemy Ci, kiedy ewentualnie możesz przyjść i być może będziesz mógł otrzymać sprzęt.</p>
    </div> },
    { question: 'Czy kilka osób z rodziny może otrzymać laptopa?', 
    answer: <div>
        <p>Nie, jedna rodzina może otrzymać jednego laptopa. W ten sposób pomagamy większej liczbie rodzin. Potrzeby są ogromne, także wystarczy, jak się zgłosi tylko jeden członek rodziny.</p>
    </div> },
    { question: 'Po co nam pesel i dane do paszportu', 
    answer: <div>
        <p>Pesel oraz numer paszportu są potrzebne ponieważ wraz z odbiorem laptopa podpisujecie umowę darowizny, która jest dokumentem potwierdzającym, że otrzymaliście na własność laptopa. Te dane potwierdzają także Waszą tożsamość, zwłaszcza, że Wasz adres zamieszkania w Polsce może się zmienić.</p>
        <p>W ten sposób weryfikujemy także Wasz status uchodźcy wojennego.</p>
        <p>Ponadto, może zdarzyć się tak, że będą osoby o tym samym imieniu i nazwisku. Tylko PESEL, numer paszportu może potwierdzić Waszą tożsamość.</p>
        <p>Link:  <a className="fb-group" href="https://docs.google.com/document/d/1_aAn1IA1Ti2ZkYb9eu4yVX92c5xXDJkPAtMMNzRotHw/edit?usp=sharing" target="_blank">Informacja o przechowywaniu danych osobowych</a></p>
    </div> },
    { question: 'Mój laptop nie działa. Co robić?', 
    answer: <div>
        <p>Może się zdarzyć, że dany laptop może mieć jakieś problemy techniczne lub ładowarka może nie działać. Jeśli zgłosisz nam usterkę w ciągu 48 godzin od przekazania sprzętu, to jeśli dysponujemy wolnym laptopem lub ładowarką, możemy je wymienić, jeśli tak nie jest, niestety nie możemy pomóc.</p>
        <p>Wszelkie naprawy będziesz musiał zrobić na własną rękę.</p>
    </div> },
    { question: 'Jak się skontaktować z organizatorami zbiórki', 
    answer: <div>
        <p>Jeśli nie znalazłeś informacji w naszym FAQ, napisz do nas na adres: <a href="mailto:laptopydlaukrainy@gmail.com" target="_blank">laptopydlaukrainy@gmail.com</a>.</p>
        <p>UWAGA: Nie będziemy odpowiadać na pytania, na które odpowiedzi znajdziecie w tym FAQ. Ale za to, ten czas poświęcimy na kontakty z firmami, aby zachęcić je do przekazania laptopów na naszą zbiórkę.</p>
        <p>Prosimy nie pisać maili do naszych partnerów - oni nie będą odpowiadać na Wasze pytania.</p>
    </div> },
    { question: 'Informacja o przechowywaniu danych osobowych', 
    answer: <div>
        Link:  <a className="fb-group" href="https://docs.google.com/document/d/1_aAn1IA1Ti2ZkYb9eu4yVX92c5xXDJkPAtMMNzRotHw/edit?usp=sharing" target="_blank">Informacja o przechowywaniu danych osobowych</a>
    </div> },
    ]
}

export const aboutAction = {
    title: "O akcji",
    content: <div>
        <p>Uchodźczynie i uchodźcy - a także ich dzieci - potrzebują namiastki normalności w tej nowej, trudnej rzeczywistości.</p> 
        <p>W dzisiejszych czasach ciężko sobie poradzić bez komputera. Dlatego chcemy zebrać dla nich laptopy potrzebne w codziennym życiu. Dzięki temu będą mogli pozostawać w kontakcie z bliskimi, śledzić na bieżąco informacje, szukać zatrudnienia, składać wnioski online do urzędów. </p>
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
        <li>Na naszej stronie znajduje się także formularz do zgłoszenia zapotrzebowania na laptopa dla uchodźców i uchodźczyń oraz dla organizacji pozarządowych.</li>
        <li>W momencie zgromadzenia wystarczającej liczby laptopów, przekazujemy je osobom potrzebującym na podstawie umowy darowizny.</li>
        <li> Każda firma, biorąca udział w akcji, otrzyma informację, gdzie trafił ich sprzęt komputerowy.</li>
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
    title: "Мені потрібен ноутбук 💻",
    addUnderline: true,
    content: <div>
        <div>
            <p>У зв’язку з дуже високим інтересом до кампанії #LaptopyDlaUkrainy, наразі ми призупиняємо можливість висилання заявок на отримання ноутбуків від нових осіб.
            Кількість ноутбуків, які є в нашому розпорядженні, не в змозі покрити потреби, але ми постійно контактуємо з компаніями, які хочуть надати нам нове обладнання.</p>
            
            <p>Як тільки ситуація зміниться, ми відновимо реєстрацію.</p>

            <div className="information__box">
            <p><b>Увага</b>: люди, які вже заповнили форму заявки, наразі перебувають у списку очікування. Як тільки у нас з’являться ноутбуки, ми зв’яжемося з вами. Просимо цих людей не писати і не дзвонити нам – на жаль, це не прискорить процес отримання ноутбука, а лише сповільнить нас.</p>
            <p>Запрошуємо стежити за нашою подією у FB, де ми будемо публікувати останні новини <a className="fb-group" target="_blank" href="https://fb.me/e/36HdSYCRC">https://fb.me/e/36HdSYCRC</a></p>
            </div>
        </div>

        <div>
            <p>Z uwagi na bardzo duże zainteresowanie akcją #LaptopyDlaUkrainy, na chwilę obecną zawieszamy możliwość zgłaszania się osób indywidualnych po odbiór laptopów.
            Liczba laptopów, którymi dysponujemy, nie jest w stanie pokryć zapotrzebowania, jednak cały czas jesteśmy w kontakcie z firmami, które chcą przekazać nam kolejny sprzęt.</p>
            
            <p>Jak tylko sytuacja ulegnie zmianie, wznowimy możliwość rejestracji.</p>

            <div className="information__box">
            <p><b>Uwaga</b>: Osoby, które już wypełniły formularz zgłoszeniowy, są aktualnie na liście oczekujących. Jak tylko będziemy mieć dla nich dostępne laptopy, będziemy się kontaktować. Prosimy te osoby o nie zgłaszanie się ponownie i nie kontaktowanie się z nami - to niestety nie przyśpieszy otrzymania laptopa, a jedynie spowolni nasze działania.</p>
            <p>Zachęcamy do śledzenia naszego wydarzenia na FB <a className="fb-group" target="_blank" href="https://fb.me/e/36HdSYCRC">https://fb.me/e/36HdSYCRC</a></p>
            </div>
        </div>

        <p>Jeśli jesteś organizacją pozarządową, która pomaga uchodźczyniom i uchodźcom z terenu Ukrainy i chcesz wskazać osoby potrzebujące, wypełnij poniższy formularz:</p>
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
            <div className={"wiewiorka"}>
            <img alt={"Logo CSW Wiewiórka"} src={"../../csww.png"}/>
            </div>
            <a className={"cricoteca"} target="_blank" href="https://www.cricoteka.pl/pl/">
            <img alt={"Cricoteca"} src={"../../cricoteca.png"}/>
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
            <a className="poweredbymeaning" target="_blank" href="https://www.poweredbymeaning.com/">
            <img alt={"Logo Powered by Meaning"} src={"../../pbm.png"}/>
            </a>
            <a className={"ppg"} target="_blank" href="https://pushpushgo.com/pl/">
            <img alt={"Logo PushPushGo"} src={"../../ppg-logo.png"}/>
            </a>
            <a className={"mo"} target="_blank" href="https://www.mythicowl.com/pl/">
            <img alt={"Logo MythicOwl"} src={"../../mythicowl.webp"}/>
            </a>
            <a className={"hitachi"} target="_blank" href="https://www.hitachienergy.com/about-us/country-and-regional-information/poland">
            <img alt={"Logo Hitachi"} src={"../../hitachi.png"}/>
            </a>
            <a className={"shell"} target="_blank" href="https://www.shell.pl/">
            <img alt={"Logo Shell"} src={"../../shell.png"}/>
            </a>
        </div>
    </div>
}

export const contact = {
    title: 'Kontakt',
    content: <div className={"contact-card"}>
        <p>Koordynatorka akcji:</p>
        <p>Paulina Poniewska</p>
        @ <a href="mailto:laptopydlaukrainy@gmail.com" target="_blank">laptopydlaukrainy@gmail.com</a><br/>
    </div>
}