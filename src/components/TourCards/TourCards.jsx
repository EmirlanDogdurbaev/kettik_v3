import { useRef } from "react";
import { Link } from "react-router-dom";
import cl from "./TourCards.module.scss";

const TourCards = () => {
  const { id } = useRef();
  return (
    <div className={cl.TourCards}>
      <div className={cl.cont}>
        <img
          src="https://cdn.unenvironment.org/2022-09/nicolai-kramer-unsplash.jpg"
          alt="mou"
          width={400}
        />

        <div>
          <h3>Son-Kol</h3>
          <p>
            With a new design approach for flexible use: from a dinner for two
            to a big celebration.
          </p>
          <p>1345$</p>
          <span>
            <Link to={`/tours/${id}`}>Learn more</Link>
            <Link to={"/book"}>book now</Link>
          </span>
        </div>
      </div>
      <div className={cl.cont}>
        <img
          src="https://cdn.unenvironment.org/2022-09/nicolai-kramer-unsplash.jpg"
          alt="mou"
          width={400}
        />
        <div>
          <h3>Son-Kol</h3>
          <p>Lorem, ipsum.</p>
          <p>price</p>
          <span>
            <Link to={`/tours/${id}`}>Learn more</Link>
            <Link to={"/book"}>book now</Link>
          </span>
        </div>
      </div>
      <div className={cl.cont}>
        <img
          src="https://cdn.unenvironment.org/2022-09/nicolai-kramer-unsplash.jpg"
          alt="mou"
          width={400}
        />
        <div>
          <h3>Son-Kol</h3>
          <p>Lorem, ipsum.</p>
          <p>price</p>
          <span>
            <Link to={`/tours/${id}`}>Learn more</Link>
            <Link to={"/book"}>book now</Link>
          </span>
        </div>
      </div>
      <div className={cl.cont}>
        <img
          src="https://cdn.unenvironment.org/2022-09/nicolai-kramer-unsplash.jpg"
          alt="mou"
          width={400}
        />
        <div>
          <h3>Son-Kol</h3>
          <p>Lorem, ipsum.</p>
          <p>price</p>
          <span>
            <Link to={`/tours/${id}`}>Learn more</Link>
            <Link to={"/book"}>book now</Link>
          </span>
        </div>
      </div>
      <div className={cl.cont}>
        <img
          src="https://cdn.unenvironment.org/2022-09/nicolai-kramer-unsplash.jpg"
          alt="mou"
          width={400}
        />
        <div>
          <h3>Son-Kol</h3>
          <p>Lorem, ipsum.</p>
          <p>price</p>
          <span>
            <Link to={`/tours/${id}`}>Learn more</Link>
            <Link to={"/book"}>book now</Link>
          </span>
        </div>
      </div>{" "}
      <div className={cl.cont}>
        <img
          src="https://cdn.unenvironment.org/2022-09/nicolai-kramer-unsplash.jpg"
          alt="mou"
          width={400}
        />
        <div>
          <h3>Son-Kol</h3>
          <p>Lorem, ipsum.</p>
          <p>price</p>
          <span>
            <Link to={`/tours/${id}`}>Learn more</Link>
            <Link to={"/book"}>book now</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default TourCards;
