import { AppNavbar, AppFooter } from "@/components";
import styles from "./style";

const Home = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <AppNavbar />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <AppFooter />
        </div>
      </div>
    </div>
  );
};

export default Home;
