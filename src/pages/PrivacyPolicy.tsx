import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Eye, Lock, Database, Camera, Users, FileText, AlertTriangle, Baby, UserCheck } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold">
              Privacy <span className="text-primary">Policy</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Last updated: January 2025 · India Compliant (DPDP Act, 2023)
            </p>
          </div>

          <div className="grid gap-6">

            {/* 1. Introduction */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-6 w-6 text-primary" />
                  Introduction
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  This Privacy Policy describes how we collect, use, store, and disclose user information when you use our platform ("Service").
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  By using our platform, you agree to the collection and use of information in accordance with this policy.
                </p>
              </CardContent>
            </Card>

            {/* 2. Information We Collect */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-6 w-6 text-primary" />
                  Information We Collect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="text-lg font-semibold">Basic Information</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                </ul>

                <h3 className="text-lg font-semibold">Professional / Work Information</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Work details</li>
                  <li>Work description</li>
                  <li>Salary details</li>
                </ul>

                <h3 className="text-lg font-semibold">Personal Information</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Gender</li>
                  <li>Age</li>
                  <li>Address</li>
                  <li>Location</li>
                </ul>

                <h3 className="text-lg font-semibold">Media & Content</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Profile photos</li>
                  <li>Work-related images</li>
                </ul>
              </CardContent>
            </Card>

            {/* 3. Publicly Visible Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-6 w-6 text-primary" />
                  Publicly Visible Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                  <p className="text-sm font-semibold text-yellow-800 dark:text-yellow-400 mb-2">⚠️ Important Notice</p>
                  <p className="text-muted-foreground leading-relaxed">
                    By using this platform, you understand and agree that your profile information — including name, phone number, work details, images, etc. — may be visible to other users of the platform and may be accessed, viewed, and interacted with by other users.
                  </p>
                </div>
                <p className="text-muted-foreground leading-relaxed font-medium">
                  👉 You are responsible for the information you choose to share.
                </p>
              </CardContent>
            </Card>

            {/* 4. Purpose of Data Collection */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="h-6 w-6 text-primary" />
                  Purpose of Data Collection
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">We collect and use your data for:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Creating and managing user profiles</li>
                  <li>Connecting users with work opportunities</li>
                  <li>Displaying user profiles publicly</li>
                  <li>Improving platform functionality</li>
                  <li>Communication and support</li>
                  <li>Preventing fraud and misuse</li>
                </ul>
              </CardContent>
            </Card>

            {/* 5 & 6. Legal Basis & Consent */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserCheck className="h-6 w-6 text-primary" />
                  Legal Basis & Consent
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="text-lg font-semibold">Legal Basis (As per Indian Law)</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Under applicable Indian laws (including the DPDP Act, 2023), we process your data based on:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Your consent</li>
                  <li>Platform legitimate use (service delivery)</li>
                </ul>

                <h3 className="text-lg font-semibold">Consent</h3>
                <p className="text-muted-foreground leading-relaxed">
                  By registering and using the platform, you provide explicit consent for data collection, data processing, and public display of your information. You may withdraw consent by deleting your account.
                </p>
              </CardContent>
            </Card>

            {/* 7 & 8. Data Sharing & Sensitive Data */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-6 w-6 text-primary" />
                  Data Sharing & Sensitive Data Handling
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="text-lg font-semibold">Data Sharing & Disclosure</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We do not sell personal data. We may share data only:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>With other users (as part of platform functionality)</li>
                  <li>With service providers (hosting, analytics, etc.)</li>
                  <li>When required by law or government authorities</li>
                </ul>

                <h3 className="text-lg font-semibold">Sensitive Data Handling ⚠️</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Some data (like salary, location, images) may be considered sensitive. We:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Limit access to authorized systems</li>
                  <li>Use reasonable security practices</li>
                  <li>Do not collect unnecessary sensitive data</li>
                </ul>
              </CardContent>
            </Card>

            {/* 9 & 10. Security & Retention */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="h-6 w-6 text-primary" />
                  Data Storage, Security & Retention
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="text-lg font-semibold">Security Measures</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Secure servers</li>
                  <li>Encryption (where applicable)</li>
                  <li>Access control mechanisms</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed text-sm italic">
                  However, no system is 100% secure.
                </p>

                <h3 className="text-lg font-semibold">Data Retention</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We retain your data as long as your account is active, or as required by law. You can request deletion at any time.
                </p>
              </CardContent>
            </Card>

            {/* 11. User Rights */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-6 w-6 text-primary" />
                  Your Rights (DPDP Act, 2023)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Access your data</li>
                  <li>Correct inaccurate data</li>
                  <li>Delete your data</li>
                  <li>Withdraw consent</li>
                  <li>File a grievance</li>
                </ul>
              </CardContent>
            </Card>

            {/* 12. Children's Privacy */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Baby className="h-6 w-6 text-primary" />
                  Children's Privacy
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Our platform is not intended for users under 18 years of age. We do not knowingly collect data from minors.
                </p>
              </CardContent>
            </Card>

            {/* 13. Grievance Officer + Contact */}
            <Card>
              <CardHeader>
                <CardTitle>Grievance Officer & Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="text-lg font-semibold">Grievance Officer (Mandatory – Indian Law)</h3>
                <p className="text-muted-foreground leading-relaxed">
                  As per Indian law, you may raise concerns with our Grievance Officer:
                  <br />
                  <span className="font-medium">Email:</span> manpowerindiasky2024@gmail.com
                  <br />
                  <span className="font-medium">Response Time:</span> Within 30 days
                </p>

                <h3 className="text-lg font-semibold">Policy Updates</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. Users will be notified of major changes via email or app notification.
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

export default PrivacyPolicy;