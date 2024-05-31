"use client";

import { usePathname } from "next/navigation";
import { useWindowSize } from "react-use";
import { useState, useEffect } from "react";
import { List, X } from "@phosphor-icons/react/dist/ssr";
import { ListItem } from "@/atoms/ListItem";
import { Button } from "@/atoms/Button";
import { Logo } from "@/atoms/Logo";
import styles from "./styles.module.scss";
import navigation from "@/data/navigation.json";
import { User } from "next-auth";
import { Cookie } from "@phosphor-icons/react/dist/ssr";
import { signOut } from "@/auth";
import { logout } from "@/actions";
import { Text } from "@/atoms/Text";
interface NavigationProps {
  user: User | undefined;
}

export const Navigation = ({ user }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const { width } = useWindowSize();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isMobile = width < 744;

  const pathname = usePathname();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className={styles.navigation}>
      {user && (
        <div className={styles.navigation__presentationMobile}>
          <Text
            align="center"
            children="Olá,&nbsp; "
            color="wenge"
            weight="600"
          />
          <Text
            align="center"
            children={`${user.name}`}
            color="rose-taupe"
            weight="600"
          />
          <Cookie size={32} color="#584B53" />
        </div>
      )}
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
          {user && (
        <div className={styles.navigation__presentation}>
          <Text
            align="center"
            children="Olá,&nbsp; "
            color="wenge"
            weight="600"
          />
          <Text
            align="center"
            children={`${user.name}`}
            color="rose-taupe"
            weight="600"
          />
          <Cookie size={32} color="#584B53" />
        </div>
      )}
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
          {user ? (
            <div className={styles.navigation__buttons}>
              <Button
                level="secondary"
                label="Sair"
                isButton={true}
                onClick={async () => {
                  await logout();
                }}
              />
            </div>
          ) : (
            <Button
              level="primary"
              label="Entrar"
              isButton={false}
              href="/login"
            />
          )}
        </nav>
      )}
    </div>
  );
};
