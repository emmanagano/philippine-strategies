import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Get the path to the articles folder
const articlesDir = path.join(process.cwd(), "src/content");

// Get all markdown files from /content
export function getAllArticles() {
    const files = fs.readdirSync(articlesDir).filter((filename) => {
        const filePath = path.join(articlesDir, filename);
        return fs.statSync(filePath).isFile();
    });

    return files
        .map((filename) => {
            const filePath = path.join(articlesDir, filename);
            const fileContents = fs.readFileSync(filePath, "utf8");
            const { data } = matter(fileContents);

            return {
                id: data.id || 0, // Defaults to 0 if no id
                title: data.title,
                description: data.description,
                date: data.date,
                slug: data.slug,
                category: data.category || "all-article"
            };
        })
        .sort((a, b) => b.id - a.id); // Sort in descending order
}

// Get a single article by slug
export function getArticleBySlug(slug: string) {
    const filePath = path.join(articlesDir, `${slug}.md`);

    if (!fs.existsSync(filePath)) {
        return null;
    }

    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return {
        title: data.title,
        description: data.description,
        date: data.date,
        slug: data.slug,
        content,
    };
}

export const articles = getAllArticles();
