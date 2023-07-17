/// <reference types="react-scripts" />
declare namespace NodeJS {
  interface ProcessEnv {
    BASE_PATH: string
  }
}

declare module '*.css' {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames
  export = classNames
}

declare module '*.json' {
  const content: string

  export default content
}
