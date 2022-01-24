import { useContext } from 'react';

import FavoritesContext from '../store/Favoriete-store';
import MeetingLijst from '../components/meetings/MeetingLijst';

function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext);

  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = <p>er staan geen Favorieten in je lijst</p>;
  } else {
    content = <MeetingLijst meetings={favoritesCtx.favorites} />;
  }

  return (
    <section>
      <h1>Mijn Favorieten</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;