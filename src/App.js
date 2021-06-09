function App() {
  // variable titular
  const titulo = "titular de noticias";
  // variable cuerpo de la noticia
  const noticia =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.Excepturinumquam, iusto omnis minima corrupti est officiis natus nam,adipisci commodi quo autem magnam sequi magni odio soluta temporibusvelit quas! , Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio sequi, dolorum autem alias commodi molestiae facere quibusdam beatae nulla error, dignissimos, libero vitae ratione porro.Delectusdolorem ad non esse.";
  // array de arrayCategoria
  const arrayCategoria = [
    { id: 1, categoria: "Noticias de deporte" },
    { id: 2, categoria: "Noticias de ocio" },
    { id: 3, categoria: "Noticias de cultura" },
    { id: 4, categoria: "Noticias de fiestas" },
    { id: 5, categoria: "Noticias de politica" },
    { id: 6, categoria: "Noticias de arregloCommit" },
  ];
  // array de otra cosa
  const arrayOtraCosa = [
    { id: 1, cosa: "Nosequé" },
    { id: 2, cosa: "Talycual" },
    { id: 3, cosa: "Nosecuánto" },
  ];
  // variable booleana footer
  const footerCopy = true;
  const footer = "texto footer";

  return (
    <>
      <div className="container">
        <header className="cabecera text-white row align-items-center">
          <h1 className="col m-0">Título</h1>
          <nav className="col text-right">
            <ul className="links-navegacion list-inline m-0">
              <li className="list-inline-item">hola</li>
              <li className="list-inline-item">adiós</li>
              <li className="list-inline-item">ciao</li>
            </ul>
          </nav>
        </header>
        <div className="contenedor-principal row">
          <main className="principal col-12 col-sm-7 col-md-8 py-4">
            <h2>Titular de la noticia</h2>
            <p>{noticia}</p>
            <p>{noticia}</p>
          </main>
          <aside className="sidebar col-12 col-sm-5 col-md-4 py-4">
            <section className="listado center-style">
              <h3>Categorías</h3>
              <ul className="list-unstyled"></ul>
              {arrayCategoria.map((categoria) => (
                <li key={categoria.id}>{categoria.categoria}</li>
              ))}
            </section>

            <section className="listado center-style">
              <h3>Otras cosas</h3>
              <ul className="list-unstyled"></ul>
              {arrayOtraCosa.map((cosa) => (
                <li key={cosa.id}>{cosa.cosa}</li>
              ))}
            </section>
          </aside>
        </div>
        <footer className="pie text-white row text-center align-items-center">
          <p className="col text-center">
            {footer}{" "}
            {footerCopy && (
              <span> - Ningún derecho reservado, copia lo que quieras</span>
            )}
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;
