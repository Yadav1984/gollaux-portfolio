import { notFound } from 'next/navigation'
import { caseStudies } from '@/lib/case-studies'
import HeroSection from '@/components/case-study/HeroSection'
import OverviewSection from '@/components/case-study/OverviewSection'
import ProcessSection from '@/components/case-study/ProcessSection'
import FinalDesignsSection from '@/components/case-study/FinalDesignsSection'
import CollaborationSection from '@/components/case-study/CollaborationSection'
import OutcomeSection from '@/components/case-study/OutcomeSection'
import DesignSystemOverviewSection from '@/components/case-study/DesignSystemOverviewSection'
import DesignSystemProcessSection from '@/components/case-study/DesignSystemProcessSection'
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

  const isDesignSystem = caseStudy.slug === 'enterprise-design-system'

  return (
    <article className="min-h-screen bg-background text-foreground pt-20 relative">
      <ScrollProgress />
      <HeroSection hero={caseStudy.hero} />
      
      {isDesignSystem ? (
        <>
          <DesignSystemOverviewSection caseStudy={caseStudy} />
          <DesignSystemProcessSection caseStudy={caseStudy} />
        </>
      ) : (
        <>
          <OverviewSection caseStudy={caseStudy} />
          <ProcessSection caseStudy={caseStudy} />
          <FinalDesignsSection finalDesignImage={caseStudy.finalDesignImage} />
          <CollaborationSection caseStudy={caseStudy} />
          <OutcomeSection caseStudy={caseStudy} />
        </>
      )}
      
      <ScrollToTop />
    </article>
  )
}
