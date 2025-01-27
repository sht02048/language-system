import { redirect } from "next/navigation";
import { getVersion } from "./api/router";

const DEFAULT_NAMESPACE = "activeMode";

export default async function Home() {
  const versions = await getVersion();

  const latestVersion = versions.sort((a, b) => {
    const aDate = new Date(a.createdAt).getTime();
    const bDate = new Date(b.createdAt).getTime();

    return aDate - bDate;
  })[0].name;

  redirect(`/table?version=${latestVersion}&namespace=${DEFAULT_NAMESPACE}`);
}
