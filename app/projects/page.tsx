import styles from './projects.module.css';

export default function Projects() {
    const projectList = [
      { name: "Serverless E-Commerce App", link: "https://github.com/danyaljamshed/ecommerce-app" },
      { name: "NFT Marketplace", link: "https://github.com/danyaljamshed/nft-marketplace" },
      { name: "AI Chatbot", link: "https://github.com/danyaljamshed/ai-chatbot" },
    ];
  
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>Projects</h2>
        <ul className={styles.projectList}>
          {projectList.map((project, index) => (
            <li key={index} className={styles.projectItem}>
              <a href={project.link} target="_blank" rel="noopener noreferrer">{project.name}</a>
            </li>
          ))}
        </ul>
      </div>
    );
}