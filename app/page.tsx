import InteractiveBackground from "./components/InteractiveBackground";
import Initialtxt from "./components/PageComponents/Initialtxt"
import Abouttxt from "./components/PageComponents/Abouttxt"
import Worktxt from "./components/PageComponents/Worktxt"
import Skilltxt from "./components/PageComponents/Skilltxt";
import Contacttxt from "./components/PageComponents/Contacttxt";


const page = () => {
  return (
    <>
      <InteractiveBackground />

      <section id="/" className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center px-5 py-15 text-center sm:px-8">
        <Initialtxt />
      </section>

      <section id="about" className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center px-5 py-15 text-center sm:px-8">
        <Abouttxt />
      </section>

      <section id="skill" className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center px-5 py-15 text-center sm:px-8">
        <Skilltxt />
      </section>

      <section id="work" className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center px-5 py-15 text-center sm:px-8">
        <Worktxt />
      </section>

      <section id="contact" className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center px-5 py-15 text-center sm:px-8">
        <Contacttxt />
      </section>
    </>
  );
};

export default page;
