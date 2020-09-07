import React from 'react'
import c from 'classnames'
import styles from './Logo.module.css'


export const Logo = ({className, ...props}) => (
    <div className={c(styles.logo, className)} {...props}>
        <svg xmlns="http://www.w3.org/2000/svg" data-v-423bf9ae="" viewBox="0 0 523.3714076450893 163"
             className="iconAbove">
            <g data-v-423bf9ae="" id="86dc8a4b-b345-4b2a-8254-e1ab579dbe88" fill="black"
               transform="matrix(5.714285714285714,0,0,5.714285714285714,-1.2571484318801254,83.3999993801117)">
                <path
                    d="M8.41 3.70L8.41 3.70L0.45 3.70L0.43 3.70L0.22 3.70L0.22 6.09L0.28 6.09L0.45 6.09L1.04 6.09C1.22 6.09 1.32 5.99 1.36 5.82C1.37 5.74 1.40 5.54 1.43 5.24L3.49 5.24L3.49 12.43C3.32 12.46 3.18 12.49 3.08 12.50C2.98 12.52 2.91 12.54 2.87 12.54C2.83 12.54 2.80 12.56 2.79 12.56C2.55 12.61 2.44 12.75 2.44 12.99L2.44 13.82L3.49 13.82L5.38 13.82L6.44 13.82L6.44 12.99C6.44 12.75 6.31 12.61 6.08 12.56C6.06 12.56 6.03 12.54 5.99 12.54C5.95 12.54 5.88 12.52 5.78 12.50C5.68 12.49 5.54 12.46 5.38 12.43L5.38 5.25L7.43 5.25C7.46 5.56 7.49 5.74 7.50 5.82C7.55 5.99 7.66 6.09 7.84 6.09L8.41 6.09L8.58 6.09L8.64 6.09L8.64 3.70ZM11.90 6.52C11.37 6.52 10.86 6.62 10.44 6.80C10.02 6.99 9.66 7.24 9.37 7.56C9.07 7.88 8.83 8.26 8.68 8.69C8.53 9.13 8.44 9.58 8.44 10.07C8.44 10.70 8.53 11.26 8.71 11.73C8.89 12.21 9.14 12.61 9.46 12.94C9.79 13.26 10.15 13.51 10.58 13.68C11.02 13.85 11.47 13.92 11.97 13.92C12.22 13.92 12.49 13.90 12.75 13.86C13.02 13.82 13.29 13.76 13.55 13.68C13.80 13.59 14.06 13.47 14.29 13.31C14.53 13.16 14.74 12.96 14.94 12.74L14.43 12.11C14.39 12.05 14.36 12.03 14.31 12.00C14.25 11.97 14.18 11.96 14.11 11.96C14 11.96 13.90 11.98 13.79 12.05C13.68 12.12 13.54 12.18 13.38 12.26C13.23 12.35 13.06 12.42 12.85 12.49C12.66 12.56 12.42 12.59 12.14 12.59C11.56 12.59 11.12 12.42 10.77 12.07C10.42 11.72 10.22 11.19 10.16 10.44L14.60 10.44C14.69 10.44 14.74 10.44 14.80 10.42C14.85 10.39 14.90 10.36 14.92 10.30C14.95 10.26 14.97 10.19 14.98 10.11C14.99 10.02 15.01 9.90 15.01 9.77C15.01 9.25 14.92 8.81 14.77 8.40C14.62 7.99 14.41 7.66 14.13 7.38C13.85 7.10 13.52 6.87 13.15 6.73C12.77 6.59 12.35 6.52 11.90 6.52ZM11.93 7.76C12.18 7.76 12.40 7.81 12.60 7.90C12.80 7.98 12.95 8.09 13.08 8.25C13.20 8.40 13.30 8.57 13.36 8.76C13.41 8.96 13.45 9.17 13.45 9.39L10.21 9.39C10.29 8.88 10.47 8.47 10.75 8.19C11.03 7.91 11.42 7.76 11.93 7.76ZM20.51 10.79C20.41 10.58 20.29 10.42 20.12 10.28C19.95 10.12 19.77 10.01 19.56 9.91C19.35 9.81 19.12 9.72 18.90 9.65C18.68 9.58 18.47 9.51 18.26 9.45C18.05 9.39 17.86 9.31 17.70 9.23C17.53 9.14 17.40 9.07 17.30 8.96C17.21 8.85 17.15 8.72 17.15 8.57C17.15 8.33 17.25 8.13 17.44 7.99C17.64 7.85 17.91 7.78 18.24 7.78C18.56 7.78 18.90 7.83 19.08 7.88C19.14 8.43 19.17 8.60 19.18 8.67C19.22 8.83 19.32 8.93 19.50 8.93L20.08 8.93L20.24 8.93L20.30 8.93L20.30 6.90L20.31 6.90C19.31 6.59 18.91 6.52 18.21 6.52C17.77 6.52 17.39 6.59 17.05 6.71C16.72 6.82 16.42 6.99 16.20 7.18C15.97 7.38 15.79 7.62 15.68 7.88C15.57 8.15 15.51 8.43 15.51 8.72C15.51 9.04 15.57 9.31 15.67 9.53C15.76 9.76 15.89 9.94 16.06 10.09C16.23 10.25 16.42 10.37 16.63 10.47C16.84 10.57 17.05 10.67 17.28 10.74C17.50 10.81 17.72 10.88 17.93 10.95C18.14 11.00 18.33 11.07 18.49 11.16C18.66 11.24 18.80 11.33 18.90 11.44C19.00 11.55 19.04 11.68 19.04 11.84C19.04 11.96 19.03 12.07 18.98 12.18C18.94 12.29 18.87 12.36 18.77 12.45C18.68 12.53 18.56 12.59 18.41 12.64C18.27 12.68 18.09 12.71 17.88 12.71C17.57 12.71 17.12 12.71 16.74 12.60C16.69 12.04 16.66 11.84 16.65 11.77C16.60 11.61 16.51 11.51 16.32 11.51L15.75 11.51L15.58 11.51L15.51 11.51L15.51 12.84L15.51 13.54L15.51 13.54C16.03 13.73 16.90 13.93 17.79 13.93C18.26 13.93 18.68 13.87 19.03 13.75C19.39 13.64 19.68 13.47 19.92 13.26C20.16 13.05 20.34 12.80 20.47 12.50C20.59 12.21 20.66 11.89 20.66 11.54C20.66 11.24 20.61 11.00 20.51 10.79ZM24.04 13.93C24.39 13.93 24.72 13.87 25.05 13.76C25.37 13.65 25.66 13.50 25.91 13.29L25.40 12.45C25.35 12.39 25.33 12.36 25.30 12.33C25.27 12.31 25.21 12.31 25.16 12.31C25.12 12.31 25.09 12.31 25.05 12.33C25.00 12.36 24.95 12.39 24.89 12.42C24.84 12.45 24.78 12.47 24.71 12.50C24.64 12.53 24.56 12.53 24.44 12.53C24.26 12.53 24.11 12.47 24.00 12.35C23.88 12.22 23.83 12.05 23.83 11.83L23.83 7.94L25.72 7.94L25.72 6.71L23.83 6.71L23.83 4.44L22.93 4.44C22.83 4.44 22.74 4.47 22.67 4.52C22.60 4.58 22.55 4.63 22.54 4.73L22.18 6.69L21.01 6.87L21.01 7.57C21.01 7.70 21.06 7.78 21.13 7.84C21.20 7.90 21.27 7.94 21.36 7.94L22.09 7.94L22.09 11.94C22.09 12.56 22.26 13.05 22.60 13.40C22.93 13.75 23.42 13.93 24.04 13.93ZM30.00 6.52C29.47 6.52 28.97 6.62 28.55 6.80C28.13 6.99 27.76 7.24 27.47 7.56C27.17 7.88 26.94 8.26 26.78 8.69C26.63 9.13 26.54 9.58 26.54 10.07C26.54 10.70 26.63 11.26 26.81 11.73C26.99 12.21 27.24 12.61 27.57 12.94C27.89 13.26 28.25 13.51 28.69 13.68C29.12 13.85 29.57 13.92 30.07 13.92C30.32 13.92 30.59 13.90 30.86 13.86C31.12 13.82 31.39 13.76 31.65 13.68C31.91 13.59 32.16 13.47 32.40 13.31C32.63 13.16 32.84 12.96 33.04 12.74L32.54 12.11C32.49 12.05 32.47 12.03 32.41 12.00C32.35 11.97 32.28 11.96 32.21 11.96C32.10 11.96 32.00 11.98 31.89 12.05C31.78 12.12 31.64 12.18 31.49 12.26C31.33 12.35 31.16 12.42 30.95 12.49C30.76 12.56 30.52 12.59 30.24 12.59C29.67 12.59 29.22 12.42 28.87 12.07C28.52 11.72 28.32 11.19 28.27 10.44L32.70 10.44C32.79 10.44 32.84 10.44 32.90 10.42C32.96 10.39 33.00 10.36 33.03 10.30C33.05 10.26 33.07 10.19 33.08 10.11C33.10 10.02 33.11 9.90 33.11 9.77C33.11 9.25 33.03 8.81 32.87 8.40C32.72 7.99 32.51 7.66 32.23 7.38C31.95 7.10 31.63 6.87 31.25 6.73C30.87 6.59 30.45 6.52 30.00 6.52ZM30.03 7.76C30.28 7.76 30.51 7.81 30.70 7.90C30.90 7.98 31.05 8.09 31.18 8.25C31.30 8.40 31.40 8.57 31.46 8.76C31.51 8.96 31.56 9.17 31.56 9.39L28.31 9.39C28.39 8.88 28.57 8.47 28.85 8.19C29.13 7.91 29.53 7.76 30.03 7.76ZM38.35 6.51C37.91 6.51 37.53 6.64 37.18 6.89C36.83 7.14 36.54 7.49 36.29 7.94L36.18 7.07C36.15 6.92 36.11 6.80 36.04 6.73C35.97 6.66 35.85 6.64 35.67 6.64L34.65 6.64L34.65 6.64L33.60 6.64L33.60 7.46C33.60 7.70 33.71 7.84 33.95 7.90C34.06 7.91 34.05 7.91 34.65 8.02L34.65 12.43C34.05 12.54 34.06 12.54 33.95 12.56C33.71 12.61 33.60 12.75 33.60 12.99L33.60 13.82L34.65 13.82L36.39 13.82L36.39 13.82L37.44 13.82L37.44 12.99C37.44 12.75 37.32 12.61 37.09 12.56C36.97 12.54 36.99 12.54 36.39 12.43L36.39 9.35C36.57 8.97 36.78 8.67 37.03 8.47C37.28 8.27 37.59 8.18 37.95 8.18C38.15 8.18 38.32 8.20 38.44 8.23C38.57 8.26 38.65 8.27 38.72 8.27C38.81 8.27 38.88 8.25 38.92 8.22C38.96 8.19 38.99 8.13 39.00 8.05L39.23 6.75C38.99 6.58 38.70 6.51 38.35 6.51ZM46.28 11.40C46.10 11.40 46.00 11.49 45.96 11.66C45.95 11.72 45.93 11.91 45.91 12.26L42.64 12.26L42.64 5.08C42.81 5.05 42.97 5.03 43.06 5.01C43.16 5.00 43.23 4.98 43.27 4.97C43.32 4.96 43.34 4.96 43.36 4.96C43.60 4.90 43.71 4.76 43.71 4.52L43.71 3.70L42.64 3.70L40.77 3.70L39.70 3.70L39.70 4.52C39.70 4.76 39.82 4.90 40.05 4.96C40.07 4.96 40.10 4.96 40.14 4.97C40.18 4.97 40.25 5.00 40.35 5.01C40.45 5.03 40.60 5.05 40.77 5.08L40.77 12.43C40.60 12.46 40.45 12.49 40.35 12.50C40.25 12.52 40.18 12.53 40.14 12.54C40.10 12.56 40.07 12.56 40.05 12.56C39.82 12.61 39.70 12.75 39.70 12.99L39.70 13.82L40.77 13.82L46.66 13.82L46.70 13.82L47.04 13.82L47.04 13.08L47.04 12.81L47.04 11.40ZM51.09 12.56C51.07 12.56 51.04 12.54 51.00 12.54C50.96 12.54 50.89 12.52 50.79 12.50C50.69 12.49 50.54 12.46 50.37 12.43L50.37 6.64L48.65 6.64L47.59 6.64L47.59 7.46C47.59 7.70 47.70 7.84 47.94 7.90C47.95 7.90 47.98 7.91 48.02 7.91C48.06 7.91 48.13 7.94 48.23 7.95C48.33 7.97 48.48 7.99 48.65 8.02L48.65 12.43C48.48 12.46 48.33 12.49 48.23 12.50C48.13 12.52 48.06 12.53 48.02 12.54C47.98 12.54 47.95 12.56 47.94 12.56C47.70 12.61 47.59 12.75 47.59 12.99L47.59 13.82L48.65 13.82L50.37 13.82L51.44 13.82L51.44 12.99C51.44 12.75 51.32 12.61 51.09 12.56ZM50.64 4.54C50.64 4.38 50.60 4.24 50.54 4.10C50.48 3.96 50.40 3.85 50.30 3.75C50.20 3.65 50.09 3.58 49.95 3.53C49.81 3.47 49.67 3.43 49.52 3.43C49.36 3.43 49.22 3.47 49.08 3.53C48.94 3.58 48.85 3.65 48.75 3.75C48.65 3.85 48.57 3.96 48.51 4.10C48.45 4.24 48.43 4.38 48.43 4.54C48.43 4.69 48.45 4.83 48.51 4.96C48.57 5.08 48.65 5.21 48.75 5.31C48.85 5.40 48.94 5.49 49.08 5.54C49.22 5.60 49.36 5.63 49.52 5.63C49.67 5.63 49.81 5.60 49.95 5.54C50.09 5.49 50.20 5.40 50.30 5.31C50.40 5.21 50.48 5.08 50.54 4.96C50.60 4.83 50.64 4.69 50.64 4.54ZM56.97 10.79C56.87 10.58 56.74 10.42 56.57 10.28C56.41 10.12 56.22 10.01 56.01 9.91C55.80 9.81 55.58 9.72 55.36 9.65C55.13 9.58 54.92 9.51 54.71 9.45C54.50 9.39 54.32 9.31 54.15 9.23C53.98 9.14 53.86 9.07 53.76 8.96C53.66 8.85 53.61 8.72 53.61 8.57C53.61 8.33 53.70 8.13 53.90 7.99C54.10 7.85 54.36 7.78 54.70 7.78C55.02 7.78 55.36 7.83 55.54 7.88C55.59 8.43 55.62 8.60 55.64 8.67C55.68 8.83 55.78 8.93 55.96 8.93L56.53 8.93L56.70 8.93L56.76 8.93L56.76 6.90L56.77 6.90C55.76 6.59 55.37 6.52 54.67 6.52C54.22 6.52 53.84 6.59 53.51 6.71C53.17 6.82 52.88 6.99 52.65 7.18C52.43 7.38 52.25 7.62 52.14 7.88C52.02 8.15 51.97 8.43 51.97 8.72C51.97 9.04 52.02 9.31 52.12 9.53C52.22 9.76 52.35 9.94 52.51 10.09C52.68 10.25 52.88 10.37 53.09 10.47C53.30 10.57 53.51 10.67 53.73 10.74C53.96 10.81 54.18 10.88 54.39 10.95C54.60 11.00 54.78 11.07 54.95 11.16C55.12 11.24 55.26 11.33 55.36 11.44C55.45 11.55 55.50 11.68 55.50 11.84C55.50 11.96 55.48 12.07 55.44 12.18C55.40 12.29 55.33 12.36 55.23 12.45C55.13 12.53 55.02 12.59 54.87 12.64C54.73 12.68 54.54 12.71 54.33 12.71C54.03 12.71 53.58 12.71 53.20 12.60C53.14 12.04 53.12 11.84 53.10 11.77C53.06 11.61 52.96 11.51 52.78 11.51L52.21 11.51L52.04 11.51L51.97 11.51L51.97 12.84L51.97 13.54L51.97 13.54C52.49 13.73 53.35 13.93 54.25 13.93C54.71 13.93 55.13 13.87 55.48 13.75C55.85 13.64 56.14 13.47 56.38 13.26C56.62 13.05 56.80 12.80 56.92 12.50C57.05 12.21 57.12 11.89 57.12 11.54C57.12 11.24 57.06 11.00 56.97 10.79ZM60.49 13.93C60.84 13.93 61.18 13.87 61.50 13.76C61.82 13.65 62.12 13.50 62.37 13.29L61.85 12.45C61.81 12.39 61.78 12.36 61.75 12.33C61.73 12.31 61.67 12.31 61.61 12.31C61.57 12.31 61.54 12.31 61.50 12.33C61.46 12.36 61.40 12.39 61.35 12.42C61.29 12.45 61.24 12.47 61.17 12.50C61.10 12.53 61.01 12.53 60.90 12.53C60.72 12.53 60.56 12.47 60.45 12.35C60.34 12.22 60.28 12.05 60.28 11.83L60.28 7.94L62.17 7.94L62.17 6.71L60.28 6.71L60.28 4.44L59.39 4.44C59.29 4.44 59.19 4.47 59.12 4.52C59.05 4.58 59.01 4.63 59.00 4.73L58.63 6.69L57.47 6.87L57.47 7.57C57.47 7.70 57.51 7.78 57.58 7.84C57.65 7.90 57.72 7.94 57.82 7.94L58.55 7.94L58.55 11.94C58.55 12.56 58.72 13.05 59.05 13.40C59.39 13.75 59.88 13.93 60.49 13.93ZM62.90 12.87C62.90 13.02 62.93 13.16 62.99 13.29C63.04 13.41 63.11 13.51 63.21 13.61C63.31 13.71 63.43 13.78 63.56 13.83C63.69 13.89 63.83 13.92 63.98 13.92C64.12 13.92 64.26 13.89 64.39 13.83C64.51 13.78 64.62 13.71 64.72 13.61C64.82 13.51 64.89 13.41 64.95 13.29C65.00 13.16 65.03 13.02 65.03 12.87C65.03 12.73 65.00 12.57 64.95 12.45C64.89 12.32 64.82 12.21 64.72 12.11C64.62 12.01 64.51 11.94 64.39 11.89C64.26 11.83 64.11 11.80 63.97 11.80C63.81 11.80 63.67 11.83 63.55 11.89C63.42 11.94 63.31 12.01 63.21 12.11C63.11 12.21 63.04 12.32 62.99 12.45C62.93 12.57 62.90 12.73 62.90 12.87ZM71.15 12.11C71.08 12.00 70.97 11.96 70.83 11.96C70.71 11.96 70.63 11.98 70.55 12.05C70.46 12.12 70.35 12.19 70.24 12.28C70.13 12.36 69.97 12.43 69.80 12.50C69.64 12.57 69.41 12.60 69.13 12.60C68.85 12.60 68.61 12.54 68.39 12.45C68.17 12.33 67.98 12.18 67.83 11.98C67.68 11.77 67.56 11.52 67.48 11.23C67.40 10.93 67.35 10.58 67.35 10.21C67.35 9.84 67.40 9.52 67.47 9.23C67.54 8.93 67.66 8.68 67.82 8.47C67.97 8.26 68.15 8.12 68.38 8.01C68.60 7.90 68.87 7.84 69.17 7.84C69.41 7.84 69.73 7.88 70.10 7.98C70.15 8.54 70.20 8.88 70.21 8.99C70.25 9.16 70.35 9.25 70.53 9.25L71.11 9.25L71.27 9.25L71.33 9.25L71.34 7.04C70.42 6.69 69.66 6.52 69.08 6.52C68.52 6.52 68.01 6.62 67.58 6.80C67.14 6.99 66.78 7.24 66.49 7.57C66.19 7.91 65.97 8.30 65.81 8.75C65.66 9.20 65.59 9.67 65.59 10.21C65.59 10.79 65.67 11.33 65.84 11.79C66.01 12.25 66.25 12.63 66.54 12.95C66.84 13.27 67.17 13.51 67.56 13.68C67.96 13.85 68.36 13.92 68.81 13.92C69.06 13.92 69.33 13.90 69.58 13.86C69.83 13.82 70.08 13.76 70.32 13.68C70.56 13.58 70.80 13.47 71.02 13.31C71.25 13.16 71.44 12.96 71.64 12.74ZM75.59 6.52C75.05 6.52 74.55 6.62 74.12 6.79C73.68 6.96 73.30 7.20 73.00 7.52C72.69 7.84 72.44 8.22 72.27 8.68C72.10 9.14 72.02 9.65 72.02 10.21C72.02 10.78 72.10 11.28 72.27 11.75C72.44 12.21 72.69 12.60 73.00 12.92C73.30 13.24 73.68 13.50 74.12 13.66C74.55 13.83 75.05 13.92 75.59 13.92C76.12 13.92 76.61 13.83 77.04 13.66C77.48 13.50 77.85 13.24 78.16 12.92C78.47 12.60 78.69 12.21 78.86 11.75C79.03 11.28 79.11 10.78 79.11 10.21C79.11 9.65 79.03 9.14 78.86 8.68C78.69 8.22 78.47 7.84 78.16 7.52C77.85 7.20 77.48 6.96 77.04 6.79C76.61 6.62 76.12 6.52 75.59 6.52ZM75.59 12.59C74.98 12.59 74.54 12.39 74.24 11.98C73.95 11.58 73.79 11.00 73.79 10.23C73.79 9.46 73.95 8.86 74.24 8.46C74.54 8.05 74.98 7.84 75.59 7.84C76.19 7.84 76.62 8.05 76.90 8.46C77.18 8.86 77.34 9.45 77.34 10.22C77.34 10.99 77.18 11.58 76.90 11.98C76.62 12.39 76.19 12.59 75.59 12.59ZM91.46 12.56C91.45 12.56 91.42 12.54 91.38 12.54C91.34 12.54 91.27 12.52 91.17 12.50C91.07 12.49 90.93 12.46 90.76 12.43L90.76 9.25C90.76 8.82 90.71 8.43 90.59 8.09C90.48 7.76 90.33 7.48 90.12 7.24C89.91 7.00 89.64 6.83 89.33 6.71C89.03 6.58 88.68 6.52 88.28 6.52C88.06 6.52 87.82 6.55 87.60 6.61C87.37 6.66 87.15 6.73 86.95 6.85C86.76 6.96 86.58 7.08 86.41 7.25C86.24 7.42 86.10 7.63 85.99 7.87C85.85 7.46 85.62 7.14 85.33 6.89C85.04 6.64 84.66 6.52 84.21 6.52C84.00 6.52 83.80 6.54 83.62 6.59C83.44 6.65 83.27 6.72 83.12 6.80C82.96 6.89 82.81 6.99 82.67 7.10C82.53 7.21 82.40 7.35 82.28 7.49L82.17 6.96C82.10 6.75 81.96 6.64 81.73 6.64L80.67 6.64L79.60 6.64L79.60 7.46C79.60 7.70 79.73 7.84 79.97 7.90C79.98 7.90 80.01 7.91 80.05 7.91C80.09 7.91 80.16 7.94 80.26 7.95C80.36 7.97 80.50 7.99 80.67 8.02L80.67 12.43C80.50 12.46 80.36 12.49 80.26 12.50C80.16 12.52 80.09 12.54 80.05 12.54C80.01 12.54 79.98 12.56 79.97 12.56C79.73 12.61 79.62 12.75 79.62 12.99L79.62 13.82L80.67 13.82L82.40 13.82L83.45 13.82L83.45 12.99C83.45 12.75 83.34 12.61 83.10 12.56C83.09 12.56 83.06 12.56 83.02 12.54C82.98 12.53 82.91 12.52 82.81 12.50C82.71 12.49 82.57 12.46 82.40 12.43L82.40 8.57C82.59 8.36 82.78 8.18 83.01 8.05C83.23 7.92 83.45 7.87 83.71 7.87C84.08 7.87 84.36 7.98 84.56 8.20C84.76 8.43 84.85 8.78 84.85 9.25L84.85 13.82L86.59 13.82L87.64 13.82L87.64 12.99C87.64 12.75 87.53 12.61 87.29 12.56C87.28 12.56 87.25 12.56 87.21 12.54C87.16 12.53 87.09 12.52 87.00 12.50C86.90 12.49 86.77 12.46 86.59 12.43L86.59 9.25C86.59 9.03 86.62 8.82 86.69 8.65C86.76 8.48 86.84 8.33 86.95 8.22C87.07 8.11 87.19 8.02 87.35 7.97C87.50 7.91 87.67 7.87 87.85 7.87C88.24 7.87 88.54 7.98 88.73 8.22C88.93 8.44 89.03 8.79 89.03 9.25L89.03 13.82L90.76 13.82L91.81 13.82L91.81 12.99C91.81 12.75 91.70 12.61 91.46 12.56Z"/>
            </g>
            <g data-v-423bf9ae="" id="501fb737-e812-4813-ae11-05d544a20fa3"
               transform="matrix(1.045296278396902,0,0,1.045296278396902,215.56167348925925,-2.1268295773514367)"
               stroke="none" fill="black">
                <path
                    d="M56.9 28.7V24l9.5-4 .7-.2V7.9l-.1-.2L55.2 3 45 2.8h-.2L34.6 3 22.7 7.7l-.3.2v11.9l.7.2 10.3 4.3v4.3l-12.8 4v43.6l12.2 12.7h24.4l12.2-12.7V32.6l-12.5-3.9zm-34.3 6.9c1.4 1.3 3.9 2.9 7.5 3.3l-7.5 16V35.6zm12-13l-3.2-1.3H58l-3.1 1.3H34.6zM56.2 6.7l2.6 2.1h-28l2.3-2.1h23.1zm-26.7 4H60.3v8.6H29.5v-8.6zm35.7 7.5l-3.9.9v-8.5l3.9-.5v8.1zm-36.7 1l-4.1-1v-8.1l4.1.6v8.5zm30.6 18.9L51 30.5h4.8L67.3 34c-.9 1.1-3.5 3.6-8.2 4.1zM35.4 24.6h19.5v3.8H35.4v-3.8zm14.2 5.9l8 7.5H32.1l8-7.5h9.5zm-27 44.9V61.3L30.4 77l-7.7-1.5-.1-.1zm8.3 2.7l1.4 7.3-8.3-8.7 6.9 1.4zm.7-1l-9-18v-1.8L31.2 39h27.5l.1.1 8.7 18.5v1.8l-8.8 17.8H31.6zm27.6 1.2l6.9-1.5-8.2 8.6 1.3-7.1zm8.2-2.9l-.1.1-7.6 1.7 7.7-15.5v13.7zM59.8 39c3.8-.5 6.3-2.3 7.6-3.6v19.8L59.8 39zm.8-30.2h-.3l-2.6-2.1H59l4.3 1.7-2.7.4zM35 5l9.9-.2 9.9.2 1.8.7H33.3L35 5zm-4.3 1.7h.9l-2.3 2.1h-.4l-2.6-.3 4.4-1.8zm3.4 23.8h4.5l-8 7.5c-4.3-.4-6.9-2.5-8.1-3.7V34l11.6-3.5zm-.5 56.4l-.1-.1-1.6-8.6h26.3l-1.6 8.5-.2.2H33.6z"/>
                <path d="M61.3 44.7H28.6v15.2h32.7V44.7zm-1 14.2H29.6V45.7h30.7v13.2z"/>
            </g>
        </svg>
    </div>
)