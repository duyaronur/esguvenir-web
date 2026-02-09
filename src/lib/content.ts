import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const contentDirectory = path.join(process.cwd(), 'content');

export interface Project {
  slug: string;
  title: string;
  location: string;
  type: 'konut' | 'ticari' | 'karma';
  status: 'tamamlandi' | 'devam-ediyor' | 'planlaniyor';
  summary: string;
  coverImage: string;
  gallery?: string[];
  seoTitle?: string;
  seoDescription?: string;
  tags?: string[];
  deliveryDate?: string;
  area?: string;
  units?: number;
  order?: number;
  content: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: 'insaat' | 'emlak' | 'yatirim' | 'yasam' | 'haberler';
  excerpt: string;
  coverImage: string;
  altText?: string;
  seoTitle?: string;
  seoDescription?: string;
  author?: string;
  readingTime?: string;
  tags?: string[];
  faq?: Array<{
    question: string;
    answer: string;
  }>;
  content: string;
}

export function getProjects(): Project[] {
  const projectsDir = path.join(contentDirectory, 'projects');
  
  if (!fs.existsSync(projectsDir)) {
    return [];
  }

  const fileNames = fs.readdirSync(projectsDir);
  const projects = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(projectsDir, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        ...data,
        content,
      } as Project;
    })
    .sort((a, b) => (b.order || 0) - (a.order || 0));

  return projects;
}

export function getProjectBySlug(slug: string): Project | null {
  const projects = getProjects();
  return projects.find((project) => project.slug === slug) || null;
}

export function getBlogPosts(): BlogPost[] {
  const blogDir = path.join(contentDirectory, 'blog');
  
  if (!fs.existsSync(blogDir)) {
    return [];
  }

  const fileNames = fs.readdirSync(blogDir);
  const posts = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(blogDir, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      const stats = readingTime(content);

      return {
        slug,
        ...data,
        readingTime: stats.text,
        content,
      } as BlogPost;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  const posts = getBlogPosts();
  return posts.find((post) => post.slug === slug) || null;
}

export function getBlogCategories(): string[] {
  const posts = getBlogPosts();
  const categories = posts.map((post) => post.category);
  return Array.from(new Set(categories));
}

export function extractHeadings(content: string): Array<{ id: string; text: string; level: number }> {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const headings: Array<{ id: string; text: string; level: number }> = [];
  
  let match;
  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2];
    const id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-');
    
    headings.push({ id, text, level });
  }
  
  return headings;
}
