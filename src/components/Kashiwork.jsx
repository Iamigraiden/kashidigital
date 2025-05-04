import React from 'react';
import { CreditCard, Gauge, ArrowDownUp } from 'lucide-react';

const Kashiwork = () => {
  const features = [
    {
      icon: <CreditCard size={48} strokeWidth={1.5} className="text-primary" />,
      title: "Token-Based Wallet Recharge",
      description: "Recharge your wallet with the minimum amount needed for your plan, with no monthly fees. Each API call consumes tokens based on the type of API."
    },
    {
      icon: <Gauge size={48} strokeWidth={1.5} className="text-warning" />,
      title: "Real-Time Rate Limits",
      description: "Manage your API call usage within fair, predetermined limits. Once the rate limit is reached, simply recharge to continue."
    },
    {
      icon: <ArrowDownUp size={48} strokeWidth={1.5} className="text-success" />,
      title: "Complete Cost Control",
      description: "Our flexible, usage-based model empowers you to scale up or down seamlessly as your business demands change, ensuring you pay only for the services you need."
    }
  ];

  return (
    <section className="py-5 bg-light" style={{ backgroundColor: '#F7F9FC' }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold color-liblue">How <span className='color-orange'>Kashi Digital</span> API Works</h2>
        </div>

        <div className="row g-4">
          {features.map((feature, index) => (
            <div className="col-md-4" key={index}>
              <div className="card h-100 border-0 p-4 shadow-sm">
                <div className="text-center mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-center mb-3">{feature.title}</h4>
                <p className="text-muted text-center">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Kashiwork;