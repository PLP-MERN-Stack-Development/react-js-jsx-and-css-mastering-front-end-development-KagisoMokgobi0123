import bgImage from "../assets/Messy-night-workplace-top-view.jpeg";

export default function Home() {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat min-h-screen"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-black/30"></div>{" "}
      {/* lighter overlay */}
      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen text-white px-4 text-center space-y-6">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg animate-fade-in-down">
          Task Management Workspace
        </h1>
      </div>
    </div>
  );
}
