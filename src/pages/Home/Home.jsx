import { fetchPost } from 'agent';
import Article from 'components/Article';
import { useEffect, useRef, useState } from 'react';

const Home = () => {
  const [posts, setPosts] = useState({
    data: [],
    loading: true,
    error: null,
  });
  const mounted = useRef(false);

  const { data, error, loading } = posts;

  useEffect(() => {
    (async () => {
      const { data, loading, error } = await fetchPost();
      setPosts({ data, loading, error });
    })();

    return () => (mounted.current = true);
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const renderArticles = () =>
    data.map((article) => <Article key={article.id} article={article} />);

  return <div className='container'>{renderArticles()}</div>;
};

export default Home;
