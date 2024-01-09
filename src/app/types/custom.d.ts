declare module "*.png" {
  const value: any;
  export = value;
}

declare module "*.svg" {
  const content: any;
  export default content;
}

declare namespace JSX {
  interface IntrinsicElements {
    "sweiper-container": any;
    "swiper-slide": any;
  }
}
