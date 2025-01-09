import { StyledSpinner } from "./styles";

interface SpinnerPropsInterface {
  size?: number;
}

export default function Spinner({
  size = 32,
  ...arg
}: SpinnerPropsInterface & React.HTMLAttributes<"div">) {
  return <StyledSpinner size={size} {...arg} />;
}
