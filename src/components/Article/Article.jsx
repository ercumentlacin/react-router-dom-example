import { useHistory } from 'react-router-dom';
import './article.style.scss';

const Article = ({ article }) => {
  const { body, id, title } = article;
  let history = useHistory();

  const imgUri = `https://source.unsplash.com/collection/4394239/?sig=${id}`;

  const goSelectedArticle = () => history.push(`/article/${id}`);

  return (
    <article className='article' onClick={goSelectedArticle}>
      <div className='article__body'>
        <h2 className='article__body--title'>{title}</h2>
        <p className='article__body--content'>{body}</p>
      </div>

      <div className='article__image'>
        <img src={imgUri} alt={title} />
      </div>
    </article>
  );
};

export default Article;
