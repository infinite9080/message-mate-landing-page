import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock, FileText, Share2, Shield, UserCheck, Phone, Repeat, Link as LinkIcon } from "lucide-react";
import Link from "next/link";
import type { Metadata } from 'next';

// --- CUSTOMIZE THESE DETAILS ---
const ORG = "ChatFlow, Inc.";
const APP = "ChatFlow";
const CONTACT_EMAIL = "privacy@chatflow.com";
const ADDRESS = "123 Flow Street, Digital City, World";
// -----------------------------

// Use Next.js Metadata API for SEO in the App Router
export const metadata: Metadata = {
  title: `Privacy Policy | ${APP}`,
  description: `${APP} Privacy Policy`,
  robots: "index,follow",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPolicyPage() {
  const updated = new Date().toISOString().slice(0, 10);

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 px-6 bg-gray-50/50 dark:bg-gray-900/50 mt-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
            <Lock className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 dark:text-slate-100 mb-4">Privacy Policy</h1>
          <p className="text-lg text-slate-500 dark:text-slate-400">Last updated: {updated}</p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8">

            {/* Who We Are & Data We Collect */}
            <Card className="border-0 shadow-lg bg-white/60 dark:bg-black/30 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-2xl text-slate-800 dark:text-slate-100">
                  <FileText className="w-6 h-6 text-blue-500" />
                  <span>Who We Are & Data We Collect</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {ORG} (“we”, “us”, “our”) provides {APP}. We integrate with Meta’s
                  WhatsApp Business Platform (Cloud API) to help businesses manage
                  WhatsApp communications.
                </p>
                <div>
                  <h3 className="font-semibold text-slate-700 dark:text-slate-200 mb-3">We collect the following types of data:</h3>
                  <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                    <li className="flex items-start space-x-3">
                      <strong className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2.5 flex-shrink-0"></strong>
                      <span><strong>Account/Admin Data:</strong> name, email, business name, phone numbers, Meta Business ID, WhatsApp Business Account (WABA) details.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <strong className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2.5 flex-shrink-0"></strong>
                      <span><strong>Auth Data:</strong> identifiers and tokens from Facebook Login / Meta system users necessary to connect Business Manager/WABA.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <strong className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2.5 flex-shrink-0"></strong>
                      <span><strong>Messaging Data:</strong> WhatsApp message content/attachments and metadata processed to deliver the service as configured by you.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <strong className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2.5 flex-shrink-0"></strong>
                      <span><strong>Usage & Device:</strong> IP, timestamps, logs for security and reliability; aggregated analytics.</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* How We Use and Share Data */}
            <Card className="border-0 shadow-lg bg-white/60 dark:bg-black/30 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-2xl text-slate-800 dark:text-slate-100">
                  <Share2 className="w-6 h-6 text-green-500" />
                  <span>How We Use & Share Data</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-slate-700 dark:text-slate-200 mb-3">How we use data:</h3>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                    <li className="flex items-start space-x-2">▸<span>Authenticate users and connect to Meta Business/WABA.</span></li>
                    <li className="flex items-start space-x-2">▸<span>Send/receive WhatsApp messages and display conversation history.</span></li>
                    <li className="flex items-start space-x-2">▸<span>Provide support, prevent abuse, ensure security, and meet legal obligations.</span></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-700 dark:text-slate-200 mb-3">Sharing:</h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    We share data with service providers (hosting, logging, analytics)
                    under data‑protection agreements, and with Meta as required to operate
                    the WhatsApp Business Platform. <strong>We do not sell personal data.</strong>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Security, Retention & Legal */}
            <Card className="border-0 shadow-lg bg-white/60 dark:bg-black/30 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-2xl text-slate-800 dark:text-slate-100">
                  <Shield className="w-6 h-6 text-purple-500" />
                  <span>Security, Retention & Legal</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-slate-700 dark:text-slate-200 mb-2">Security:</h3>
                  <p className="text-slate-600 dark:text-slate-300">We use industry‑standard safeguards (encryption in transit, access controls, backups). No method is 100% secure.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-700 dark:text-slate-200 mb-2">Retention:</h3>
                  <p className="text-slate-600 dark:text-slate-300">We retain personal data only as long as necessary for the purposes above or as required by law. You may request deletion at any time (see <a href="/data-deletion" className="text-blue-500 underline">Data Deletion</a>).</p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-700 dark:text-slate-200 mb-2">Legal bases (EEA/UK):</h3>
                  <p className="text-slate-600 dark:text-slate-300">Performance of a contract, legitimate interests, compliance with legal obligations, and consent where required.</p>
                </div>
              </CardContent>
            </Card>

            {/* Your Rights & Children's Privacy */}
            <Card className="border-0 shadow-lg bg-white/60 dark:bg-black/30 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-2xl text-slate-800 dark:text-slate-100">
                  <UserCheck className="w-6 h-6 text-red-500" />
                  <span>Your Rights & Children's Privacy</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-slate-700 dark:text-slate-200 mb-2">Your Rights:</h3>
                  <p className="text-slate-600 dark:text-slate-300">Depending on your location, you may have rights to access, correct, delete, port, restrict or object to processing. Contact us to exercise these rights.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-700 dark:text-slate-200 mb-2">Children:</h3>
                  <p className="text-slate-600 dark:text-slate-300">Our services are not directed to children under 13 (or as defined by local law).</p>
                </div>
              </CardContent>
            </Card>

            {/* Contact, Changes & Data Deletion */}
            <Card className="border-0 shadow-lg bg-white/60 dark:bg-black/30 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-2xl text-slate-800 dark:text-slate-100">
                  <Phone className="w-6 h-6 text-indigo-500" />
                  <span>Contact, Changes & Data Deletion</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-slate-700 dark:text-slate-200 mb-2">Contact:</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Email: <a href={`mailto:${CONTACT_EMAIL}`} className="text-blue-500 underline">{CONTACT_EMAIL}</a>
                    <br />
                    Address: {ADDRESS}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-700 dark:text-slate-200 mb-2">Changes:</h3>
                  <p className="text-slate-600 dark:text-slate-300">We may update this policy. The “Last updated” date reflects the latest change.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-700 dark:text-slate-200 mb-2">Data Deletion:</h3>

                  <div className="mt-2">
                    <Link
                      href="/data-deletion"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-br from-[#71d6fb] via-blue-500 to-cyan-400 text-white font-semibold shadow-md hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    >
                      <span>Go to Data Deletion Page</span>
                      <LinkIcon className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>
    </>
  );
}