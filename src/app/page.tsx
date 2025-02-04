import { redirect } from "next/navigation";
import { getAllVersion } from "@/src/shared/api/version";
import { Home } from "../page/home";

const DEFAULT_NAMESPACE = "auth";

export default async function Page() {
  const versions = await getAllVersion();

  if (versions.length === 0) return <Home />;

  const latestVersion = versions.sort((a, b) => {
    const aDate = new Date(a.createdAt).getTime();
    const bDate = new Date(b.createdAt).getTime();

    return bDate - aDate;
  })[0].name;

  redirect(`/table?version=${latestVersion}&namespace=${DEFAULT_NAMESPACE}`);
}
