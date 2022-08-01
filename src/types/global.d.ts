declare const API_DOMAIN: string;
declare const KAKAO_APP_KEY: string;

declare module "*.svg" {
    import * as React from "react";
  
    export const ReactComponent: React.FunctionComponent<
      React.SVGProps<SVGSVGElement>
    >;
  
    const src: string;
    export default src;
  }
  