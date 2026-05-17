import { Card } from "@/components/ui/card";

export function MetricCard({ label, value, hint }: { label: string; value: string; hint: string }) {
  return (
    <Card className="border-white/10 bg-white/[0.04] p-5 shadow-none">
      <p className="text-sm text-white/55">{label}</p>
      <div className="mt-3 text-3xl font-black">{value}</div>
      <p className="mt-2 text-xs text-success">{hint}</p>
    </Card>
  );
}
