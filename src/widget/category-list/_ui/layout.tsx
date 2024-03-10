export function Layout({
  header,
  createCategoryForm,
  categoryItems,
}: {
  header?: React.ReactNode;
  createCategoryForm?: React.ReactNode;
  categoryItems?: React.ReactNode;
}) {
  return (
    <main>
      {header}
      {createCategoryForm}
      {categoryItems}
    </main>
  );
}
