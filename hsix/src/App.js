import { Routes, Route, Link, useParams } from 'react-router-dom';
import Layout from './components/Layout';
import NotFoundPage from './NotFoundPage';
import './App.css';

const cats = [
  {
    id: 1,
    name: 'Барсик',
    emoji: '🐱',
    img: 'https://s4.fotokto.ru/photo/full/576/5767073.jpg',
    desc: 'Спокойный и независимый. Любит спать на подоконнике и наблюдать за птицами. Обожает, когда чешут за ушком.',
  },
  {
    id: 2,
    name: 'Мурка',
    emoji: '🐈',
    img: 'https://cs13.pikabu.ru/post_img/2021/04/13/5/og_og_1618296476296911089.jpg',
    desc: 'Ласковая и очень разговорчивая. Мурлычет практически постоянно, а по вечерам любит сидеть на коленях.',
  },
  {
    id: 3,
    name: 'Рыжик',
    emoji: '😺',
    img: 'https://cdn.myslo.ru/Content/article/d9/ee/a4de-135c-41ae-9e6f-e58e90b8106d/2019-01-17-13-28-57-669066.jpg',
    desc: 'Активный и игривый. Носится по квартире, охотится на мячики и солнечных зайчиков. Настоящий рыжий хулиган.',
  },
];

function Home() {
  return (
    <div className="home">
      <h2>Главная 🐾 Добро пожаловать в мир котов!</h2>

      <img
        className="home-img"
        src="https://i.pinimg.com/originals/29/2d/86/292d862b2ad382c372feb1ca86615abf.jpg"
        alt="Кот"
      />

      <p>
        Коты — одни из самых популярных домашних животных в мире. Они живут
        рядом с человеком уже около 10 000 лет и за это время стали
        по-настоящему домашними: ласковыми, игривыми и очень независимыми.
      </p>

      <p>
        У каждого кота свой характер. Одни любят спать на коленях, другие —
        носиться по квартире ночью, третьи — наблюдать за птицами с
        подоконника. Но все они умеют мурлыкать, и это один из самых
        приятных звуков для человека.
      </p>

      <p>
        На этом сайте вы можете посмотреть список котов и почитать
        информацию о каждом из них. Перейдите в раздел «Коты» в меню
        сверху.
      </p>
    </div>
  );
}

function Cats() {
  return (
    <div>
      <h2>Все коты</h2>

      <div className="cats-grid">
        {cats.map(cat => (
          <Link key={cat.id} to={`/cats/${cat.id}`} className="cat-card">
            <img src={cat.img} alt={cat.name} />
            <div>{cat.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

function Cat() {
  const { id } = useParams();
  const cat = cats.find(c => c.id === Number(id));

  if (!cat) return <h2>Кот не найден 😿</h2>;

  return (
    <div className="cat-detail">
      <h2>{cat.emoji} {cat.name}</h2>
      <img className="cat-photo" src={cat.img} alt={cat.name} />
      <p className="cat-desc">{cat.desc}</p>
      <Link to="/cats">← Назад</Link>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="cats" element={<Cats />} />
        <Route path="cats/:id" element={<Cat />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;