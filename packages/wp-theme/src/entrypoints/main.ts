import '@/styles/main.scss';
import '@/scripts/modules/svgsprite';

console.log('load-main');

const dynamicPageModule = async () => {
  const script = await import(/* webpackChunkName: "top" */ '@/scripts/pages/top');
  script?.default();
};

dynamicPageModule();
