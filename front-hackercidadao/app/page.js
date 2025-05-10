'use client'

import Image from 'next/image'
import styles from './page.module.css'
import { useEffect, useState } from 'react'

import Post from '@/components/Posts/Post'
import { Button } from '../components/Button.tsx'
import Profile from '@/components/Profile/Profile'
import Swal from 'sweetalert2'
import Pending from '@/components/Pending/Pending'
import InteractiveAvatar from '@/components/InteractiveAvatar'
import {
  StreamingAvatarSessionState,
  useStreamingAvatarSession,
} from '@/components/logic'

export default function Home() {
  const [srcImage, setSrcImage] = useState('/expend-zoom.png')
  const [isVideoCall, setIsVideoCall] = useState(false)
  const [isButtonsCallDecision, setIsButtonsCallDecision] = useState(true)
  const [whButton, setWHButton] = useState({
    width: 30,
    height: 30,
  })
  const [whXButton, setWHXButton] = useState({
    width: 25,
    height: 25,
  })

  const { sessionState } = useStreamingAvatarSession()

  // const handleGeoLocation = () => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(
  //       async (position) => {
  //         const lat = position.coords.latitude;
  //         const lon = position.coords.longitude;

  //         try {
  //           const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`);
  //           const data = await response.json();

  //           const bairro = data.address.suburb || data.address.neighbourhood || "bairro desconhecido";
  //           const cidade = data.address.city || data.address.town || data.address.village;
  //           const estado = data.address.state;

  //           alert(`Você está em ${bairro}, ${cidade} - ${estado}`);
  //         } catch (error) {
  //           alert("Erro ao converter localização: " + error.message);
  //         }
  //       },
  //       (error) => {
  //         alert("Erro ao obter localização: " + error.message);
  //       }
  //     );
  //   } else {
  //     alert("Geolocalização não é suportada pelo seu navegador.");
  //   }
  // };

  const openCloseChat = () => {
    if (chatBot.style.display == 'flex') {
      chatBot.style.display = 'none'
      alertButton.style.display = 'flex'
    } else {
      alertButton.style.display = 'none'
      chatBot.style.display = 'flex'
    }
  }

  const extendMinimizeChat = () => {
    if (srcImage == '/expend-zoom.png') {
      setSrcImage('/minimize-zoom.png')
      if (window.matchMedia('(max-width: 680px)').matches) {
        chatBot.style.width = '400px';
        chatBot.style.height = '400px';
      }else if (window.matchMedia('(max-width: 980px)').matches
      ){
        chatBot.style.width = '700px';
        chatBot.style.height = '400px';
      }else{
        chatBot.style.width = '700px'
        chatBot.style.height = '500px'
        chatBot.style.transition = 'all .3s'
        titleChat.style.fontSize = '45px'
        titleChat.style.transition = 'all .3s'
        setWHButton((prev) => ({ ...prev, width: 50, height: 50 }))
        setWHXButton((prev) => ({ ...prev, width: 40, height: 40 }))
      }
      
    } else {
      setSrcImage('/expend-zoom.png')
      chatBot.style.width = '250px'
      chatBot.style.height = '300px'
      titleChat.style.fontSize = '30px'

      setWHButton((prev) => ({ ...prev, width: 30, height: 30 }))
      setWHXButton((prev) => ({ ...prev, width: 25, height: 25 }))
    }
  }

  useEffect(() => {
      const alertShown = sessionStorage.getItem('alertShown');

      if (!alertShown) {
        Swal.fire({
          title: 'Você precisa realizar o check-in!!',
          confirmButtonColor: '#ff0000',
        });

        sessionStorage.setItem('alertShown', 'true');
      }
    }, []);

  return (
    <div>
      <header className={styles.header}>
        <h1 className={styles.headerTitle}>Cognit</h1>
      </header>
      <main className={styles.main}>
        <Profile />
        <div className={styles.divDivision}>
          <section className={styles.notification}>
            <Pending />
          </section>

          <section className={styles.post}>
            <Post />
          </section>
        </div>
     
      </main>
      
      
      
      {isVideoCall && (
        <div
          className="w-screen h-screen flex flex-col"
          style={{ position: 'fixed', top: 0, left: 0 }}
        >
          <div className="w-[900px] flex flex-col items-start justify-start gap-5 mx-auto pt-4 pb-20">
            <div className="w-full">
              <InteractiveAvatar />
            </div>
          </div>
        </div>
      )}
      <section className={styles.chat} id="chatBot">
        <div className={styles.headerChat}>
          <div>
            <button
              onClick={extendMinimizeChat}
              className={styles.expendReduceButton}
            >
              <Image
                id="expendMinimizeChat"
                src={srcImage}
                width={whButton.width}
                height={whButton.height}
                alt="Expend Icon"
              />
            </button>
            <h1 id="titleChat">Chat</h1>
          </div>
          <button
            className={styles.x}
            onClick={() => {
              openCloseChat()
              setIsButtonsCallDecision(true)
            }}
          >
            <Image
              src="/x.png"
              width={whXButton.width}
              height={whXButton.height}
              alt="X Icon"
            />
          </button>
        </div>
        {isButtonsCallDecision ? (
          <div
            className={
              srcImage != '/expend-zoom.png'
                ? 'flex flex-row gap-4'
                : 'grid  gap-4'
            }
            style={{
              marginBottom: 12,
            }}
          >
            <Button
              onClick={() => {
                openCloseChat()
                setIsVideoCall(true)
              }}
            >
              Conversar por video chamada
            </Button>
            <Button
              onClick={() => {
                setIsVideoCall(false)
                setIsButtonsCallDecision(false)
              }}
            >
              Conversar aqui pelo chat mesmo
            </Button>
          </div>
        ) : (
          <form>
            <input type="text" placeholder="Informe sua situação" />
            <input type="button" value="enviar" />
          </form>
        )}
      </section>

      <button
        className={styles.alertButton}
        onClick={openCloseChat}
        id="alertButton"
      >
        <Image src="/danger.png" width={40} height={40} alt="danger icon" />
      </button>
    </div>
  )
}
