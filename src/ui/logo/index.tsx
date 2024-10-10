import classnames from 'classnames';

import styles from './styles.module.css';

export interface LogoProps {
  extClassName?: string;
}

export const Logo = ({ extClassName }: LogoProps) => (
  <div className={classnames(styles.logo, extClassName)}>
    <img src="/Header_Clouds.svg" width="45" alt="Логотип проекта" />
    <svg
      width="195.344"
      height="39.704"
      viewBox="0 0 295.344 39.704"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        id="svgGroup"
        strokeLinecap="round"
        fillRule="evenodd"
        fontSize="9pt"
        stroke="#FFF"
        strokeWidth="0.5mm"
        fill="#c72d2d"
      >
        <path
          d="M 24.288 32.4 L 17.232 0.48 L 16.224 0.48 L 9.264 32.352 L 1.008 0.48 L 0 0.48 L 8.784 34.08 L 9.792 34.08 L 16.752 2.736 L 23.76 34.08 L 24.768 34.08 L 33.408 0.48 L 32.352 0.48 L 24.288 32.4 Z M 88.32 11.376 L 88.32 0.48 L 87.36 0.48 L 87.36 34.08 L 88.32 34.08 L 88.32 12.24 A 14.82 14.82 0 0 1 89.182 11.867 Q 89.778 11.63 90.48 11.4 A 26.811 26.811 0 0 1 92.404 10.853 A 31.118 31.118 0 0 1 93.144 10.68 Q 94.56 10.368 95.952 10.32 A 18.699 18.699 0 0 1 96.743 10.298 Q 98.231 10.288 99.432 10.536 A 6.77 6.77 0 0 1 100.976 11.045 A 5.653 5.653 0 0 1 102.024 11.688 Q 103.104 12.528 103.656 13.92 Q 104.085 15.002 104.181 16.519 A 14.408 14.408 0 0 1 104.208 17.424 L 104.208 34.08 L 105.12 34.08 L 105.12 17.472 A 15.241 15.241 0 0 0 105.046 15.919 Q 104.917 14.67 104.568 13.728 A 6.823 6.823 0 0 0 104.002 12.546 A 5.019 5.019 0 0 0 103.032 11.376 Q 102.048 10.512 100.776 10.104 Q 99.504 9.696 98.112 9.6 Q 96.72 9.504 95.328 9.6 A 13.084 13.084 0 0 0 93.252 9.852 A 14.904 14.904 0 0 0 92.76 9.96 Q 91.44 10.272 90.288 10.656 Q 89.406 10.95 88.721 11.216 A 21.188 21.188 0 0 0 88.32 11.376 Z M 181.008 11.376 L 181.008 0.48 L 180.048 0.48 L 180.048 34.08 L 181.008 34.08 L 181.008 12.24 A 14.82 14.82 0 0 1 181.87 11.867 Q 182.466 11.63 183.168 11.4 A 26.811 26.811 0 0 1 185.092 10.853 A 31.118 31.118 0 0 1 185.832 10.68 Q 187.248 10.368 188.64 10.32 A 18.699 18.699 0 0 1 189.431 10.298 Q 190.919 10.288 192.12 10.536 A 6.77 6.77 0 0 1 193.664 11.045 A 5.653 5.653 0 0 1 194.712 11.688 Q 195.792 12.528 196.344 13.92 Q 196.773 15.002 196.869 16.519 A 14.408 14.408 0 0 1 196.896 17.424 L 196.896 34.08 L 197.808 34.08 L 197.808 17.472 A 15.241 15.241 0 0 0 197.734 15.919 Q 197.605 14.67 197.256 13.728 A 6.823 6.823 0 0 0 196.69 12.546 A 5.019 5.019 0 0 0 195.72 11.376 Q 194.736 10.512 193.464 10.104 Q 192.192 9.696 190.8 9.6 Q 189.408 9.504 188.016 9.6 A 13.084 13.084 0 0 0 185.94 9.852 A 14.904 14.904 0 0 0 185.448 9.96 Q 184.128 10.272 182.976 10.656 Q 182.094 10.95 181.409 11.216 A 21.188 21.188 0 0 0 181.008 11.376 Z M 259.152 34.08 L 247.92 15.888 L 254.496 9.696 L 253.872 9.12 L 242.496 19.632 L 242.496 0.48 L 241.536 0.48 L 241.536 34.08 L 242.496 34.08 L 242.496 20.784 L 247.248 16.512 L 258.048 34.08 L 259.152 34.08 Z M 174.768 2.4 L 175.152 1.584 A 11.42 11.42 0 0 0 172.061 0.396 A 12.687 12.687 0 0 0 172.008 0.384 A 15.773 15.773 0 0 0 169.54 0.038 A 18.96 18.96 0 0 0 168.336 0 Q 165.936 0 163.8 0.888 A 7.514 7.514 0 0 0 160.449 3.647 A 9.149 9.149 0 0 0 160.32 3.84 A 7.531 7.531 0 0 0 159.39 5.964 Q 158.976 7.465 158.976 9.408 L 158.976 25.248 A 14.753 14.753 0 0 0 159.125 27.408 Q 159.295 28.554 159.659 29.503 A 7.494 7.494 0 0 0 160.128 30.504 Q 161.28 32.544 163.416 33.552 Q 165.385 34.481 168.109 34.554 A 17.531 17.531 0 0 0 168.576 34.56 Q 170.448 34.56 172.392 34.152 Q 174.336 33.744 176.352 32.976 L 176.064 32.112 A 26.005 26.005 0 0 1 173.421 32.995 A 23.786 23.786 0 0 1 173.4 33 A 22.438 22.438 0 0 1 171.883 33.36 A 18.143 18.143 0 0 1 170.904 33.528 Q 169.728 33.696 168.768 33.696 A 13.625 13.625 0 0 1 166.285 33.479 A 10.727 10.727 0 0 1 164.208 32.88 Q 162.192 32.064 161.04 30.168 A 7.216 7.216 0 0 1 160.242 28.237 Q 160.01 27.348 159.93 26.297 A 15.104 15.104 0 0 1 159.888 25.152 L 159.888 9.408 Q 159.888 7.102 160.541 5.416 A 7.385 7.385 0 0 1 160.872 4.68 Q 161.856 2.784 163.776 1.848 Q 165.696 0.912 168.48 0.912 Q 170.016 0.912 171.6 1.248 Q 173.184 1.584 174.768 2.4 Z M 34.08 27.696 L 34.08 23.04 L 50.496 22.224 L 50.496 17.664 Q 50.496 15.334 49.703 13.672 A 6.568 6.568 0 0 0 49.44 13.176 Q 48.384 11.376 46.488 10.488 A 9.171 9.171 0 0 0 44.079 9.758 A 12.476 12.476 0 0 0 42.048 9.6 A 11.881 11.881 0 0 0 39.494 9.864 A 9.679 9.679 0 0 0 37.488 10.536 Q 35.472 11.472 34.32 13.296 A 7.205 7.205 0 0 0 33.377 15.676 Q 33.168 16.664 33.168 17.808 L 33.168 27.648 A 9.941 9.941 0 0 0 33.267 29.09 Q 33.38 29.862 33.623 30.509 A 5.47 5.47 0 0 0 33.816 30.96 A 5.636 5.636 0 0 0 35.136 32.738 A 5.414 5.414 0 0 0 35.616 33.12 A 7.271 7.271 0 0 0 37.554 34.086 A 8.8 8.8 0 0 0 38.304 34.296 A 13.843 13.843 0 0 0 40.821 34.639 A 16.005 16.005 0 0 0 41.568 34.656 Q 43.584 34.656 45.528 34.056 Q 47.472 33.456 49.248 32.4 L 48.864 31.584 Q 46.8 32.736 45.12 33.24 Q 43.44 33.744 41.472 33.744 Q 39.936 33.744 38.592 33.432 A 7.758 7.758 0 0 1 37.186 32.967 A 6.387 6.387 0 0 1 36.24 32.448 A 4.524 4.524 0 0 1 34.787 30.851 A 5.448 5.448 0 0 1 34.656 30.6 A 5.272 5.272 0 0 1 34.243 29.376 Q 34.121 28.805 34.09 28.145 A 9.73 9.73 0 0 1 34.08 27.696 Z M 109.68 27.696 L 109.68 23.04 L 126.096 22.224 L 126.096 17.664 Q 126.096 15.334 125.303 13.672 A 6.568 6.568 0 0 0 125.04 13.176 Q 123.984 11.376 122.088 10.488 A 9.171 9.171 0 0 0 119.679 9.758 A 12.476 12.476 0 0 0 117.648 9.6 A 11.881 11.881 0 0 0 115.094 9.864 A 9.679 9.679 0 0 0 113.088 10.536 Q 111.072 11.472 109.92 13.296 A 7.205 7.205 0 0 0 108.977 15.676 Q 108.768 16.664 108.768 17.808 L 108.768 27.648 A 9.941 9.941 0 0 0 108.867 29.09 Q 108.98 29.862 109.223 30.509 A 5.47 5.47 0 0 0 109.416 30.96 A 5.636 5.636 0 0 0 110.736 32.738 A 5.414 5.414 0 0 0 111.216 33.12 A 7.271 7.271 0 0 0 113.154 34.086 A 8.8 8.8 0 0 0 113.904 34.296 A 13.843 13.843 0 0 0 116.421 34.639 A 16.005 16.005 0 0 0 117.168 34.656 Q 119.184 34.656 121.128 34.056 Q 123.072 33.456 124.848 32.4 L 124.464 31.584 Q 122.4 32.736 120.72 33.24 Q 119.04 33.744 117.072 33.744 Q 115.536 33.744 114.192 33.432 A 7.758 7.758 0 0 1 112.786 32.967 A 6.387 6.387 0 0 1 111.84 32.448 A 4.524 4.524 0 0 1 110.387 30.851 A 5.448 5.448 0 0 1 110.256 30.6 A 5.272 5.272 0 0 1 109.843 29.376 Q 109.721 28.805 109.69 28.145 A 9.73 9.73 0 0 1 109.68 27.696 Z M 202.368 27.696 L 202.368 23.04 L 218.784 22.224 L 218.784 17.664 Q 218.784 15.334 217.991 13.672 A 6.568 6.568 0 0 0 217.728 13.176 Q 216.672 11.376 214.776 10.488 A 9.171 9.171 0 0 0 212.367 9.758 A 12.476 12.476 0 0 0 210.336 9.6 A 11.881 11.881 0 0 0 207.782 9.864 A 9.679 9.679 0 0 0 205.776 10.536 Q 203.76 11.472 202.608 13.296 A 7.205 7.205 0 0 0 201.665 15.676 Q 201.456 16.664 201.456 17.808 L 201.456 27.648 A 9.941 9.941 0 0 0 201.555 29.09 Q 201.668 29.862 201.911 30.509 A 5.47 5.47 0 0 0 202.104 30.96 A 5.636 5.636 0 0 0 203.424 32.738 A 5.414 5.414 0 0 0 203.904 33.12 A 7.271 7.271 0 0 0 205.842 34.086 A 8.8 8.8 0 0 0 206.592 34.296 A 13.843 13.843 0 0 0 209.109 34.639 A 16.005 16.005 0 0 0 209.856 34.656 Q 211.872 34.656 213.816 34.056 Q 215.76 33.456 217.536 32.4 L 217.152 31.584 Q 215.088 32.736 213.408 33.24 Q 211.728 33.744 209.76 33.744 Q 208.224 33.744 206.88 33.432 A 7.758 7.758 0 0 1 205.474 32.967 A 6.387 6.387 0 0 1 204.528 32.448 A 4.524 4.524 0 0 1 203.075 30.851 A 5.448 5.448 0 0 1 202.944 30.6 A 5.272 5.272 0 0 1 202.531 29.376 Q 202.409 28.805 202.378 28.145 A 9.73 9.73 0 0 1 202.368 27.696 Z M 262.08 27.696 L 262.08 23.04 L 278.496 22.224 L 278.496 17.664 Q 278.496 15.334 277.703 13.672 A 6.568 6.568 0 0 0 277.44 13.176 Q 276.384 11.376 274.488 10.488 A 9.171 9.171 0 0 0 272.079 9.758 A 12.476 12.476 0 0 0 270.048 9.6 A 11.881 11.881 0 0 0 267.494 9.864 A 9.679 9.679 0 0 0 265.488 10.536 Q 263.472 11.472 262.32 13.296 A 7.205 7.205 0 0 0 261.377 15.676 Q 261.168 16.664 261.168 17.808 L 261.168 27.648 A 9.941 9.941 0 0 0 261.267 29.09 Q 261.38 29.862 261.623 30.509 A 5.47 5.47 0 0 0 261.816 30.96 A 5.636 5.636 0 0 0 263.136 32.738 A 5.414 5.414 0 0 0 263.616 33.12 A 7.271 7.271 0 0 0 265.554 34.086 A 8.8 8.8 0 0 0 266.304 34.296 A 13.843 13.843 0 0 0 268.821 34.639 A 16.005 16.005 0 0 0 269.568 34.656 Q 271.584 34.656 273.528 34.056 Q 275.472 33.456 277.248 32.4 L 276.864 31.584 Q 274.8 32.736 273.12 33.24 Q 271.44 33.744 269.472 33.744 Q 267.936 33.744 266.592 33.432 A 7.758 7.758 0 0 1 265.186 32.967 A 6.387 6.387 0 0 1 264.24 32.448 A 4.524 4.524 0 0 1 262.787 30.851 A 5.448 5.448 0 0 1 262.656 30.6 A 5.272 5.272 0 0 1 262.243 29.376 Q 262.121 28.805 262.09 28.145 A 9.73 9.73 0 0 1 262.08 27.696 Z M 237.36 12.048 L 237.696 11.136 Q 236.16 10.368 234.48 9.96 Q 232.8 9.552 231.12 9.6 A 11.816 11.816 0 0 0 228.939 9.791 Q 227.408 10.078 226.224 10.8 Q 224.256 12 223.296 14.112 A 10.492 10.492 0 0 0 222.494 16.857 A 14.013 14.013 0 0 0 222.336 19.008 L 222.336 25.728 A 14.214 14.214 0 0 0 222.513 27.819 Q 222.691 28.899 223.046 29.79 A 7.153 7.153 0 0 0 223.536 30.792 Q 224.688 32.736 226.8 33.648 A 11.323 11.323 0 0 0 229.389 34.401 A 15.241 15.241 0 0 0 231.696 34.608 Q 233.232 34.656 234.816 34.44 A 23.868 23.868 0 0 0 236.903 34.064 A 20.501 20.501 0 0 0 237.792 33.84 L 237.6 32.88 Q 237.36 32.928 236.856 33.048 Q 236.352 33.168 235.632 33.312 Q 235.081 33.422 234.375 33.505 A 24.258 24.258 0 0 1 233.928 33.552 A 20.107 20.107 0 0 1 232.7 33.632 A 25.271 25.271 0 0 1 231.792 33.648 A 14.736 14.736 0 0 1 229.854 33.526 A 11.388 11.388 0 0 1 228.312 33.216 A 7.567 7.567 0 0 1 226.531 32.479 A 6.582 6.582 0 0 1 225.624 31.848 A 5.842 5.842 0 0 1 224.227 30.128 A 7.315 7.315 0 0 1 223.872 29.376 A 7.896 7.896 0 0 1 223.429 27.817 Q 223.248 26.822 223.248 25.632 L 223.248 19.008 Q 223.248 16.368 224.16 14.472 Q 225.072 12.576 226.824 11.544 A 7.191 7.191 0 0 1 229.037 10.711 Q 229.942 10.525 230.981 10.513 A 12.385 12.385 0 0 1 231.12 10.512 A 10.947 10.947 0 0 1 231.462 10.507 Q 232.832 10.507 234.24 10.848 A 13.21 13.21 0 0 1 237.072 11.899 A 14.785 14.785 0 0 1 237.36 12.048 Z M 54 21.984 L 54 25.968 Q 54 27.967 54.473 29.493 A 8.434 8.434 0 0 0 54.552 29.736 A 6.365 6.365 0 0 0 55.928 32.056 A 6.208 6.208 0 0 0 56.304 32.424 A 6.776 6.776 0 0 0 57.966 33.512 A 9.129 9.129 0 0 0 59.376 34.032 A 12.984 12.984 0 0 0 61.152 34.393 Q 62.382 34.56 63.84 34.56 Q 64.244 34.56 64.958 34.532 A 77.663 77.663 0 0 0 65.424 34.512 Q 66.48 34.464 67.704 34.392 Q 68.928 34.32 70.032 34.248 Q 71.02 34.184 71.681 34.139 A 259.648 259.648 0 0 0 71.832 34.128 A 242.828 242.828 0 0 0 71.985 34.118 Q 72.483 34.083 72.483 34.08 A 0.039 0.039 0 0 0 72.48 34.08 L 72.48 17.952 A 13.455 13.455 0 0 0 72.378 16.241 Q 72.265 15.365 72.029 14.631 A 6.572 6.572 0 0 0 71.688 13.776 A 6.633 6.633 0 0 0 70.654 12.218 A 5.659 5.659 0 0 0 69.528 11.256 A 8.456 8.456 0 0 0 67.431 10.285 A 10.487 10.487 0 0 0 66.336 10.008 Q 64.512 9.648 62.496 9.648 L 62.448 10.512 Q 64.176 10.512 65.808 10.848 A 9.946 9.946 0 0 1 67.805 11.475 A 8.615 8.615 0 0 1 68.736 11.952 Q 70.032 12.72 70.8 14.064 A 5.449 5.449 0 0 1 71.364 15.535 Q 71.517 16.19 71.555 16.952 A 10.372 10.372 0 0 1 71.568 17.472 Q 70.128 16.752 68.52 16.104 Q 66.912 15.456 65.232 15.072 Q 63.552 14.688 61.776 14.688 Q 60.031 14.688 58.761 15.042 A 6.307 6.307 0 0 0 57.816 15.384 A 7.153 7.153 0 0 0 56.565 16.112 A 5.362 5.362 0 0 0 55.464 17.184 A 6.491 6.491 0 0 0 54.404 19.225 A 6.179 6.179 0 0 0 54.312 19.56 Q 54 20.832 54 21.984 Z M 77.424 27.744 L 77.424 10.944 L 84.528 10.944 L 84.96 10.08 L 77.424 10.08 L 77.424 0.48 L 76.464 0.48 L 76.464 27.744 Q 76.464 30.528 77.664 32.208 A 5.743 5.743 0 0 0 79.282 33.71 Q 80.224 34.309 81.504 34.704 L 81.84 33.888 Q 80.256 33.312 79.272 32.568 Q 78.288 31.824 77.856 30.648 Q 77.501 29.682 77.438 28.343 A 12.686 12.686 0 0 1 77.424 27.744 Z M 142.896 10.464 L 142.944 9.696 A 8.448 8.448 0 0 0 142.25 9.521 A 9.991 9.991 0 0 0 141.912 9.456 Q 141.36 9.36 140.784 9.36 Q 138.849 9.36 136.555 10.077 A 20.469 20.469 0 0 0 136.248 10.176 Q 133.786 10.989 130.823 12.23 A 95.281 95.281 0 0 0 130.8 12.24 L 130.8 10.032 L 129.888 10.032 L 129.888 34.08 L 130.8 34.08 L 130.8 13.296 A 84.517 84.517 0 0 1 132.391 12.584 Q 133.251 12.21 134.016 11.904 Q 135.456 11.328 136.632 10.968 Q 137.808 10.608 138.792 10.44 Q 139.776 10.272 140.688 10.272 A 13.176 13.176 0 0 1 141.376 10.291 A 16.025 16.025 0 0 1 141.816 10.32 Q 142.416 10.368 142.896 10.464 Z M 295.296 10.464 L 295.344 9.696 A 8.448 8.448 0 0 0 294.65 9.521 A 9.991 9.991 0 0 0 294.312 9.456 Q 293.76 9.36 293.184 9.36 Q 291.249 9.36 288.955 10.077 A 20.469 20.469 0 0 0 288.648 10.176 Q 286.186 10.989 283.223 12.23 A 95.281 95.281 0 0 0 283.2 12.24 L 283.2 10.032 L 282.288 10.032 L 282.288 34.08 L 283.2 34.08 L 283.2 13.296 A 84.517 84.517 0 0 1 284.791 12.584 Q 285.651 12.21 286.416 11.904 Q 287.856 11.328 289.032 10.968 Q 290.208 10.608 291.192 10.44 Q 292.176 10.272 293.088 10.272 A 13.176 13.176 0 0 1 293.776 10.291 A 16.025 16.025 0 0 1 294.216 10.32 Q 294.816 10.368 295.296 10.464 Z M 71.568 18.576 L 71.568 33.216 A 0.035 0.035 0 0 1 71.571 33.216 Q 71.572 33.22 71.04 33.264 Q 70.464 33.312 69.528 33.384 Q 68.592 33.456 67.512 33.528 Q 66.432 33.6 65.448 33.648 Q 64.568 33.691 63.976 33.696 A 17.745 17.745 0 0 1 63.84 33.696 A 20.334 20.334 0 0 1 62.018 33.62 Q 61.132 33.54 60.382 33.376 A 8.854 8.854 0 0 1 59.232 33.048 Q 57.456 32.4 56.52 31.296 Q 55.584 30.192 55.224 28.872 A 9.932 9.932 0 0 1 54.864 26.337 A 9.339 9.339 0 0 1 54.864 26.256 L 54.864 22.08 A 8.344 8.344 0 0 1 55.071 20.197 A 7.459 7.459 0 0 1 55.248 19.56 Q 55.632 18.384 56.424 17.496 Q 57.216 16.608 58.536 16.104 A 7.14 7.14 0 0 1 59.87 15.747 Q 60.507 15.637 61.233 15.609 A 13.1 13.1 0 0 1 61.728 15.6 Q 63.504 15.6 65.088 15.984 Q 66.672 16.368 68.28 17.016 A 30.713 30.713 0 0 1 70.707 18.123 A 35.585 35.585 0 0 1 71.568 18.576 Z M 49.536 17.616 L 49.536 21.36 L 34.08 22.128 L 34.08 18.096 A 10.436 10.436 0 0 1 34.238 16.23 Q 34.47 14.956 35.04 13.944 Q 36 12.24 37.8 11.328 A 8.314 8.314 0 0 1 40.276 10.546 A 11.033 11.033 0 0 1 42 10.416 A 11.279 11.279 0 0 1 43.897 10.568 Q 45.002 10.756 45.923 11.18 A 7.053 7.053 0 0 1 45.984 11.208 Q 47.664 12 48.6 13.584 Q 49.415 14.964 49.52 16.999 A 11.963 11.963 0 0 1 49.536 17.616 Z M 125.136 17.616 L 125.136 21.36 L 109.68 22.128 L 109.68 18.096 A 10.436 10.436 0 0 1 109.838 16.23 Q 110.07 14.956 110.64 13.944 Q 111.6 12.24 113.4 11.328 A 8.314 8.314 0 0 1 115.876 10.546 A 11.033 11.033 0 0 1 117.6 10.416 A 11.279 11.279 0 0 1 119.497 10.568 Q 120.602 10.756 121.523 11.18 A 7.053 7.053 0 0 1 121.584 11.208 Q 123.264 12 124.2 13.584 Q 125.015 14.964 125.12 16.999 A 11.963 11.963 0 0 1 125.136 17.616 Z M 217.824 17.616 L 217.824 21.36 L 202.368 22.128 L 202.368 18.096 A 10.436 10.436 0 0 1 202.526 16.23 Q 202.758 14.956 203.328 13.944 Q 204.288 12.24 206.088 11.328 A 8.314 8.314 0 0 1 208.564 10.546 A 11.033 11.033 0 0 1 210.288 10.416 A 11.279 11.279 0 0 1 212.185 10.568 Q 213.29 10.756 214.211 11.18 A 7.053 7.053 0 0 1 214.272 11.208 Q 215.952 12 216.888 13.584 Q 217.703 14.964 217.808 16.999 A 11.963 11.963 0 0 1 217.824 17.616 Z M 277.536 17.616 L 277.536 21.36 L 262.08 22.128 L 262.08 18.096 A 10.436 10.436 0 0 1 262.238 16.23 Q 262.47 14.956 263.04 13.944 Q 264 12.24 265.8 11.328 A 8.314 8.314 0 0 1 268.276 10.546 A 11.033 11.033 0 0 1 270 10.416 A 11.279 11.279 0 0 1 271.897 10.568 Q 273.002 10.756 273.923 11.18 A 7.053 7.053 0 0 1 273.984 11.208 Q 275.664 12 276.6 13.584 Q 277.415 14.964 277.52 16.999 A 11.963 11.963 0 0 1 277.536 17.616 Z"
          vectorEffect="non-scaling-stroke"
        />
      </g>
    </svg>
  </div>
);
