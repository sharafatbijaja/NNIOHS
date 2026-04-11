import { Services } from "@/Constant/Constant";
import PageWrapper from "@/components/common/PageWrapper";
import PageTitle from "@/components/common/PageTitle";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { notFound } from "next/navigation";

const ServicePage = async ({ params }: { params: Promise<{ serviceId: string }> }) => {
  const { serviceId } = await params;
  const service = Services.find((s) => s.id === serviceId);

  if (!service) {
    notFound();
  }

  return (
    <PageWrapper>
      <div className="max-w-4xl mx-auto">
        <Link
          href="/services"
          className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Services
        </Link>

        <PageTitle
          title={service.name}
          subtitle="Our Services"
          description={service.description}
        />

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            What We Offer
          </h2>
          <div className="grid gap-4">
            {service.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 p-4 bg-gray-50 dark:bg-slate-800/50 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
              >
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 p-8 bg-linear-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 rounded-2xl">
          <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
            Ready to Get Started?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Let's discuss how {service.name} can help your business grow.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all font-semibold"
          >
            Contact Us Today
          </Link>
        </div>
      </div>
    </PageWrapper>
  );
};

export default ServicePage;
