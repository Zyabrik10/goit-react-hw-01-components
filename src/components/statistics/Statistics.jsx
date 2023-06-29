export const Statistics = ({ title = '', stats }) => {
  function getRandomHSL() {
    return `hsl(${Math.floor(Math.random() * 360)}, 80%, 50%)`;
  }

  return (
    <section className="statistics">
      {title && <h2 className="title global-title">{title}</h2>}

      <ul className="stat-list global-list">
        {stats.map(({ id, label, percentage }) => {
          const bg = getRandomHSL();

          return (
            <li key={id} className="item" style={{ background: bg }}>
              <span className="label">{label}</span>
              <span className="percentage">{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
