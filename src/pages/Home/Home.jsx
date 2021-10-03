import { fetchPost } from 'agent';
import Article from 'components/Article';
import Spinner from 'components/Spinner';
import { useEffect, useRef, useState } from 'react';

import './home.style.scss';

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

  if (loading) return <Spinner variant='big' />;
  if (error) return <div>Error: {error.message}</div>;

  const renderArticles = () =>
    data.map((article) => <Article key={article.id} article={article} />);

  return renderArticles();
};

export default Home;
