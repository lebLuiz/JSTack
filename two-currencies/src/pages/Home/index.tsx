import { useState, useEffect } from "react";
import { Container, WrapResult } from "./styles";
import QuoteForm from "../../components/pages/Home/QuoteForm";
import Spinner from "../../components/Spinner";
import useQuote from "../../hooks/useQuote";

export default function Home() {
  const [result, setResult] = useState<string>("");
  const { getQuote, quoteValue, dateQuote, isLoading } = useQuote();

  useEffect(() => {
    getQuote();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const multiplyValueQuote = (value: number, quote: number): number =>
    value * quote;

  const fomatCurrency = (_value: number): string => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(_value);
  };

  const handleValueForm = (value: string) => {
    const numericValue = Number(value?.replace(/\./g, "")?.replace(/,/g, "."));

    if (isNaN(numericValue)) {
      const multipledEmptyValue = multiplyValueQuote(0, quoteValue);
      const emptyValue = fomatCurrency(multipledEmptyValue);
      setResult(emptyValue);
      return;
    }

    const multipledValue = multiplyValueQuote(numericValue, quoteValue);
    const formattedValue = fomatCurrency(multipledValue);
    setResult(formattedValue);
  };

  return (
    <Container>
      <h1>USD🇺🇸 to BRL🇧🇷</h1>
      <QuoteForm onChangeValue={handleValueForm} isLoading={isLoading} />
      {isLoading ? (
        <Spinner role="status" />
      ) : (
        <WrapResult>
          <small>Datetime of quote: {dateQuote}</small>
          <p>{result}</p>
        </WrapResult>
      )}
    </Container>
  );
}
