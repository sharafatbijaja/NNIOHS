import SectionHeading from "@/components/Helper/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { contactInfo, socialLinks } from "@/data";
import React from "react";
import { Send } from "lucide-react";

const SectionContact = () => {
  return (
    <div className="py-16 bg-gray-50 dark:bg-gray-800">
      <SectionHeading
        title1="Contact"
        title2="24/7"
        description="Have a question? Fill out the form below and I will get back to you as soon as possible."
      />
      <div className="w-[80%] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div data-aos="fade-right">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-semibold mb-4">Get In Touch</h2>
                <p className="text-muted-foreground mb-6">
                  I am currently open to new opportunities and collaborations.
                  Whether you have a question, want to discuss a project, or
                  just want to say hi, feel free to reach out!
                </p>
                <div className="space-y-4 ">
                  {contactInfo.map((item) => {
                    return (
                      <a
                        href={item.href}
                        key={item.label}
                        target="_blank"
                        className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 shadow-md rounded-xl hover:scale-105 transition-all duration-300 group"
                      >
                        <div className="w-12 h-12 rounded-lg bg-blue-600/10 flex justify-center group-hover:bg-blue-500/20 transition-colors items-center">
                          <item.icon className="w-5 h-5 text-blue-600 dark:text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">
                            {item.label}
                          </p>
                          <p className="font-medium">{item.value}</p>
                        </div>
                      </a>
                    );
                  })}

                  <div>
                    {/* social icons */}
                    <h4 className="text-lg font-medium pt-4 mb-4">Follow Me</h4>
                    <div className="flex gap-3">
                      {socialLinks.map((link) => (
                        <a
                          href={link.href}
                          key={link.label}
                          target="_blank"
                          className="w-12 h-12 rounded-lg bg-white dark:bg-gray-900 shadow-md flex items-center justify-center text-muted-foreground hover:text-blue-700 dark:hover:text-white transition-colors group-hover:bg-blue-500/20"
                        >
                          {/* icon ya text yahan */}
                          <link.icon className="w-5 h-5" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div data-aos="fade-left" data-aos-delay="1000">
            <form className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-md space-y-6 max-w-2xl mx-auto">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="bg-gray-100 dark:bg-gray-600"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    required
                    className="bg-gray-100 dark:bg-gray-600"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium">
                  Phone
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  inputMode="numeric"
                  pattern="[0-9+ ]*"
                  placeholder="+92 300 1234567"
                  required
                  className="bg-gray-100 dark:bg-gray-600"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Subject / Inquiry"
                  required
                  className="bg-gray-100 dark:bg-gray-600"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Your Message"
                  required
                  className="w-full px-3 py-2 bg-gray-100 dark:bg-gray-600 rounded-md"
                />
              </div>

              <Button
                type="submit"
                size={"lg"}
                className="w-full cursor-pointer"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionContact;
