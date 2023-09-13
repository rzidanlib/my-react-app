import { Link } from 'react-router-dom';

/* eslint-disable react/no-unescaped-entities */
const AuthLayouts = (props) => {
  const { children, title, type } = props;
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='w-full max-w-xs'>
        <h1 className='text-blue-600 text-3xl font-bold mb-2'>{title}</h1>
        <p className='font-medium text-slate-500'>
          Welcome please enter your details
        </p>
        {children}
        <Navigation type={type}></Navigation>
      </div>
    </div>
  );
};

const Navigation = ({ type }) => {
  if (type === 'login') {
    return (
      <p className='text-sm mt-5 text-center'>
        Don't have an account?{' '}
        <Link to='/register' className='font-bold text-blue-600'>
          Sign Up
        </Link>
      </p>
    );
  } else {
    return (
      <p className='text-sm mt-5 text-center'>
        Already have an account?{' '}
        <Link to='/login' className='font-bold text-blue-600'>
          Login
        </Link>
      </p>
    );
  }
};

export default AuthLayouts;
