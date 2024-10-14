import { useWeatherDetailed } from '../../assets/stores/weather-detailed.ts';

import styles from './styles.module.css';
import ClipLoader from 'react-spinners/ClipLoader';
import { getDirection } from '../../shared/utils/utils.ts';

export function WeatherDetailed() {
  const dataDetailed = useWeatherDetailed((state) => state.dataDetailed);
  const dataLoaded = useWeatherDetailed((state) => state.loading);

  const errorDetailed = useWeatherDetailed((state) => state.error);

  return dataLoaded === true ? (
    <div className={styles.loader}>
      <ClipLoader
        color="#FFF"
        loading={dataLoaded}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  ) : (
    <div className={styles.card__total}>
      {errorDetailed && <p>{errorDetailed}</p>}
      {dataDetailed.name && (
        <h1 className={styles.header}>
          Погода в городе {dataDetailed.name}{' '}
          {new Date().toTimeString().split(' ')[0].slice(0, -3)}
        </h1>
      )}
      {dataDetailed.name && (
        <div className={styles.card}>
          <div className={styles.card__left}>
            <img
              className={styles.image}
              src={`../../../public/icons/${dataDetailed.weather[0].icon}.svg`}
            />
            <div className={styles.card__left_temp}>
              <div className={styles.card__left_big}>
                {dataDetailed.main.temp.toFixed(1)}&deg;
                <p className={styles.card__left_small}>C</p>
              </div>
              <div className={styles.card__left_medium}>
                <p style={{ display: 'inline', fontSize: '10px' }}>
                  Oщущается:&nbsp;
                </p>{' '}
                {dataDetailed.main.feels_like.toFixed(1)}&deg;
                <p className={styles.card__left_small}>C</p>
              </div>
            </div>
          </div>
          <div className={styles.card__right}>
            <p className={styles.card__right_data}>
              Ветер:&nbsp;{getDirection(dataDetailed.wind?.speed!)}&nbsp;
              {dataDetailed.wind?.speed.toFixed(1)}м/с
            </p>
            <p className={styles.card__right_data}>
              Порывы ветра:&nbsp;{dataDetailed.wind?.gust.toFixed(1)}м/с
            </p>
            <p className={styles.card__right_data}>
              Облачность:&nbsp;{dataDetailed.clouds?.all}%
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
