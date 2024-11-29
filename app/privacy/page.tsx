import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function PrivacyPolicy() {
  const effectiveDate = "November 29, 2024";

  const sections = [
    {
      id: "information-we-collect",
      title: "1. Information We Collect",
      content: [
        {
          subtitle: "1.1 Personal Information",
          text: "When you create an account, subscribe to our services, or interact with the platform, we may collect the following personal information:\n\n• Name\n• Email address\n• Payment information (for subscription plans)\n• Business details (e.g., business type, industry)\n• Profile information",
        },
        {
          subtitle: "1.2 Usage Data",
          text: "We may collect information about how you access and use the Service, which includes:\n\n• Your device's IP address\n• Browser type and version\n• Pages visited on the Service\n• Time and date of your visit\n• Time spent on each page\n• Unique device identifiers",
        },
        {
          subtitle: "1.3 Cookies and Tracking Technologies",
          text: "We use cookies and similar tracking technologies to track activity on our Service. Cookies help us enhance your user experience by remembering your preferences, keeping you logged in, and analyzing usage patterns. You can choose to accept or decline cookies through your browser settings.",
        },
      ],
    },
    {
      id: "how-we-use-your-information",
      title: "2. How We Use Your Information",
      content: [
        {
          text: "We use the information we collect for the following purposes:\n\n• To Provide and Maintain the Service: To manage your account, process payments, and provide features such as content generation and templates.\n• To Improve the Service: To monitor and analyze usage patterns, identify areas for improvement, and personalize your experience.\n• To Communicate with You: To send important updates, newsletters, promotional materials, and respond to your queries or feedback.\n• For Marketing and Promotional Activities: To inform you about new features, products, or offers that may interest you. You may opt out of marketing communications at any time.\n• To Ensure Compliance: To enforce our Terms and Conditions, prevent fraudulent activity, and ensure the security of our platform.",
        },
      ],
    },
    {
      id: "sharing-your-information",
      title: "3. Sharing Your Information",
      content: [
        {
          text: "We do not sell, rent, or share your personal information with third parties, except in the following circumstances:",
        },
        {
          subtitle: "3.1 Service Providers",
          text: "We may share your information with trusted third-party service providers who help us deliver the Service, such as payment processors, cloud storage providers, and analytics companies. These providers are only allowed to use your information to perform tasks on our behalf.",
        },
        {
          subtitle: "3.2 Legal Requirements",
          text: "We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or government agency).",
        },
        {
          subtitle: "3.3 Business Transfers",
          text: "If TailorTales undergoes a merger, acquisition, or asset sale, your personal data may be transferred as part of that transaction. You will be notified before your personal data is transferred and becomes subject to a different privacy policy.",
        },
      ],
    },
    {
      id: "data-security",
      title: "4. Data Security",
      content: [
        {
          text: "We take the security of your personal data seriously and use reasonable technical and organizational measures to protect it from unauthorized access, loss, or alteration. However, no method of transmission over the internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.",
        },
      ],
    },
    {
      id: "retention-of-data",
      title: "5. Retention of Data",
      content: [
        {
          text: "We retain your personal information only for as long as necessary for the purposes outlined in this Privacy Policy. If you delete your account or request to withdraw from our service, we will delete your personal data, except as required to comply with legal obligations, resolve disputes, and enforce agreements.",
        },
      ],
    },
    {
      id: "your-data-protection-rights",
      title: "6. Your Data Protection Rights",
      content: [
        {
          text: "Depending on your location, you may have certain rights regarding your personal data, including:\n\n• Access and Rectification: You can request access to the personal data we hold about you and request corrections if you believe it is incorrect or incomplete.\n• Deletion: You may request that we delete your personal data, subject to certain limitations (e.g., legal obligations).\n• Data Portability: You can request a copy of your personal data in a structured, commonly used, and machine-readable format.\n• Opting Out of Marketing Communications: You can opt out of receiving marketing communications from us at any time by following the instructions in the emails or contacting us directly.\n\nTo exercise these rights, please contact us at [Insert Contact Email].",
        },
      ],
    },
    {
      id: "childrens-privacy",
      title: "7. Children's Privacy",
      content: [
        {
          text: "Our Service is not intended for individuals under the age of 18, and we do not knowingly collect personal information from children. If we learn that we have collected personal data of a child under 18, we will take steps to delete such information as soon as possible.",
        },
      ],
    },
    {
      id: "international-data-transfers",
      title: "8. International Data Transfers",
      content: [
        {
          text: "TailorTales operates globally, and your personal data may be transferred to countries other than your own. By using our Service, you consent to the transfer of your personal data to countries outside your jurisdiction, which may have different data protection laws than your country.",
        },
      ],
    },
    {
      id: "changes-to-this-privacy-policy",
      title: "9. Changes to This Privacy Policy",
      content: [
        {
          text: 'We may update our Privacy Policy from time to time. When we make changes, we will post the updated policy on this page and update the "Effective Date" at the top. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your data.',
        },
      ],
    },
    {
      id: "contact-us",
      title: "10. Contact Us",
      content: [
        {
          text: "If you have any questions about this Privacy Policy or our data practices, please contact us at:\n\nTailorTales\nEmail: dev.khalidhossain@gmail.com\n",
        },
      ],
    },
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-lg mb-8">Effective Date: {effectiveDate}</p>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Table of Contents</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5">
            {sections.map((section) => (
              <li key={section.id} className="mb-2">
                <a
                  href={`#${section.id}`}
                  className="text-blue-600 hover:underline"
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <p className="text-lg mb-8">
        At TailorTales, we value and respect your privacy. This Privacy Policy
        outlines how we collect, use, store, and protect your personal
        information when you use our website and services (the
        &quot;Service&quot;). By using our Service, you agree to the terms
        outlined in this policy.
      </p>

      <ScrollArea className="h-[600px] rounded-md border p-4">
        {sections.map((section) => (
          <Card key={section.id} id={section.id} className="mb-8">
            <CardHeader>
              <CardTitle>{section.title}</CardTitle>
            </CardHeader>
            <CardContent>
              {section.content.map((item, index) => (
                <div key={index} className="mb-4">
                  {item.subtitle && (
                    <h3 className="text-lg font-semibold mb-2">
                      {item.subtitle}
                    </h3>
                  )}
                  <p className="whitespace-pre-line">{item.text}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </ScrollArea>
    </div>
  );
}
