import styles from './styles.module.css';
import { CSSProperties, useState } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

export function MapPage() {
  const [loading, setLoading] = useState(true);
  const override: CSSProperties = {
    display: 'block',
    margin: '0 auto',
    borderColor: 'red',
  };

  const hideSpinner = () => {
    setLoading(false);
  };

  return (
    <>
      {/*{loading === true ? (*/}
      {/*  <ClipLoader*/}
      {/*    color="#256"*/}
      {/*    loading={loading}*/}
      {/*    cssOverride={override}*/}
      {/*    size={150}*/}
      {/*    aria-label="Loading Spinner"*/}
      {/*    data-testid="loader"*/}
      {/*  />*/}
      {/*) : (*/}
      {/*  <></>*/}
      {/*)}*/}
      <>
        <h1 className="text text_size_large .text_type_bold">КАРТА</h1>
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <iframe
            className={styles.iframe}
            src="https://yandex.ru/map-widget/v1/?ll=37.552997%2C55.679651&mode=poi&poi%5Bpoint%5D=37.550528%2C55.683935&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D1091123289&z=15.53"
            width="560"
            height="400"
            loading="eager"
            onLoad={() => hideSpinner()}
            allowFullScreen={true}
            style={{ position: 'relative' }}
          ></iframe>
        </div>
      </>
    </>
  );
}
