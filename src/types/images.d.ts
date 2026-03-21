declare module '*.webp' {
  const content: {
    src: string;
    height: number;
    width: number;
    blurDataURL?: string;
  };
  export default content;
}

declare module 'next/font/google' {
  export function Montserrat(options: {
    weight?: string[];
    subsets?: string[];
  }): {
    className: string;
    style: {
      fontFamily: string;
    };
  };
}