import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Eye, Lock, Database, Camera } from "lucide-react";

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
              Last updated: January 2024
            </p>
          </div>

          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-6 w-6 text-primary" />
                  Data Collection & Usage
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="text-lg font-semibold">Personal Information We Collect</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Name, email address, and phone number</li>
                  <li>Location information for service matching</li>
                  <li>Profile photos and identification documents (for workers)</li>
                  <li>Payment information and transaction history</li>
                  <li>Communication records between users and workers</li>
                  <li>Device information and app usage analytics</li>
                </ul>

                <h3 className="text-lg font-semibold">How We Use Your Information</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Facilitate connections between users and workers</li>
                  <li>Verify worker credentials and maintain platform safety</li>
                  <li>Process payments and manage transactions</li>
                  <li>Provide customer support and resolve disputes</li>
                  <li>Improve our services and user experience</li>
                  <li>Send important updates and notifications</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Camera className="h-6 w-6 text-primary" />
                  Images & Media Content
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="text-lg font-semibold">Profile Images</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Users may upload profile photos to enhance their profiles. These images are visible to other users and help build trust within the community.
                </p>

                <h3 className="text-lg font-semibold">Portfolio & Work Images</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Workers can upload images of their previous work to showcase their skills. These images become part of their public portfolio on the platform.
                </p>

                <h3 className="text-lg font-semibold">Image Privacy & Rights</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>You retain ownership of all images you upload</li>
                  <li>By uploading, you grant Man Power license to display these images</li>
                  <li>Images must not contain inappropriate or copyrighted content</li>
                  <li>We may remove images that violate our community guidelines</li>
                  <li>Images are stored securely and not shared with third parties</li>
                </ul>

                <h3 className="text-lg font-semibold">Image Storage & Security</h3>
                <p className="text-muted-foreground leading-relaxed">
                  All uploaded images are stored on secure servers with encryption. We implement industry-standard security measures to protect your visual content.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="h-6 w-6 text-primary" />
                  Communication & Monitoring
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="text-lg font-semibold">Communication Privacy</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Direct communication between users and workers is private and encrypted. However, we may monitor communications to ensure compliance with our guidelines and maintain platform safety.
                </p>

                <h3 className="text-lg font-semibold">Automated Monitoring</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Automated systems scan for prohibited content and behavior</li>
                  <li>Suspicious activities are flagged for manual review</li>
                  <li>Communications may be reviewed in case of reported violations</li>
                  <li>Data is used to improve our safety algorithms</li>
                </ul>

                <h3 className="text-lg font-semibold">Communication Records</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We retain communication records for safety, dispute resolution, and legal compliance purposes. Records may be accessed by authorized personnel when necessary.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-6 w-6 text-primary" />
                  Data Protection & Rights
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="text-lg font-semibold">Your Privacy Rights</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Access your personal data and know how it's used</li>
                  <li>Request correction of inaccurate or incomplete data</li>
                  <li>Request deletion of your account and associated data</li>
                  <li>Opt-out of non-essential communications</li>
                  <li>Data portability - receive a copy of your data</li>
                </ul>

                <h3 className="text-lg font-semibold">Data Sharing</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We do not sell your personal data. Information may be shared only with:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Other users (profile information, ratings, reviews)</li>
                  <li>Service providers who help operate the platform</li>
                  <li>Legal authorities when required by law</li>
                  <li>Business partners only with your explicit consent</li>
                </ul>

                <h3 className="text-lg font-semibold">Data Retention</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We retain your data as long as your account is active or as needed to provide services. After account deletion, some data may be retained for legal and safety purposes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="h-6 w-6 text-primary" />
                  Security Measures
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="text-lg font-semibold">Data Security</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>End-to-end encryption for sensitive communications</li>
                  <li>Secure servers with regular security audits</li>
                  <li>Multi-factor authentication options</li>
                  <li>Regular data backups and disaster recovery plans</li>
                  <li>Employee access controls and training</li>
                </ul>

                <h3 className="text-lg font-semibold">Breach Notification</h3>
                <p className="text-muted-foreground leading-relaxed">
                  In the unlikely event of a data breach, we will notify affected users within 72 hours and take immediate steps to secure the platform and protect user data.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact & Updates</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="text-lg font-semibold">Privacy Concerns</h3>
                <p className="text-muted-foreground leading-relaxed">
                  For privacy-related questions or concerns, contact our Data Protection Officer at:
                  <br />
                  Email: privacy@manpower.com
                  <br />
                  Phone: +1 (555) 123-4567
                </p>

                <h3 className="text-lg font-semibold">Policy Updates</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this privacy policy periodically. Users will be notified of significant changes via email or app notification.
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