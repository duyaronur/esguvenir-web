import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import Link from 'next/link';

const components = {
  h1: (props: any) => <h1 className="text-4xl font-bold mt-8 mb-4" {...props} />,
  h2: (props: any) => <h2 className="text-3xl font-bold mt-8 mb-4" {...props} />,
  h3: (props: any) => <h3 className="text-2xl font-semibold mt-6 mb-3" {...props} />,
  h4: (props: any) => <h4 className="text-xl font-semibold mt-4 mb-2" {...props} />,
  p: (props: any) => <p className="mb-4 leading-relaxed" {...props} />,
  ul: (props: any) => <ul className="list-disc list-inside mb-4 space-y-2" {...props} />,
  ol: (props: any) => <ol className="list-decimal list-inside mb-4 space-y-2" {...props} />,
  li: (props: any) => <li className="ml-4" {...props} />,
  a: (props: any) => <Link className="text-primary hover:underline" {...props} />,
  img: (props: any) => (
    <Image
      className="rounded-lg my-8"
      width={800}
      height={500}
      {...props}
    />
  ),
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-accent pl-4 italic my-4 text-gray-600" {...props} />
  ),
  code: (props: any) => (
    <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm" {...props} />
  ),
  pre: (props: any) => (
    <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto my-4" {...props} />
  ),
};

export function MDXContent({ source }: { source: string }) {
  return <MDXRemote source={source} components={components} />;
}
