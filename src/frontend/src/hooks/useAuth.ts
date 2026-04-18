import { useInternetIdentity } from "@caffeineai/core-infrastructure";

export type LoginStatus =
  | "initializing"
  | "idle"
  | "logging-in"
  | "success"
  | "loginError";

export interface UseAuthReturn {
  isAuthenticated: boolean;
  isInitializing: boolean;
  isLoggingIn: boolean;
  loginStatus: LoginStatus;
  login: () => void;
  logout: () => void;
  principalId: string | null;
}

export function useAuth(): UseAuthReturn {
  const {
    identity,
    login,
    clear,
    loginStatus,
    isAuthenticated,
    isInitializing,
    isLoggingIn,
  } = useInternetIdentity();

  const principalId =
    identity && !identity.getPrincipal().isAnonymous()
      ? identity.getPrincipal().toString()
      : null;

  return {
    isAuthenticated,
    isInitializing,
    isLoggingIn,
    loginStatus: loginStatus as LoginStatus,
    login,
    logout: clear,
    principalId,
  };
}
