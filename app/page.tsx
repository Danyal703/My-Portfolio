export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold">Hello, I'm Danyal Jamshed</h1>
      <p className="text-xl mt-4">Cloud-Native Full-Stack Developer | Web3 Enthusiast</p>
      <a href="/projects">
        <button className="mt-6 px-6 py-2 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 opacity-100">
          See My Work
        </button>
      </a>
    </div>
  );
}