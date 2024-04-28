import { Heading } from "@/atoms/Heading";
import { Text } from "@/atoms/Text";
import styles from "./styles.module.scss";
import {
  WhatsappShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappIcon,
  TelegramIcon,
  XIcon,
} from "react-share";

interface TitleShareProps {
  item: string;
  secondItem: string;
  thirdItem: string;
  slug: string;
}

export const TitleShare = ({
  item,
  secondItem,
  thirdItem,
  slug,
}: TitleShareProps) => {
  return (
    <div className={styles.shareTitle}>
      <div className={styles.shareTitle__container}>
        <div className={styles.shareTitle__heading}>
          <Heading align="left" children={item} color="dark-gray" level="2" />
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
          <WhatsappShareButton url={`http://localhost:3000/produtos/${slug}`}>
            <WhatsappIcon
              size={72}
              round={true}
              bgStyle={{ fill: "#212427" }}
            />
            <Text align="center" children="Whatsapp" color="dark-gray" />
          </WhatsappShareButton>
          <TelegramShareButton url={`http://localhost:3000/produtos/${slug}`}>
            <TelegramIcon
              size={72}
              round={true}
              bgStyle={{ fill: "#212427" }}
            />
            <Text align="center" children="Telegram" color="dark-gray" />
          </TelegramShareButton>
          <TwitterShareButton url={`http://localhost:3000/produtos/${slug}`}>
            <XIcon size={72} round={true} bgStyle={{ fill: "#212427" }} />
            <Text align="center" children="Twitter" color="dark-gray" />
          </TwitterShareButton>
        </div>
      </div>
    </div>
  );
};
