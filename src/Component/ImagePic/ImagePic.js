import style from "./ImagePic.module.css";

const ImagePic = () => {
  return (
    <div className={style.image_change}>
      <div className={style.change}>
        <img src="./Image/digikull.jpeg" alt="" />
      </div>
      <h2>Digikull</h2>
    </div>
  );
};

export default ImagePic;
