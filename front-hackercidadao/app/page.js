"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect } from "react";

import Post from "@/components/Posts/Post";
import Profile from "@/components/Profile/Profile";
import Swal from "sweetalert2";

export default function Home() {

  const handleGeoLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
  
          try {
            const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`);
            const data = await response.json();
  
            const bairro = data.address.suburb || data.address.neighbourhood || "bairro desconhecido";
            const cidade = data.address.city || data.address.town || data.address.village;
            const estado = data.address.state;
  
            alert(`Você está em ${bairro}, ${cidade} - ${estado}`);
          } catch (error) {
            alert("Erro ao converter localização: " + error.message);
          }
        },
        (error) => {
          alert("Erro ao obter localização: " + error.message);
        }
      );
    } else {
      alert("Geolocalização não é suportada pelo seu navegador.");
    }
  };

  useEffect(() => {
      Swal.fire({
        title: "Você tem relatórios a realizar",
        confirmButtonColor: "#ff0000"
      })
  }, []);

  return (

    <div>
      <header className={styles.header}>
        <h1 className={styles.headerTitle}>asa</h1>
        <nav className={styles.navBar}>
          <Image 
            className={styles.setting}
            src="/setting.png"
            width={40}
            height={40}
            alt="User Icon"
          />

          <Link href={"profile"} className={styles.nav}>
            <Image 
            src="/profile-user.png"
            width={40}
            height={40}
            alt="User Icon"
            />
          </Link>
        </nav>
      </header>
      <main className={styles.main}>
          <Profile />
          <div className={styles.divDivision}>
            <section className={styles.notification}>

            </section>

            <section className={styles.post}>
                <Post />
            </section>
          </div>

      </main>

      <button 
      className={styles.alertButton}
      onClick={handleGeoLocation}>
            <Image 
              src="/danger.png"
              width={50}
              height={50}
              alt="danger icon"
            />
          </button>
    </div>
  );
}