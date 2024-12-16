interface PropertySearchCardProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export function PropertySearchCard({
  title,
  description,
  children,
}: PropertySearchCardProps) {
  return (
    <div className="airbnb-card">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-secondary">
          {title}
        </h2>
        <p className="mt-2 text-muted">
          {description}
        </p>
      </div>

      <div className="mt-8">
        {children}
      </div>
    </div>
  );
}
