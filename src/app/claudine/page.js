'use client';

import React, { useState } from 'react';
import Header from '../components/Header';
import Divider from '../components/Divider';
import GridGallery from '../components/GridGallery';
import Video from '../components/Video';
import CloseButton from '../components/CloseButton';
import NameSwitch from '../components/NameSwitch';

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
      <div className={`overlay ${open ? 'open' : ''}`}>
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
        <Divider />

        <section style={{ textAlign: 'center' }}>
          <div className='largetext'>{/* <h1>om claudine</h1> */}</div>
        </section>

        <section>
          <div className='inner'>
            <div className='largetext'>
              <h2 className='orange'>Jeg vil være en af verdens bedste</h2>
              <h2>
                Claudine er blevet en sportsstjerne i sit eget land Rwanda. Og
                hun drømmer om mere. Hun vil være en af de allerbedste spillere
                i verden. Sportsgrenen hedder siddende volleyball.
              </h2>
              <p>
                <i>Af Hanne Selnæs</i>
              </p>
              <Divider />
              <p className='orange'>
                Når kvindernes landshold i siddende volleyball vender hjem efter
                en sejr i udlandet, går det ikke stille for sig. I åbne busser
                kører kvinderne hujende og syngende gennem hovedstadens gader,
                fylder godt på Instagram og bliver interviewet til Rwandas TV og
                radio.
              </p>
              <p>
                For kvinderne på Claudines hold er blevet sportsstjerner i
                Rwanda. Til sommer skal de til Paris og deltage i de
                Paralympiske Lege. Det er fjerde gang det afrikanske hold
                kvalificerer sig. Sidst var i Tokyo2020. Her blev det til en XX
                plads. Nu drømmer Claudine om at blive en af de bedste spillere
                i verden.
              </p>
              <p>
                {' '}
                Måske lykkes det. Landstræneren fra Ægypten har store
                ambitioner. Hans plan er, at kvinderne en dag kommer hjem fra de
                Paralympiske Lege med en bronzemedalje – dog først i 2028.
              </p>
              <p>
                {' '}
                I mellemtiden træner Claudine hårdt og vil samtidig hjælpe unge
                kvinder med et handicap til et bedre liv. Sådan som hun selv har
                fået et bedre liv gennem sporten.
              </p>
              <p>
                {' '}
                ”Siddende volleyball har betydet, at jeg har fået mange gode
                venner og tætte venskaber og mulighed for at rejse. Det har alt
                sammen givet mig både selvværd og et åbent sind,” siger hun i
                dag. Men sådan har det ikke altid været.
              </p>
              <h2 className='orange' style={{ marginTop: 60 }}>
                {' '}
                Jeg har altid elsket volleyball
              </h2>
              <p>
                {' '}
                Da Claudine var barn, troede de fleste naboer og venner ikke, at
                hun duede til noget som helst. For hun manglede et ben og havde
                fået stemplet som ’handicappet’. Men Claudines tante overtalte
                Claudines forældre til, at hun skulle i skole og lære noget.
              </p>
              <p>
                {' '}
                På kostskolen for børn med handicap opdagede Claudine, at der
                var en sportsgren, der hed ’siddende volleyball’, som hun kunne
                være med i. Man sidder på jorden og spiller hen over et lavt
                net. Claudine havde altid elsket volleyball, så det var lige
                noget for hende.
              </p>
              <p>
                {' '}
                ”Da jeg fandt ud af, at jeg kunne spille siddende volleyball,
                blev jeg meget, meget glad,” fortæller hun mig, da vi sidder i
                hendes stue efter en turnering i nabobyen. Hendes mand koger
                spaghetti på trækul i baggården, mens sønnen XX på 5 år
                nysgerrigt følger med i snakken.
              </p>
              <p className='orange' style={{ marginTop: 60 }}>
                Mistede benet under folkemord
              </p>
              <p>
                Claudines søn er kun et år ældre, end Claudine selv var, da hun
                mistede sit ben. Det var under Folkemordet i Rwanda i 1994. I
                længere tid var der gennem radio og andre kanaler spredt hadtale
                mod et mindretal af befolkningen, tutsier. Den anden store
                befolkningsgruppe, hutuer, blev bevæbnet eller fandt selv hakker
                og knive frem. Og en dag gik det løs. Naboer gik løs på naboer.
                Tutsier i tusindvis blev dræbt. Et folkemord skyllede ind over
                det lille land, børn og voksne blev drevet på flugt, mens de
                forsøgte at skjule sig undervejs.
              </p>
              <p>
                Claudine på kun fire år flygtede til fods sammen med sin
                familie. Hendes mor bar Claudines yngste søster på ryggen og
                Claudine gik ved siden af dem. Pludselig stod en bevæbnet mand
                foran dem. Han skød mod Claudine og ramte hende i benet.
              </p>
              <p>
                {' '}
                Også hendes far blev skudt i benet og kunne ikke længere gå. Da
                Claudines bedstemor kom til, blev også hun skudt og døde.
              </p>
              <p>
                {' '}
                På alle fire kravlede Claudines far videre med Claudine på
                ryggen, indtil de mødte flere familiemedlemmer. En af dem bar
                Claudine hele vejen til et hospital i nabolandet Burundi. Det
                var her, lægerne valgte at amputere hendes ben.
              </p>
              <p>
                {' '}
                ”Jeg kan ikke huske noget, men har fået det fortalt,” siger
                Claudine.
              </p>
              <p className='orange' style={{ marginTop: 60 }}>
                {' '}
                Drilleri gjorde mig ked af det og vred
              </p>
              <p>
                {' '}
                I mange år vidste Claudine ikke, hvorfor hun kun havde et ben,
                når hendes søster havde to. Når hun spurgte sin mor, svarede hun
                ikke. Nogle gange drillede andre børn Claudine, for eksempel ved
                at tage hendes krykker eller lave sjov ad måden, hun gik på.
              </p>
              <p>
                {' '}
                ”Det gjorde mig både ked af det og vred,” husker hun. ”Min
                søster og jeg var meget tætte, så vi hjalp også hinanden – og
                sammen bankede vi så de børn, der drillede mig,” fortæller hun.
              </p>
              <p className='orange' style={{ marginTop: 60 }}>
                {' '}
                Sport har givet mig et godt liv
              </p>
              <p>
                {' '}
                ”Siddende volleyball har gjort mig stærkere og givet mig mere
                energi. Når jeg har deltaget i de paralympiske lege i Rio og
                Tokyo, har jeg mødt andre med alvorlige handicap. Det har fået
                mig til at indse, at mit handicap ikke er så slemt,” siger
                Claudine i dag.
              </p>
              <p>
                {' '}
                ”Det bedste ved sport er, at du kan få et godt liv,” siger hun:
                ”Jeg har opdaget, at jeg kan lave mange af de samme ting, som
                andre med to ben kan. Og jeg kan bidrage til min familie.”{' '}
              </p>
              <p>
                Når landsholdet vinder kampe i udlandet, får spillerne nemlig en
                del penge fra Sportsministeriet. De penge bruger Claudine mest
                på at betale for sin søns skolegang og hjælpe sin familie.
              </p>
              <p>
                {' '}
                ”Jeg har også købt en benprotese til mig selv, en lille skov og
                to køer, som er hjemme hos min mor og far. Det betyder meget for
                mig, at jeg kan hjælpe mine forældre,” siger hun.
              </p>
              <p>
                {' '}
                Claudines råd til andre med et handicap lyder sådan her: ”Tro på
                dig selv og vær ikke bange for at spørge andre til råds. Der er
                mange omkring dig, som kan hjælpe, hvis du bare spørger,” siger
                Claudine, som lige nu træner hårdt op til sommerens Paralympiske
                Lege i Paris.
              </p>
              <p>
                {' '}
                ”Sport er livet,” siger Claudine med et stort smil, inden vi
                tager afsked.{' '}
              </p>

              <section>
                <div className='inner'>
                  <div className='largetext box box-teal'>
                    <h4 style={{ marginTop: 60 }}>BOKS 1 </h4>
                    <h2 className='teal'>Fakta om folkemordet i Rwanda </h2>
                    <p>
                      I 1994 fandt et folkedrab sted i Rwanda. løbet af tre
                      måneder blev omkring 800.000 tutsier og moderate hutuer
                      slået ihjel af ekstremistiske hutuer og deres medløbere.
                    </p>
                    <p>
                      {' '}
                      Hadefuld tale og massiv propaganda gennem medierne
                      spillede hutuer ud mod tutsier, og opfordrede ekstremister
                      blandt hutuerne til at myrde deres tutsi-naboer.
                    </p>
                    <p>
                      Hutuer og tutsier har samme sprog, kultur og religion.
                      Tutsier udgør et mindretal af befolkningen.
                    </p>
                    <p>
                      {' '}
                      Ved folkedrabets afslutning var landet i ruiner og to
                      millioner mennesker var drevet på flugt - tusindvis var
                      sårede og traumatiserede. Rwanda, som er på størrelse med
                      Jylland, skulle bygges op fra grunden.
                    </p>
                    <p>
                      <i>Kilder: DIIS og UNRIC</i>
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <div className='inner'>
                  <div className='largetext box right box-orange'>
                    <h4 style={{ marginTop: 60 }}> BOKS 2</h4>
                    <h2 className='orange'>Fakta om Siddende Volleyball</h2>
                    <p>
                      {' '}
                      Siddende volley, også kaldet paravolley, er den største
                      holdidræt ved de Paralympiske Lege.
                    </p>
                    <p>
                      {' '}
                      I siddende volley sidder spillerne på gulvet og bevæger
                      sig rundt ved hjælp af armene. Banen er mindre end en
                      almindelig volleyballbane og nettets højde er 1.15 meter.
                      Der spilles som udgangspunkt efter reglerne i almen volley
                      med nogle få justeringer. Boldene er de samme i begge
                      typer volleyball.
                    </p>
                    <p>
                      {' '}
                      I Danmark er der lige nu kun to klubber, som tilbyder
                      siddende volley: Lavia Aarhus og Lavia København. I Rwanda
                      er der hele XX klubber.
                    </p>
                    <p>
                      {' '}
                      Syv landes kvindehold har kvalificeret sig til de
                      Paralympiske Lege, Paris 2024. Udover Rwanda er det
                      Canada, Brasilien USA, Kina, Frankrig og Italien.
                    </p>
                    <p>
                      <i> Kilder: Parasport Danmark og IPC, Rwanda.</i>
                    </p>
                  </div>
                </div>
              </section>

              {/* <h4 style={{ marginTop: 60 }}> BOKS 2</h4>
              <p className='orange'> FAKTA om Siddende Volleyball</p>
              <p>
                {' '}
                Siddende volley, også kaldet paravolley, er den største
                holdidræt ved de Paralympiske Lege.
              </p>
              <p>
                {' '}
                I siddende volley sidder spillerne på gulvet og bevæger sig
                rundt ved hjælp af armene. Banen er mindre end en almindelig
                volleyballbane og nettets højde er 1.15 meter. Der spilles som
                udgangspunkt efter reglerne i almen volley med nogle få
                justeringer. Boldene er de samme i begge typer volleyball.
              </p>
              <p>
                {' '}
                I Danmark er der lige nu kun to klubber, som tilbyder siddende
                volley: Lavia Aarhus og Lavia København. I Rwanda er der hele XX
                klubber.
              </p>
              <p>
                {' '}
                Syv landes kvindehold har kvalificeret sig til de Paralympiske
                Lege, Paris 2024. Udover Rwanda er det Canada, Brasilien USA,
                Kina, Frankrig og Italien.
              </p>
              <p>
                <i> Kilder: Parasport Danmark og IPC, Rwanda.</i>
              </p> */}
            </div>
            <Divider />
            <h2>Billede Gallery</h2>
            <p>by Tine Harden</p>
            <GridGallery
              images={[
                { caption: '', image: 'claudine/01' },
                { caption: '', image: 'claudine/02' },
                { caption: '', image: 'claudine/03' },
                { caption: '', image: 'claudine/04' },
                { caption: '', image: 'claudine/05' },
                { caption: '', image: 'claudine/06' },
                { caption: '', image: 'claudine/07' },
                { caption: '', image: 'claudine/08' },
                { caption: '', image: 'claudine/09' },
                { caption: '', image: 'claudine/010' },
                { caption: '', image: 'claudine/011' },
                { caption: '', image: 'claudine/012' },
                { caption: '', image: 'claudine/013' },
                { caption: '', image: 'claudine/014' },
                { caption: '', image: 'claudine/015' },
              ]}
            />
          </div>
        </section>
        <Divider />
      </main>
    </div>
  );
}
