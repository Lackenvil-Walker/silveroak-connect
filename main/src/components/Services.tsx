import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              We offer comprehensive immigration assistance and permit processing services with pre-checks 
              to ensure a 100% success rate. Our expertise covers the full spectrum of South African visa 
              and residency options.
            </p>
          </div>

          <Card className="p-6 md:p-8 shadow-lg">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="visa-system">
                <AccordionTrigger className="text-xl font-semibold">
                  Understanding the South African Visa System
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Who Issues Visas in South Africa?</h4>
                    <p>The <strong>Department of Home Affairs (DHA)</strong> is the national authority responsible for managing all visa and immigration matters. Most visa applicants use <strong>VFS Global</strong>, a government-authorised service provider that handles application intake, biometric enrollment, and tracking under DHA oversight.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Temporary vs Permanent Residence</h4>
                    <p>The DHA divides immigration pathways into <strong>temporary residence</strong> (for defined durations and specific purposes) and <strong>permanent residence</strong> (allowing indefinite legal stay). Some temporary visas are directly convertible to permanent status.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Port of Entry vs Long-Stay Visa</h4>
                    <p><strong>Port of Entry Visas</strong> are granted at the border for short-term visits. <strong>Long-stay visas</strong> require detailed applications through VFS Global with processing times of at least 60 days.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="visitor-tourist">
                <AccordionTrigger className="text-xl font-semibold">
                  Visitor and Tourist Visas
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Visitor Visa (up to 90 days)</h4>
                    <p>Permits short stays for tourism, business, medical treatment, or family visits. Requires proof of return travel, sufficient funds, and defined purpose. Does not authorise employment or formal study.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Port of Entry Visa</h4>
                    <p>Granted at the border to visa-exempt nationals, typically for 30-90 days. No pre-application required, but border officials may request proof of accommodation and financial means.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Extension and Overstay Policy</h4>
                    <p>Extensions up to 90 additional days possible through VFS Global. Overstaying may result in bans from re-entering South Africa for up to five years.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="family">
                <AccordionTrigger className="text-xl font-semibold">
                  Family and Accompaniment Visas
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Spousal Visa</h4>
                    <p>For foreign spouses of South African citizens or permanent residents. Valid for 2-3 years and may be endorsed for work, business, or study rights.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Life Partner Visa</h4>
                    <p>For unmarried partners with at least two years of documented cohabitation. Can include work or study rights if endorsed.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Visitor Visa Section 11(6)</h4>
                    <p>Special category for foreign spouses/partners allowing work or business operation if endorsed. Valid for 2-3 years with simplified path to permanent residence.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Relative's Visa</h4>
                    <p>For first-degree family members (children, parents, siblings) of South African citizens or permanent residents. Sponsor must demonstrate financial ability to support the applicant.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="work">
                <AccordionTrigger className="text-xl font-semibold">
                  Work Visas and Professional Permits
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">General Work Visa (Points-Based)</h4>
                    <p>Requires minimum 100 points based on qualifications, salary, experience, and employer status. Valid for up to 5 years, renewable. No need to prove unavailability of local workers.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Critical Skills Work Visa</h4>
                    <p>For high-demand occupations on the critical skills list. Requires job offer and 100-point minimum. Valid for up to 5 years with path to permanent residence.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Intra-Company Transfer Visa</h4>
                    <p>For corporate relocations within global companies. Employee must have worked at foreign branch for 6+ months. Maximum 4 years, non-renewable.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Corporate Visa</h4>
                    <p>For companies authorised to employ a quota of foreign nationals. Common in mining, agriculture, and construction sectors.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Section 11(2) – Temporary Work</h4>
                    <p>Short-term work authorisations up to 90 days for urgent technical support or consulting projects. Non-renewable.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="study">
                <AccordionTrigger className="text-xl font-semibold">
                  Study and Academic Visas
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Study Visa</h4>
                    <p>For foreign nationals pursuing formal education at registered South African institutions. Valid for programme duration. Part-time work rights up to 20 hours/week available with endorsement.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="digital-nomad">
                <AccordionTrigger className="text-xl font-semibold">
                  Digital Nomad Visa (2024)
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Remote Work Residency</h4>
                    <p>For remote workers employed by foreign entities. Requires proof of full-time remote employment or sustained freelance income, valid health insurance, and fixed address in South Africa.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Limitations</h4>
                    <p>Does not authorise local employment or business operation. Valid for one year, renewable. Not a pathway to permanent residence.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="business">
                <AccordionTrigger className="text-xl font-semibold">
                  Business and Investment Visas
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Business Visa</h4>
                    <p>For establishing or investing in South African businesses. Requires comprehensive business plan, CIPC registration, and generally ZAR 5 million capital investment. Must demonstrate job creation for citizens. Valid for up to 3 years, renewable.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Investment-Based Residency</h4>
                    <p>High-net-worth individuals may qualify for permanent residence based on financial independence or substantial business contributions.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="permanent">
                <AccordionTrigger className="text-xl font-semibold">
                  Permanent Residence Permits
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Eligibility Categories</h4>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong>Direct Residence:</strong> 5 consecutive years with valid work visa and permanent job offer</li>
                      <li><strong>Relative's Permit:</strong> First-degree family members of SA citizens or permanent residents</li>
                      <li><strong>Critical Skills:</strong> Active employment in listed occupation with critical skills visa</li>
                      <li><strong>Financial Independence:</strong> Net assets exceeding ZAR 12 million</li>
                      <li><strong>Retired Person:</strong> Sustained income meeting retired person criteria</li>
                    </ul>
                  </div>
                  <div>
                    <p>All categories require clean immigration history, medical and police clearances, and proof of long-term residency intent.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="retirement">
                <AccordionTrigger className="text-xl font-semibold">
                  Retirement Visas
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Passive Income-Based Residency</h4>
                    <p>Requires stable passive income of at least <strong>ZAR 37,000 per month</strong> from pensions, annuities, dividends, or investments. Valid for up to 4 years, renewable. Path to permanent residence available after sustained compliance.</p>
                  </div>
                  <div>
                    <p><strong>Note:</strong> Employment and commercial activities not permitted unless specifically endorsed by DHA.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="medical">
                <AccordionTrigger className="text-xl font-semibold">
                  Medical Treatment Visa
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 space-y-4">
                  <div>
                    <p>For receiving medical care at recognised South African healthcare institutions. Requires admission letter, treatment plan, proof of funding, and travel insurance. Valid for maximum 6 months with possible extensions on medical grounds.</p>
                  </div>
                  <div>
                    <p>Companions or carers may apply for linked visitor visa for the same period.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="exchange">
                <AccordionTrigger className="text-xl font-semibold">
                  Exchange Visa (Section 22)
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 space-y-4">
                  <div>
                    <p>For educational, cultural, or internship programmes. Covers academic exchanges, cultural residencies, approved internships, and visiting researchers. Valid for programme duration, up to 12 months. Non-renewable and cannot be converted to another visa type.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>

          <div className="mt-12 text-center">
            <Card className="p-6 bg-primary/5 border-primary/20">
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Why Choose SILVEROAK PARTNERS?
              </h3>
              <p className="text-lg text-foreground/80 mb-4">
                Our comprehensive pre-check process ensures all documentation is complete and accurate before submission, 
                giving us a 100% success rate in visa approvals.
              </p>
              <p className="text-foreground/70">
                Contact us today to discuss your immigration needs and let our experts guide you through the process.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
