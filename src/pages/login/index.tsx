import { Link } from 'react-router-dom';

export function Login() {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold text-blue-500">Login Page</h1>
      <Link to="/home">to home</Link>
    </div>
  );
}
