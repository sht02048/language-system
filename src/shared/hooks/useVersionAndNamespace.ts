import { useEffect, useState } from "react";
import { PrismaNamespace, PrismaVersion } from "../types";

export default function useVersionAndNamespace(versionName: string) {
  const [versions, setVersions] = useState<string[]>([]);
  const [namespaces, setNamespaces] = useState<string[]>([]);

  useEffect(() => {
    async function getAvailableVersions() {
      const versionResponse = await fetch("/api/version");
      const versionJson: PrismaVersion[] = await versionResponse.json();

      const currentVersionId = versionJson.find(
        (version) => version.name === versionName,
      )?.id;

      // TODO 에러 처리 추가 필요
      if (!currentVersionId) throw new Error("version name is invalid");

      const namespaceResponse = await fetch(
        `/api/namespace?versionId=${encodeURIComponent(currentVersionId)}`,
      );
      const namespaceJson: PrismaNamespace[] = await namespaceResponse.json();

      const sortedVersion = versionJson
        .sort(
          (a, b) =>
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
        )
        .map((version) => version.name);
      const mappedNamespace = namespaceJson.map((namespace) => namespace.name);
      setVersions(sortedVersion);
      setNamespaces(mappedNamespace);
    }

    getAvailableVersions();
  }, [versionName]);

  return { versions, namespaces };
}
