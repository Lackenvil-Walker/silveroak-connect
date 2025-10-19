import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Clock, Shield } from "lucide-react";

const ImmigrationAssessment = () => {
  return (
    <section id="assessment" className="py-20 md:py-32 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Free Immigration Assessment
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Get expert guidance tailored to your immigration needs. Our comprehensive assessment 
              includes prechecks to ensure the highest success rate for your application.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 text-center border-border hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">100% Success Rate</h3>
              <p className="text-foreground/70">
                Our thorough prechecks ensure your application meets all requirements before submission.
              </p>
            </Card>

            <Card className="p-6 text-center border-border hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Same-Day Response</h3>
              <p className="text-foreground/70">
                We respond to assessments on the same working day, getting you started quickly.
              </p>
            </Card>

            <Card className="p-6 text-center border-border hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Expert Guidance</h3>
              <p className="text-foreground/70">
                Decades of experience navigating the South African immigration system.
              </p>
            </Card>
          </div>

          <Card className="p-8 md:p-12 border-border shadow-xl">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Understanding the South African Visa System
            </h3>
            <div className="space-y-6 text-foreground/80 leading-relaxed">
              <div>
                <h4 className="font-bold text-foreground text-lg mb-3">DHA, VFS Global and Entry Routes</h4>
                <p>
                  Navigating the South African immigration framework begins with understanding the roles 
                  of its regulatory institutions, the structure of residence pathways, and the distinction 
                  between entry-level and long-stay authorization.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-foreground text-lg mb-3">Who Issues Visas in South Africa?</h4>
                <p>
                  The <strong>Department of Home Affairs (DHA)</strong> is the national authority responsible 
                  for managing all visa and immigration matters. It defines eligibility criteria, processes 
                  approvals, and maintains the legal framework for both temporary and permanent residence.
                </p>
                <p className="mt-3">
                  Most visa applicants, particularly those applying from abroad, are required to use{" "}
                  <strong>VFS Global</strong>, a government-authorized service provider that handles application 
                  intake, biometric enrollment, and tracking under DHA oversight.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-foreground text-lg mb-3">Temporary vs Permanent Residence</h4>
                <p>
                  The DHA divides immigration pathways into <strong>temporary residence</strong> and{" "}
                  <strong>permanent residence</strong> categories. Temporary residence visas are issued for 
                  defined durations and specific purposes such as tourism, work, study, retirement or spousal 
                  accompaniment.
                </p>
                <p className="mt-3">
                  Permanent residence permits allow indefinite legal stay and may be obtained through work 
                  tenure, family status, financial means, or skilled occupation registration.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-foreground text-lg mb-3">Port of Entry Visa vs Long-Stay Visa</h4>
                <p>
                  <strong>Port of Entry Visas</strong> are granted to foreign nationals who require prior 
                  approval to enter South Africa for short-term visits, including business meetings, conferences, 
                  and tourism.
                </p>
                <p className="mt-3">
                  <strong>Long-stay visas</strong>, such as the General Work Visa or Study Visa, require a more 
                  detailed application process, including background checks, endorsements, and specific documentation 
                  aligned with the intended stay. Applicants are advised to apply at least 60 days before intended 
                  travel.
                </p>
              </div>
            </div>

            <div className="mt-10 text-center">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6"
                asChild
              >
                <a href="tel:0788868980">
                  Schedule Your Free Assessment
                </a>
              </Button>
              <p className="mt-4 text-sm text-foreground/60">
                Call us at 0788868980 or email info@silveroakpartners.com
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ImmigrationAssessment;