export default function Projects() {
    const projectList = [
      { name: "Serverless E-Commerce App", link: "https://github.com/danyaljamshed/ecommerce-app" },
      { name: "NFT Marketplace", link: "https://github.com/danyaljamshed/nft-marketplace" },
      { name: "AI Chatbot", link: "https://github.com/danyaljamshed/ai-chatbot" },
    ];
  
    return (
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center">Projects</h2>
        <ul className="mt-6 space-y-4">
          {projectList.map((project, index) => (
            <li key={index} className="p-4 bg-gray-800 text-white rounded-lg">
              <a href={project.link} target="_blank" rel="noopener noreferrer">{project.name}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }