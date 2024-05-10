"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Divider from "../components/Divider";
import GridGallery from "../components/GridGallery";
import Video from "../components/Video";
import CloseButton from "../components/CloseButton";
import NameSwitch from "../components/NameSwitch";
import Footer from "../components/Footer";

export default function Claudine() {
  const initialPlayer = 0;
  const [player, setPlayer] = useState(initialPlayer);
  const [open, setOpen] = useState(false);

  const handlePlayerAndScreenChange = (newPlayer) => {
    setPlayer(newPlayer);
    setOpen(true);
  };

  const handlePlayerChange = (newPlayer) => {
    setPlayer(newPlayer);
  };

  return (
    <div>
      <Header
        player={player}
        handlePlayerChange={handlePlayerAndScreenChange}
      />
      <div className={`overlay ${open ? "open" : ""}`}>
        {open && (
          <>
            <NameSwitch setPlayer={handlePlayerChange} player={player} />
            <CloseButton handleClick={() => setOpen(false)} />
            <Video
              player={player}
              setPlayer={handlePlayerChange}
              large
              open={open}
            />
          </>
        )}
      </div>
      <main style={{ marginTop: 150 }}>
        <section>
          <div className="inner">
            <div className="largetext">
              <h2 className="teal">Uden rugby var jeg blevet monsterfed</h2>
              <h2>
                Som professionel kampsoldat var Mark Peters i &quot;stjernegod
                form&quot; og brugte masser af tid på at træne. Da han mistede
                begge ben, var det svært for ham at sidde stille hele dagen.
                Kørestolsrugby fik ham til at træne igen. - Ellers var jeg
                blevet monsterfed, siger Mark, som i dag drømmer om at vinde
                guld indenfor denne særlige kontaktsport.
              </h2>
              <p>
                <i>Af Hanne Selnæs</i>
              </p>
              <Divider />
              <p>
                I november er ørkenen i Afghanistan iskold om natten. Det er
                efter sådan en nat, at Mark Peters i 2009 er på patrulje i
                Helmandprovinsen. Han er 26 år og afsted på sin femte udsendelse
                som professionel soldat. Siden Mark blev soldat som 18-årig, har
                han fem gange været udsendt af forsvaret til Kosovo, Irak og nu
                Afghanistan.
              </p>
              <p>
                - I forhold til tidligere, så går det faktisk stille og roligt,
                husker Mark i dag. Men der er sket noget nyt: - Nu ligger
                fjenden nede i jorden – i form af vejsidebomber. Det var vi ikke
                helt vant til. Det havde mere været mand mod mand, siger han.
              </p>
              <p>
                - Den dag på patrulje, har jeg meget udstyr på ryggen. Grøften,
                som vi skal over, er lidt bred. Så i stedet for at springe over,
                går jeg ned i grøften - lige som de to foran mig, siger Mark og
                tilføjer: - Her ligger så en hilsen til mig. For Mark træder
                lige ned på en landmine og får sprængt begge ben i stykker.
              </p>

              <h3 className="teal" style={{ marginTop: 60 }}>
                Træner til de Paralympiske Lege
              </h3>
              <p>
                I dag er det ikke krig, som optager Mark. Men derimod kampen om
                medaljer og ikke mindst træningen frem til de Paralympiske Lege
                (PL) i Paris fra 28. august til 8. september 2024.
              </p>
              <p>
                Mark Peters er en af profilerne på det danske landshold i
                kørestolsrugby og en af verdens bedste spillere inden for
                sportsgrenen. For fire år siden lykkedes det landsholdet at
                kvalificere sig til PL i Tokyo for første gang nogensinde.
                Selvom det ikke blev til medaljer, men en syvende plads, så var
                det en kæmpe succes for holdet at nå til PL. Og landsholdet i
                kørestolsrugby har nu for anden gang kvalificeret sig til PL.
              </p>
              <p>
                For Mark og holdkammeraterne handler det derfor om at være så
                fit og parate som muligt. Når arbejdsdagen i Forsvarets
                materielstyrelse slutter for Mark, er der ikke meget tid til
                familie og venner. For der skal trænes. Hjemme, på stier og
                veje, i fitnesscentret og på Musholm ved Korsør, hvor
                landsholdet mødes til camp og turneringer. Et konference- og
                sportscenter som har særligt velegnede faciliteter til
                parasport.
              </p>
              <h3 className="teal" style={{ marginTop: 60 }}>
                Følelsesregister, fællesskab og selvtillid
              </h3>
              <p>
                Gennem sportsaktiviteter for sårede soldater blev Mark i sin tid
                introduceret til kørestolsrugby, som han dog ikke umiddelbart
                faldt for:
              </p>
              <p>
                Handicapsporten, det var sjovt, men i starten tænkte jeg, at det
                var lidt en erstatning for noget bedre og derfor ikke så godt.
                Men man skal jo ikke tænke det som erstatninger. Det er bare en
                mulighed, der hvor du er nu. Jeg havde ikke mulighed for at
                spile kørestolsrugby, før jeg kom til skade, men det kan jeg så
                nu. For at nå dertil skal man gennem nogle faser og et kæmpe
                følelsesregister.
              </p>
              <p>
                På Landsholdet har Mark Peters fundet et nyt stærkt fællesskab
                og mange gode venner: - Vi finder sammen efter træning og laver
                alt muligt: spiller spil og hygger os, holder grill-aftener og
                ser landskampe sammen. Under Corona-nedlukningen havde vi
                fredagsbar på Zoom.
              </p>
              <p>
                Mark er særlig glad for at være på et hold: - Som holdspiller
                ved man, at man ikke kan vinde selv. Vi vinder kun, hvis vi
                holder sammen og hjælper hinanden.
              </p>
              <p>
                - Sporten har givet mig energi og selvtillid. Kørestolsrugby er
                blevet mit fristed. Uden rugby i mit liv havde jeg nok spillet
                for meget computerspil og var blevet monsterfed. Jeg ville have
                kedet mig, men jeg ville også have haft masser af tid til at
                være sammen med kæresten, siger Mark Peters, som for nylig blev
                gift med sin kæreste gennem mange år. Hele landsholdet var med
                til brylluppet.
              </p>
              <h3 className="teal" style={{ marginTop: 60 }}>
                Vi elsker alle sammen rugby
              </h3>
              <p>
                I dag har Mark Peters rundet de 40 år, så selvom han ville
                ønske, at han kunne være professionel spiller på et
                kørestolsrugbyhold, så tror han ikke, at det er realistisk. -
                Men det kunne være helt vildt fedt at få penge for at spille
                noget, som jeg elsker så højt, som jeg elsker rugby.
              </p>
              <p>
                På flere af de hold, som Danmark konkurrerer mod på verdensplan,
                får spillerne penge for at spille på landsholdet.
              </p>
              <p>
                Når de så hører, at mange af de danske spillere arbejder på fuld
                tid ved siden af træningen, siger de: - Hvordan fanden kan I så
                spille rugby på det niveau? Det er fordi, vi alle sammen elsker
                rugby. Vi har den glæde og kærlighed til rugby. Det gør, at vi
                træner som professionelle siger Mark.
              </p>
              <p>
                Og så er det bare megasjovt at spille kørestolsrugby. Jeg morer
                mig, jeg synes det er en fed sportsgren, som bare er faldet
                pladask ind hos mig og så mange andre. Der er både tempo,
                aggression og taktik, det er en holdsport – og en meget
                medrivende sportsgren
              </p>
              <p>
                Det er ikke noget, man gør halvt. Hvis vi havde mulighed for at
                træne 24/7, og få en sindssyg god form, ja så er mulighederne jo
                nærmest uendelige. Min største drøm er at vinde guld ved nogle
                af de helt store turneringer som VM og PL.
              </p>
              <p>
                <i>
                  Hvis du skal overtale en, der er kommet til skade, til at
                  melde sig ind i en klub for kørestolsrugby, hvad vil du så
                  sige?
                </i>
              </p>
              <p>
                Først og fremmest får du et godt fællesskab og du lærer at
                tackle dagligdagen hurtigere og bedre, fordi du bliver stærkere,
                kommer i bedre form og får mere livsglæde. Det får du ved at
                opleve, at man godt kan lave sjove ting, selvom man er kommet
                til skade.
              </p>
              <p>
                Det kan sagtens blive godt igen, selvom man er lam eller mangler
                ben. Du bestemmer selv, hvordan du vil leve. Men du skal gøre en
                indsats for at få det liv, du gerne vil have. Hvis du bare
                sætter dig ned og siger &quot;kom til mig&quot;, så er det
                sjældent, at du bliver lykkelig. Det bliver ikke ligesom før,
                det skal man glemme, man skal tage det, som det kommer nu, lyder
                det fra Mark Peters.
              </p>
            </div>
            <div id="fotogalleri">
              <Divider />
            </div>
            <h2>Fotogalleri</h2>
            <p>by Tine Harden</p>
            <GridGallery
              images={[
                { caption: "", image: "mark/16" },
                { caption: "", image: "mark/17" },
                { caption: "", image: "mark/18" },
                { caption: "", image: "mark/19" },
                { caption: "", image: "mark/20" },

                { caption: "", image: "mark/01" },
                { caption: "", image: "mark/02" },
                { caption: "", image: "mark/03" },
                { caption: "", image: "mark/04" },
                { caption: "", image: "mark/05" },
                { caption: "", image: "mark/07" },
                { caption: "", image: "mark/08" },
                { caption: "", image: "mark/09" },
                { caption: "", image: "mark/10" },
                { caption: "", image: "mark/11" },
                { caption: "", image: "mark/12" },
                { caption: "", image: "mark/13" },
                { caption: "", image: "mark/14" },
                { caption: "", image: "mark/15" },
              ]}
            />

            <div>
              <section>
                <div className="largetext box box-teal">
                  <h2 className="teal">Fakta om krigen i Afghanistan </h2>
                  <p>
                    Det var terrorangrebet mod USA 11.september 2001, som fik
                    USA til at invadere Afghanistan 7. oktober 2001.
                  </p>
                  <p>
                    USA hævdede, at invasionen var i tråd med folkerettens
                    princip om retten til selvforsvar. De fleste lande bakkede
                    op om USA fortolkning, da al-Qaida, hvis ledelse befandt sig
                    i det Taliban-ledede Afghanistan, tog ansvar for
                    terrorangrebet mod USA.
                  </p>
                  <p>
                    Danmark deltog sammen med andre NATO-lande i de næste 20 års
                    krig i landet. En krig som anslås at have kostet omkring
                    176.000 menneskeliv. Heraf ca. 46.000 civile. 44 danske
                    soldater mistede livet og 214 blev såret.
                  </p>
                  <p>
                    <i>
                      Kilder: Globalis.dk, Watson Institute, Brown University,
                      USA, og Forsvarsministeriets personalestyrelse
                    </i>
                  </p>
                </div>
              </section>

              <section>
                <div className="largetext box right box-orange">
                  <h2 className="orange">Fakta om kørestolsrugby</h2>
                  <p>
                    Kørestolsrugby er en kontaktsport, som kendetegnes ved højt
                    tempo, strategi og tacklinger. Mænd og kvinder kan deltage
                    på samme hold. Spillerne bruger specialdesignede kørestole
                    (rugbystole) og det er tilladt at vælte modstanderen.
                  </p>
                  <p>
                    Kun spillere med nedsat funktion i både arme og ben kan
                    kvalificere sig til sporten.
                  </p>
                  <p>
                    Kørestolsrugby spilles på en håndboldbane med fire spillere
                    på banen ad gangen. Sporten er en blanding af basketball,
                    hockey og rugby, mens bolden er rund og ligner en
                    volleyball.
                  </p>
                  <p>
                    I Danmark er der lige nu seks klubber, som tilbyder
                    kørestolsrugby: I Rwanda er der ingen klubber. Danmark er et
                    af i alt otte lande, som har kvalificeret sig til de
                    Paralympiske Lege, Paris 2024.
                  </p>
                  <p>
                    <i>Kilder: Parasport.dk og paralympic.org</i>
                  </p>
                </div>
              </section>
            </div>
          </div>
        </section>
        <Divider />
        <Footer />
      </main>
    </div>
  );
}
