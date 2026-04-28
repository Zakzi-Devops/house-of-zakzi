interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "left" | "center";
}

const SectionHeading = ({ eyebrow, title, body, align = "center" }: SectionHeadingProps) => {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-2xl ${alignClass} mb-14`}>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h2 className="font-serif text-3xl md:text-5xl leading-tight text-primary">{title}</h2>
      {body && (
        <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
          {body}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
