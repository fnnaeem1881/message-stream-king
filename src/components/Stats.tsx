const Stats = () => {
  const stats = [
    { value: "200B+", label: "Messages per month", description: "Delivered globally" },
    { value: "99.999%", label: "Uptime SLA", description: "Guaranteed reliability" },
    { value: "300ms", label: "Global latency", description: "Average message delivery" },
    { value: "10M+", label: "Concurrent connections", description: "Scale without limits" }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by millions of
            <span className="bg-gradient-hero bg-clip-text text-transparent"> developers</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Powers real-time experiences for companies of all sizes
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="relative">
                <h3 className="text-4xl md:text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </h3>
                <p className="text-lg font-semibold text-foreground mb-1">{stat.label}</p>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;