import { getRandomHSL } from '../../js/getRandomHSL';
import PropTypes from 'prop-types';

export const Statistics = ({ title = '', stats }) => {
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

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};
