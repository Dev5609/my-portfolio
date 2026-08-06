interface SectionHeadingProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}

/**
 * Typographic section header — an eyebrow rule + label instead of the
 * repeated badge pills, paired with large serif display type.
 */
const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) => {
  const centered = align === "center";

  return (
    <div
      className={`${centered ? "mx-auto max-w-2xl text-center" : "max-w-3xl"} ${className}`}
    >
      <div
        data-reveal
        className={`eyebrow mb-6 ${centered ? "justify-center" : ""}`}
      >
        {eyebrow}
      </div>
      <h2
        data-reveal
        className="display text-display-sm md:text-display-md text-bone"
      >
        {title}
      </h2>
      {description && (
        <p
          data-reveal
          className={`mt-6 text-base md:text-lg font-light leading-relaxed text-muted-foreground ${centered ? "mx-auto" : "max-w-xl"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
