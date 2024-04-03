import { Heading } from "@/atoms/Heading";
import { Text } from "@/atoms/Text";
import { Share, SocialMediaType } from "@/molecules/Share";
import styles from "./styles.module.scss";

interface TitleShareProps {
  item: string;
  secondItem: string;
  thirdItem: string;
}

export const TitleShare = ({
  item,
  secondItem,
  thirdItem,
}: TitleShareProps) => {
  const socialMediaOptions = [
    { platform: "whatsapp" as SocialMediaType },
    { platform: "telegram" as SocialMediaType },
    { platform: "instagram" as SocialMediaType },
  ];

  return (
    <div className={styles.shareTitle}>
      <div className={styles.shareTitle__container}>
        <div className={styles.shareTitle__heading}>
          <Heading
            align="left"
            children={item}
            color="dark-gray"
            level="2"
          />
          <div className={styles.shareTitle__text}>
            <Text
              align="left"
              children={secondItem}
              color="wenge"
              weight="600"
            />
            <Text align="left" children={thirdItem} color="wenge" />
          </div>
        </div>
        <div className={styles.shareTitle__share}>
          {socialMediaOptions.map((option, index) => (
            <Share socialMedia={option.platform} key={index} />
          ))}
          ;
        </div>
      </div>
    </div>
  );
};
