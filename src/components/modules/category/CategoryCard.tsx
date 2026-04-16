import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

type Category = {
  categoryType: string;
  price: number;
  description: string;
  tutor: {
    bio: string;
    experience: number;
    avgRating: string;
    user: {
      name: string;
    };
  };
};


type CategoryCardProps = {
  category: Category;
};

export default function CategoryCard({category}: CategoryCardProps) {
  return (
    <Card className="group relative overflow-hidden rounded-2xl border shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer">
      
      {/* Top Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition duration-300" />

      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <Badge variant="secondary" className="text-xs font-semibold">
          {category.categoryType}
        </Badge>

        <span className="text-lg font-bold text-primary">
          ${category.price}
        </span>
      </CardHeader>

      <CardContent className="space-y-4">
        
        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-2">
          {category.description}
        </p>

        {/* Tutor Info */}
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarFallback>
              {category.tutor.user.name.charAt(0)}
            </AvatarFallback>
          </Avatar>

          <div>
            <p className="text-sm font-medium leading-none">
              {category.tutor.user.name}
            </p>
            <p className="text-xs text-muted-foreground">
              {category.tutor.bio}
            </p>
          </div>
        </div>

        {/* Extra Info */}
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>Experience: {category.tutor.experience} yrs</span>
          <span>⭐ {category.tutor.avgRating || "New"}</span>
        </div>
      </CardContent>
    </Card>
  );
}