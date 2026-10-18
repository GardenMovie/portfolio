import { ArrowLeft, BookOpen } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { posts, formatDate } from "@/data/blog";

export function Blog() {
  return (
    <section id="blog" className="pt-20 max-w-3xl">
      <a
        href="#home"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to portfolio
      </a>
      <h1 className="text-2xl font-semibold mb-8 flex items-center gap-2">
        <BookOpen className="w-6 h-6 text-muted" />
        <span>Blog</span>
      </h1>
      <div className="grid gap-4 grid-cols-1">
        {posts.map((post) => (
          <a key={post.slug} href={`#/blog/${post.slug}`} className="block">
            <Card hoverEffect>
              <CardContent className="flex flex-col gap-1 p-4">
                <h2 className="font-bold text-xl leading-none">{post.title}</h2>
                <p className="text-sm text-muted-foreground">{formatDate(post.date)}</p>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
    </section>
  );
}
