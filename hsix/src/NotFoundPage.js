import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="not-found">
      <h1>404 😿</h1>
      <p>Такой страницы не существует. Возможно, кот её утащил.</p>
      <Link to="/">← На главную</Link>
    </div>
  );
}

export default NotFoundPage;