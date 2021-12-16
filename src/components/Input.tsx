type InputProps = {
  value: string;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  //   handleChange: React.ChangeEventHandler<HTMLInputElement>;
};

export const Input = ({ value, handleChange }: InputProps) => {
  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange || handleChangeInput}
    />
  );
};
