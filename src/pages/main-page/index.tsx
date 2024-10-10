import { CityChoose, Weather5Days } from '../../ui';

import styles from './styles.module.css';
import { WeatherDetailed } from '../../ui/weather-detailed';

export function MainPage() {
  return (
    <div className={styles.main}>
      <CityChoose />
      <WeatherDetailed />
      <Weather5Days />
    </div>
  );
}
