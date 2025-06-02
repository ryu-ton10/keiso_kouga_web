import React from 'react';
import './index.css';

type Publishment_Image = {
  webp: string;
  jpeg: string;
}

type Book = {
  id: string;
  title: string;
  description: string;
  image: Publishment_Image;
}

type Props = {
  books: Book[];
}

function Publishment(props: Props) {

  const { books } = props;

  return (
    <div className="publishment">
      <div className="publishment-title">
        <p className="publishment-title-jp">同人誌</p>
        <p className="publishment-title-en">Publishment</p>
      </div>
      <div className="publishment-table">
        {books.map((book) => {
          const { id, title, description, image } = book;
          return (
          <>
            <div className="publishment-cell" key={id}>
              <picture>
                <source srcSet={process.env.PUBLIC_URL + image.webp} type="image/webp" />
                <img
                  aria-label='publishment-image'
                  src={process.env.PUBLIC_URL + image.jpeg}
                />
              </picture>
              <h1>{ title }</h1>
              <p>{ description }</p>
            </div>
          </>
          );
        })}
      </div>
    </div>
  );
}

export default Publishment;
