import styles from './page.module.css';
import React from 'react';
import Header from '../components/Headers';
import Video from '../components/Video';

export default function Mark() {
  return (
    <div>
      <Header player={player} setPlayer={handlePlayerChange} />
      <main className={styles.main}>
        <Video player={player} setPlayer={handlePlayerChange} />
        <section style={{ textAlign: 'center' }}>
          <div className='largetext'>
            <h1>claudine</h1>
          </div>
        </section>

        <section>
          <img className='logoicon' src='images/icons/ball2.png' />{' '}
          <img className='logoicon' src='images/icons/ball2.png' />{' '}
          <img className='logoicon' src='images/icons/ball2.png' />
        </section>

        <section>
          <div className='largetext'>
            <h5>om claudine</h5>
            <h2>Jeg vil være en af verdens bedste</h2>{' '}
            <p className='blue'>
              Når Claudine og hendes hold vender hjem efter en sejr i udlandet,
              går det ikke stille for sig.
            </p>
            <p>
              I åbne busser kører kvindelandsholdet hujende og syngende gennem
              hovedstadens gader, fylder godt på Instagram og bliver interviewet
              til Rwandas TV og radio. Claudine og kvindelandsholdet i siddende
              volleyball er blevet sportsstjerner. Og Claudine drømmer stadig om
              mere.
            </p>
            <button>Læs Claudines historie her</button>
          </div>
        </section>
        <section>
          <img className='logoicon' src='images/icons/ball2.png' />{' '}
          <img className='logoicon' src='images/icons/ball2.png' />{' '}
          <img className='logoicon' src='images/icons/ball2.png' />
        </section>
      </main>
    </div>
  );
}
