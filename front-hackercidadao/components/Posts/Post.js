
import Image from "next/image";
import styles from "./post.module.css";

export default function Post(){
    return(
        <div className={styles.section}>
            <div className={styles.margin}>
            <h1 className={styles.userName}>Carlos Pinheiro</h1>
            <h2 className={styles.title}>Rotina Matinal</h2>
            <p className={styles.commets}>Hoje eu acordei e fiz o meu café da manhã com pão e ovo.</p>
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
            <div className={styles.margin}>
            <h1 className={styles.userName}>Joana Bezerra</h1>
            <h2 className={styles.title}>Praticando esportes</h2>
            <p className={styles.commets}>Hoje pratiquei vários tipos de esportes radicais, como skate e surf..</p>
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
            <div>
            <h1 className={styles.userName}>Lobato Figueiredo</h1>
            <h2 className={styles.title}>Aprendendo e cozinhando</h2>
            <p className={styles.commets}>Sempre gostei de cozinhar, agora aprendi receitas saudáveis</p>
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
        </div>
    )
}