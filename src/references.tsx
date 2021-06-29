const references = [
  <div className="reference">
    <div className="person-name">Aneta T.</div>
    <em className="reference_person_position">HR Specialist</em>
    <div className="reference_person_company">
      nadnárodní bankovní korporace
    </div>
    <p>
      “Ráda bych pochválila spolupráci se společností Sources, s.r.o., Cením si
      kvality zaslaných kandidátů, ale také rychlosti jejich dodání, i když se
      často jedná o <cite>velmi náročné pozice</cite>, kde jiné agentury nemají
      úspěchy a nedodávají žádné kandidáty. Za celou dobu spolupráce se nestalo,
      že by nebylo reagováno na mail či telefon,{" "}
      <cite>komunikace je rychlá a efektivní</cite>. Oceňuji také stručnou
      charakteristiku zasílaných kandidátů, která vystihuje jejich zkušenosti,
      ale i osobnostní profil. Kandidáti ví mnoho podrobností o pozici, nestává
      se, že by přišel kandidát, který by nevěděl, o co se jedná, nebo jeho
      zájem byl nedostatečný. Děkuji za spolupráci a ať se Vám daří. “
    </p>
  </div>,
  <div className="reference">
    <div className="person-name">Radka K.</div>
    <div className="reference_person_company">
      Český a Slovenský prodejce zahradní techniky
    </div>
    <p>
      „Díky velice <cite>profesionálnímu a aktivnímu přístupu konzultantů</cite>{" "}
      ze společnosti Sources, s.r.o. jsme našli hned několik{" "}
      <cite>ideálních kandidátů</cite> na námi obsazovanou pozici Systémového
      architekta a naše síly jsme tak mohli soustředit na výběr nejvhodnějšího z
      nich. <cite>Úspěšnost doporučených kandidátů</cite> je pro nás jasným
      ukazatelem, že kandidáti byli vybráni s velkou pečlivostí a před pohovorem
      u nás byli vybaveni relevantními informacemi o pozici i o naší
      společnosti. <cite>Komunikace a přístup</cite> byl kladně hodnocen i ze
      strany kandidátů. Děkujeme a vřele doporučujeme. S přáním pěkného dne,
      Radka K.“
    </p>
  </div>,
  <div className="reference">
    <div className="person-name">Josef Z.</div>
    <em className="reference_person_position">PHP senior konzultant</em>
    <div className="reference_person_company">Praha</div>
    <p>
      „Poprvé mi Sources, s.r.o. našli pozici vývojáře pro TV NOVA v urgentním
      termínu a druhá příjemná zkušenost byla o 2 roky později, kdy jsem dostal
      nabídku <cite>s výrazně zajímavějším platovým ohodnocením</cite> pro
      německou agenturu, ve které jsem dodnes. Celkově jsem se spoluprací velmi
      spokojen, vždy jsme s konzultanty Sources, s.r.o. našli společnou řeč.{" "}
      <cite>Profesionalita a spokojenost všech zúčastněných stran</cite> je pro
      ně na prvním místě.“
    </p>
  </div>,
  <div className="reference">
    <div className="person-name">Kamil B.</div>
    <em className="reference_person_position">
      senior Oracle PL/SQL Developer
    </em>
    <div className="reference_person_company">freelancer</div>
    <p>
      „Když jsem začal hledat uplatnění v Praze, bylo pro mě jednání ze strany
      Sources, s.r.o. příjemnou změnou. Osobní pohovor probíhal{" "}
      <cite>věcně k oboru</cite>, přátelsky a s osobním přístupem. Poskytl mi
      zajímavé srovnání vlastních zkušeností se zkušenostmi z dlouholeté praxe
      společnosti na vývoji softwarových systémů.
    </p>
  </div>,
  <div className="reference">
    <div className="person-name">Zdeněk Č.</div>
    <em className="reference_person_position">
      Head of Application Development
    </em>
    <div className="reference_person_company">
      Nadnárodní bankovní korporace
    </div>
    <p>
      „Dlouho jsme se snažili obsadit v IT poměrně úzkoprofilovou pozici a přes
      poměrně intenzivní spolupráci s agenturami a hledání vlastními silami jsme
      nedokázali najít téměř žádného kandidáta s požadovaným profilem. Po
      navázání spolupráce se společností Sources, s.r.o. nám dokázala v krátké
      době dodat velmi kvalitní seznam i s kvalitním hodnocením nalezených
      uchazečů. Osobně jsem byl nadšen nejen tím, že uspěla, kde jiní selhali,
      moc se mi líbil celý přístup k náboru, hodnocení kandidátů a příjemná a
      velmi <cite>precizní komunikace</cite>. Mohli jsme se tak už jen
      soustředit na vlastní <cite>výběr nejlepšího kandidáta</cite>. Děkuji.“
    </p>
  </div>,
  <div className="reference">
    <div className="person-name">Lenka K.</div>
    <em className="reference_person_position">HR Specialista</em>
    <div className="reference_person_company">Elektro obchod</div>
    <p>
      „
      <cite>
        Spolupráce se společností Sources, s.r.o. je velmi profesionální,
        příjemná a efektivní.
      </cite>{" "}
      Reporty o kandidátech jsou velmi precizní a podrobné. Oceňuji také snahu
      zjistit co nejvíce informací o naší společnosti, konkrétním týmu a způsobu
      práce. Domnívám se, že je to nejlepší postup, jak najít vhodné kandidáty.{" "}
      <cite>
        Se všemi kandidáty, které jsme společně našli, jsme spokojeni.
      </cite>
      “
    </p>
  </div>,
  <div className="reference">
    <div className="person-name">Lubomir J.</div>
    <em className="reference_person_position">Managing Director</em>
    <div className="reference_person_company">Energetický leader v ČR</div>
    <p>
      „Firma GDF SUEZ začala působit na českém energetickém trhu po jeho
      liberalizaci v roce 2010. Protože většina ostatních firem se v ČR již tou
      dobou na poli energetiky etablovala, byli jsme nuceni si urychleně
      vytvořit síť spolehlivých partnerů a nadprůměrně efektivních dodavatelů.
      Firma Sources, s.r.o. je jedním z nich. Umožňuje nám efektivně najít ty
      nejkvalitnější zaměstnance a partnery a začlenit je do našeho kolektivu.“
    </p>
  </div>,
  <div className="reference">
    <div className="person-name">Pavel F.</div>
    <em className="reference_person_position">Business Development Manager</em>
    <div className="reference_person_company">professional advisory group</div>
    <p>
      „Díky nasazení a odbornosti konzultantů ze společnosti Sources, s.r.o.
      jsme byli schopni ve velice krátkém čase obsadit námi požadované pozice.
      Velkou předností Sources, s.r.o. je to, že dokáží udělat velice dobře{" "}
      <cite>výběr vhodných kandidátů</cite>, kteří plně odpovídají zadaným
      požadavkům. Nakonec pro nás bylo nejtěžší si vybrat toho nejlepšího
      uchazeče, protože všichni doporučení kandidáti byli velice dobří.“
    </p>
  </div>,
  <div className="reference">
    <div className="person-name">Lukáš C.</div>
    <em className="reference_person_position">Sales Director</em>
    <div className="reference_person_company">
      Unified Communications Company
    </div>
    <p>
      „Spolupráce s agenturou Sources, s.r.o. byla pro mne velmi pozitivní
      především díky tomu, že opravdu velmi rychle pochopili naše potřeby a
      požadavky, které hledaní kandidáti museli splňovat. Díky tomu se nám od
      samého začátku spolupráce velmi rychle dařilo nalézt ty kandidáty, kteří
      splňovali naše představy. Velmi kladně také vnímám nadstandardní podporu
      ze strany Sources, s.r.o. při zajišťování "back office" podpory v době
      rekonstrukce sídla naší společnosti.“
    </p>
  </div>,
  <div className="reference">
    <div className="person-name">Pavel Z.</div>
    <em className="reference_person_position">Senior Developer .NET</em>
    <div className="reference_person_company">Oracle, Praha</div>
    <p>
      „Vážení, ještě jednou děkuji za spolupráci a za zprostředkování mého
      nového zaměstnání. Spolupráce ze strany společnosti Sources, s.r.o. byla{" "}
      <cite>vysoce profesionální</cite>, osobní pohovor byl veden v přátelském
      duchu, kdy však obě strany získaly potřebné informace. Díky Vám se mi
      podařilo získat velice zajímavou práci v nadnárodní finanční instituci za
      velmi zajímavých finančních podmínek. Spolupráci se společností{" "}
      <cite>Sources, s.r.o. mohu doporučit všem uchazečům</cite>, kteří hledají
      novou zajímavou práci.“
    </p>
  </div>
];

export default references;
