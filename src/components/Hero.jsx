import styles from "./Hero.module.css";

const Hero = () => {
  const stickers = [
    {
      img: "../rose/image/img1.jpg",
      description: "Delicious Meals",
    },
    {
      img: "../rose/image/img2.jpg",
      description: "Fresh Ingredients",
    },
    {
      img: "../rose/image/img3.jpg",
      description: "Cozy Ambience",
    },
    {
      img: "../rose/image/img4.jpg",
      description: "Exceptional Service",
    },
    {
      img: "../rose/image/img5.jpg",
      description: "Exceptional Service",
    },
    {
      img: "../rose/image/img6.jpg",
      description: "Exceptional Service",
    },
    {
      img: "../rose/image/img7.jpg",
      description: "Exceptional Service",
    },
    {
      img: "../rose/image/img8.jpg",
      description: "Exceptional Service",
    },
    {
      img: "../rose/image/img9.jpg",
      description: "Exceptional Service",
    },
    {
      img: "../rose/image/img10.jpg",
      description: "Exceptional Service",
    },
    {
      img: "../rose/image/img11.jpg",
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
