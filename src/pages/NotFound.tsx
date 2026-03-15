import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "Erro 404: Usuário tentou acessar uma rota inexistente:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div style={{
      position: "relative",
      display: "flex",
      minHeight: "100vh",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      backgroundColor: "#0a0a0f",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&display=swap');
        @keyframes gridMove {
          0%   { transform: translateY(0); }
          100% { transform: translateY(60px); }
        }
        @keyframes pulse404 {
          0%, 100% { opacity: 0.5; transform: translate(-50%, -50%) scale(1); }
          50%       { opacity: 1;   transform: translate(-50%, -50%) scale(1.15); }
        }
        @keyframes fadeUp404 {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes reveal404 {
          to { opacity: 1; }
        }
        @keyframes expand404 {
          to { transform: scaleX(1); }
        }
        .btn-404 {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 2.5rem;
          padding: 0.75rem 2rem;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          color: white;
          text-decoration: none;
          border-radius: 999px;
          font-size: 0.875rem;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          animation: fadeUp404 0.6s 0.9s ease forwards;
          opacity: 0;
        }
        .btn-404:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(99, 102, 241, 0.4);
        }
        .btn-404:hover .arrow-404 {
          transform: translateX(4px);
        }
        .arrow-404 {
          display: inline-block;
          transition: transform 0.2s ease;
        }
      `}</style>

      {/* Grid animado */}
      <div style={{
        pointerEvents: "none",
        position: "fixed",
        inset: 0,
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
        animation: "gridMove 20s linear infinite",
      }} />

      {/* Glow */}
      <div style={{
        pointerEvents: "none",
        position: "fixed",
        left: "50%",
        top: "50%",
        width: "600px",
        height: "600px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)",
        animation: "pulse404 4s ease-in-out infinite",
      }} />

      {/* Conteúdo */}
      <div style={{
        position: "relative",
        textAlign: "center",
        padding: "3rem",
        animation: "fadeUp404 0.8s cubic-bezier(0.16,1,0.3,1) forwards",
        opacity: 0,
      }}>
        {/* 404 */}
        <h1 style={{
          position: "relative",
          fontFamily: "'Syne', sans-serif",
          fontSize: "clamp(8rem, 20vw, 14rem)",
          fontWeight: 800,
          lineHeight: 1,
          letterSpacing: "-0.04em",
          WebkitTextStroke: "2px rgba(255,255,255,0.08)",
          color: "transparent",
          userSelect: "none",
          margin: 0,
        }}>
          <span style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(135deg, #6366f1, #8b5cf6, #a78bfa)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            animation: "reveal404 1s 0.3s cubic-bezier(0.16,1,0.3,1) forwards",
            opacity: 0,
          }}>
            404
          </span>
          404
        </h1>

        {/* Divisor */}
        <div style={{
          width: "56px",
          height: "2px",
          background: "linear-gradient(90deg, #6366f1, #8b5cf6)",
          margin: "1.5rem auto",
          borderRadius: "2px",
          animation: "expand404 0.6s 0.6s ease forwards",
          transform: "scaleX(0)",
        }} />

        {/* Título */}
        <p style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "1.1rem",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          color: "#e2e8f0",
          animation: "fadeUp404 0.6s 0.5s ease forwards",
          opacity: 0,
          margin: 0,
        }}>
          Página não encontrada
        </p>

        {/* Subtítulo */}
        <p style={{
          marginTop: "0.5rem",
          fontSize: "0.9rem",
          fontWeight: 300,
          color: "#64748b",
          animation: "fadeUp404 0.6s 0.7s ease forwards",
          opacity: 0,
        }}>
          O endereço que você buscou não existe ou foi movido.
        </p>

        {/* Botão */}
        <a href="/" className="btn-404">
          Voltar para o início
          <span className="arrow-404">&#8594;</span>
        </a>
      </div>
    </div>
  );
};

export default NotFound;