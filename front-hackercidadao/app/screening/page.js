"use client"

import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

export default function Screening(){
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
                <h1 className={styles.headerTitle}>Triagem</h1>
            </header>
            <main className={styles.main}>

            </main>
        </div>
    )
}