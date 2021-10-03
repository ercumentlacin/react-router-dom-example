import { fetchPost } from 'agent';
import PagePace from 'components/PagePace';
import Spinner from 'components/Spinner';
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

import './artical-page.style.scss';

const ArticalPage = () => {
  let { articleId } = useParams();

  const [post, setPost] = useState({
    data: [],
    loading: true,
    error: null,
  });

  const mounted = useRef(false);

  useEffect(() => {
    (async () => {
      const { data, loading, error } = await fetchPost(articleId);
      setPost({ data, loading, error });
    })();

    return () => (mounted.current = true);
  }, [articleId]);

  const { data, error, loading } = post;

  if (loading) return <Spinner variant='big' />;
  if (error) return <div>Error: {error.message}</div>;

  const { body, id, title } = data;

  const imgUri = `https://source.unsplash.com/collection/4394239/?sig=${id}`;

  return (
    <article className='articlePage'>
      <h1 className='articlePage__title'>{title}</h1>
      <img src={imgUri} alt='' className='articlePage__img' />
      <p className='articlePage__content'>{body}</p>

      <PagePace selectedPageId={articleId} />
    </article>
  );
};

export default ArticalPage;
