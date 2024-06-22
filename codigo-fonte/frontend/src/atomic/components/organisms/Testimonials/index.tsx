"use client";

import React from "react";
import { useEffect } from "react";
import { getFeedbacks } from "@/api/backend/controllers/feedback";
import { Feedback } from "@/api/backend/types";
import moment from "moment";
import "moment/locale/pt-br";
import { Heading } from "@/atoms/Heading";
import { Text } from "@/atoms/Text";
import { Carousel } from "@/molecules/Carousel";
import { Testimonial } from "@/molecules/Testimonial";
import styles from "./styles.module.scss";

export const Testimonials = () => {
  const [feedbacks, setFeedbacks] = React.useState<Feedback[]>([]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      const fetchedFeedbacks = await getFeedbacks();
      setFeedbacks(fetchedFeedbacks);
    };

    fetchFeedbacks();
  }, []);

  return (
    <section className={styles.testimonials}>
      <Heading align="center" children="Depoimentos" color="white" level="2" />
      <Text
        align="center"
        children="Explore os testemunhos de nossos clientes e descubra suas experiências com nossos produtos"
        color="white"
      />

      <div className={styles.testimonials__cards}>
        {feedbacks.length > 0 ? (
          <Carousel
            items={feedbacks.map((feedback, index) => (
              <Testimonial
                key={index}
                name={feedback.personName}
                location={moment(feedback.createTime)
                  .locale("pt-br")
                  .format("LLL")}
                feedback={feedback.content}
              />
            ))}
          />
        ) : null}
      </div>
    </section>
  );
};
