import { UploadNamespace } from "@/src/features/sideBar";

export default function SideBar() {
  return (
    <div className="w-60 h-screen-800 p-4">
      <nav>
        <span className="font-medium text-sm">minsug</span>
        <div className="flex flex-col my-4 gap-2">
          <UploadNamespace />
        </div>
      </nav>
    </div>
  );
}
