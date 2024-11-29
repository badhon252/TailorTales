"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Jan', posts: 4, engagement: 120, reach: 1000 },
  { name: 'Feb', posts: 3, engagement: 98, reach: 1200 },
  { name: 'Mar', posts: 5, engagement: 135, reach: 1300 },
  { name: 'Apr', posts: 4, engagement: 110, reach: 1100 },
  { name: 'May', posts: 6, engagement: 148, reach: 1500 },
  { name: 'Jun', posts: 5, engagement: 130, reach: 1400 },
]

export function Analytics() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Analytics</h2>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="content-performance">Content Performance</TabsTrigger>
          <TabsTrigger value="audience-insights">Audience Insights</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Posts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">27</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg. Engagement Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4.3%</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Reach</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">7,500</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Best Performing Template</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Product Launch</div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="content-performance">
          <Card>
            <CardHeader>
              <CardTitle>Content Performance Over Time</CardTitle>
              <CardDescription>Posts, Engagement, and Reach trends</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Legend />
                  <Line yAxisId="left" type="monotone" dataKey="posts" stroke="#8884d8" activeDot={{ r: 8 }} />
                  <Line yAxisId="left" type="monotone" dataKey="engagement" stroke="#82ca9d" />
                  <Line yAxisId="right" type="monotone" dataKey="reach" stroke="#ffc658" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="audience-insights">
          <Card>
            <CardHeader>
              <CardTitle>Audience Insights</CardTitle>
              <CardDescription>Demographics and interests of your audience</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Audience insights content goes here. This could include charts or tables showing age distribution, interests, geographic location, etc.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

