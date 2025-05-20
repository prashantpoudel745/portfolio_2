"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Github, Linkedin, Mail, Send, Twitter } from "lucide-react";
import SectionHeading from "@/components/section-heading";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z
    .string()
    .min(5, { message: "Subject must be at least 5 characters." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(data: FormValues) {
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log(data);
      setIsSubmitting(false);
      form.reset();

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
    }, 1500);
  }

  return (
    <section id="contact" className="w-full py-12 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a project in mind or want to discuss potential opportunities? I'd love to hear from you."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center space-y-4"
          >
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  Here are the ways you can reach me directly.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <a
                    href="mailto:hello@johndoe.com"
                    className="text-sm hover:text-primary transition-colors"
                  >
                    prashantpoudel745@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Github className="h-5 w-5 text-muted-foreground" />
                  <a
                    href="https://github.com/prashantpoudel745"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-primary transition-colors"
                  >
                    github.com/prashantpoudel745
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Linkedin className="h-5 w-5 text-muted-foreground" />
                  <a
                    href="https://www.linkedin.com/in/prashant-poudel-3211b3275/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-primary transition-colors"
                  >
                    linkedin.com/in/prashantpoudel
                  </a>
                </div>
                {/* <div className="flex items-center space-x-3">
                  <Twitter className="h-5 w-5 text-muted-foreground" />
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-primary transition-colors"
                  >
                    twitter.com/johndoe
                  </a>
                </div> */}
              </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="text-sm font-medium mb-2">
                    Current Availability
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    I&lsquo;m currently available for freelance work and open to
                    discussing new opportunities.
                  </p>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="text-sm font-medium mb-2">Response Time</h4>
                  <p className="text-sm text-muted-foreground">
                    typically responds to inquiries within 12-24 hours.
                  </p>
                </div>
              </CardFooter>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Send Me a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and We&lsquo;ll get back to you as
                  soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="Your email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="Message subject" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Your message"
                              className="min-h-[120px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="mr-2">Sending</span>
                          <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
