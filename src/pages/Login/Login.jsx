import Spinner from 'components/Spinner';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  localStorageGetter,
  localStorageSetter,
  validateUser,
  waitFor,
} from 'utils';

import './login.style.scss';

const Login = () => {
  const history = useHistory();

  useEffect(() => {
    const user = localStorageGetter('user');
    validateUser(user.email, user.password);

    if (user.email && user.password) {
      history.push('/');
    }
  }, [history]);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    formErrors: { email: '', password: '' },
    loading: false,
  });

  const { email, password, formErrors, loading } = formData;

  const onChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    setFormData({
      ...formData,
      loading: true,
    });

    await waitFor(2000);

    const validateResult = validateUser(email, password);

    setFormData({
      ...formData,
      formErrors: validateResult,
      loading: false,
    });

    localStorageSetter('user', { email, password });

    if (formErrors.email && formErrors.password) {
      history.push('/');
    }
  };

  const formInputs = [
    {
      strong: 'Email address',
      name: 'email',
      type: 'email',
      placeholder: 'Enter your email address',
      value: email,
      onChange,
      error: formErrors.email,
    },
    {
      strong: 'Password',
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      value: password,
      onChange,
      error: formErrors.password,
    },
  ];
  const renderFormInputs = () =>
    formInputs.map((input) => (
      <label key={input.name}>
        <strong>{input.strong}</strong>
        <input
          className={formErrors[input.name].length > 0 ? 'error' : ''}
          name={input.name}
          type={input.type}
          value={formData[input.name]}
          onChange={onChange}
          required
        />
        {formErrors[input.name].length > 0 && (
          <div className='errorWrapper'>
            <i className='fas fa-exclamation-triangle'></i>
            <span className='errorMessage'>{formErrors[input.name]}</span>
          </div>
        )}
      </label>
    ));

  return (
    <div className='login'>
      <h1>Sign In</h1>

      <form onSubmit={onSubmit}>
        {renderFormInputs()}

        <button disabled={loading} type='submit'>
          {loading ? <Spinner variant='big' /> : 'Sign In'}
        </button>
      </form>
    </div>
  );
};

export default Login;
