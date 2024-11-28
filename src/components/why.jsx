
import styles from "./WhyRoseCommunication.module.css";

const WhyRoseCommunication = () => {
  return (
    <section className={styles.whyRoseSection}>
      <div className={styles.imageContainer}>
        {/* <img
          src="/image/why.jpg"
          alt="Why Rose Communication"
          className={styles.image}
        /> */}
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.heading}>Why Choose A2Z Marketing?</h1>
        <p className={styles.description}>
        A2Z Marketing is your go-to partner for innovative and impactful marketing solutions. We pride ourselves on delivering exceptional results for every project, with a focus on professionalism, creativity, and attention to detail. Our approach is tailored to meet your unique goals, ensuring that your brand stands out in a competitive market. From strategy to execution, we are dedicated to transforming your vision into a successful campaign that resonates with your audience.
        </p>
      </div>
      
    </section>
  );
};

export default WhyRoseCommunication;
