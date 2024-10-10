import { TWeatherCard } from '../../shared/types/api-response.types.ts';
import styles from '../weather-card/styles.module.css';

interface IWeatherCard {
  data: TWeatherCard;
}

export const WeatherCard = ({ data }: IWeatherCard) => {
  const options: Intl.DateTimeFormat = {
    weekday: 'long',
    month: 'long',
    day: '2-digit',
  };

  return (
    <>
      <div className={styles.card}>
        <div className={styles.card__data}>
          <div className={styles.card__data_date}>
            <h2 className={styles.header}>
              {
                new Date(data.date.slice(0, 10))
                  .toLocaleDateString('ru', options)
                  .split(',')[1]
              }
            </h2>
            <h2 className={styles.header}>
              {
                new Date(data.date.slice(0, 10))
                  .toLocaleDateString('ru', options)
                  .split(',')[0]
              }
            </h2>
          </div>
          <img
            className={styles.image}
            src={`/icons/${data.weather[0].icon}.svg`}
          />
          <div className={styles.card__data_main}>
            <p>
              Температура - {data.main.temp} {String.fromCharCode(176)}C (
              {data.main.temp_min} - {data.main.temp_max}){' '}
              {String.fromCharCode(176)}C
            </p>
            <p>Давление - {data.main.pressure} мм.рт.ст.</p>
            <p>Влажность - {data.main.humidity}%</p>
          </div>
        </div>
      </div>
    </>
  );
};
