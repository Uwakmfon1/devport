import { useEffect, useState, type ComponentType } from "react";
import { useParams } from "react-router-dom";

type PostModule = {
  default: ComponentType<any>;
};

const posts = import.meta.glob<PostModule>("../posts/*.mdx");

export default function Post() {
  const { slug } = useParams();
  const [PostComponent, setPostComponent] = useState<ComponentType<any> | null>(
    null,
  );

  useEffect(() => {
    const loadPost = async () => {
      const importer = posts[`../posts/${slug}.mdx`];
      if (!importer) return;

      const module = await importer();
      setPostComponent(() => module.default);
    };

    loadPost();
  }, [slug]);

  if (!PostComponent) return <p>Loading...</p>;

  return (
    <article className="prose">
      <PostComponent />
    </article>
  );
}
