import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
interface TextOnlyItem {
  text: string;
}

interface SubtitleItem {
  text: string;
  subtitle: string;
}

type ContentItem = TextOnlyItem | SubtitleItem;

export default function TermsAndConditions() {
  const effectiveDate = "November 29, 2024";

  const sections = [
    {
      id: "use-of-service",
      title: "1. Use of Service",
      content: [
        {
          subtitle: "1.1 Eligibility",
          text: "You must be at least 18 years old or the age of majority in your jurisdiction to use our Service. By using TailorTales, you represent and warrant that you are eligible to do so.",
        },
        {
          subtitle: "1.2 Account Creation",
          text: "To use certain features of the Service, you may be required to create an account. You agree to provide accurate, complete, and up-to-date information when registering for an account, and to maintain the confidentiality of your login credentials. You are responsible for all activities under your account.",
        },
        {
          subtitle: "1.3 License to Use the Service",
          text: "We grant you a non-exclusive, non-transferable, revocable license to use the Service for personal and business purposes in accordance with these Terms. All rights not explicitly granted are reserved.",
        },
      ],
    },
    {
      id: "user-content",
      title: "2. User Content",
      content: [
        {
          subtitle: "2.1 Ownership of User Content",
          text: 'You retain ownership of all content you upload, create, or input into the Service ("User Content"). However, by submitting User Content, you grant TailorTales a non-exclusive, worldwide, royalty-free license to use, display, and distribute such content to provide the Service.',
        },
        {
          subtitle: "2.2 Responsibility for User Content",
          text: "You are solely responsible for the User Content you upload and agree not to submit content that infringes on any third-party rights, including intellectual property rights. We do not assume responsibility for any content uploaded by users.",
        },
        {
          subtitle: "2.3 Content Restrictions",
          text: "You agree not to upload, post, or transmit any content that is unlawful, defamatory, discriminatory, harmful, or otherwise objectionable.",
        },
      ],
    },
    {
      id: "subscription-and-payment",
      title: "3. Subscription and Payment",
      content: [
        {
          subtitle: "3.1 Subscription Plans",
          text: "TailorTales offers various subscription plans, including free and paid options. The details of each plan, including the features, pricing, and billing terms, are outlined on our pricing page.",
        },
        {
          subtitle: "3.2 Billing and Payments",
          text: "You agree to provide accurate billing information and authorize TailorTales to charge your selected payment method for the applicable subscription fees. All payments are non-refundable, except as required by law.",
        },
        {
          subtitle: "3.3 Renewal and Cancellation",
          text: "Your subscription will automatically renew at the end of each billing period unless you cancel your subscription prior to the renewal date. You can cancel your subscription at any time by following the instructions in your account settings.",
        },
      ],
    },
    {
      id: "ai-generated-content",
      title: "4. AI-Generated Content",
      content: [
        {
          subtitle: "4.1 No Guarantee of Results",
          text: "While TailorTales uses advanced AI to generate content, we do not guarantee specific outcomes or results from the content generated using the Service. The quality and effectiveness of generated content may vary based on multiple factors.",
        },
        {
          subtitle: "4.2 Accuracy of Content",
          text: "You are responsible for reviewing, editing, and ensuring the accuracy of all AI-generated content before use. TailorTales does not guarantee that all content generated is free of errors or omissions.",
        },
      ],
    },
    {
      id: "restrictions-and-prohibited-uses",
      title: "5. Restrictions and Prohibited Uses",
      content: [
        {
          subtitle: "5.1 Prohibited Activities",
          text: "You may not:\n\n• Use the Service for any unlawful or unauthorized purpose.\n• Attempt to gain unauthorized access to our systems or data.\n• Reverse engineer, decompile, or disassemble any portion of the Service.\n• Use any automated system, including robots or scrapers, to access the Service in an unauthorized manner.",
        },
        {
          subtitle: "5.2 Suspension of Account",
          text: "We reserve the right to suspend or terminate your account at any time, without notice, for any violation of these Terms.",
        },
      ],
    },
    {
      id: "privacy",
      title: "6. Privacy",
      content: [
        {
          subtitle: "6.1 Privacy Policy",
          text: "By using the Service, you agree to our Privacy Policy, which explains how we collect, use, and protect your personal data. You can review our Privacy Policy at [Link to Privacy Policy].",
        },
      ],
    },
    {
      id: "disclaimers-and-limitations-of-liability",
      title: "7. Disclaimers and Limitations of Liability",
      content: [
        {
          subtitle: "7.1 No Warranty",
          text: 'The Service is provided "as is" without any warranties, either express or implied. We do not guarantee that the Service will be error-free, uninterrupted, or free of viruses or other harmful components.',
        },
        {
          subtitle: "7.2 Limitation of Liability",
          text: "To the maximum extent permitted by law, TailorTales' liability for any claims arising out of your use of the Service is limited to the amount you paid for the Service during the 12-month period preceding the claim.",
        },
      ],
    },
    {
      id: "indemnification",
      title: "8. Indemnification",
      content: [
        {
          text: "You agree to indemnify, defend, and hold harmless TailorTales, its affiliates, and their respective employees, officers, and agents from any claims, damages, losses, and expenses (including legal fees) arising from your use of the Service, violation of these Terms, or infringement of any third-party rights.",
        },
      ],
    },
    {
      id: "modifications-to-terms",
      title: "9. Modifications to Terms",
      content: [
        {
          text: "We reserve the right to modify or update these Terms at any time. Any changes will be posted on this page, and the effective date will be updated accordingly. By continuing to use the Service after changes are made, you agree to the updated Terms.",
        },
      ],
    },
    {
      id: "governing-law",
      title: "10. Governing Law",
      content: [
        {
          text: "These Terms are governed by the laws of Your Country, without regard to its conflict of law principles. Any legal action arising from these Terms will be brought exclusively in the courts located in Your City/Country.",
        },
      ],
    },
    {
      id: "contact-information",
      title: "11. Contact Information",
      content: [
        {
          text: "For any questions or concerns regarding these Terms, please contact us at:\n\nTailorTales\nEmail: dev.khalidhossain@gmail.com\nAddress: Dhaka, Bangladesh 🇧🇩",
        },
      ],
    },
    {
      id: "miscellaneous",
      title: "12. Miscellaneous",
      content: [
        {
          subtitle: "12.1 Severability",
          text: "If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will remain in full force and effect.",
        },
        {
          subtitle: "12.2 Entire Agreement",
          text: "These Terms constitute the entire agreement between you and TailorTales concerning your use of the Service and supersede all prior agreements and understandings.",
        },
      ],
    },
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-6">Terms and Conditions</h1>
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
        Welcome to TailorTales (&quot;we,&quot; &quot;our,&quot;
        &quot;us&quot;), a platform that helps businesses create personalized,
        AI-powered content. By accessing or using our website and services (the
        &quot;Service&quot;), you agree to comply with and be bound by the
        following terms and conditions (&quot;Terms&quot;). If you do not agree
        to these Terms, please do not use the Service.
      </p>

      <ScrollArea className="h-[600px] rounded-md border p-4">
        {sections.map((section) => (
          <Card key={section.id} id={section.id} className="mb-8">
            <CardHeader>
              <CardTitle>{section.title}</CardTitle>
            </CardHeader>
            <CardContent>
              {section.content.map((item: ContentItem, index) => {
                if ("subtitle" in item) {
                  return (
                    <div key={index} className="mb-4">
                      <h3 className="text-lg font-semibold mb-2">
                        {item.subtitle}
                      </h3>
                      <p className="whitespace-pre-line">{item.text}</p>
                    </div>
                  );
                } else {
                  return (
                    <div key={index} className="mb-4">
                      <p className="whitespace-pre-line">{item.text}</p>
                    </div>
                  );
                }
              })}
            </CardContent>
          </Card>
        ))}
      </ScrollArea>
    </div>
  );
}
