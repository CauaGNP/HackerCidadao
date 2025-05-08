"use client"

import styles from "./profile.module.css";
import Image from "next/image";

export default function Profile(){
    return(
        <div className={styles.sectionProfile}>
        <div className={styles.profileImage}>
        <Image 
          src="/profile-user.png"
          width={100}
          height={100}
          alt="User Icon"
          />
        </div>

        <section className={styles.userInformation}>
            <h1>Nome Usuário</h1>
            <h2>Idade: 23</h2>
            <h2>Diabético tipo 1</h2>
        </section>

      </div>
    )
}