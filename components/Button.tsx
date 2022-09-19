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
      className={`text-sans flex items-center gap-2 rounded px-3 py-2 text-xl font-bold transition-all
      ${type === ButtonTypes.Primary && `bg-accent text-dark hover:bg-light`}
      ${
        type === ButtonTypes.Secondary &&
        `border-2 border-accent hover:border-light`
      }
      `}
    >
      <span>{text}</span>
      {icon}
    </button>
  );
}