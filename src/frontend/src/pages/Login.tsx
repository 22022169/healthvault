import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "@tanstack/react-router";
import { Fingerprint, Loader2, Lock, ShieldCheck } from "lucide-react";
import { useEffect } from "react";

export default function Login() {
  const { isAuthenticated, isInitializing, isLoggingIn, login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      void navigate({ to: "/dashboard" });
    }
  }, [isAuthenticated, navigate]);

  return (
    <div
      className="min-h-[calc(100vh-4rem-88px)] bg-muted/20 flex items-center justify-center px-4 py-12"
      data-ocid="login.page"
    >
      <div className="w-full max-w-md space-y-6">
        {/* Branding */}
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center mb-4">
            <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center shadow-elevated">
              <ShieldCheck className="w-8 h-8 text-primary-foreground" />
            </div>
          </div>
          <h1 className="font-display text-3xl font-bold text-foreground">
            Welcome to HealthVault
          </h1>
          <p className="text-muted-foreground text-base">
            Your secure personal health records — all in one place.
          </p>
        </div>

        {/* Main Card */}
        <Card
          className="border border-border shadow-elevated bg-card"
          data-ocid="login.card"
        >
          <CardContent className="p-8 space-y-6">
            {/* II explanation banner */}
            <div className="flex items-start gap-3 rounded-lg bg-primary/10 border border-primary/20 p-4">
              <ShieldCheck className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-semibold text-foreground">
                  Sign in securely with Internet Identity — no passwords needed
                </p>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  Internet Identity is a secure, privacy-preserving
                  authentication system. No username or password required.
                </p>
              </div>
            </div>

            {/* Sign In / Sign Up CTA */}
            <Button
              type="button"
              data-ocid="login.submit_button"
              className="w-full h-12 text-base font-semibold bg-accent hover:bg-accent/90 text-accent-foreground transition-smooth gap-2"
              onClick={login}
              disabled={isLoggingIn || isInitializing}
            >
              {isLoggingIn ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Connecting…
                </>
              ) : isInitializing ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Loading…
                </>
              ) : (
                <>
                  <Fingerprint className="w-5 h-5" />
                  Sign In / Sign Up with Internet Identity
                </>
              )}
            </Button>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center">
                <span className="bg-card px-3 text-xs text-muted-foreground">
                  How it works
                </span>
              </div>
            </div>

            {/* Feature list */}
            <ul className="space-y-3">
              {[
                {
                  icon: <Lock className="w-4 h-4 text-primary" />,
                  text: "No password to remember or lose",
                },
                {
                  icon: <ShieldCheck className="w-4 h-4 text-primary" />,
                  text: "Cryptographically secured — only you have access",
                },
                {
                  icon: <Fingerprint className="w-4 h-4 text-primary" />,
                  text: "Uses biometrics or hardware keys on your device",
                },
              ].map(({ icon, text }) => (
                <li
                  key={text}
                  className="flex items-center gap-3 text-sm text-muted-foreground"
                >
                  <span className="shrink-0">{icon}</span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            {/* Learn more link */}
            <p className="text-xs text-muted-foreground text-center">
              New to Internet Identity?{" "}
              <a
                href="https://identity.ic0.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
                data-ocid="login.create_identity.link"
              >
                Create a free identity
              </a>
            </p>
          </CardContent>
        </Card>

        {/* Footer note */}
        <p className="text-center text-xs text-muted-foreground leading-relaxed">
          By signing in, you agree to store your health records securely on the
          Internet Computer.
          <br />
          Your data is private and only accessible to you.
        </p>
      </div>
    </div>
  );
}
