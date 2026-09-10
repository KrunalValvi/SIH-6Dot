import type { LoginCredentials, SignupData, AuthResponse, SignupResult } from "../features/auth/types/auth.types";

/**
 * NOTE: This is a MOCK authentication service.
 *
 * It simulates the network delay and response contract of the real backend
 * API so the UI can be developed in parallel. It does NOT implement any
 * real authentication, session handling, or security.
 *
 * Replace the implementation of `login` and `register` with real API calls
 * (e.g. via fetch/axios) once the backend auth endpoints exist. The UI layer
 * should not need to change.
 */

const simulateNetworkDelay = () => new Promise<void>((resolve) => setTimeout(resolve, 600));

export const authService = {
  async login(_credentials: LoginCredentials): Promise<AuthResponse> {
    await simulateNetworkDelay();
    return {
      success: false,
      message:
        "Authentication is not yet connected to the backend. This is a mock service — real login is coming soon.",
    };
  },

  async register(_data: SignupData): Promise<SignupResult> {
    await simulateNetworkDelay();
    return {
      success: true,
      message:
        "Registration submitted. This is a mock service — your account will be created once the backend is connected.",
    };
  },

  async logout(): Promise<void> {
    await simulateNetworkDelay();
  },

  async getCurrentUser(): Promise<AuthResponse> {
    await simulateNetworkDelay();
    return { success: false };
  },
};