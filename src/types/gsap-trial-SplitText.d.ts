declare module "gsap-trial/SplitText" {
  export class SplitText {
    constructor(
      target: string | string[] | Element | Element[],
      vars?: Record<string, unknown>
    );
    reflow(): void;
    split(): void;
    revert(): void;
    chars: Element[];
    [key: string]: any;
  }
}
