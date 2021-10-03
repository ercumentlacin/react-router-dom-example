import './spinner.style.scss';

const Spinner = ({ variant }) =>
  variant === 'big' ? (
    <div className='spinnerwrapper'>
      <i className='fas fa-spinner fa-spin'></i>
    </div>
  ) : (
    <i className='fas fa-spinner fa-spin'></i>
  );

export default Spinner;
