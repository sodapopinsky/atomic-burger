import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const ContactForm = () => {
    const { toast } = useToast();
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [success, setSuccess] = useState(false);

    const locations = ['Metairie', 'Baton Rouge', 'Prairieville'];


    const validateForm = (formData: FormData) => {
        const newErrors: Record<string, string> = {};
        const firstName = formData.get('firstName') as string;
        const lastName = formData.get('lastName') as string;
        const email = formData.get('email') as string;
        const subject = formData.get('subject') as string;
        const message = formData.get('message') as string;

        if (!firstName?.trim()) {
            newErrors.firstName = 'First name is required';
        }
        if (!lastName?.trim()) {
            newErrors.lastName = 'Last name is required';
        }


        if (!email?.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!subject?.trim()) {
            newErrors.subject = 'Subject is required';
        }

        if (!message?.trim()) {
            newErrors.message = 'Message is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();
        setLoading(true);
        const formData = new FormData(e.currentTarget);

        if (!validateForm(formData)) {
            setLoading(false);
            return;
        }

        const data = {
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message'),
            location: formData.get('location'), // Get the selected location
        };

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Failed to send message');
            }

            setSuccess(true);
            toast({
                title: "Message Sent!",
                description: "We'll get back to you as soon as possible.",
            });
            (e.target as HTMLFormElement).reset();
        } catch (error) {
            console.log(error)
            toast({
                title: "Error",
                description: "Failed to send message. Please try again later.",
                variant: "destructive",
            });
        } finally {
            setLoading(false);
        }
    };

    if (success) {
        return (
            <div className="text-center py-8">
                <h3 className="text-2xl font-bold mb-4">Thanks for getting in touch!</h3>
                <p className="mb-6">Someone from our team will get back to you shortly.</p>
              
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <h1 className="text-4xl font-bold mb-8 text-center">How can we help?</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label
                        htmlFor="firstName"
                        className={`block text-lg ${errors.firstName ? 'text-atomic-red' : ''}`}
                    >
                        First name
                    </label>
                    <Input
                        id="firstName"
                        name="firstName"
                        className={`border-b-2 border-t-0 border-x-0 rounded-none px-0 focus-visible:ring-0 ${
                            errors.firstName ? 'border-atomic-red' : 'border-gray-300'
                        }`}
                        placeholder="Enter your first name"
                    />
                    {errors.firstName && (
                        <p className="text-atomic-red text-sm">{errors.firstName}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <label
                        htmlFor="lastName"
                        className={`block text-lg ${errors.lastName ? 'text-atomic-red' : ''}`}
                    >
                        Last name
                    </label>
                    <Input
                        id="lastName"
                        name="lastName"
                        className={`border-b-2 border-t-0 border-x-0 rounded-none px-0 focus-visible:ring-0 ${
                            errors.lastName ? 'border-atomic-red' : 'border-gray-300'
                        }`}
                        placeholder="Enter your last name"
                    />
                    {errors.lastName && (
                        <p className="text-atomic-red text-sm">{errors.lastName}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <label
                        htmlFor="email"
                        className={`block text-lg ${errors.email ? 'text-atomic-red' : ''}`}
                    >
                        Email
                    </label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        className={`border-b-2 border-t-0 border-x-0 rounded-none px-0 focus-visible:ring-0 ${
                            errors.email ? 'border-atomic-red' : 'border-gray-300'
                        }`}
                        placeholder="Enter your email address"
                    />
                    {errors.email && (
                        <p className="text-atomic-red text-sm">{errors.email}</p>
                    )}
                </div>
                
                 <div className="space-y-2">
                      <label htmlFor="location" className="block text-lg">
                        Location <span className="text-atomic-text-200 text-sm">(Optional)</span>
                      </label>
                      <Select name="location">
                      <SelectTrigger 
  className={`border-b-2 border-t-0 border-x-0 rounded-none px-0 focus-visible:ring-0 focus:outline-none border-gray-300`}
>
                          <SelectValue placeholder="Select a location" />
                        </SelectTrigger>
                        <SelectContent>
                          {locations.map((location) => (
                            <SelectItem key={location} value={location}>
                              {location}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

            </div>

            <div className="space-y-2">
                <label
                    htmlFor="subject"
                    className={`block text-lg ${errors.subject ? 'text-atomic-red' : ''}`}
                >
                    Subject
                </label>
                <Input
                    id="subject"
                    name="subject"
                    className={`border-b-2 border-t-0 border-x-0 rounded-none px-0 focus-visible:ring-0 ${
                        errors.subject ? 'border-atomic-red' : 'border-gray-300'
                    }`}
                    placeholder="What's this about?"
                />
                {errors.subject && (
                    <p className="text-atomic-red text-sm">{errors.subject}</p>
                )}
            </div>

            <div className="space-y-2">
                <label
                    htmlFor="message"
                    className={`block text-lg ${errors.message ? 'text-atomic-red' : ''}`}
                >
                    Message
                </label>
                <Textarea
                    id="message"
                    name="message"
                    className={`min-h-[150px] border-b-2 border-t-0 border-x-0 rounded-none px-0 focus-visible:ring-0 ${
                        errors.message ? 'border-atomic-red' : 'border-gray-300'
                    }`}
                    placeholder="Your message"
                />
                {errors.message && (
                    <p className="text-atomic-red text-sm">{errors.message}</p>
                )}
            </div>

            <Button
                type="submit"
                className="w-full bg-atomic-red hover:opacity-90 text-white py-6"
                disabled={loading}
            >
                {loading ? "Sending..." : "Send Message"}
            </Button>
        </form>
    );
};