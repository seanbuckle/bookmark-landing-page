// Allow TypeScript to import SCSS modules without errors
declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}