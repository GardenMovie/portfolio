export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  linkedin?: string;
  body: string;
};

const files = import.meta.glob("/src/content/blog/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

function parsePost(path: string, raw: string): BlogPost {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  const meta: Record<string, string> = {};
  for (const line of (match?.[1] ?? "").split(/\r?\n/)) {
    const idx = line.indexOf(":");
    if (idx > 0) meta[line.slice(0, idx).trim()] = line.slice(idx + 1).trim();
  }
  const slug = path.split("/").pop()!.replace(/\.md$/, "");
  return {
    slug,
    title: meta.title ?? slug,
    date: meta.date ?? "",
    linkedin: meta.linkedin,
    body: (match?.[2] ?? raw).trim(),
  };
}

// newest first
export const posts: BlogPost[] = Object.entries(files)
  .map(([path, raw]) => parsePost(path, raw))
  .sort((a, b) => b.date.localeCompare(a.date));

export function formatDate(date: string) {
  return new Date(date.includes("T") ? date : date + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
