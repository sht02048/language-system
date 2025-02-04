import { redirect } from "next/navigation";
import { PrismaVersion } from "../../types";
import { DEFAULT_NAMESPACE } from "../../constants";

export default function redirectToRecentTable(versions: PrismaVersion[]) {
  const latestVersion = versions.sort((a, b) => {
    const aDate = new Date(a.createdAt).getTime();
    const bDate = new Date(b.createdAt).getTime();

    return bDate - aDate;
  })[0].name;

  redirect(`/table?version=${latestVersion}&namespace=${DEFAULT_NAMESPACE}`);
}
