import { useWeatherDetailed } from '../../assets/stores/weather-detailed.ts';

import styles from './styles.module.css';

export function WeatherDetailed() {
  const dataDetailed = useWeatherDetailed((state) => state.dataDetailed);

  const errorDetailed = useWeatherDetailed((state) => state.error);

  return (
    <>
      {errorDetailed && <p>{errorDetailed}</p>}
      {dataDetailed.name && (
        <h1 className={styles.header}>
          Погода на сейчас в городе {dataDetailed.name}
        </h1>
      )}
      {dataDetailed.name && (
        <>
          <p>
            {new Date().getFullYear() +
              '-' +
              (new Date().getMonth() + 1).toString() +
              '-' +
              new Date().getDate()}
          </p>
          <img
            className={styles.image}
            src={`../../../public/icons/${dataDetailed.weather[0].icon}.svg`}
          />
          <p>{dataDetailed.main.temp} C</p>
        </>
      )}
    </>
  );
}
