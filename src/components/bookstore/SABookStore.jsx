import React from "react";
import "./SABookStore.css";

const books = [
  {
    id: 1,
    title: "The Word and the World",
    price: "$13.47",
    image: "/images/books/the world.jpg",
    link: "https://www.amazon.com/word-world-Solomonayo-Balogun-ebook/dp/B08QYQPGM7?ref_=ast_author_dp&dib=eyJ2IjoiMSJ9.7krCuXMdmGpCM5Rle4PLxLckBUz_PydvaodWYAiD_-vGjHj071QN20LucGBJIEps.ea129w0tmw2CL-o4YgGYnbu1jmx6Hyvg97lGY7aRVwU&dib_tag=AUTHOR"
  },
  {
    id: 2,
    title: "The Relationship Before and after anything",
    price: "$5.99",
    image: "/images/books/the relationship.jpg",
    link: "https://www.amazon.com/Relation-Ship-before-after-saying-ebook/dp/B09C62Y4NY/ref=sr_1_1?crid=2ZXAL8UGA1I7U&dib=eyJ2IjoiMSJ9.bMXzv4NYXDKP7Tly638wrjqZNXxjIeiPjl5s13-NXp0.48anCFqmoN9s27iqHfnuEu5phiyU3B2NYIKfKnbxMIs&dib_tag=se&keywords=the+relationship+by+solomonayo+balogun&qid=1718749738&s=digital-text&sprefix=the+relationship+by+solomonayo+balogun%2Cdigital-text%2C303&sr=1-1"
  },
  {
    id: 3,
    title: "The Dried Brook",
    price: "$15.58",
    image: "/images/books/the dried brook.jpg",
    link: "https://www.amazon.com/Dried-Brook-trials-life-ebook/dp/B09FDFYYB9/ref=sr_1_1?crid=1ZV03R9S95L1H&dib=eyJ2IjoiMSJ9.k5CZyUWS_Tcc3ZPLg37XAw.5EIvX44A8ElfbRIN2JBqqfF8V1ZR_RT4W65fgZPoP8Q&dib_tag=se&keywords=the+dried+brook+by+solomonayo+balogun&qid=1718750059&s=digital-text&sprefix=the+dried+brook+by+solomonayo+balogun%2Cdigital-text%2C418&sr=1-1"
  },
  {
    id: 4,
    title: "The Mystery of a virtuos Woman",
    price: "$5.25",
    image: "/images/books/the mystery of a virtuous woman.jpg",
    link: "https://www.amazon.com/mystery-virtuous-woman-Leaning-thesame-ebook/dp/B08QC53H2Q?ref_=ast_author_dp&dib=eyJ2IjoiMSJ9.7krCuXMdmGpCM5Rle4PLxLckBUz_PydvaodWYAiD_-vGjHj071QN20LucGBJIEps.ea129w0tmw2CL-o4YgGYnbu1jmx6Hyvg97lGY7aRVwU&dib_tag=AUTHOR"
  },
  {
    id: 5,
    title: "Reconditioning The Mind For Greatness",
    price: "$13.56",
    image: "/images/books/reconditioning the mind for greatness.jpg",
    link: "https://www.amazon.com/Reconditioning-mind-greatness-pathway-success-ebook/dp/B08QBBFCQ5?ref_=ast_author_dp&dib=eyJ2IjoiMSJ9.7krCuXMdmGpCM5Rle4PLxLckBUz_PydvaodWYAiD_-vGjHj071QN20LucGBJIEps.ea129w0tmw2CL-o4YgGYnbu1jmx6Hyvg97lGY7aRVwU&dib_tag=AUTHOR"
  },

];

const SABookStore = () => {
  return (
    <>
    
          <section className="hero">
            <div className="hero-content">
              
              <p> </p>
            </div>
          </section>
          <section className="bookstore">
            <div className="container grid">
              {books.map((book) => (
                <div className="card shadow" key={book.id}>
                  <img src={book.image} alt={book.title} />
                  <div className="text">
                    <h3>{book.title}</h3>
                    <p>{book.price}</p>
                    <a href={book.link} target="_blank" rel="noopener noreferrer">
                      Buy on Amazon
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </>
      );
    };
    
    export default SABookStore;