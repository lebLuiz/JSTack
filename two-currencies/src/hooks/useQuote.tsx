import { useState } from "react";

import toast from "../utils/toast";
import formatTimestampToDate from "../utils/formatTimestampToDate";
import QuoteService from "../services/QuoteService";

export default function useQuote() {
  const [quoteValue, setQuoteValue] = useState<number>(0);
  const [dateQuote, setDateQuote] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  function setFormatDateQuote(date_timestamp: number): void {
    const formatDateQuote = formatTimestampToDate(date_timestamp);
    setDateQuote(() => formatDateQuote);
  }

  async function getQuote(): Promise<void> {
    try {
      const res = await QuoteService.getQuote();
      setQuoteValue(() => res?.value || 0);
      setFormatDateQuote(res?.timestamp);
    } catch {
      toast({
        type: "error",
        text: "Error loading quote",
        duration: 3000,
      });
    } finally {
      setIsLoading(false);
    }
  }

  return {
    getQuote,
    quoteValue,
    dateQuote,
    isLoading,
  };
}
