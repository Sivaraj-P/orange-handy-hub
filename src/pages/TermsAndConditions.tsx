import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Shield, Users, FileText, Scale, CreditCard, UserCheck, Baby, Gavel } from "lucide-react";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold">
              Terms & <span className="text-primary">Conditions</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Last updated: January 2025 · Governed by Indian Law
            </p>
          </div>

          <div className="grid gap-6">

            {/* 1. Introduction */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-6 w-6 text-primary" />
                  Introduction & Acceptance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  These Terms and Conditions ("Terms") govern your use of the Man Power platform ("Platform" or "Service"). By registering or using the Platform, you agree to be legally bound by these Terms.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms are a legally binding contract under the <span className="font-medium text-foreground">Information Technology Act, 2000</span> and the <span className="font-medium text-foreground">Indian Contract Act, 1872</span>. If you do not agree, please do not use the Platform.
                </p>
              </CardContent>
            </Card>

            {/* 2. Eligibility */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Baby className="h-6 w-6 text-primary" />
                  Eligibility
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">To use the Platform, you must:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Be at least <span className="font-medium text-foreground">18 years of age</span></li>
                  <li>Be legally competent to enter into a contract under Indian law</li>
                  <li>Provide accurate, complete, and truthful information during registration</li>
                  <li>Maintain only one account per person</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  The Platform is not intended for minors. We do not knowingly allow users under 18 to register.
                </p>
              </CardContent>
            </Card>

            {/* 3. Platform Role */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-6 w-6 text-primary" />
                  Nature of the Platform
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Man Power is an <span className="font-medium text-foreground">intermediary platform</span> as defined under the IT Act, 2000, connecting individuals ("Users") seeking services with individuals offering services ("Workers").
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Man Power does not employ Workers or guarantee the quality of services</li>
                  <li>All service agreements are directly between Users and Workers</li>
                  <li>Man Power is not a party to any transaction or service contract</li>
                  <li>We do not verify or endorse any Worker's credentials unless explicitly stated</li>
                </ul>
                <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                  <p className="text-sm text-yellow-800 dark:text-yellow-400">
                    ⚠️ Users engage with Workers at their own discretion. Man Power strongly recommends verifying credentials and agreeing on terms before hiring.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* 4. Public Profile & Visibility */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-6 w-6 text-primary" />
                  User Profiles & Public Visibility
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  By creating a profile on Man Power, you acknowledge and agree that:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Your profile information (name, photo, work details, location, salary expectations, etc.) may be <span className="font-medium text-foreground">publicly visible</span> to other platform users</li>
                  <li>Other users may contact you based on your listed information</li>
                  <li>You are solely responsible for the accuracy of the information you share</li>
                  <li>You must not impersonate another person or misrepresent your qualifications</li>
                </ul>
                <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                  <p className="text-sm text-yellow-800 dark:text-yellow-400">
                    ⚠️ Do not share sensitive personal information (e.g., Aadhaar number, bank details) on your public profile.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* 5. User Responsibilities */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserCheck className="h-6 w-6 text-primary" />
                  User Responsibilities & Communication Guidelines
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="text-lg font-semibold">Direct Communication Policy</h3>
                <p className="text-muted-foreground leading-relaxed">
                  All communication between Users and Workers must be professional, respectful, and relevant to the services being offered or requested.
                </p>

                <h3 className="text-lg font-semibold">Prohibited Conduct</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Harassment, threats, abuse, or discriminatory behavior</li>
                  <li>Sharing false or misleading information about services, qualifications, or rates</li>
                  <li>Spamming or sending unsolicited promotional content</li>
                  <li>Attempting to conduct transactions outside the platform to evade accountability</li>
                  <li>Uploading obscene, offensive, or illegal content</li>
                  <li>Any activity that violates Indian Penal Code (IPC) or IT Act provisions</li>
                </ul>

                <h3 className="text-lg font-semibold">Account Security</h3>
                <p className="text-muted-foreground leading-relaxed">
                  You are responsible for maintaining the confidentiality of your account credentials. Notify us immediately at manpowerindiasky2024@gmail.com if you suspect unauthorized access.
                </p>
              </CardContent>
            </Card>

            {/* 6. Payments */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-6 w-6 text-primary" />
                  Payments & Transactions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Man Power facilitates connections between Users and Workers. Regarding payments:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Payment arrangements are made directly between Users and Workers</li>
                  <li>Man Power is not responsible for payment disputes between parties</li>
                  <li>All transactions must comply with applicable Indian financial regulations including <span className="font-medium text-foreground">FEMA</span> and <span className="font-medium text-foreground">RBI guidelines</span></li>
                  <li>Users are responsible for payment of any applicable taxes (including GST) on services rendered</li>
                </ul>
              </CardContent>
            </Card>

            {/* 7. Account Deactivation */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-6 w-6 text-primary" />
                  Account Suspension & Deactivation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="text-lg font-semibold">Grounds for Action</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li><span className="font-medium text-foreground">Misleading Information:</span> False credentials, fake reviews, or misrepresentation of services</li>
                  <li><span className="font-medium text-foreground">Inappropriate Conduct:</span> Harassment, discrimination, or abusive behavior</li>
                  <li><span className="font-medium text-foreground">Fraud or Scams:</span> Attempting to defraud users or misuse the platform</li>
                  <li><span className="font-medium text-foreground">Policy Violations:</span> Repeated violations of these Terms or community guidelines</li>
                  <li><span className="font-medium text-foreground">Legal Violations:</span> Activities violating Indian laws, including the IT Act, IPC, or consumer protection laws</li>
                </ul>

                <h3 className="text-lg font-semibold">Enforcement Process</h3>
                <div className="space-y-3">
                  <p className="text-muted-foreground"><span className="font-medium text-foreground">Warning:</span> First violation may result in a warning and account review</p>
                  <p className="text-muted-foreground"><span className="font-medium text-foreground">Temporary Suspension:</span> Serious violations may lead to temporary account suspension</p>
                  <p className="text-muted-foreground"><span className="font-medium text-foreground">Permanent Deactivation:</span> Severe or repeated violations result in permanent removal</p>
                </div>

                <p className="text-muted-foreground leading-relaxed text-sm italic">
                  Man Power reserves the right to report illegal activities to appropriate law enforcement authorities.
                </p>
              </CardContent>
            </Card>

            {/* 8. Intellectual Property */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-6 w-6 text-primary" />
                  Intellectual Property
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  All platform content including design, logo, and features are the intellectual property of Man Power and protected under Indian copyright law.
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>You retain ownership of content you upload (photos, work descriptions)</li>
                  <li>By uploading content, you grant Man Power a non-exclusive licence to display it on the platform</li>
                  <li>You must not use Man Power's branding or content without written permission</li>
                </ul>
              </CardContent>
            </Card>

            {/* 9. Limitation of Liability */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Scale className="h-6 w-6 text-primary" />
                  Limitation of Liability & Disclaimer
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  To the maximum extent permitted under Indian law:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Man Power is not liable for any loss, damage, or injury arising from services performed by Workers</li>
                  <li>We do not guarantee continuous, uninterrupted access to the platform</li>
                  <li>Man Power is not responsible for disputes, fraud, or misconduct between Users and Workers</li>
                  <li>The platform is provided "as is" without warranties of any kind</li>
                </ul>
              </CardContent>
            </Card>

            {/* 10. Governing Law */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gavel className="h-6 w-6 text-primary" />
                  Governing Law & Dispute Resolution
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  These Terms are governed by the laws of <span className="font-medium text-foreground">India</span>. Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of courts in India.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We encourage users to resolve disputes amicably. For unresolved issues, users may approach the appropriate consumer forum under the <span className="font-medium text-foreground">Consumer Protection Act, 2019</span>.
                </p>
              </CardContent>
            </Card>

            {/* 11. Changes to Terms */}
            <Card>
              <CardHeader>
                <CardTitle>Changes to These Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  We may revise these Terms from time to time. Significant changes will be communicated via email or in-app notification. Continued use of the Platform after changes constitutes acceptance of the updated Terms.
                </p>
              </CardContent>
            </Card>

            {/* 12. Contact & Grievance */}
            <Card>
              <CardHeader>
                <CardTitle>Contact & Grievance Officer</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="text-lg font-semibold">Grievance Officer (As required by IT Act, 2000)</h3>
                <p className="text-muted-foreground leading-relaxed">
                  For complaints, queries, or reports of violations, contact our Grievance Officer:
                  <br />
                  <span className="font-medium text-foreground">Email:</span> manpowerindiasky2024@gmail.com
                  <br />
                  <span className="font-medium text-foreground">Response Time:</span> Within 30 days of receipt
                </p>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TermsAndConditions;