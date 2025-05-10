"use client";

import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import { useParams } from "next/navigation";

export default function VideoRoom() {
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const peerRef = useRef(null);
  const socketRef = useRef(null);
  const [joined, setJoined] = useState(false);
  const { roomId } = useParams();

  useEffect(() => {
    if (!roomId) return;

    const peer = new RTCPeerConnection({
      iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
    });

    peerRef.current = peer;

    socketRef.current = io("https://back-end-hack-cidadao.onrender.com");

    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        localVideoRef.current.srcObject = stream;
        stream.getTracks().forEach((track) => peer.addTrack(track, stream));
      });

    peer.ontrack = (event) => {
      remoteVideoRef.current.srcObject = event.streams[0];
    };

    peer.onicecandidate = (event) => {
      if (event.candidate) {
        socketRef.current.emit("ice-candidate", {
          room: roomId,
          candidate: event.candidate,
        });
      }
    };

    socketRef.current.emit("join", roomId);

    socketRef.current.on("room-joined", async ({ initiator }) => {
      if (initiator) {
        console.log("Sou o iniciador da chamada");
      } else {
        console.log("Entrei na sala, aguardando offer...");
      }
    });

    socketRef.current.on("user-joined", async () => {
      // apenas o iniciador vai criar a offer
      const offer = await peer.createOffer();

      await peer.setLocalDescription(offer);
      socketRef.current.emit("offer", { room: roomId, offer });
    });

    socketRef.current.on("offer", async ({ offer }) => {
      await peer.setRemoteDescription(new RTCSessionDescription(offer));
      const answer = await peer.createAnswer();

      await peer.setLocalDescription(answer);
      socketRef.current.emit("answer", { room: roomId, answer });
    });

    socketRef.current.on("answer", async ({ answer }) => {
      await peer.setRemoteDescription(new RTCSessionDescription(answer));
    });

    socketRef.current.on("ice-candidate", ({ candidate }) => {
      peer.addIceCandidate(new RTCIceCandidate(candidate));
    });

    setJoined(true);

    return () => {
      socketRef.current.disconnect();
      peerRef.current.close();
    };
  }, [roomId]);

  return (
    <div style={{ display: "flex", gap: 20, padding: 20 }}>
      <div>
        <h3>Você</h3>
        <video
          ref={localVideoRef}
          autoPlay
          muted
          playsInline
          style={{ width: 300 }}
        />
      </div>
      <div>
        <h3>Outro usuário</h3>
        <video
          ref={remoteVideoRef}
          autoPlay
          playsInline
          style={{ width: 300 }}
        />
      </div>
      {!joined && <p>Conectando à sala...</p>}
    </div>
  );
}
