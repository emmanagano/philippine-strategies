type PageHeaderProps = {
  title: string;
  subtitle?: string;
};

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="py-16 text-center">
      <h1 className="text-5xl font-extrabold text-gray-900 tracking-wide uppercase">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </section>
  );
}
