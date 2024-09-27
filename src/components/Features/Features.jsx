import "./Features.css";

const features = [
  {
    title: "Real-time Market Data",
    description:
      "Stay up-to-date with live cryptocurrency prices, market caps, and trading volumes from exchanges worldwide.",
    icon: "📊",
  },
  {
    title: "Advanced Charts",
    description:
      "Analyze price movements with our interactive charts featuring multiple time frames and technical indicators.",
    icon: "📈",
  },
  {
    title: "Secure Wallet",
    description:
      "Store your cryptocurrencies safely with our built-in wallet, featuring multi-factor authentication and cold storage options.",
    icon: "🔒",
  },
  {
    title: "Instant Exchange",
    description:
      "Swap between different cryptocurrencies quickly and easily with our integrated exchange feature.",
    icon: "🔄",
  },
  {
    title: "Trading Bots",
    description:
      "Automate your trading strategies with customizable bots that execute trades based on your predefined rules.",
    icon: "🤖",
  },
  {
    title: "Mobile App",
    description:
      "Access all features on-the-go with our powerful mobile app for iOS and Android devices.",
    icon: "📱",
  },
];

const Features = () => {
  return (
    <div className="features-section">
      <div className="features-container">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
