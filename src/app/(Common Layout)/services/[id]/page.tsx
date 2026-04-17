import CategoryDetails from "@/components/modules/category/CategoryDetails";
import { getPublicSingleCategory } from "@/services/category";


export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
//   const user = await getUser();
  const { id } = await params;
  const { data } = await getPublicSingleCategory(id);

  return (
    <div>
      <CategoryDetails category={data}  />
    </div>
  );
}
