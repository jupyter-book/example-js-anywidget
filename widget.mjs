import confetti from 'canvas-confetti';

export default {
  render({ model, el }) {
    const btn = document.createElement("button");
    btn.textContent = "🎉 Confetti!";
    Object.assign(btn.style, {
      padding: "10px 20px",
      fontSize: "16px",
      fontFamily: "system-ui, sans-serif",
      cursor: "pointer",
      border: "2px solid #6366f1",
      borderRadius: "8px",
      backgroundColor: "#eef2ff",
      color: "#4338ca",
    });
    btn.addEventListener("click", () => {
      confetti({ origin: { y: 0.7 } });
    });
    el.appendChild(btn);

    return () => {
      btn.remove();
    };
  },
};

