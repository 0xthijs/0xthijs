import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <main className="bg-nana-dark min-h-screen text-white selection:bg-nana-accent selection:text-black">
      <Hero />
      <Projects />
      <About />
    </main>
  );
}

export default App;
