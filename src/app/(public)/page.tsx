export default async function Home({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="flex min-h-screen flex-col p-8">{children}</main>;
}
