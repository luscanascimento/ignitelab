import {InputHTMLAttributes, ReactNode} from "react";
import {Slot} from "@radix-ui/react-slot";

export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

export interface TextInputRootProps {
  children: ReactNode;
}

function TextInputRoot(props: TextInputRootProps) {
  return (
    <div className="flex item-center gap-3 py-4 px-3 h-12 rounded bg-gray-800 w-full  focus-whitin:ring-2 ring-cyan-300">
      {props.children}
    </div>
  );
}

TextInputIcon.displayName = "TextInput.Root";

export interface TextInputIconProps {
  children: ReactNode;
}

function TextInputIcon(props: TextInputIconProps) {
  return <Slot className="w-6 h-6 text-gray-400">{props.children}</Slot>;
}

TextInputIcon.displayName = "TextInput.Icon";

function TextInputInpunt(props: TextInputInputProps) {
  return (
    <input
      className="bg-transparent flex-1  text-gray-100 text-xs outline-none placeholder:text-gray-400"
      {...props}
    />
  );
}

TextInputIcon.displayName = "TextInput.Input";

export const TextInput = {
  Root: TextInputRoot,
  Icon: TextInputIcon,
  Input: TextInputInpunt,
};
