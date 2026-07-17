import { notFound } from 'next/navigation'
import { caseStudies } from '@/lib/case-studies'
import HeroSection from '@/components/case-study/HeroSection'
import OverviewSection from '@/components/case-study/OverviewSection'
import ProcessSection from '@/components/case-study/ProcessSection'
import FinalDesignsSection from '@/components/case-study/FinalDesignsSection'
import OutcomeSection from '@/components/case-study/OutcomeSection'
import ScrollToTop from '@/components/case-study/ScrollToTop'
import ScrollProgress from '@/components/case-study/ScrollProgress'
import { Metadata } from 'next'

interface PageProps {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const caseStudy = caseStudies[params.slug]
  
  if (!caseStudy) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: `${caseStudy.hero.title} | Case Study`,
    description: caseStudy.overview.briefIntro,
  }
}

export default function CaseStudyPage({ params }: PageProps) {
  const caseStudy = caseStudies[params.slug]

  if (!caseStudy) {
    notFound()
  }

  return (
    <article className="min-h-screen bg-background text-foreground pt-20 relative">
      <ScrollProgress />
      <HeroSection hero={caseStudy.hero} />
      <OverviewSection overview={caseStudy.overview} />
      <ProcessSection caseStudy={caseStudy} />
      <FinalDesignsSection finalDesignImage={caseStudy.finalDesignImage} />
      <OutcomeSection caseStudy={caseStudy} />
      <ScrollToTop />
    </article>
  )
}
