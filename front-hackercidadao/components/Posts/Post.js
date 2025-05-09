
import Image from "next/image";
import styles from "./post.module.css";

export default function Post(){
    return(
        <div className={styles.section}>
            <h1 className={styles.userName}>Nome</h1>
            <h2 className={styles.title}>Título</h2>
            <p className={styles.commets}>Descrição</p>
            <div className={styles.inputs}>
                <input 
                    className={styles.input}
                    type="text"
                    placeholder="adicionar um comentário"    
                />
                <button className={styles.sendButton}>
                    <Image 
                    src="/send-message.png"
                    width={20}
                    height={20}
                    alt="Send button"
                    />
                </button>
            </div>

        </div>
    )
}