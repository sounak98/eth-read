import { Dispatch, SetStateAction } from "react";

interface InputProps {
  title: string;
  subtitle?: string;
  placeholder: string;
  setValue: Dispatch<SetStateAction<string>>;
}

function Input(props: InputProps) {
  return (
    <div className="flex flex-col items-stretch gap-2">
      <div className="font-semibold text-slate-600">{props.title}</div>
      {props.subtitle && (
        <div className="text-sm text-slate-600">{props.subtitle}</div>
      )}
      <input
        type="text"
        placeholder={props.placeholder}
        onChange={(e) => props.setValue(e.target.value)}
      />
    </div>
  );
}

export default Input;
