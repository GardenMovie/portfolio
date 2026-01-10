import { Card, CardContent } from "@/components/ui/card";
import type { EducationItem } from "@/types";

interface TimelineCardProps {
  item: EducationItem;
}

export function TimelineCard({ item }: TimelineCardProps) {
  const Icon = item.icon;

  return (
    <Card>
      <CardContent className="flex items-center px-6 py-6 min-h-30">
        <div className="flex gap-4">
          {/* Icon */}
          <div className="mt-1">
            <Icon className="h-6 w-6 text-muted-foreground" />
          </div>

          {/* Text content */}
          <div className="space-y-1">
            <h3 className="font-medium leading-none">{item.title}</h3>

            <p className="text-sm text-muted-foreground">
              {item.institution} • {item.period}
            </p>

            {item.description && (
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
