import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Send, Star, TrendingUp } from "lucide-react"

const stats = [
  { title: "Total Drafts", value: "15", icon: FileText, color: "text-blue-500" },
  { title: "Published Posts", value: "23", icon: Send, color: "text-green-500" },
  { title: "Most Used Template", value: "Social Media Post", icon: Star, color: "text-yellow-500" },
  { title: "Avg. Engagement Rate", value: "4.5%", icon: TrendingUp, color: "text-red-500" },
]

export function OverviewPanel() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <Card key={index} className="animate-slideIn" style={{animationDelay: `${index * 100}ms`}}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className={`h-4 w-4 ${stat.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

