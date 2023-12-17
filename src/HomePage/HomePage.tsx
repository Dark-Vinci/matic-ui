import { JSX, useEffect, useState } from 'react';

import style from './HomePage.module.scss';

import { Nav } from '../components/Nav';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Body } from '../components/Body';

export function HomePage(): JSX.Element {

    const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Get the current scroll height
      const currentScrollHeight = window.scrollY || document.documentElement.scrollTop;

      // Update the state with the current scroll height
      setScrollHeight(currentScrollHeight);
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    return (
        <div className={ style.container }>
            <nav>
                <Nav scrollHeight={scrollHeight} />
            </nav>

            <header>
                <Header />
            </header>

            <body>
                <Body />
            </body>

            <footer>
                <Footer />
            </footer>
        </div>
    );
}