import { Card, CardContent } from "@/shared/ui/card";

export function Layout({
  header,
  description,
  socials,
  logo,
}: {
  header?: React.ReactNode;
  description?: React.ReactNode;
  socials?: React.ReactNode;
  logo?: React.ReactNode;
}) {
  return (
    <main className="container mt-8  max-w-[600px] ">
      <Card>
        <CardContent className={"p-8 flex flex-col space-y-4"}>
          {header}
          {description}
          {socials}
          {logo}
        </CardContent>
      </Card>
    </main>
  );
}
