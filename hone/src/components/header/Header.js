import "./Header.css"

function Header({title, artist, year, label, img}) {
  return (
    <header className="App-header">
        <img src={img} className="album-cover" />
        <h1>{title}</h1>
        <h2>{artist}</h2>
        <h3>{year}</h3>
        <p>{label}</p>
      </header>
  )
}

export default Header;