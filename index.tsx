import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AppointmentScheduler from '@/components/AppointmentScheduler';
import AppointmentsList from '@/components/AppointmentsList';
import PatientManager from '@/components/PatientManager';
import SMSSettings from '@/components/SMSSettings';
import { Calendar, Phone, Users, Settings } from 'lucide-react';

const Index = () => {
  const [activeTab, setActiveTab] = useState('schedule');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">MediScheduler</h1>
                <p className="text-sm text-gray-600">Patient Appointment Management</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>System Online</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-white shadow-sm border border-blue-100">
            <TabsTrigger value="schedule" className="flex items-center space-x-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              <Calendar className="h-4 w-4" />
              <span className="hidden sm:inline">Schedule</span>
            </TabsTrigger>
            <TabsTrigger value="appointments" className="flex items-center space-x-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              <Calendar className="h-4 w-4" />
              <span className="hidden sm:inline">Appointments</span>
            </TabsTrigger>
            <TabsTrigger value="patients" className="flex items-center space-x-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              <Users className="h-4 w-4" />
              <span className="hidden sm:inline">Patients</span>
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center space-x-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              <Settings className="h-4 w-4" />
              <span className="hidden sm:inline">SMS Settings</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="schedule" className="space-y-6">
            <Card className="border-blue-100 shadow-sm">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-t-lg">
                <CardTitle className="flex items-center space-x-2 text-blue-900">
                  <Calendar className="h-5 w-5" />
                  <span>Schedule New Appointment</span>
                </CardTitle>
                <CardDescription className="text-blue-700">
                  Book a new patient appointment and automatically send SMS reminders
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <AppointmentScheduler />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="appointments" className="space-y-6">
            <Card className="border-blue-100 shadow-sm">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-t-lg">
                <CardTitle className="flex items-center space-x-2 text-blue-900">
                  <Calendar className="h-5 w-5" />
                  <span>Upcoming Appointments</span>
                </CardTitle>
                <CardDescription className="text-blue-700">
                  View and manage scheduled appointments
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <AppointmentsList />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="patients" className="space-y-6">
            <Card className="border-blue-100 shadow-sm">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-t-lg">
                <CardTitle className="flex items-center space-x-2 text-blue-900">
                  <Users className="h-5 w-5" />
                  <span>Patient Management</span>
                </CardTitle>
                <CardDescription className="text-blue-700">
                  Manage patient information and contact details
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <PatientManager />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card className="border-blue-100 shadow-sm">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-t-lg">
                <CardTitle className="flex items-center space-x-2 text-blue-900">
                  <Phone className="h-5 w-5" />
                  <span>SMS Reminder Settings</span>
                </CardTitle>
                <CardDescription className="text-blue-700">
                  Configure SMS reminder templates and timing
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <SMSSettings />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
