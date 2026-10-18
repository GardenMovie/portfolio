import Markdown from "react-markdown";
import { ArrowLeft } from "lucide-react";
import { posts, formatDate } from "@/data/blog";

export function BlogPost({ slug }: { slug: string }) {
  const post = posts.find((p) => p.slug === slug);

  return (
    <article className="pt-20 max-w-3xl">
      <a
        href="#/blog"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to blog
      </a>
      {post ? (
        <>
          <h1 className="text-3xl font-bold">{post.title}</h1>
          <p className="text-sm text-muted-foreground mt-1 mb-8">{formatDate(post.date)}</p>
          <div className="flex flex-col gap-4 leading-7 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:mt-4 [&_ul]:list-disc [&_ul]:pl-6 [&_a]:underline">
            <Markdown>{post.body}</Markdown>
          </div>
          {post.linkedin && (
            <a
              href={post.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 text-sm text-muted-foreground hover:text-primary underline"
            >
              View on LinkedIn
            </a>
          )}
        </>
      ) : (
        <p>Post not found.</p>
      )}
    </article>
  );
}
