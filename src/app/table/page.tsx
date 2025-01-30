import {
  pivotLanguage,
  Table,
  tableParamsSchema,
  type TableParams,
} from "@/src/page/table";
import { getVersion } from "@/src/shared/api/version";
import { getNamespace } from "@/src/shared/api/namespace";
import { getAllTranslationKeyByNamespace } from "@/src/shared/api/translationKey";

export { type TableParams, TableParamsSchema } from "./type";

export default async function Page({
  searchParams,
}: {
  searchParams: TableParams;
}) {
  const safeParams = tableParamsSchema.parse(searchParams);
  const version = await getVersion(searchParams.version);
  const namespace = await getNamespace({
    versionId: version.id,
    namespace: searchParams.namespace,
  });

  const translationKeys = await getAllTranslationKeyByNamespace(namespace.id);

  const languages = await Promise.all(translationKeys.map(pivotLanguage));

  return (
    <>
      <Table data={languages} />
      {safeParams.version}
    </>
  );
}
