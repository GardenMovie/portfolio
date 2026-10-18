import { useMemo, useState } from "react";
import Fuse from "fuse.js";
import { ArrowLeft, BookOpen, Linkedin } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { posts, formatDate } from "@/data/blog";

export function Blog() {
  const [query, setQuery] = useState("");
  const fuse = useMemo(
    () =>
      new Fuse(posts, {
        keys: [
          { name: "title", weight: 2 },
          { name: "body", weight: 1 },
        ],
        ignoreDiacritics: true,
        ignoreLocation: true,
        threshold: 0.3,
      }),
    []
  );
  const visible = query.trim() ? fuse.search(query.trim()).map((r) => r.item) : posts;

  return (
    <section id="blog" className="pt-20 w-full">
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
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
        <p className="text-sm text-muted-foreground">
          Posts land on LinkedIn first. Still working on getting them here automatically.
        </p>
        <Button variant="outline" asChild>
          <a
            href="https://linkedin.com/in/dody-gallerani"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="h-5 w-5" /> Follow on LinkedIn
          </a>
        </Button>
      </div>
      <Input
        type="search"
        placeholder="Search posts"
        aria-label="Search posts"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="mb-6"
      />
      <div className="grid gap-4 grid-cols-1">
        {visible.length === 0 && (
          <p className="text-muted-foreground">No posts found.</p>
        )}
        {visible.map((post) => (
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
