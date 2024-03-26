import {
  WhatsappLogo,
  InstagramLogo,
  TelegramLogo,
} from "@phosphor-icons/react/dist/ssr";
import { Text } from "@/atoms/Text";
import styles from "./styles.module.scss";

type SocialMediaType = "whatsapp" | "instagram" | "telegram";

interface ShareProps {
  socialMedia: SocialMediaType;
}
export const Share = ({ socialMedia }: ShareProps) => {
  let IconComponent;
  let childrenText;

  switch (socialMedia) {
    case "whatsapp":
      IconComponent = WhatsappLogo;
      childrenText = "Whatsapp";
      break;
    case "instagram":
      IconComponent = InstagramLogo;
      childrenText = "Instagram";
      break;
    case "telegram":
      IconComponent = TelegramLogo;
      childrenText = "Telegram";
      break;
    default:
      IconComponent = InstagramLogo;
      childrenText = "Instagram";
  }

  return (
    <div className={styles.share}>
      <div className={styles.share__frame}>
        <IconComponent size={32} color="white" />
      </div>
      <Text align="center" children={childrenText} color="dark-gray" />
    </div>
  );
};
