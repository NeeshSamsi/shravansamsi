import { MouseEventHandler } from "react";

export interface ButtonProps {
  type: ButtonTypes;
  text: string;
  icon?: JSX.Element;
  clickHandler?: MouseEventHandler<HTMLButtonElement>;
  submitting?: boolean;
}

export enum ButtonTypes {
  Primary,
  Secondary,
}

export default function Button({
  type,
  text,
  icon,
  clickHandler,
  submitting,
}: ButtonProps) {
  return (
    <button
      className={`relative flex items-center gap-2 self-center rounded py-1 px-2 font-serif font-bold tracking-wider transition-all sm:px-3 sm:py-2 md:gap-4 md:self-start
      ${type === ButtonTypes.Primary && `bg-accent text-dark hover:bg-light`}
      ${
        type === ButtonTypes.Secondary &&
        `border-2 border-accent hover:border-light`
      }
      ${
        submitting &&
        "after:absolute after:inset-0 after:m-auto after:h-8 after:w-8 after:rounded-full after:border-[0.3rem] after:border-transparent after:border-t-dark after:animate-spin"
      }
      `}
      {...(clickHandler && { onClick: clickHandler })}
    >
      <div className={`${submitting && "invisible opacity-0 transition-all"}`}>
        {text}
      </div>
      <div
        className={`w-6 md:w-8 lg:w-6 xl:w-8  2xl:w-10 ${
          submitting && "invisible opacity-0 transition-all"
        }`}
      >
        {icon}
      </div>
    </button>
  );
}
