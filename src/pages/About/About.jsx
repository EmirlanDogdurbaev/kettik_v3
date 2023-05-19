import Header from "../../components/Header/Header";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import cl from "./About.module.scss";

const About = () => {
  const progress = [80, 90, 75, 83];
  return (
    <div className={cl.About}>
      <Header />
      <section>
        <img
          src="https://thumb.tildacdn.com/tild6134-3634-4864-b231-316139623637/-/format/webp/IMG_0674.JPG"
          alt="about us "
          width={550}
        />
        <aside>
          <h4>О нашей компании</h4>
          <p>Ключевые слова о компании</p>
          <span></span>
          <p>история возникновения кеттик</p>
        </aside>
      </section>

      <ProgressBar progress={progress} />
    </div>
  );
};

export default About;
