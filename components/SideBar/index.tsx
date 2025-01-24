import { Button } from "../ui/button";

export default function SideBar() {
  return (
    <div className="w-60 h-screen-800 p-4">
      <nav>
        <span className="font-medium text-sm">minsug</span>
        <div className="flex flex-col my-4 gap-2">
          <Button variant={"secondary"}>import</Button>
          <Button variant={"secondary"}>export</Button>
        </div>
      </nav>
    </div>
  );
}
