import { Card, CardContent } from "@/components/ui/card";
import type { EducationItem } from "@/types";

interface TimelineCardProps {
  item: EducationItem;
}

// export function TimelineCard({ item }: TimelineCardProps) {
//   const Icon = item.icon;
//   return (
    // <div className="relative w-full">
    //   <div className="absolute inset-0 translate-x-1 translate-y-1 bg-primary rounded-xl z-0 shadow-lg" aria-hidden="true" />
    //   <Card className="relative z-10 bg-gradient-to-br from-neutral-100 from-70% to-neutral-300">
//         <CardContent className="flex items-center px-6 py-2 ">
//           <div className="flex gap-4">
//             {/* Icon */}
//             <div className="mt-1">
//               <Icon className="h-6 w-6 text-muted-foreground" />
//             </div>
//             {/* Text content */}
//             <div className="space-y-1">
//               <h3 className="font-bold text-lg leading-none">{item.title}</h3>
//               <p className="text-muted-foreground">
//                 {item.institution} • {item.period}
//               </p>
//               {item.description && (
//                 <p className="text-sm leading-relaxed text-muted-foreground whitespace-pre-line border-l-2 border-primary pl-2">
//                   {item.description}
//                 </p>
//               )}
//             </div>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }
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
