import { memo, useState } from "react";
import {
  FileTextIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
  Code2Icon,
  SendIcon,
  CheckIcon,
  CopyIcon,
  ExternalLinkIcon,
} from "lucide-react";
import { profile, RESUME_URL } from "@/data/portfolio";
import { SectionHeading } from "@/components/layout/Section";
import { SectionBackground } from "@/components/layout/SectionBackground";
import { FieldGroup, Field, FieldLabel, FieldError } from "@/components/ui/field";
import { InputGroup, InputGroupInput, InputGroupTextarea } from "@/components/ui/input-group";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const socialLinks = [
  {
    name: "GitHub",
    label: "@exceptional007",
    href: profile.socials.github,
    Icon: GithubIcon,
    accent: "hover:border-white/30 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]",
  },
  {
    name: "LinkedIn",
    label: "Akshhat Srivastava",
    href: profile.socials.linkedin,
    Icon: LinkedinIcon,
    accent: "hover:border-[#0A66C2]/40 hover:shadow-[0_0_15px_rgba(10,102,194,0.25)]",
  },
  {
    name: "LeetCode",
    label: "@akshhat007",
    href: profile.socials.leetcode,
    Icon: Code2Icon,
    accent: "hover:border-[#FFA116]/40 hover:shadow-[0_0_15px_rgba(255,161,22,0.25)]",
  },
  {
    name: "Résumé",
    label: "Download PDF",
    href: RESUME_URL,
    Icon: FileTextIcon,
    accent: "hover:border-[#11ff99]/40 hover:shadow-[0_0_15px_rgba(17,255,153,0.2)]",
  },
];

