import { SignInForm } from "@/features/auth/sign-in-form.server";
import { ToggleTheme } from "@/features/theme/toggle-theme";
import { LogoIcon } from "@/shared/ui/logo-icon";

export default function AuthenticationPage() {
  return (
    <>
      <div className="container relative min-h-screen flex flex-col justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        {/* <div className="absolute right-4 top-4 md:right-8 md:top-8">
          <ToggleTheme />
        </div> */}
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex h-full items-center justify-center text-lg font-medium">
            <div className="flex flex-col items-center justify-center">
              <LogoIcon className="w-96 h-96" />{" "}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center lg:p-8 h-full">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">Auth</h1>
              <p className="text-sm text-muted-foreground">Welcome back</p>
            </div>
            <SignInForm />
          </div>
        </div>
      </div>
    </>
  );
}
