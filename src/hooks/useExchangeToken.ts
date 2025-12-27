import { useMutation } from "@tanstack/react-query";
import { exchangeToken } from "../apis/authApi";
import type { ExchangeTokenResponse } from "../models/auth";

export const useExchangeToken = () => {
  return useMutation<
    ExchangeTokenResponse,
    Error,
    {
      code: string;
      codeVerifier: string;
    }
  >({
    mutationFn: ({
      code,
      codeVerifier,
    }: {
      code: string;
      codeVerifier: string;
    }) => {
      return exchangeToken(code, codeVerifier);
    },
    onSuccess: (data) => {
      localStorage.setItem("access_token", data.access_token);
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
