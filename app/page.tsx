export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-4xl font-bold">Hello, I'm Danyal Jamshed</h1>
      <p className="text-xl mt-4">Cloud-Native Full-Stack Developer | Web3 Enthusiast</p>
      <a href="/projects">
        <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg">See My Work</button>
      </a>
    </div>
  );
}