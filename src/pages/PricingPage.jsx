import { Check, Zap, Shield, BarChart, Users, Settings, Globe, Headphones } from 'lucide-react';
import Comp from '../components/forms/Comp';

const PricingPage = () => {
  const plans = [
    {
      name: "Starter",
      price: "₹2,999",
      period: "/month",
      description: "Perfect for small businesses getting started with API verification",
      cta: "Start Free Trial",
      features: [
        "500 API verifications/month",
        "PAN, Aadhaar & GST verification",
        "Email support (48h response)",
        "Basic documentation",
        "99.5% uptime SLA"
      ],
      icon: <Zap className="w-5 h-5 text-blue-500" />,
      popular: false
    },
    {
      name: "Business",
      price: "₹9,999",
      period: "/month",
      description: "For growing businesses needing advanced verification",
      cta: "Get Started",
      features: [
        "5,000 API verifications/month",
        "All Starter features plus RC verification",
        "Priority support (24h response)",
        "Advanced documentation",
        "99.9% uptime SLA",
        "Team access (5 users)",
        "Basic analytics dashboard"
      ],
      icon: <Shield className="w-5 h-5 text-green-500" />,
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations with high-volume needs",
      cta: "Contact Sales",
      features: [
        "Unlimited verifications",
        "All Business features plus Challan verification",
        "24/7 dedicated support",
        "Enterprise-grade security",
        "99.99% uptime SLA",
        "Unlimited team access",
        "Advanced analytics & reporting",
        "Dedicated account manager",
        "Custom integrations"
      ],
      icon: <Globe className="w-5 h-5 text-purple-500" />,
      popular: false
    }
  ];

  return (
    <Comp/>
  );
};

export default PricingPage;