import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold text-blue-500">Home Page</h1>
      <Link to="/login">to login</Link>
    </div>
  );
}
