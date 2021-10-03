import { useHistory } from 'react-router-dom';
import './page-pace.style.scss';

const PagePace = ({ selectedPageId }) => {
  const history = useHistory();

  const nextPageId = Number(selectedPageId) + 1;

  const goToPage = (choose) => {
    switch (choose) {
      case 'back':
        history.goBack();
        break;
      case 'home':
        history.push('/');
        break;

      case 'next':
        history.push(`/article/${nextPageId}`);
        break;

      default:
        break;
    }
  };

  return (
    <div className='paceWrapper'>
      <div className='btn back' onClick={() => goToPage('back')}>
        <i className='fas fa-arrow-left'></i>
        <span>Previous Page</span>
      </div>
      <div className='btn home' onClick={() => goToPage('home')}>
        <i className='fas fa-home'></i>
        <span>Home</span>
      </div>
      <div className='btn next' onClick={() => goToPage('next')}>
        <i className='fas fa-arrow-right'></i>
        <span>Next Page</span>
      </div>
    </div>
  );
};

export default PagePace;
