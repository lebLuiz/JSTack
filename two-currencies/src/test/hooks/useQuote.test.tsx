import { describe, expect, Mock, test, vi } from "vitest";
import { act, renderHook } from "@testing-library/react";

import QuoteService from "../../services/QuoteService";
import useQuote from "../../hooks/useQuote";
import ResGetQuoteMock from "../services/Quote/mocks/ResGetQuoteMock.json";

vi.mock("../../services/QuoteService");
vi.mock("../../utils/toast");

describe("useQuote Hook", () => {
  test('should call "getQuote" and update states correctly on success', async () => {
    (QuoteService.getQuote as Mock).mockResolvedValue(ResGetQuoteMock);

    const { result } = renderHook(() => useQuote());
    expect(result.current.isLoading).toBe(true);

    await act(async () => {
      await result.current.getQuote();
    });

    expect(result.current.quoteValue).toBe(6.10622354);
    expect(result.current.dateQuote).toBe("08/01/2025 22:20:11");
  });
});
