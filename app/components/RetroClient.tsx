"use client";

import { useEffect } from "react";

type AudioWindow = Window & { webkitAudioContext?: typeof AudioContext };

export function RetroClient() {
  useEffect(() => {
    let soundOn = false;
    let popupTimer = 0;
    const $ = <T extends Element>(selector: string) => document.querySelector<T>(selector);
    const $$ = <T extends Element>(selector: string) => [...document.querySelectorAll<T>(selector)];

    const beep = (frequency = 520, duration = 0.07) => {
      if (!soundOn) return;
      const AudioCtor = window.AudioContext || (window as AudioWindow).webkitAudioContext;
      if (!AudioCtor) return;
      const audio = new AudioCtor();
      const oscillator = audio.createOscillator();
      const gain = audio.createGain();
      oscillator.type = "square";
      oscillator.frequency.value = frequency;
      gain.gain.setValueAtTime(0.035, audio.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audio.currentTime + duration);
      oscillator.connect(gain).connect(audio.destination);
      oscillator.start();
      oscillator.stop(audio.currentTime + duration);
      oscillator.addEventListener("ended", () => void audio.close());
    };

    const updateClock = () => {
      const value = new Intl.DateTimeFormat("pt-BR", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false }).format(new Date());
      const clock = $("[data-clock]");
      if (clock) clock.textContent = value;
    };

    const visitorText = String(839142 + Math.floor(Date.now() / 3600000) % 800).padStart(8, "0");
    $$<HTMLElement>("[data-visitor], [data-visitor-inline]").forEach((el) => { el.textContent = visitorText; });
    updateClock();
    const clockInterval = window.setInterval(updateClock, 1000);
    const onlineInterval = window.setInterval(() => {
      const online = $<HTMLElement>("[data-online-count]");
      if (online) online.textContent = String(24 + Math.floor(Math.random() * 13));
    }, 4200);

    const soundButton = $<HTMLButtonElement>("[data-sound-toggle]");
    const toggleSound = () => {
      soundOn = !soundOn;
      if (soundButton) {
        soundButton.textContent = `SOM: ${soundOn ? "ON ♫" : "OFF"}`;
        soundButton.classList.toggle("is-on", soundOn);
      }
      if (soundOn) beep(660, 0.12);
    };
    soundButton?.addEventListener("click", toggleSound);

    const beepButtons = $$<HTMLElement>("[data-beep]");
    const beepClick = () => beep(740);
    beepButtons.forEach((button) => button.addEventListener("click", beepClick));

    const cartButtons = $$<HTMLButtonElement>("[data-add-cart]");
    const addToCart = (event: Event) => {
      const button = event.currentTarget as HTMLButtonElement;
      beep(880, 0.1);
      button.textContent = "✓ JOGADO NO CARRINHO!";
      button.classList.add("added");
      window.setTimeout(() => { button.textContent = "ADICIONAR AO CARRINHO 🛒"; button.classList.remove("added"); }, 2200);
    };
    cartButtons.forEach((button) => button.addEventListener("click", addToCart));

    const pollButtons = $$<HTMLButtonElement>("[data-poll]");
    const vote = (event: Event) => {
      const choice = (event.currentTarget as HTMLButtonElement).dataset.poll;
      const result = $<HTMLElement>("[data-poll-result]");
      if (result) result.textContent = choice === "SIM" ? "CORRETO! +1 VOTO TURBO" : "RESPOSTA REGISTRADA COM DESCONFIANÇA";
      beep(choice === "SIM" ? 920 : 180, 0.14);
    };
    pollButtons.forEach((button) => button.addEventListener("click", vote));

    const newsletter = $<HTMLFormElement>("[data-newsletter]");
    const subscribe = (event: Event) => {
      event.preventDefault();
      const status = $<HTMLElement>("[data-newsletter-status]");
      if (status) status.textContent = "CADASTRADO! PREPARE SUA CAIXA DE ENTRADA!!!";
      newsletter?.classList.add("success");
      beep(1040, 0.18);
    };
    newsletter?.addEventListener("submit", subscribe);

    const popup = document.createElement("aside");
    popup.className = "win-popup";
    popup.setAttribute("role", "dialog");
    popup.setAttribute("aria-label", "Promoção surpresa");
    popup.innerHTML = `<div class="win-title"><span>⚠ ATENÇÃO!!!</span><button type="button" aria-label="Fechar">×</button></div><div class="win-body"><span class="win-icon">💾</span><p><b>VOCÊ ENCONTROU UM PIXEL PREMIADO!</b><br>Ganhe absolutamente nada, mas com muito entusiasmo.</p></div><button class="win-ok" type="button">ACEITAR A GLÓRIA</button>`;
    document.body.appendChild(popup);
    const closePopup = () => { popup.classList.remove("visible"); beep(260); };
    popup.querySelector(".win-title button")?.addEventListener("click", closePopup);
    popup.querySelector(".win-ok")?.addEventListener("click", closePopup);
    popupTimer = window.setTimeout(() => popup.classList.add("visible"), 4300);

    let lastSparkle = 0;
    const pointerSparkle = (event: PointerEvent) => {
      if (event.pointerType === "touch" || Date.now() - lastSparkle < 65) return;
      lastSparkle = Date.now();
      const star = document.createElement("span");
      star.className = "cursor-star";
      star.textContent = Math.random() > 0.5 ? "★" : "✦";
      star.style.left = `${event.clientX}px`;
      star.style.top = `${event.clientY}px`;
      document.body.appendChild(star);
      window.setTimeout(() => star.remove(), 650);
    };
    window.addEventListener("pointermove", pointerSparkle, { passive: true });

    return () => {
      window.clearInterval(clockInterval); window.clearInterval(onlineInterval); window.clearTimeout(popupTimer);
      soundButton?.removeEventListener("click", toggleSound);
      beepButtons.forEach((button) => button.removeEventListener("click", beepClick));
      cartButtons.forEach((button) => button.removeEventListener("click", addToCart));
      pollButtons.forEach((button) => button.removeEventListener("click", vote));
      newsletter?.removeEventListener("submit", subscribe);
      window.removeEventListener("pointermove", pointerSparkle); popup.remove();
    };
  }, []);
  return null;
}
