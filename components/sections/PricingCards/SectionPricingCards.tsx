import React, { useState } from "react";
import { Check, X, Zap, Star } from "lucide-react";

/**
 * Pricing Cards Section Component
 * Displays pricing plans with features and comparison
 * Can be used on Services or dedicated Pricing page
 */
const SectionPricingCards = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  const pricingPlans = [
    {
      name: "Starter",
      description: "Perfect for small projects and startups",
      price: { monthly: 999, yearly: 899 },
      features: [
        { included: true, text: "5 Pages Website" },
        { included: true, text: "Responsive Design" },
        { included: true, text: "Basic SEO Setup" },
        { included: true, text: "Contact Form" },
        { included: true, text: "1 Month Support" },
        { included: false, text: "Custom Features" },
        { included: false, text: "Priority Support" },
        { included: false, text: "Analytics Dashboard" },
      ],
      popular: false,
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses",
      price: { monthly: 2499, yearly: 2249 },
      features: [
        { included: true, text: "15 Pages Website" },
        { included: true, text: "Advanced Responsive Design" },
        { included: true, text: "Full SEO Optimization" },
        { included: true, text: "Multiple Contact Forms" },
        { included: true, text: "3 Months Support" },
        { included: true, text: "Custom Features" },
        { included: true, text: "Priority Support" },
        { included: false, text: "Analytics Dashboard" },
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      description: "For large-scale projects and enterprises",
      price: { monthly: 4999, yearly: 4499 },
      features: [
        { included: true, text: "Unlimited Pages" },
        { included: true, text: "Premium Design System" },
        { included: true, text: "Advanced SEO & Marketing" },
        { included: true, text: "Custom Integrations" },
        { included: true, text: "6 Months Support" },
        { included: true, text: "Custom Features" },
        { included: true, text: "24/7 Priority Support" },
        { included: true, text: "Advanced Analytics" },
      ],
      popular: false,
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan for your needs. No hidden fees.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className={`text-sm font-medium ${billingCycle === "monthly" ? "text-gray-900 dark:text-white" : "text-gray-500"}`}>
            Monthly
          </span>
          <button
            onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
            className={`relative w-16 h-8 rounded-full transition-colors ${
              billingCycle === "yearly" ? "bg-primary" : "bg-gray-300 dark:bg-slate-600"
            }`}
          >
            <div
              className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform ${
                billingCycle === "yearly" ? "translate-x-8" : "translate-x-1"
              }`}
            />
          </button>
          <span className={`text-sm font-medium ${billingCycle === "yearly" ? "text-gray-900 dark:text-white" : "text-gray-500"}`}>
            Yearly
          </span>
          <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-xs font-semibold">
            <Zap className="w-3 h-3" />
            Save 10%
          </span>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${
                plan.popular
                  ? "border-primary scale-105"
                  : "border-gray-100 dark:border-slate-700 hover:border-gray-200 dark:hover:border-slate-600"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="inline-flex items-center gap-1 px-4 py-2 bg-gradient-to-r from-primary to-primary/80 text-white rounded-full text-sm font-semibold shadow-lg">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Name */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="text-center mb-8">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold text-gray-900 dark:text-white">
                    ${billingCycle === "monthly" ? plan.price.monthly : plan.price.yearly}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400">
                    /{billingCycle === "monthly" ? "month" : "year"}
                  </span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    {feature.included ? (
                      <div className="flex-shrink-0 w-5 h-5 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-green-600 dark:text-green-400" />
                      </div>
                    ) : (
                      <div className="flex-shrink-0 w-5 h-5 bg-gray-100 dark:bg-slate-700 rounded-full flex items-center justify-center mt-0.5">
                        <X className="w-3 h-3 text-gray-400" />
                      </div>
                    )}
                    <span className={`text-sm ${feature.included ? "text-gray-900 dark:text-white" : "text-gray-400"}`}>
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button
                className={`w-full py-4 rounded-xl font-semibold transition-all ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl"
                    : "bg-gray-100 dark:bg-slate-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-slate-600"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Contact for Custom */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Need a custom solution?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            Contact us for a quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default SectionPricingCards;
