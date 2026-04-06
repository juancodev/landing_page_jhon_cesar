/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { Process } from './components/Process';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Scene } from './components/Scene';
import { Preloader } from './components/Preloader';

export default function App() {
  return (
    <main className="bg-[var(--color-background)] text-[var(--color-foreground)] min-h-screen font-sans selection:bg-[var(--color-primary)] selection:text-black overflow-x-hidden">
      <Preloader />
      <Scene />
      <Navbar />
      <Hero />
      <Portfolio />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
}
