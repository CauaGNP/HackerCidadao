"use client"
import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";

export default function Profile(){
    return(
        <div>
            <header className={styles.header}>
                <Link href="/" className={styles.backButton}> 
                    <Image
                    src="/left-arrow.png"
                    width={25}
                    height={25}
                    alt="Back button" />
                </Link>
                <h1 className={styles.headerTitle}>NOME | Nome do usuário</h1>
            </header>
            <main className={styles.main}>
            <ul className={styles.ulList}>
                <li>
                   <Link
                    className={styles.link}
                    href={"/report"}> 
                        {/* <Image></Image> */}
                        <h1>Relatório</h1>
                    </Link>
                </li>
                <li>
                   <Link 
                    href={"/screening"}
                    className={styles.link}> 
                        {/* <Image></Image> */}
                        <h1>Triagem</h1>
                    </Link>
                </li>
            </ul>
            </main>
        </div>
    );
}