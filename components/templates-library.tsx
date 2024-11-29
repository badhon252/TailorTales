"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const templates = [
  { id: 1, name: "Black Friday Sale", category: "Seasonal Campaigns", industry: "Retail" },
  { id: 2, name: "New Product Launch", category: "Product Launches", industry: "Technology" },
  { id: 3, name: "Customer Success Story", category: "Customer Success Stories", industry: "SaaS" },
  { id: 4, name: "Workshop Announcement", category: "Event Announcements", industry: "Education" },
]

export function TemplatesLibrary() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedIndustry, setSelectedIndustry] = useState("all")
  const router = useRouter()

  const filteredTemplates = templates.filter((template) => {
    return (
      template.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "all" || template.category === selectedCategory) &&
      (selectedIndustry === "all" || template.industry === selectedIndustry)
    )
  })

  const handleEditTemplate = (templateId: number) => {
    router.push(`/content-generator?template=${templateId}`)
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Templates Library</h2>
      <div className="flex flex-wrap gap-4">
        <div className="flex-1 min-w-[200px]">
          <Label htmlFor="search">Search Templates</Label>
          <Input
            id="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by name..."
          />
        </div>
        <div className="flex-1 min-w-[200px]">
          <Label htmlFor="category">Category</Label>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger id="category">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="Seasonal Campaigns">Seasonal Campaigns</SelectItem>
              <SelectItem value="Product Launches">Product Launches</SelectItem>
              <SelectItem value="Customer Success Stories">Customer Success Stories</SelectItem>
              <SelectItem value="Event Announcements">Event Announcements</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex-1 min-w-[200px]">
          <Label htmlFor="industry">Industry</Label>
          <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
            <SelectTrigger id="industry">
              <SelectValue placeholder="Select industry" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Industries</SelectItem>
              <SelectItem value="Retail">Retail</SelectItem>
              <SelectItem value="Technology">Technology</SelectItem>
              <SelectItem value="SaaS">SaaS</SelectItem>
              <SelectItem value="Education">Education</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredTemplates.map((template) => (
          <Card key={template.id} className="overflow-hidden">
            <CardHeader>
              <CardTitle>{template.name}</CardTitle>
              <CardDescription>{template.category}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-40 bg-muted rounded-md flex items-center justify-center">
                Template Preview
              </div>
            </CardContent>
            <CardFooter className="bg-muted">
              <Button
                variant="secondary"
                className="w-full"
                onClick={() => handleEditTemplate(template.id)}
              >
                Edit Template
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

