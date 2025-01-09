import { Container } from "./styles";

import Spinner from "../Spinner";

interface FormGroupPropsInterface {
  children: React.ReactNode;
  error?: string;
  isLoading?: boolean;
}

export default function FormGroup({
  children,
  error,
  isLoading = false,
}: FormGroupPropsInterface) {
  return (
    <Container>
      <div className="form-item">
        {children}
        {isLoading && (
          <div className="loader">
            <Spinner size={16} />
          </div>
        )}
      </div>
      {error && <small>{error}</small>}
    </Container>
  );
}
