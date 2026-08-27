import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="mx-auto max-w-[1200px] px-6 py-24 text-center">
      <h1>Page not found</h1>
      <p className="mt-4 text-cc-text-muted-light">
        The page you're looking for doesn't exist or may have moved.
      </p>
      <Link
        to="/"
        className="mt-8 inline-block rounded-cc-pill bg-cc-primary px-6 py-3 font-medium text-cc-white hover:bg-cc-primary-dark"
      >
        Back to Home
      </Link>
    </div>
  );
}
