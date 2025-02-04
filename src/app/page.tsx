import { getAllVersion } from "@/src/shared/api/version";

import { Home } from "../page/home";
import { redirectToRecentTable } from "../shared/api/redirect";

export default async function Page() {
  const versions = await getAllVersion();

  if (versions.length === 0) return <Home />;

  redirectToRecentTable(versions);
}
