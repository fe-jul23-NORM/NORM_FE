import Card from '../../Card/Card';
import './FavouritesPage.scss';

const FavouritesPage: React.FC = () => {
  return (
    <div className="favourites__wrapper">

      <section className="favourites">

        <div className="favourites__top">
          <div className="favourites__nav">

            <a href="/" className="favourites__nav-icon">
              <img src="https://i.imgur.com/WmTuk3L.png" alt="home" />
            </a>

            <img
              src="https://i.imgur.com/zNeLDRA.png"
              alt="arrow-right"
              className="favourites__nav-icon" />

            <span className="favourites__nav-text">
              Favourites
            </span>
          </div>

          <h1 className='favourites__title'>
            Favourites
          </h1>

          <p className="favourites__amount">
            5 items
          </p>
        </div>

        <div className="favourites__container">
          <div className="favourites__item">
            <Card />
          </div>
          <div className="favourites__item">
            <Card />
          </div>
          <div className="favourites__item">
            <Card />
          </div>
          <div className="favourites__item">
            <Card />
          </div>
          <div className="favourites__item">
            <Card />
          </div>

          {/* {favouriteProducts.map(product => {
    return (
      <div className="favourites__item">
        <Card />
      </div>
    )
  })} */}
        </div>
      </section>
    </div>
  )
}

export default FavouritesPage;
