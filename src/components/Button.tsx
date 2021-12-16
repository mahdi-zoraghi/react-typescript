type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
  //   handleClick: React.MouseEventHandler<HTMLButtonElement>;
};

export const Button = ({ handleClick }: ButtonProps) => {
  return <button onClick={(event) => handleClick(event, 2)}>Click</button>;
};
