import { Link } from "react-router-dom";

type PostModule = {
  default: React.ComponentType<any>;
  frontmatter?: {
    title?: string;
    date?: string;
  };
};

export default function Blog() {
  const posts = import.meta.glob<PostModule>("../posts/*.mdx", { eager: true });

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Blog</h1>

      <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
        {Object.entries(posts).map(([path, module]) => {
          console.log(path);
          const slug = path.split("/").pop()?.replace(".mdx", "") ?? "";

          return (
            <div key={slug} className="p-4 bg-gray-200 rounded">
              <Link 
                to={`/blog/${slug}`} 
                className="text-blue-600"
              >
                <span className="">{module.frontmatter?.title || slug}</span>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
