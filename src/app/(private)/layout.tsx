import { AppHeader } from "@/widget/app-header/app-header";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AppHeader variant="private" />
      {children}
    </>
  );
}
