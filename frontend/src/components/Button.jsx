const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-5 py-2 rounded-lg text-white transition"
      style={{ background: "var(--color-primary)" }}
      onMouseOver={(e) =>
        (e.target.style.background = "var(--color-primary-hover)")
      }
      onMouseOut={(e) =>
        (e.target.style.background = "var(--color-primary)")
      }
    >
      {children}
    </button>
  );
};

export default Button;
