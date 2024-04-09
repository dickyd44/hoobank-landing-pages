import { clients } from "@/constants";
import styles from "@/app/style";
import Image from "next/image";

export default function ClientSection() {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <div
            key={client.id}
            className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[192px] m-5`}
          >
            <Image
              src={client.logo}
              alt="client-logo"
              className="sm:w-[192px] w-[100px] object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
