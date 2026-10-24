import Image from "next/image";

export function PageIntro({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="page-shell py-10 md:py-16">
      <div className="grid gap-8 md:grid-cols-12 md:items-end">
        <div className="md:col-span-8">
          <p className="annotation text-[var(--accent-strong)]">{eyebrow}</p>
          <h1 className="section-title mt-5 max-w-5xl text-balance">{title}</h1>
        </div>
        <p className="max-w-md text-sm leading-7 text-[var(--muted)] md:col-span-4 md:justify-self-end md:text-base">
          {description}
        </p>
      </div>
      <div className="image-plate relative mt-10 aspect-[4/3] w-full md:mt-16 md:aspect-[16/8] md:min-h-80">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="(min-width: 1536px) 1536px, 100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
