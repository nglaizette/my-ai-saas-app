import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function DashboardPage() {
  return (
    <div>
      <p>Dashboard page (Protected)</p>
      <p className="text-6xl text-green-500">Hello Ai Saas</p>
      <Button variant="destructive">Click me</Button>
      <div>
        <UserButton afterSignOutUrl="/"/>
      </div>
    </div>
    );
}