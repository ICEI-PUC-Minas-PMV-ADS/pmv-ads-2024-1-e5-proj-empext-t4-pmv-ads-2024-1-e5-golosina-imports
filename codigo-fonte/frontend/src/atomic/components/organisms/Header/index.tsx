'use client'

import { Hero } from "@/atomic/components/molecules/Hero";
import styles from "./styles.module.scss";
import { Navigation } from "@/molecules/Navigation";
import { User } from "next-auth";

interface HeaderProps {
  user: User | undefined
}

export const Header = async ({ user }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <Navigation user={user} />
      <Hero />
    </header>
  );
};
