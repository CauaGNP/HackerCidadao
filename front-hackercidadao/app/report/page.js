"use client"

import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

export default function Report(){
    return(
        <div>
            <header className={styles.header}>
                <Link href="/./profile" className={styles.backButton}> 
                    <Image
                    src="/left-arrow.png"
                    width={25}
                    height={25}
                    alt="Back button" />
                </Link>
                <h1 className={styles.headerTitle}>Formulario</h1>
            </header>
            <main className={styles.main}>

            </main>
        </div>
    )
}