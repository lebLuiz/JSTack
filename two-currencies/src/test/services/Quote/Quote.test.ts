import { describe, expect, test, vi } from "vitest";
import QuoteService from "../../../services/QuoteService";
import ResGetQuoteMock from "./mocks/ResGetQuoteMock.json";

vi.mock("../../services/QuoteService");

describe("Quote Service", () => {
  test('should return correct response when calling "getQuote"', async () => {
    QuoteService.getQuote = vi.fn().mockImplementation(() => ResGetQuoteMock);
    const result = await QuoteService.getQuote();
    expect(result).toEqual({ ...ResGetQuoteMock });
  });
});