export const Contact = memo(function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [sent, setSent] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { name?: string; email?: string; message?: string } = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim() || !formData.email.includes("@"))
      newErrors.email = "Valid email is required.";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSent(true);
    window.location.href = `mailto:${profile.email}?subject=Portfolio Inquiry from ${encodeURIComponent(
      formData.name,
    )}&body=${encodeURIComponent(formData.message)}`;
  };

  return (
    <section
      aria-labelledby="connect-heading"
      id="contact"
      className="relative overflow-hidden w-full py-8"
    >
      <SectionBackground variant="contact" />
      <div className="relative z-10">
        <SectionHeading id="connect-heading">Connect</SectionHeading>

        <div className="px-4 py-6 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
            {/* Left Column: Direct Contact & Social Hub */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="rounded-2xl border border-transparent bg-[#08080c] p-5 sm:p-6 flex flex-col gap-4">
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#a1a4a5]">
                  Direct Contact
                </h3>

                {/* Email Copy Card */}
                <div className="group relative flex items-center justify-between rounded-xl border border-transparent bg-[#101012] p-3.5 transition-all duration-200 hover:border-white/20 hover:bg-[#141418]">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#18181c] border border-transparent group-hover:border-white/10 text-[#3b9eff] transition-colors">
                      <MailIcon className="size-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-mono text-2xs text-[#a1a4a5]">Email</p>
                      <p className="font-mono text-xs font-medium text-[#fcfdff] truncate">
                        {profile.email}
                      </p>
                    </div>
                  </div>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        type="button"
                        onClick={() => handleCopy(profile.email, "email")}
                        className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-transparent bg-[#18181c] text-[#a1a4a5] hover:text-[#fcfdff] hover:border-white/20 transition-colors"
                        aria-label="Copy email"
                      >
                        {copiedField === "email" ? (
                          <CheckIcon className="size-3.5 text-[#11ff99]" />
                        ) : (
                          <CopyIcon className="size-3.5" />
                        )}
                      </button>
                    </TooltipTrigger>
                    <TooltipContent className="text-2xs bg-[#18181b] text-white">
                      {copiedField === "email" ? "Copied!" : "Copy email"}
                    </TooltipContent>
                  </Tooltip>
                </div>

                {/* Phone Copy Card */}
                <div className="group relative flex items-center justify-between rounded-xl border border-transparent bg-[#101012] p-3.5 transition-all duration-200 hover:border-white/20 hover:bg-[#141418]">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#18181c] border border-transparent group-hover:border-white/10 text-[#11ff99] transition-colors">
                      <PhoneIcon className="size-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-mono text-2xs text-[#a1a4a5]">Phone</p>
                      <p className="font-mono text-xs font-medium text-[#fcfdff] truncate">
                        {profile.phone}
                      </p>
                    </div>
                  </div>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        type="button"
                        onClick={() => handleCopy(profile.phone, "phone")}
                        className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-transparent bg-[#18181c] text-[#a1a4a5] hover:text-[#fcfdff] hover:border-white/20 transition-colors"
                        aria-label="Copy phone"
                      >
                        {copiedField === "phone" ? (
                          <CheckIcon className="size-3.5 text-[#11ff99]" />
                        ) : (
                          <CopyIcon className="size-3.5" />
                        )}
                      </button>
                    </TooltipTrigger>
                    <TooltipContent className="text-2xs bg-[#18181b] text-white">
                      {copiedField === "phone" ? "Copied!" : "Copy phone"}
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>

              {/* Social Link Cards Grid */}
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative flex flex-col justify-between rounded-xl border border-transparent bg-[#08080c] p-4 transition-all duration-200 ${s.accent}`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div className="flex size-8 items-center justify-center rounded-lg bg-[#101012] border border-transparent group-hover:border-white/10 text-[#fcfdff] transition-transform duration-200 group-hover:scale-105">
                        <s.Icon className="size-4" />
                      </div>
                      <ExternalLinkIcon className="size-3.5 text-[#a1a4a5] opacity-0 transition-opacity group-hover:opacity-100" />
                    </div>
                    <div>
                      <p className="font-mono text-xs font-bold text-[#fcfdff]">{s.name}</p>
                      <p className="font-mono text-2xs text-[#a1a4a5] truncate">{s.label}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Right Column: Glassmorphic Inquiry Form */}
            <div className="lg:col-span-7 rounded-2xl border border-transparent bg-[#08080c] p-5 sm:p-7 shadow-2xl relative overflow-hidden">
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#fcfdff] mb-1">
                Send a Direct Message
              </h3>
              <p className="text-xs text-[#a1a4a5] mb-6">
                Have a project or engineering role in mind? Drop your details below.
              </p>

              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                <FieldGroup className="gap-4">
                  <Field data-invalid={!!errors.name}>
                    <FieldLabel htmlFor="connect-name" className="text-xs font-mono text-[#fcfdff]">
                      Your Name
                    </FieldLabel>
                    <InputGroup>
                      <InputGroupInput
                        id="connect-name"
                        placeholder="e.g. Alex Morgan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        aria-invalid={!!errors.name}
                        className="text-xs rounded-xl bg-[#101014] border-white/14 text-[#fcfdff] focus:border-[#3b9eff] focus:ring-1 focus:ring-[#3b9eff]/50 transition-all py-2.5"
                      />
                    </InputGroup>
                    {errors.name && <FieldError>{errors.name}</FieldError>}
                  </Field>

                  <Field data-invalid={!!errors.email}>
                    <FieldLabel
                      htmlFor="connect-email"
                      className="text-xs font-mono text-[#fcfdff]"
                    >
                      Your Email
                    </FieldLabel>
                    <InputGroup>
                      <InputGroupInput
                        id="connect-email"
                        type="email"
                        placeholder="e.g. alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        aria-invalid={!!errors.email}
                        className="text-xs rounded-xl bg-[#101014] border-white/14 text-[#fcfdff] focus:border-[#3b9eff] focus:ring-1 focus:ring-[#3b9eff]/50 transition-all py-2.5"
                      />
                    </InputGroup>
                    {errors.email && <FieldError>{errors.email}</FieldError>}
                  </Field>

                  <Field data-invalid={!!errors.message}>
                    <FieldLabel
                      htmlFor="connect-message"
                      className="text-xs font-mono text-[#fcfdff]"
                    >
                      Message
                    </FieldLabel>
                    <InputGroup>
                      <InputGroupTextarea
                        id="connect-message"
                        rows={4}
                        placeholder="How can Akshhat contribute to your engineering team?"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        aria-invalid={!!errors.message}
                        className="text-xs rounded-xl bg-[#101014] border-white/14 text-[#fcfdff] focus:border-[#3b9eff] focus:ring-1 focus:ring-[#3b9eff]/50 transition-all p-3"
                      />
                    </InputGroup>
                    {errors.message && <FieldError>{errors.message}</FieldError>}
                  </Field>
                </FieldGroup>

                <Button
                  type="submit"
                  size="default"
                  variant="default"
                  className="w-full sm:w-fit self-start gap-2 bg-[#fcfdff] text-[#000000] hover:bg-white/90 font-mono text-xs font-semibold py-2.5 px-6 rounded-xl transition-all"
                >
                  {sent ? (
                    <CheckIcon className="size-4 text-[#000000]" />
                  ) : (
                    <SendIcon className="size-4 text-[#000000]" />
                  )}
                  <span>{sent ? "Opening Email Client..." : "Send Message"}</span>
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
