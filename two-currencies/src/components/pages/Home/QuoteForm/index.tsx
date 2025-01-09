import { useState } from "react";
import FormGroup from "../../../FormGroup";
import { Input } from "../../../Input";

interface QuoteFormPropsInterface {
  isLoading: boolean;
  onChangeValue: (value: string) => void;
}

export default function QuoteForm({
  onChangeValue,
  isLoading,
}: QuoteFormPropsInterface) {
  const [value, setValue] = useState("");

  const formatValue = (value: string): string => {
    if (!value) return "";
    const numericValue = value.replace(/\D/g, "");
    const formattedValue = new Intl.NumberFormat("pt-BR", {
      style: "decimal",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(Number(numericValue) / 100);
    return formattedValue;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = event.target.value;
    const formattedValue = formatValue(rawValue);

    setValue(formattedValue);
    onChangeValue(formattedValue);
  };

  return (
    <form>
      <FormGroup isLoading={isLoading}>
        <Input
          placeholder="* Enter value (USD 🇺🇸)"
          required
          readOnly={isLoading}
          value={value}
          onChange={handleChange}
        />
      </FormGroup>
    </form>
  );
}
