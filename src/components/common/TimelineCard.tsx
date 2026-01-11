import { Card, CardContent } from "@/components/ui/card";
import type { EducationItem } from "@/types";

interface TimelineCardProps {
  item: EducationItem;
}

export function TimelineCard({ item }: TimelineCardProps) {
  const Icon = item.icon;
  return (
    <Card>
      <CardContent >
        <div className="flex gap-4 py-6">
          {/* Icon */}
          <div className="mt-1">
            <Icon className="h-6 w-6 text-muted-foreground" />
          </div>
          {/* Text content */}
          <div className="space-y-1">
            <h3 className="font-bold text-lg leading-none">{item.title}</h3>
            <p className="text-muted-foreground">
              {item.institution} • {item.period}
            </p>
            {item.description && (
              <p className="text-sm font-medium leading-normal whitespace-pre-line border-l-2 border-primary pl-2">
                {item.description}
              </p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
