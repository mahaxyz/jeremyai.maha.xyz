import { Report } from '@/lib/pages/reports';

export function generateStaticParams() {
  // const posts = await fetch('https://.../posts').then((res) => res.json())
  // return posts.map((post) => ({
  //   slug: post.slug,
  // }))
  return [{ report: '1' }, { report: '2' }, { report: '3' }];
}

// export default Report;

// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default async function Page({
  params,
}: {
  params: Promise<{ report: string }>
}) {
  const { report } = await params
  // ...
  return <Report report={report} />
}
