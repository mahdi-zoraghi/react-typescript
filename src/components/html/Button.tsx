type ButtonProps = {
  variant: "primary" | "secondary";
  children: string;
} & Omit<React.ComponentProps<"button">, "children">;

export const Button = ({ variant, children, ...otherProps }: ButtonProps) => {
  return (
    <button className={`class-with-${variant}`} {...otherProps}>
      {children}
    </button>
  );
};
