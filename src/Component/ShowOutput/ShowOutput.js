import ActionButton from "../ActionButton/ActionButton";
import ImagePic from "../ImagePic/ImagePic";
import ReduxOutput from "../ReduxOutput/ReduxOutput";
import style from "./ShowOutput.module.css";

const ShowOutput = () => {
  return (
    <div className={style.show}>
      <header className={style.show_image}>
        <ImagePic />
      </header>
      <div className={style.mid}>
        <div>
          <section>
            <ReduxOutput />
          </section>
        </div>
        <div className={style.action}>
          <ActionButton />
        </div>
      </div>
    </div>
  );
};

export default ShowOutput;
