import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { standees } from '@/data/standees'
import DesignGrid from '@/components/standee/DesignGrid'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'

export function generateStaticParams() {
  return standees.map((s) => ({ id: s.slug }))
}

export default async function StandeePage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  const index = standees.findIndex((s) => s.slug === id)
  if (index === -1) {
    notFound()
  }

  const standee = standees[index]
  const prevStandee = index > 0 ? standees[index - 1] : null
  const nextStandee = index < standees.length - 1 ? standees[index + 1] : null

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      {/* Breadcrumb */}
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/#standees">Standees</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{standee.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Page header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {standee.title}
        </h1>
        <p className="mt-3 text-muted-foreground text-lg max-w-2xl">
          {standee.description}
        </p>
      </div>

      {/* Design grid */}
      <DesignGrid designs={standee.designs} />

      {/* Prev / Next navigation */}
      <div className="mt-12 flex items-center justify-between gap-4">
        {/* Prev */}
        {prevStandee ? (
          <Button
            variant="outline"
            size="default"
            nativeButton={false}
            render={<Link href={`/standees/${prevStandee.slug}`} />}
          >
            <ChevronLeft className="size-4" />
            {prevStandee.title}
          </Button>
        ) : (
          /* Hidden placeholder to keep next button right-aligned */
          <span aria-hidden="true" />
        )}

        {/* Next */}
        {nextStandee ? (
          <Button
            variant="outline"
            size="default"
            nativeButton={false}
            render={<Link href={`/standees/${nextStandee.slug}`} />}
          >
            {nextStandee.title}
            <ChevronRight className="size-4" />
          </Button>
        ) : (
          <span aria-hidden="true" />
        )}
      </div>
    </div>
  )
}
