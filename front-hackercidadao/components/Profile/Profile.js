"use client"

import styles from "./profile.module.css";
import Image from "next/image";
import Link from "next/link";
import Swal from "sweetalert2";

export default function Profile(){
    const comorbidity = localStorage.getItem("comorbirty");

    const registerMeasure = () => {
        Swal.fire({
        title: "Insira sua taxa de glicemia",
        input: "number",
        min: 0,
        inputAttributes: {
          autocapitalize: "off"
        },
        showCancelButton: true,
        cancelButtonText: "Cancelar",
        confirmButtonText: "Confirmar",
        showLoaderOnConfirm: true, // Aqui será a requisição
        preConfirm: async () => {
          try {
            const response = await fetch('http://localhost:80/exams/create-exam',{
              method : 'POST',
              headers : {
                accept: 'application/json'
              }
            });
            return response.json();
          } catch (error) {
            Swal.showValidationMessage(`
              Request failed: ${error}
            `);
          }
        },
        allowOutsideClick: () => !Swal.isLoading()
      }).then((result) => {
       if (result.isConfirmed) {
      const glicemia = result.value;
      // Validação básica opcional
      if (!glicemia || glicemia <= 0) {
        Swal.fire({
          title: "Valor inválido",
          icon: "error"
        });
        return;
      }
      // Aqui você pode salvar no localStorage, enviar pra API etc.
      Swal.fire({
        title: "Medição registrada",
        text: `Glicemia: ${glicemia}`,
        icon: "success"
      });
    }
  });
};

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
            <h1>João Cleber de Oliveira</h1>
            <h2>Idade: 23</h2>
            <h2>Diabético tipo 1</h2>
        </section>

        <section className={styles.sectionList}>
            <ul>
              <li>
                <button className={styles.button}>               
                <Image 
                src="/program.png"
                width={30}
                height={30}
                alt="Programing Icon"/>
                <span>Eventos</span>
                </button>
              </li>
              <li>
                <Link href="/addExam" className={styles.button}>
                  <Image 
                  src="/exam.png"
                  width={35}
                  height={35}
                  alt="Exam Icon"/>
                  <span>Adicionar Exames</span>
                </Link>
              </li>
              <li>
                <Link href="/report" className={styles.button}>
                  <Image 
                  src="/checklist.png"
                  width={35}
                  height={35}
                  alt="CheckList Icon"/>
                  <span>Realizar Check-in</span>
                </Link>
              </li>
              <li>
                <button className={styles.button} onClick={registerMeasure}>
                  <Image 
                  src={comorbidity === "diabetico" ? "/glicosimetro.png" : "/assistencia-medica.png"}
                  width={35}
                  height={35}
                  alt="CheckList Icon"/>
                  <span>{comorbidity === "diabetico" ? "Registrar medição" : "Regitrar pressão"}</span>
                </button>
              </li>
              <li>
                <Link href="/calendar" className={styles.button}>
                  <Image 
                  src="/calendar.png"
                  width={35}
                  height={35}
                  alt="Calendar Icon"/>
                  <span>Agenda Consulta</span>
                </Link>
              </li>
              <li>
                <button className={styles.button}>
                  <Image 
                  src="/membership-card.png"
                  width={35}
                  height={35}
                  alt="Premium Icon"/>
                  <span className={styles.premium}>Bem Estar</span>
                </button>
              </li>
            </ul>
        </section>

      </div>
    )
}