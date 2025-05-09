"use client"

import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import Swal from "sweetalert2";

export default function Report() {
    const deleteForm = () => {
        divFormm.style.display = 'none';
        Swal.fire({
            title: 'Relatório finalizado',
            confirmButtonColor: '#359BE0',
        })
    }

    return (
        <div>
            <header className={styles.header}>
                <Link href="/" className={styles.backButton}>
                    <Image
                        src="/left-arrow.png"
                        width={25}
                        height={25}
                        alt="Back button"
                    />
                </Link>
                <h1 className={styles.headerTitle}>Check-in</h1>
            </header>

            <main className={styles.main}>
                <section className={styles.form} id="divFormm">
                    <div className={styles.questionsSections}>
     
                        <h1>Como você está se sentindo?</h1>
                        <div className={styles.divMaster}>
                            <div>
                                <input type="radio" name="grupo1" id="mal1" />
                                <label htmlFor="mal1">Mal</label>
                            </div>
                            <div>
                                <input type="radio" name="grupo1" id="meio1" />
                                <label htmlFor="meio1">Mais ou menos</label>
                            </div>
                            <div>
                                <input type="radio" name="grupo1" id="bem1" />
                                <label htmlFor="bem1">Bem</label>
                            </div>
                        </div>

                        <h1>Você dormiu bem?</h1>
                        <div className={styles.divMaster}>
                            <div>
                                <input type="radio" name="grupo2" id="mal2" />
                                <label htmlFor="mal2">Mal</label>
                            </div>
                            <div>
                                <input type="radio" name="grupo2" id="meio2" />
                                <label htmlFor="meio2">Mais ou menos</label>
                            </div>
                            <div>
                                <input type="radio" name="grupo2" id="bem2" />
                                <label htmlFor="bem2">Bem</label>
                            </div>
                        </div>

                        <h1>Está se alimentando bem?</h1>
                        <div className={styles.divMaster}>
                            <div>
                                <input type="radio" name="grupo3" id="mal3" />
                                <label htmlFor="mal3">Mal</label>
                            </div>
                            <div>
                                <input type="radio" name="grupo3" id="meio3" />
                                <label htmlFor="meio3">Mais ou menos</label>
                            </div>
                            <div>
                                <input type="radio" name="grupo3" id="bem3" />
                                <label htmlFor="bem3">Bem</label>
                            </div>
                        </div>
                        <div className={styles.divMasterOpen}>
                                <label>Qual sua taxa glicemica em jejum?</label>
                                <input type="number" min={1}/>
                        </div>
                    </div>

                    <button 
                    className={styles.sendButton}
                    onClick={deleteForm}
                    >Enviar</button>
                </section>
            </main>
        </div>
    );
}
