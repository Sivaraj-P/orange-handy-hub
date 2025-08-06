import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Shield, Users } from "lucide-react";

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
              Last updated: January 2024
            </p>
          </div>

          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-6 w-6 text-primary" />
                  User Responsibilities & Communication Guidelines
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="text-lg font-semibold">Direct Communication Policy</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Man Power facilitates direct communication between users and workers. All communication must be professional, respectful, and related to the services being offered or requested.
                </p>
                
                <h3 className="text-lg font-semibold">Prohibited Communication</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Harassment, threats, or inappropriate behavior</li>
                  <li>Sharing personal contact information outside the platform initially</li>
                  <li>Misleading information about services, rates, or qualifications</li>
                  <li>Spam or unsolicited promotional content</li>
                  <li>Requests for services outside the platform to avoid fees</li>
                </ul>

                <h3 className="text-lg font-semibold">Account Verification</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Workers must provide accurate information about their skills, experience, and qualifications. Customers must provide accurate project details and requirements.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-6 w-6 text-primary" />
                  Account Deactivation & Violations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="text-lg font-semibold">Grounds for Account Deactivation</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li><strong>Misleading Information:</strong> Providing false credentials, fake reviews, or misrepresenting services</li>
                  <li><strong>Inappropriate Conduct:</strong> Harassment, discrimination, or unprofessional behavior</li>
                  <li><strong>Fraud or Scams:</strong> Attempting to defraud other users or misuse the platform</li>
                  <li><strong>Policy Violations:</strong> Repeated violations of community guidelines or terms of service</li>
                  <li><strong>Safety Concerns:</strong> Actions that compromise user safety or platform integrity</li>
                </ul>

                <h3 className="text-lg font-semibold">Enforcement Process</h3>
                <div className="space-y-3">
                  <p className="text-muted-foreground"><strong>Warning:</strong> First violation may result in a warning and account review</p>
                  <p className="text-muted-foreground"><strong>Temporary Suspension:</strong> Serious violations may lead to temporary account suspension</p>
                  <p className="text-muted-foreground"><strong>Permanent Deactivation:</strong> Severe or repeated violations result in permanent account removal</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Service Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="text-lg font-semibold">Platform Role</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Man Power acts as a marketplace connecting users with workers. We do not employ workers or guarantee the quality of services. All agreements are directly between users and workers.
                </p>

                <h3 className="text-lg font-semibold">Payment & Fees</h3>
                <p className="text-muted-foreground leading-relaxed">
                  While Man Power facilitates connections without intermediary fees, users are responsible for their own payment arrangements and any applicable taxes or fees related to services rendered.
                </p>

                <h3 className="text-lg font-semibold">Liability</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Man Power is not liable for damages, disputes, or issues arising from services performed. Users engage with workers at their own risk and should verify credentials and insurance coverage.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Account Management</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="text-lg font-semibold">Account Creation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Users must be 18 years or older and provide accurate, current information. One account per person is permitted.
                </p>

                <h3 className="text-lg font-semibold">Account Security</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Users are responsible for maintaining account security and must notify us immediately of any unauthorized access.
                </p>

                <h3 className="text-lg font-semibold">Account Termination</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Users may terminate their accounts at any time. Man Power reserves the right to terminate accounts for violations of these terms.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  For questions about these terms or to report violations, contact us at:
                  <br />
                  Email: legal@manpower.com
                  <br />
                  Phone: +1 (555) 123-4567
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