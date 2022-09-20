export interface ButtonProps {
  type: ButtonTypes;
  text: string;
  icon?: JSX.Element;
}

export enum ButtonTypes {
  Primary,
  Secondary,
}

export default function Button({ type, text, icon }: ButtonProps) {
  return (
    <button
      className={`flex items-center gap-2 self-center rounded px-3 py-2 font-serif font-bold tracking-wider transition-all md:gap-4 md:self-start
      ${type === ButtonTypes.Primary && `bg-accent text-dark hover:bg-light`}
      ${
        type === ButtonTypes.Secondary &&
        `border-2 border-accent hover:border-light`
      }
      `}
    >
      <div>{text}</div>
      <div className="w-6 md:w-8 lg:w-6 xl:w-8  2xl:w-10">{icon}</div>
    </button>
  );
}
