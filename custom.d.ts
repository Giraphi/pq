declare module "*.woff" {
    const content: any;
    export default content;
}

declare module "*.webp" {
    const content: any;
    export default content;
}

declare module "*.ttf" {
    const content: any;
    export default content;
}

declare module '*.svg' {
    import React = require('react');
    export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
}
