import type { Trend } from "@/types/trend";

/**
 * TrendCard — Görev 9.x kapsamında implemente edilecektir.
 * Bu dosya `TrendGrid.tsx` içindeki import'un TypeScript kontrolünden geçmesi
 * için yer tutucu (placeholder) olarak oluşturulmuştur.
 */

interface TrendCardProps {
  trend: Trend;
}

export function TrendCard({ trend }: TrendCardProps): JSX.Element {
  return (
    <div className="rounded-xl border border-gray-200 p-4">
      <span className="font-medium text-gray-900">{trend.title}</span>
    </div>
  );
}
