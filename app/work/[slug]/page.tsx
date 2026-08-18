import { notFound } from "next/navigation";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return [];
}

export default function CaseStudyPage({ params: _params }: Props) {
  notFound();
}
