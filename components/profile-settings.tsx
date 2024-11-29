"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"

export function ProfileSettings() {
  const [activeTab, setActiveTab] = useState("account")

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Profile & Settings</h2>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <form className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="John Doe" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue="john@example.com" />
            </div>
            <div>
              <Label htmlFor="bio">Bio</Label>
              <Textarea id="bio" defaultValue="Content creator and marketing enthusiast." />
            </div>
            <Button type="submit">Save Changes</Button>
          </form>
        </TabsContent>
        <TabsContent value="notifications">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium">Email Notifications</h3>
                <p className="text-sm text-muted-foreground">Receive email updates about your account</p>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium">Push Notifications</h3>
                <p className="text-sm text-muted-foreground">Receive push notifications about new features</p>
              </div>
              <Switch />
            </div>
          </div>
        </TabsContent>
        <TabsContent value="billing">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Current Plan</h3>
            <p>You are currently on the Pro plan.</p>
            <Button>Upgrade Plan</Button>
            <h3 className="text-lg font-medium">Payment Method</h3>
            <p>Visa ending in 1234</p>
            <Button variant="outline">Update Payment Method</Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

