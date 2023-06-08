import clsx from "clsx";

interface Props {
  text?: string;
  size?: "small" | "medium" | "large";
  variant?: "primary" | "secondary" | "neutral" | "ico" | "customize";
  icon?: { icon: React.ElementType };
  iconTheme?: "primary" | "secondary" | "gray";
  iconPosition?: "left" | "right";
  rounded?: "full" | boolean;
  disabled?: boolean;
  isLoading?: boolean;
  onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

const Button = ({
  text = "",
  size = "medium",
  variant = "customize",
  icon,
  iconTheme = "primary",
  iconPosition = "right",
  rounded = true,
  disabled = false,
  isLoading,
  onClick,
  className = "",
}: Props) => {
  let variantStyles: string = "",
    sizeStyles: string = "",
    roundStyle: string = "",
    icoSize: number = 0;

  switch (variant) {
    case "primary":
      variantStyles = "bg-primary hover:bg-primary-focus text-white";
      break;
    case "secondary":
      variantStyles =
        "hover:text-neutral hover:bg-secondary-content bg-secondary-focus text-white";
      break;
    case "neutral":
      variantStyles = "bg-gray-300 hover:bg-gray-300/80 text-gray-700";
      break;
    case "customize":
      variantStyles = "";
      break;
    case "ico":
      if (iconTheme === "primary") {
        variantStyles = "bg-primary-600 hover:bg-primary-400 text-white";
        break;
      }
      if (iconTheme === "secondary") {
        variantStyles = "bg-primary-200 hover:bg-primary-300/50 text-primary";
        break;
      }
      if (iconTheme === "gray") {
        variantStyles = "bg-gray-400 hover:bg-gray-600 text-black";
        break;
      }
  }

  switch (rounded) {
    case "full":
      roundStyle = "rounded-[100rem]";
      break;
    case true:
      roundStyle = "rounded-xl lg: rounded-2xl";
      break;
    default:
      roundStyle = "";
  }

  switch (size) {
    case "small":
      sizeStyles = `text-md font-medium ${
        variant === "ico"
          ? "flex items-center justify-center w-[40px] h-[40px]"
          : "px-[14px] py-[12px]"
      }`;
      icoSize = 17;
      break;
    case "medium":
      sizeStyles = `text-lg font-medium ${
        variant === "ico"
          ? "flex items-center justify-center w-[50px] h-[50px]"
          : "px-[18px] py-[15px]"
      }`;
      icoSize = 20;
      break;
    case "large":
      sizeStyles = `text-xl font-medium ${
        variant === "ico"
          ? "flex items-center justify-center w-[60px] h-[60px]"
          : "px-[22px] py-[18px]"
      }`;
      icoSize = 24;
      break;
  }

  return (
    <button
      className={clsx(
        variantStyles,
        sizeStyles,
        roundStyle,
        icoSize,
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {!text && !icon && "Prop text or icon ????"}
      {text && !icon && text}
      {!text && icon && <icon.icon />}
      {text && icon && (
        <div className={clsx(icon && "flex items-center gap-4")}>
          {icon && iconPosition === "left" && <icon.icon size={icoSize} />}
          {text}
          {icon && iconPosition === "right" && <icon.icon size={icoSize} />}
        </div>
      )}
    </button>
  );
};

export default Button;
