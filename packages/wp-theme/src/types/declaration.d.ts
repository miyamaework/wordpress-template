declare module '*.png';
declare module '*.jpg';
declare module '*.scss';
declare module '*.css';
declare module '*.svg' {
  // eslint-disable-next-line
  const content: any;
  // eslint-disable-next-line
  export const ReactComponent: any;
  export default content;
}

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production';
  }
}
