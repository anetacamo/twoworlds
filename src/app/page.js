'use client';

import Image from 'next/image';
import styles from './page.module.css';
import React, { useState } from 'react';

export default function Home() {
  const initialPlayer = Math.floor(Math.random() * 2);
  const [player, setPlayer] = useState(initialPlayer);

  return (
    <div>
      <header>
        <div className='logo'>
          <div>
            To Verdener
            <br />
            <span className='blue'>Samme Mål</span>
          </div>
        </div>
        <nav>
          <ul>
            <li
              className={player === 1 ? 'highlighted' : ''}
              onClick={() => setPlayer(1)}
            >
              Om Claudine
            </li>
            <li>
              <img className='icon' src='images/icons/airplane.png' />
            </li>
            <li
              className={player === 0 ? 'highlighted' : ''}
              onClick={() => setPlayer(0)}
            >
              Om Mark
            </li>
          </ul>
        </nav>
        <nav>
          <ul>
            <li>Hvem er vi?</li>
            <li>Projekt</li>
            <li>DHF</li>
          </ul>
        </nav>
      </header>
      <section className='full'>
        <h1>
          To Verdener
          <br />
          Samme Mål
        </h1>
      </section>

      <section>
        <div className='singlegallery'>
          <img src='/images/claudine/01.png' className='absolute' />
          <img
            src='/images/mark/01.png'
            className={`absolute ${player === 0 ? 'none' : ''}`}
          />

          <img
            src='/images/claudine/01.png'
            className={player === 1 ? 'absolute2' : 'invisible2'}
            onClick={() => setPlayer(0)}
          />
          <img
            src='/images/mark/01.png'
            className={player === 0 ? 'absolute' : 'invisible'}
            onClick={() => setPlayer(1)}
          />
        </div>
      </section>
      <main className={styles.main}>
        <section>
          <div className='largetext'>
            <p>
              De er begge skadet i krig.
              <br />
              Den ene som voksen i Afghanistan, den anden som barn under
              folkemord i Rwanda.
              <br />
              En professionel soldat og et uskyldigt barn.
            </p>
          </div>
        </section>
        <section>
          <div className='gallery'>
            <img src='/images/claudine/01.png' />
            <img src='/images/mark/04.png' />
          </div>
        </section>
        <section>
          <div className='largetext'>
            <p>
              Begge har mistet ben, og begge er kommet videre. Gennem
              parasporten. Om kort tid skal de hver især repræsentere deres land
              til den største begivenhed indenfor parasporten - de Paralympiske
              Lege (PL) i Paris 2024.
            </p>
          </div>
        </section>
        <section>
          <div className='gallery'>
            <img src='/images/claudine/02.png' />
            <img src='/images/mark/02.png' />
          </div>
        </section>
        <section>
          <div className='gallery'>
            <img src='/images/claudine/08.png' />
            <img src='/images/mark/12.png' />
          </div>
        </section>

        <section>
          <div className='largetext'>
            <p>
              Nu er det kampen om medaljer, det gælder. Siden 2020 har vi fulgt
              de to stjerner. Gennem deres fortællinger har vi oplevet, hvor
              stærk en forandringskraft holdsport kan have. Potentialet for at
              løfte det enkelte menneske gennem sport er stort.
            </p>
          </div>
        </section>

        <section>
          <div className='gallery'>
            <img src='/images/claudine/06.png' />
            <img src='/images/mark/07.png' />
          </div>
        </section>

        <section>
          <div className='gallery'>
            <img src='/images/claudine/03.png' />
            <img src='/images/mark/05.png' />
          </div>

          {/* <div className='gallery'></div>
          <div className='gallery'>
            <img src='/images/mark/08.png' />
            <img src='/images/mark/10.png' />
            <img src='/images/mark/11.png' />
          </div> */}
        </section>

        <section>
          <div className='largetext'>
            <p>
              Ikke kun i et udviklingsland, hvor mennesker med handicap ofte er
              at finde blandt samfundets mest udsatte og fattige, men også i et
              velfærdssamfund som Danmark.
            </p>
          </div>
        </section>

        <section>
          <div className='gallery'>
            <img src='/images/claudine/09.png' />
            <img src='/images/mark/09.png' />
          </div>
        </section>
        <section>
          <div className='largetext'>
            <p>
              Over hele verden kan muligheden for at dyrke sport, få mennesker
              til at drømme stort – og deres liv kan tage en helt ny og positiv
              drejning- uanset køn, handicap og nationalitet.
            </p>
          </div>
        </section>
        <section>
          <div className='gallery'>
            <img src='/images/claudine/05.png' />
            <img src='/images/mark/03.png' />
          </div>
        </section>
        <section>
          <div className='largetext'>
            <p>
              Det sætter vores projekt ’To Verdener – Samme Mål’ spot på. Gennem
              holdsport har vores hovedpersoner, Claudine fra Rwanda og Mark fra
              Danmark, fået venner, livsmod og selvtillid. I dag er de på hver
              deres måde rollemodeller for os andre. Mød dem. Her på siden og
              ude i virkeligheden til de Paralympiske Lege i Paris 2024.
            </p>
          </div>
        </section>

        <section>
          <img className='logoicon' src='images/icons/ball2.png' />{' '}
          <img className='logoicon' src='images/icons/ball2.png' />{' '}
          <img className='logoicon' src='images/icons/ball2.png' />
        </section>
        <section>
          <div className='largetext box'>
            <p>
              Alle har ret til at dyrke sport FN’s Verdensmål og
              Handicapkonvention giver alle lige rettigheder også når det gælder
              muligheden for at dyrke sport. Virkeligheden lever dog ikke altid
              op til verdenssamfundets smukke ord om ikke at lade nogen i
              stikken - ’Leave Noone Behind’. Heller ikke, når det gælder
              adgangen til at dyrke sport. I handicapkonventionen står der, at
              personer med handicap har ret til at være med til sport og kultur.
              Og have mulighed for at have sin egen sport og kultur. Det betyder
              i praksis, at det skal være muligt for alle med et handicap at
              komme ind og deltage i både sport og kultur i det område, man bor
              i. Kilder: Handicapkonventionen, FNs Verdensmål og Institut for
              Menneskerettigheder{' '}
            </p>
          </div>
        </section>
        <section>
          <div className='gallery'>
            <img src='/images/claudine/07.png' />
            <img src='/images/mark/01.png' />
          </div>
        </section>
        <section>
          <div className='largetext box right'>
            <p>
              Para- hvilke lege? Om de Paralympiske Lege De Paralympiske Lege er
              verdens største internationale begivenhed for atleter med handicap
              og finder sted umiddelbart efter de Olympiske Lege i samme værtsby
              og samme faciliteter. I 2024 afholdes PL i Paris fra 28. august –
              8. september. 23 forskellige sportsgrene med 4400 deltagere
              deltager.
            </p>
          </div>
        </section>
        <section>
          <img className='logoicon' src='images/icons/ball2.png' />{' '}
          <img className='logoicon' src='images/icons/ball2.png' />{' '}
          <img className='logoicon' src='images/icons/ball2.png' />
        </section>
        <section>
          <div className='largetext'>
            <h2>Hvem er vi? </h2>
            <p>
              <span className='blue'>Tine Harden</span> er en sportsinteresseret
              og prisvindende fotograf, som blandt andet har lavet fotobogen ’A
              kick out of Africa’ op til VM i Sydafrika i 2010.
            </p>
            <p>
              <span className='blue'>Hanne Selnæs</span> er uddannet journalist
              og kommunikerer primært om udsatte menneskers vilkår, muligheder
              og rettigheder – hjemme som ude.{' '}
            </p>
            <p>
              <i>
                I 2021 modtog vi sammen Timbuktu Prisen som en anerkendelse af
                vores arbejde med projektet ’To Verdener – Samme Mål’. Projektet
                bliver til i samarbejde med: Dansk Handicap Forbund,DHF{' '}
              </i>
            </p>
          </div>
        </section>
        <section>
          <div className='largetext'>
            <h2>Dansk Handicap Forbund, DHF</h2>
            <p>
              Dansk Handicap Forbund, DHF, som arbejder for at forbedre
              forholdene på handicapområdet og skabe sociale forbindelser for
              mennesker med bevægelseshandicap.{' '}
            </p>
          </div>
          <p>
            DHF har 8.300 medlemmer i godt 40 lokalkredse rundt om i Danmark.
            DHF arbejder internationalt med udviklingsprojekter i otte lande i
            Asien, Afrika og Mellemamerika. Vores udviklingsarbejde er i høj
            grad drevet af frivilligt engagement med professionel støtte fra et
            internationalt sekretariat. I samarbejde med Parasport Danmark er vi
            engageret i internationale udviklingsprojekter, der styrker adgangen
            til parasport i Nepal, Bolivia, Vietnam og Uganda. Parasport Danmark
            arbejder for at alle mennesker med handicap eller særlige behov skal
            have mulighed for at dyrke idræt. Herhjemme tilbyder Parasport
            Danmark pt. aktiviteter inden for flere end 30 idrætsgrene. Der er
            muligheder for alle alders- og handicapgrupper og på alle niveauer.
            Som Danmarks National Paralympiske Komite sigter vi også mod at
            fostre eliteatleter og rollemodeller i verdensklasse. Det var derfor
            en stor sejr, da det i 2020 lykkedes det danske kørestolsrugby-hold
            at kvalificere sig til de Paralympiske Lege for første gang
            nogensinde, Ca. 500 medlemsklubber med knap 8000 medlemmer hører
            under Parasport Danmark, som er et specialforbund under Danmarks
            Idrætsforbund, DIF. I samarbejde med DHF er vi engageret i
            internationale udviklingsprojekter, der styrker adgangen til
            parasport i Nepal, Bolivia, Vietnam og Uganda. National Paralympic
            Commitee, NPC, Rwanda er Parasport Danmarks pendant i Rwanda. NPC
            samler, promoverer og koordinerer idrætsklubbernes tilbud om
            parasport til mennesker med forskellige typer handicap indenfor 13
            sportsgrene. Tre af dem har i de sidste 15 år opnået at blive
            repræsenteret ved de Paralympiske Lege. Den paralympiske komite’s
            vision er, at Rwanda bliver det førende paralympiske land i Afrika.
            NPC Rwanda arbejder derfor med at udvikle et bæredygtigt paralympisk
            sportssystem i Rwanda, og for at paraatleter får mulighed for at nå
            deres ambitioner på den lokale og internationale sportsarena. Når
            det gælder holdsport, er kvindernes siddende volleyball-hold
            komiteens stolthed. Kvindelandsholdet skal til sommer deltage til de
            Paralympiske Lege for fjerde gang.
          </p>
        </section>
        <section>
          <h2>Hvem står bag </h2>
          <div className='largetext'>
            <p>Fotograf Tine Harden og journalist Hanne Selnæs</p>
            <p>i samarbejde med Dansk Handicap Forbund (DHF).</p>
          </div>
        </section>
      </main>
    </div>
  );
}
