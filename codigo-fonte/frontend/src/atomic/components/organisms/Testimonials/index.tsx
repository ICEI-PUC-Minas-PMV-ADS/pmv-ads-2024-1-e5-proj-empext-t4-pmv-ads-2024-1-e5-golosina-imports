import { Heading } from "@/atoms/Heading";
import { Text } from "@/atoms/Text";
import { Testimonial } from "@/molecules/Testimonial";
import styles from "./styles.module.scss";
import { getFeedbacks } from "@/api/backend/controllers/feedback";
import moment from "moment";
import 'moment/locale/pt-br';


export const Testimonials = async () => {
  const feedbacks = await getFeedbacks();

  return (
    <section className={styles.testimonials}>
      <Heading align="center" children="Depoimentos" color="white" level="2" />
      <Text
        align="center"
        children="Explore os testemunhos de nossos clientes e descubra suas experiências com nossos produtos"
        color="white"
      />

      <div className={styles.testimonials__cards}>
        {
          feedbacks ? feedbacks.map((feedback) => {
            const date = moment(feedback.createTime).locale('pt-br').format('LLL');
            return (<Testimonial
              key={feedback.id}
              name={feedback.personName}
              location={date.toString()}
              feedback={feedback.content}
            />)
          }) : null
        }
      </div>
    </section>
  );
};
