import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import clsx from "clsx";

import "./App.css";

const routes = [
  ["#executive-search", "Executive research"],
  ["#recruitment", "Recruitment"],
  ["#it-contracting", "IT contracting"],
  ["#nasi-klienti", "Naši klienti"],
  //["#reference", "Reference"],
  ["#ukazky-obsazenych-pozic", "Ukázky obsazených pozic"],
  ["#zasady-a-etika", "Zásady a etika"],
  ["#pomahame", "Pomáháme"],
  ["#kontakt", "Kontakt"]
];

export default function App() {
  const burgerMenuCheckboxRef = useRef<HTMLInputElement>(null);
  const { hash } = useLocation();

  console.log(
    (hash === "#uvod" || hash === "" || hash === "#") && "logo__active"
  );

  const closeMenu = () => {
    if (burgerMenuCheckboxRef.current) {
      burgerMenuCheckboxRef.current.checked = false;
    }
  };
  return (
    <div className="App">
      <header>
        <a
          href="#uvod"
          className={clsx(
            "logo",
            (hash === "#uvod" || hash === "" || hash === "#") && "logo__active"
          )}
        >
          <h1>
            {" "}
            <img src="/sources-logo-3.svg" alt="Sources, s.r.o." />
          </h1>
        </a>
        <label htmlFor="burger_menu_checkbox" className="burger_menu_icon">
          ☰
        </label>
        <input
          type="checkbox"
          id="burger_menu_checkbox"
          className="burger_menu_checkbox"
          ref={burgerMenuCheckboxRef}
        />
        <nav>
          {routes.map(([href, label]) => {
            return (
              <a
                href={href}
                className={clsx(href === hash && "nav_link__active")}
                onClick={closeMenu}
              >
                {label}
              </a>
            );
          })}
        </nav>
      </header>
      <main onClick={closeMenu}>
        <section className="introduction anchor" id="uvod">
          <h2>Dodáváme špičkové specialisty a manažery na výjimečné pozice.</h2>
          <ul className="linkedUl">
            <li>Rychlost</li>
            <li>Ověření referencí a doporučení</li>
            <li>Partnerský přístup</li>
          </ul>
        </section>
        <section className="services">
          <div className="service anchor" id="executive-search">
            <img src="/executive-search.svg" alt="" />
            <h2>EXECUTIVE SEARCH</h2>
            <ul className="linkedUl">
              <li>seniorita konzultantů</li>
              <li>osobní kontakty a doporučení</li>
              <li>komunikační dovednosti</li>
              <li>spokojenost klienta</li>
              <li>manažerská zkušenost</li>
              <li>partnerský přístup</li>
            </ul>
          </div>
          <div className="service anchor" id="recruitment">
            <img src="/recruitment.svg" alt="" />
            <h2>RECRUITMENT</h2>
            <ul className="linkedUl">
              <li>inzerce na pracovních portálech a sociálních sítích</li>
              <li>přímé vyhledávání</li>
              <li>prezentace jen relevantních profilů</li>
              <li>informovanost o průběhu a výsledku výběrového řízení</li>
            </ul>
          </div>
          <div className="service anchor" id="it-contracting">
            <img src="/it-contracting.svg" alt="" />
            <h2>IT CONTRACTING</h2>
            <ul className="linkedUl">
              <li>nabídka IT expertů</li>
              <li>technologická specializace</li>
              <li>referencemi ověření specialisté</li>
              <li>rychlost</li>
              <li>kontinuita spolupráce</li>
              <li>databáze expertů</li>
            </ul>
          </div>
        </section>

        <section className="clients anchor" id="nasi-klienti">
          <div className="clients_items">
            {/*<a
              href="https://www.globalpayments.cz/cs-cz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/logos/logo_1.png"
                alt="Global Payments"
                title="Global Payments"
              />
            </a>*/}
            <a
              href="https://www.ackee.cz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/logos/logo_2.png" alt="Ackee" title="Ackee" />
            </a>
            {/*<a
              href="https://devix.cz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/logos/logo_3.png" alt="Devix" title="Devix" />
            </a>*/}
            <a
              href="https://www.dieboldnixdorf.com/en-us"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/logos/logo_4.png"
                alt="Diebold Nixdorf"
                title="Diebold Nixdorf"
              />
            </a>
            <a
              href="https://www.airbank.cz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/logos/logo_5.png" alt="Airbank" title="Airbank" />
            </a>
            <a
              href="https://www.allianz.cz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/logos/logo_6.png" alt="Allianz" title="Allianz" />
            </a>
            <a
              href="https://www.accenture.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/logos/logo_7.png" alt="Accenture" title="Accenture" />
            </a>
            <a
              href="https://www.rb.cz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/logos/logo_8.png"
                alt="Reiffeisen Bank"
                title="Reiffeisen Bank"
              />
            </a>
            <a
              href="https://www.kb.cz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/logos/logo_9.png"
                alt="Komerční Banka"
                title="Komerční Banka"
              />
            </a>
            {/*<a
              href="https://barclays.co.uk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/logos/logo_10.png" alt="Barclays" title="Barclays" />
            </a>*/}
            <a
              href="https://www.cez.cz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/logos/cez.png" alt="Cez" title="Cez" />
            </a>
            <a
              href="https://www.cra.cz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/logos/logo_12.png" alt="Cra" title="Cra" />
            </a>
            <a
              href="https://www.dhl.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/logos/logo_13.png" alt="DHL" title="DHL" />
            </a>
            {/*<a
              href="https://tv.nova.cz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/logos/logo_14.png" alt="TV Nova" title="TV Nova" />
            </a>*/}
            <a
              href="https://www.trask.cz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/logos/logo_15.png" alt="Trask" title="Trask" />
            </a>
          </div>
        </section>
        {/*<section className="references anchor" id="reference">
          <div className="references_header">
            <h2>Reference</h2>
          </div>
          <Carousel items={references} />
        </section>*/}
        <section
          className="filled_positions anchor"
          id="ukazky-obsazenych-pozic"
        >
          <h2>Ukázky obsazených pozic</h2>

          <p>
            Specializujeme na vyhledávání IT expertů a manažerů. Často se na nás
            obracejí klienti ve chvíli, kdy jejich vlastní náborový proces
            selhal, nebo kdy jiní HR dodavatelé nedokázali po několika měsících
            zadané pozice obsadit. V oblasti běžně obsazovaných pracovních pozic
            se vyznačujeme vysokou rychlostí prezentovaných kandidátů. Díky
            manažerským zkušenostem partnerů a tomu odpovídající komunikaci s
            kandidáty i klienty nabízíme i Executive Search na vysoce manažerské
            role.
          </p>
          <div className="shorten">
            <input type="checkbox" id="positions_list" />
            <ul className="linkedUl">
              <li>Head of Analysts team</li>
              <li>Infrastructure architect</li>
              <li>Oracle Developer</li>
              <li>Project Manager</li>
              <li>Business Analyst</li>
              <li>IT Analyst</li>
              <li>Head of QA / Test Dept.</li>
              <li>Senior DWH Architect</li>
              <li>Senior BI Developer</li>
              <li>CIO</li>
              <li>Solution Architect</li>
              <li>Senior SAP Developer</li>
              <li>Middleware Administrator</li>
              <li>BI Analyst</li>
              <li>Enterprise Architect</li>
              <li>Security Officer</li>
              <li>DELPHI Developer</li>
              <li>COBOL Developer</li>
              <li>DB Admin (Oracle)</li>
              <li>MS Lync Administrator</li>
              <li>Senior Consultant (AXAPTA)</li>
              <li>QA Manager</li>
              <li>Senior JAVA Developer</li>
              <li>Senior PHP Developer</li>
              <li>VM Ware Administrator</li>
              <li>Networking Administrator</li>
              <li>Senior Business Analyst (UML/ARIS/EA)</li>
              <li>AS/400 Administrator</li>
              <li>FE Developer</li>
              <li>Openstack Expert</li>
              <li>Java Architect</li>
              <li>SW Engineer principal architekt (Enterprise)</li>
              <li>BI Analyst (COGNOS)</li>
              <li>IT automation process expert</li>
              <li>Android developer</li>
              <li>Integration / Solution Architect</li>
              <li>PMG Application Administrator (Middleware)</li>
              <li>TP.Net Admin</li>
              <li>VMWare Team Leader</li>
              <li>Security analyst/pentester</li>
              <li>Consultant/Architect reporting</li>
              <li>Solution Architect (Webmethods)</li>
              <li>Senior MIDAS Analyst</li>
              <li>ABAP Developer</li>
              <li>SAP MM / SD / WM Consultant</li>
              <li>iOS Developer</li>
              <li>FoxPro Developer</li>
              <li>Principal Developer Oracle EBS</li>
              <li>Application Administrator</li>
              <li>Voice Engineer</li>
              <li>React Native Developer</li>
              <li>Cloud Architect</li>
            </ul>
            <label htmlFor="positions_list">Zobrazit/skrýt</label>
          </div>
        </section>
        <section className="principles anchor" id="zasady-a-etika">
          <h2>Zásady a Etika</h2>

          <div className="principles_text">
            <ul className="principles_icons linkedUl">
              <li>
                Důsledná komunikace
              </li>
              <li>
                Odborný background
              </li>
              <li>
                Férové jednání
              </li>
              <li>
                Dlouhodobé vztahy
              </li>
            </ul>
            <p>
              Přidanou hodnotu tvoříme díky backgroundu a senioritě našich
              konzultantů, kteří pracovali řadu let v odborných a manažerských
              pozicích (Banking, IT a TELCO). Klíčová slova v popisech pozic pro
              ně nejsou prázdnými pojmy.
            </p>
            <p>
              Naše klienty nezahrnujeme sadou životopisů, ale prezentujeme ty
              nejvhodnější kandidáty, relevantní k obsazované pozici.
            </p>
            <p>Budujeme dlouhodobé vztahy s našimi klienty.</p>
            <p>
              Důvěrnost informací o klientech i kandidátech je nezbytným
              předpokladem naší profesionální práce.
            </p>
            <p>
              Zajímá nás spokojenost klienta i kandidáta i po úspěšném obsazení
              pozice a další profesní růst kandidáta, protože ten je
              předpokladem k efektivní dlouhodobé spolupráci mezi klientem a
              kandidátem.
            </p>
            <p>
              Klademe důraz na porozumění odborných parametrů pozice, ale i
              požadavků na soft skills kandidátů, jejich relevanci vzhledem k
              firemní kultuře, začlenění do týmu apod.
            </p>
            <p>
              Jsme si vědomi toho, že každý mandát k obsazení pozice je
              jedinečný.
            </p>
            <p>
              Pravdivé a férové jednání vůči klientům i kandidátům je
              samozřejmostí.
            </p>

            <p>
              Budujeme respektovanou konzultační a personální společnost, která
              je synonymem profesionality, lidského přístupu, pochopení
              požadavků klienta a schopnosti doporučit vhodného kandidáta.
            </p>
          </div>
        </section>

        <section className="charity anchor" id="pomahame">
          <div className="charity_featured">
            <div className="charity_featured_text">
              <img src="/charita.jpg" alt="" />
              <h2>Daří se nám a proto rádi pomáháme ostatním</h2>
              <p>
                Dlouhodobě se účastníme projektu Arcidiecézní charity Praha -
                “Adopce na dálku”; poskytujeme prostředky na vzdělání studentů v
                Indii.
              </p>
            </div>
          </div>
        </section>
      </main>
      <section className="footer anchor" id="kontakt">
        <footer>
          <a href="TODO!!!" className="footer_map">
            <img src="/mapa.png" alt="Mapa sídla Sources, s.r.o." />
          </a>

          <div className="footer_text">
            <address>
              <strong>Sources, s.r.o.</strong>
              <br />
              Koněvova 1965/208, Žižkov
              <br />
              Praha&nbsp;3 - 130&nbsp;00 <br />
              Česko
            </address>
            <div className="footer_contacts">
              <a href="tel:+420601343000" className="footer_phone">
                +420&nbsp;601&nbsp;343&nbsp;000
              </a>
              <a href="mailto:info@sources1.cz" className="footer_email">
                info@sources1.cz
              </a>
            </div>
          </div>
          <div className="copyright">
            Nadesignoval <a href="mailto:jorikchase@gmail.com">Jorik Chase</a> |
            Naprogramoval{" "}
            <a href="mailto:tomasreichmann@gmail.com">Tomáš Reichmann</a> 2021
          </div>
        </footer>
      </section>
    </div>
  );
}
