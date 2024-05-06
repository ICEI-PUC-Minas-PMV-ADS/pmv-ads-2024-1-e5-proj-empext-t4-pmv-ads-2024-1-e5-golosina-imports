import { usePathname } from "next/navigation";
import { useWindowSize } from "react-use";
import { useState } from "react";
import { List, X } from "@phosphor-icons/react/dist/ssr";
import { ListItem } from "@/atoms/ListItem";
import { Button } from "@/atoms/Button";
import { Logo } from "@/atoms/Logo";
import styles from "./styles.module.scss";
import navigation from "@/data/navigation.json";
import { User } from "next-auth";
import { signOut } from "@/auth";
import { logout } from "@/actions";
interface NavigationProps {
  user: User | undefined
}

export const Navigation = async ({ user }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const { width } = useWindowSize();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isMobile = width < 768;

  const pathname = usePathname();

  return (
    <div className={styles.navigation}>
      <div className={styles.navigation__controls}>
        <Logo />
        {isMobile ? (
          isOpen ? (
            <X size={32} onClick={toggleMenu} color="#9D5C63" />
          ) : (
            <List size={32} onClick={toggleMenu} color="#9D5C63" />
          )
        ) : null}
      </div>
      {(isOpen || !isMobile) && (
        <nav className={styles.navigation__nav}>
          <ul className={styles.navigation__list}>
            {navigation.map((item, index) => (
              <ListItem
                key={index}
                children={item.children}
                href={item.href}
                isLink={true}
                align="center"
                weight={pathname === item.href ? "600" : "400"}
              />
            ))}
          </ul>
          {
            user ?
              <div style={{ marginTop: -30 }}>
                <p style={{ fontSize: 18, maxWidth: 200, marginBottom: 10 }}>Bem-vindo de volta, {user.name}</p>
                <Button
                  level="secondary"
                  label="Sair"
                  isButton={true}
                  onClick={async () => {
                    await logout()
                  }}
                />
              </div>
              :
              <Button
                level="primary"
                label="Entrar"
                isButton={false}
                href="/login"
              />
          }

        </nav>
      )}
    </div>
  );
};
