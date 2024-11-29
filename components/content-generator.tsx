"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

const templates = [
  {
    id: 1,
    name: "Black Friday Sale",
    content: "Get ready for our biggest sale of the year! 🛍️",
  },
  {
    id: 2,
    name: "New Product Launch",
    content: "Introducing our latest innovation... 🚀",
  },
  {
    id: 3,
    name: "Customer Success Story",
    content: "See how our product transformed this business... 📈",
  },
  {
    id: 4,
    name: "Workshop Announcement",
    content: "Join us for an exclusive workshop on... 🎓",
  },
];

export function ContentGenerator() {
  const [generatedContent, setGeneratedContent] = useState("");
  const [tone, setTone] = useState(50);
  const [businessType, setBusinessType] = useState("");
  const [keywords, setKeywords] = useState("");
  const [contentType, setContentType] = useState("social-media");
  const searchParams = useSearchParams();

  useEffect(() => {
    const templateId = searchParams.get("template");
    if (templateId) {
      const template = templates.find((t) => t.id === parseInt(templateId));
      if (template) {
        setGeneratedContent(template.content);
        // You could also set other fields based on the template
        setContentType("social-media"); // Set a default, or use a property from the template
      }
    }
  }, [searchParams]);

  const handleGenerate = () => {
    // Simulating AI-generated content
    setGeneratedContent(
      `Generated content for ${businessType} using keywords: ${keywords}. Tone: ${tone}%. Content type: ${contentType}`
    );
  };

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div>
        <h2 className="text-2xl font-bold mb-4">Content Generator</h2>
        <div className="space-y-4">
          <div>
            <Label htmlFor="business-type">Business Type</Label>
            <Input
              id="business-type"
              value={businessType}
              onChange={(e) => setBusinessType(e.target.value)}
              placeholder="e.g., Handmade Jewelry Store"
            />
          </div>
          <div>
            <Label htmlFor="keywords">Keywords/Focus Topics</Label>
            <Input
              id="keywords"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              placeholder="e.g., eco-friendly, artisanal"
            />
          </div>
          <div>
            <Label htmlFor="content-type">Content Type</Label>
            <Select value={contentType} onValueChange={setContentType}>
              <SelectTrigger id="content-type">
                <SelectValue placeholder="Select content type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="social-media">Social Media Post</SelectItem>
                <SelectItem value="blog-intro">Blog Intro</SelectItem>
                <SelectItem value="email-copy">Email Copy</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>Tone</Label>
            <Slider
              min={0}
              max={100}
              step={1}
              value={[tone]}
              onValueChange={(value) => setTone(value[0])}
              className="mt-2"
            />
            <div className="flex justify-between text-sm text-muted-foreground mt-1">
              <span>Formal</span>
              <span>Neutral</span>
              <span>Casual</span>
            </div>
          </div>
          <Button onClick={handleGenerate}>Generate Content</Button>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">Generated Content</h3>
        <Textarea
          value={generatedContent}
          onChange={(e) => setGeneratedContent(e.target.value)}
          placeholder="Your AI-generated content will appear here..."
          className="h-[300px]"
        />
        <div className="mt-4 space-x-2">
          <Button variant="outline">Save Draft</Button>
          <Button variant="outline">Copy to Clipboard</Button>
        </div>
      </div>
    </div>
  );
}
