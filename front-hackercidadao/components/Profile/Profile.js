"use client";

import Image from "next/image";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

import styles from "./profile.module.css";

export default function Profile() {
  const [comorbidity, setComorbidity] = useState(null);

  useEffect(() => {
    // Executa apenas no navegador
    const stored = localStorage.getItem("comorbirty");

    setComorbidity(stored);
  }, []);

  const registerMeasure = () => {
    Swal.fire({
      title: "Insira sua taxa de glicemia",
      input: "number",
      min: 0,
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      confirmButtonText: "Confirmar",
      showLoaderOnConfirm: true,
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        const glicemia = result.value;

        if (!glicemia || glicemia <= 0) {
          Swal.fire({
            title: "Valor inválido",
            icon: "error",
          });

          return;
        }
        Swal.fire({
          title: "Medição registrada",
          text: `Glicemia: ${glicemia}`,
          icon: "success",
        });
      }
    });
  };

  return (
    <div className={styles.sectionProfile}>
      {/* ...restante do código */}
      <li>
        <button className={styles.button} onClick={registerMeasure}>
          <Image
            alt="CheckList Icon"
            height={35}
            src={
              comorbidity === "diabetico"
                ? "/glicosimetro.png"
                : "/assistencia-medica.png"
            }
            width={35}
          />
          <span>
            {comorbidity === "diabetico"
              ? "Registrar medição"
              : "Registrar pressão"}
          </span>
        </button>
      </li>
      {/* ... */}
    </div>
  );
}
