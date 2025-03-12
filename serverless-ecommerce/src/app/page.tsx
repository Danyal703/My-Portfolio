export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold">Welcome to Serverless E-Commerce</h1>
      <p className="mt-4 text-lg">Sign in to explore amazing products.</p>
      <a href="/auth">
        <button className="mt-6 px-6 py-3 bg-blue-500 rounded">Sign in with Google</button>
      </a>
    </div>
  );
}