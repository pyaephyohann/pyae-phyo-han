import { Link } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";

function App() {
  return (
    <Layout>
      {/* Container */}
      <div className="lg:mt-16 mt-5 lg:flex lg:justify-evenly">
        {/* Left Side */}
        <div className="p-5 lg:p-0 w-fit mx-auto lg:mx-0">
          <div className="text-white text-4xl">
            <div className="mb-2">Hello! I'm </div>
            <div className="text-primary">Pyae Phyo Han</div>
          </div>
          <div className="text-transparent text-lg lg:mt-5 mt-8">
            19 years old boy who love coding and build fullstack web
            applications
          </div>
          <div className="text-transparent text-lg mt-1">
            I'm currently live in 5th Street Thirimon Plaza, Mayangone, Yangon
          </div>
        </div>
        {/* Right Side */}
        <div>
          <img
            className="lg:h-80 rounded-2xl h-60 mx-auto lg:mx-0 mt-5 lg:mt-0"
            alt="pyaephyohan"
            src="https://firebasestorage.googleapis.com/v0/b/first-time-fire-base.appspot.com/o/received_915212149754401.jpg?alt=media&token=c28bd606-e8ec-44ad-8f8c-88b1adaba6f4"
          />
        </div>
      </div>
      {/* Footer */}
      <div className="lg:mt-20 mt-6 flex flex-col sm:justify-center items-center p-5 lg:p-0">
        <div className="text-white text-xl mb-5">
          That's about me and let's take a look what I learned, Here are my
        </div>
        <Link className="text-white p-2 bg-primary rounded-xl" to={`/skills`}>
          Skills
        </Link>
      </div>
    </Layout>
  );
}

export default App;
