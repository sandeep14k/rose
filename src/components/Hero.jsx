import styles from "./Hero.module.css";

const Hero = () => {
  const stickers = [
    {
      img: "../image/img1.jpg",
      description: "Delicious Meals",
    },
    {
      img: "../image/img2.jpg",
      description: "Fresh Ingredients",
    },
    {
      img: "../image/img3.jpg",
      description: "Cozy Ambience",
    },
    {
      img: "../image/img4.jpg",
      description: "Exceptional Service",
    },
    {
      img: "../image/img5.jpg",
      description: "Exceptional Service",
    },
    {
      img: "../image/img6.jpg",
      description: "Exceptional Service",
    },
    {
      img: "../image/img7.jpg",
      description: "Exceptional Service",
    },
    {
      img: "../image/img8.jpg",
      description: "Exceptional Service",
    },
    {
      img: "../image/img9.jpg",
      description: "Exceptional Service",
    },
    {
      img: "../image/img10.jpg",
      description: "Exceptional Service",
    },
    {
      img: "../image/img11.jpg",
      description: "Exceptional Service",
    },
  ];

  return (
    <div className={styles.herosectional}>
      <div className={styles.para}>
        <h1>Our Trusted Clients</h1>
      </div>
      <div className={styles.stickerscontainer}>
        {stickers.map((sticker, index) => (
          <div key={index} className={styles.sticker}>
            <img
              src={sticker.img}
              alt={sticker.description}
              className={styles.stickerimg}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
