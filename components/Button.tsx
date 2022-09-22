import { MouseEvent, MouseEventHandler } from "react";

export interface ButtonProps {
  type: ButtonTypes;
  text: string;
  icon?: JSX.Element;
  clickHandler?: MouseEventHandler<HTMLButtonElement>;
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
}: ButtonProps) {
  return (
    <button
      className={`flex items-center gap-2 self-center rounded py-1 px-2 font-serif font-bold tracking-wider transition-all sm:px-3 sm:py-2 md:gap-4 md:self-start
      ${type === ButtonTypes.Primary && `bg-accent text-dark hover:bg-light`}
      ${
        type === ButtonTypes.Secondary &&
        `border-2 border-accent hover:border-light`
      }
      `}
      {...(clickHandler && { onClick: clickHandler })}
    >
      <div>{text}</div>
      <div className="w-6 md:w-8 lg:w-6 xl:w-8  2xl:w-10">{icon}</div>
    </button>
  );
}
