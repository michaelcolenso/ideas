const stats = [
  { value: "2,400+", label: "Happy customers" },
  { value: "$0", label: "Platform fees" },
  { value: "< 60s", label: "Delivery time" },
  { value: "100%", label: "Source code included" },
];

export default function SocialProof() {
  return (
    <section className="py-16 px-6 border-y border-gray-100">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-1">
              {stat.value}
            </div>
            <div className="text-sm text-gray-500">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
