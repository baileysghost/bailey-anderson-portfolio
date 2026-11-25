import Video from "../../../components/Video";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import projects from "../../../content/projects.json";
import { Artwork, Icon, media } from "../../../components/visuals";
type Props = { params: Promise<{ slug: string }> };
export const generateStaticParams = () =>
  projects.map(({ slug }) => ({ slug }));
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((p) => p.slug === slug);
  return p
    ? {
        title: p.name,
        description: p.summary,
        ...(process.env.VERCEL_PROJECT_PRODUCTION_URL
          ? { alternates: { canonical: "/work/" + slug + "/" } }
          : {}),
      }
    : {};
}
export default async function Study({ params }: Props) {
  const { slug } = await params;
  const p = projects.find((o) => o.slug === slug);
  if (!p) notFound();
  const next = projects[(projects.indexOf(p) + 1) % projects.length];
  const figures = media[slug];
  return (
    <main id="main" className="study wrap">
      <div id="top" />
      <a className="back" href="/#work">
        ← Selected work
      </a>
      <div className="kicker">
        <span />
        {p.category}
      </div>
      <h1>
        {p.name}
        <span className="accent">.</span>
      </h1>
      <p className="standfirst">{p.summary}</p>
      <div className="tags">
        <span className="statusTag">{p.status}</span>
        {p.tags.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
      <figure className="leadfigure">
        <Artwork slug={slug} />
        <figcaption>
          {figures?.[0].caption ??
            (slug === "algogemix"
              ? "Illustrative signal study · Synthetic data"
              : "Architecture study · Proposed workflow")}
        </figcaption>
      </figure>
      <div className="casegrid">
        {[
          ["The problem", p.problem],
          ["My role", p.role],
          ["Solution", p.solution],
          ["Technical architecture", p.architecture],
          ["AI’s role", p.ai],
          ["Design challenge", p.challenge],
          ["Project status", p.progress],
        ].map(([h, v]) => (
          <section key={h}>
            <h2>{h}</h2>
            <p>{v}</p>
          </section>
        ))}
      </div>
      {figures?.slice(1).map((im) => (
        <figure key={im.file} className="gallery">
          <a href={"/media/" + im.file}>
            <img loading="lazy" src={"/media/" + im.file} alt={im.alt} />
          </a>
          <figcaption>{im.caption}</figcaption>
        </figure>
      ))}
      {slug === "algogemix" && (
        <Video id="2pacDCyzeKc" title="Grid Pro demonstration" />
      )}
      {slug === "nations-ghost" && (
        <Video id="ZkS8AA4Ew8M" title="Blocc Blocc · official music video" />
      )}
      {p.links.length > 0 && (
        <div className="actions">
          {p.links.map(([label, url]) => (
            <a className="button secondary" key={url} href={url}>
              {label}
              <Icon name="out" />
            </a>
          ))}
        </div>
      )}
      <a className="nextwork" href={"/work/" + next.slug + "/"}>
        <span className="category">Next case study</span>
        <strong>{next.name} ↗</strong>
      </a>
    </main>
  );
}
