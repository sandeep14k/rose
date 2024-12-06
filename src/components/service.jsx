import styles from "./Service.module.css";

const Service = () => {
  const services = [
    {
      id: 1,
      image: "../image/a1.jpg", // Replace with actual image URL
      text: "Social Media Management",
    },
    {
      id: 2,
      image: "../image/a2.jpg", // Replace with actual image URL
      text: "Social Media Management",
    },
    {
      id: 3,
      image: "../image/a3.jpg", // Replace with actual image URL
      text: "Social Media Management",
    },
    {
      id: 4,
      image: "../image/a4.jpg", // Replace with actual image URL
      text: "Social Media Management",
    },
    {
      id: 5,
      image: "../image/a5.jpg", // Replace with actual image URL
      text: "Social Media Management",
    },
    {
      id: 6,
      image: "../image/a6.jpg", // Replace with actual image URL
      text: "Social Media Management",
    },
    {
      id: 7,
      image: "../image/a7.jpg", // Replace with actual image URL
      text: "Social Media Management",
    },
    {
      id: 8,
      image: "../image/a8.jpg", // Replace with actual image URL
      text: "Social Media Management",
    },
    {
      id: 9,
      image: "../image/a9.jpg", // Replace with actual image URL
      text: "Social Media Management",
    },
  ];

  return (

    <section className={styles.servicessection} id="services">
      <h2 className={styles.servicestitle}>Our Services</h2>
      <div className={styles.stickerscontainer}>
        {services.map((service) => (
          <div key={service.id} className={styles.sticker}>
            <img
              src={service.image}
              alt={service.text}
              className={styles.stickerimage}
            />
            <p className={styles.stickertext}>{service.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;