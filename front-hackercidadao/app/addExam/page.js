"use client"
import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";
import Swal from "sweetalert2";

export default function AddExam(){
    const sendExam = () => {
        Swal.fire({
            title: 'Exame enviado!!',
            confirmButtonColor: '#359BE0',
            customClass: {
                confirmButton: 'my-confirm-button'
            }
        });
    }

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
                <h1 className={styles.headerTitle}>Adicionar Exame</h1>
            </header>
            <main className={styles.main}>
                <section className={styles.section}>
                    <h1>Preencha os campos para armazenar os dados</h1>
                    <form className={styles.forms}>
                        <fieldset>
                            <label>Nome do exame:</label>
                            <input type="text"/>
                            <label htmlFor="file" className={styles.uploadLabel}>Anexe o seu exame aqui</label>
                            <input type="file" min={0} id="file"/>
                        </fieldset>

                        <button type="button" onClick={sendExam}>Enviar</button>
                    </form>
                </section>
            </main>
        </div>
    );
}