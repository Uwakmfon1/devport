import { Link } from 'react-router-dom';

type PostModule = {
  default: React.ComponentType<any>;
  frontmatter?: {
    title?: string;
    date?: string;
  };
};



export default function Blog() {
  const posts = import.meta.glob<PostModule>('../posts/*.mdx', { eager: true });
  
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Blog</h1>

      {Object.entries(posts).map(([path, module]) => {
        console.log(path);
        const slug = path.split('/').pop()?.replace('.mdx', '') ?? '';

        return (
          <div key={slug}>
            <Link to={`/blog/${slug}`} className="text-blue-600">
              {module.frontmatter?.title || slug}
            </Link>
          </div>
        )
      })}
    </div>
  )
}