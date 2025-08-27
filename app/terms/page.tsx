import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Scale, CreditCard, Shield, AlertTriangle, Users } from "lucide-react"

export default function TermsOfService() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
            <FileText className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">Terms of Service</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            These terms govern your use of ChatFlow's AI messaging platform. By using our service, you agree to these
            terms and conditions.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8">
            {/* Quick Summary */}
            <Card className="border-0 shadow-lg bg-white/60 backdrop-blur-sm border border-white/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-2xl text-slate-800">
                  <FileText className="w-6 h-6 text-purple-600" />
                  <span>Quick Summary</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-slate-600">Use ChatFlow responsibly and legally</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-slate-600">Pay your subscription fees on time</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-slate-600">Respect intellectual property rights</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-slate-600">We provide the service "as is"</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Acceptance of Terms */}
            <Card className="border-0 shadow-lg bg-white/60 backdrop-blur-sm border border-white/20">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-800">1. Acceptance of Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600 leading-relaxed">
                  By accessing or using ChatFlow's services, you agree to be bound by these Terms of Service and all
                  applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from
                  using or accessing our services.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-blue-800 text-sm">
                    <strong>Important:</strong> These terms constitute a legally binding agreement between you and
                    ChatFlow Inc. Please read them carefully.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Service Description */}
            <Card className="border-0 shadow-lg bg-white/60 backdrop-blur-sm border border-white/20">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-800">2. Service Description</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-slate-600 leading-relaxed">
                  ChatFlow provides an AI-powered messaging platform that enables businesses to:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      </div>
                      <span className="text-slate-600">Create and deploy intelligent chatbots</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      </div>
                      <span className="text-slate-600">Integrate with multiple messaging platforms</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      </div>
                      <span className="text-slate-600">Manage customer conversations</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                      </div>
                      <span className="text-slate-600">Access analytics and reporting tools</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                      </div>
                      <span className="text-slate-600">Enable live agent handoff capabilities</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                      </div>
                      <span className="text-slate-600">Utilize AI-powered response generation</span>
                    </div>
                  </div>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-yellow-800 text-sm">
                    <strong>Service Availability:</strong> We strive to maintain 99.9% uptime but cannot guarantee
                    uninterrupted service due to maintenance, updates, or unforeseen circumstances.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* User Responsibilities */}
            <Card className="border-0 shadow-lg bg-white/60 backdrop-blur-sm border border-white/20">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-800">3. User Responsibilities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-slate-600 leading-relaxed">As a ChatFlow user, you agree to:</p>

                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">Account Security</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Maintain the confidentiality of your account credentials</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Notify us immediately of any unauthorized access to your account</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Use strong passwords and enable two-factor authentication when available</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">Acceptable Use</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Use the service only for lawful business purposes</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Comply with all applicable laws and regulations</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Respect the privacy and rights of your customers and end users</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Obtain necessary consents for data processing and messaging</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Prohibited Activities */}
            <Card className="border-0 shadow-lg bg-white/60 backdrop-blur-sm border border-white/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-2xl text-slate-800">
                  <AlertTriangle className="w-6 h-6 text-red-500" />
                  <span>4. Prohibited Activities</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600 leading-relaxed">You may not use ChatFlow to:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-red-600 text-xs">×</span>
                      </div>
                      <span className="text-slate-600">Send spam, unsolicited, or bulk messages</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-red-600 text-xs">×</span>
                      </div>
                      <span className="text-slate-600">Distribute malware, viruses, or harmful content</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-red-600 text-xs">×</span>
                      </div>
                      <span className="text-slate-600">Engage in fraudulent or deceptive practices</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-red-600 text-xs">×</span>
                      </div>
                      <span className="text-slate-600">Violate intellectual property rights</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-red-600 text-xs">×</span>
                      </div>
                      <span className="text-slate-600">Harass, threaten, or abuse others</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-red-600 text-xs">×</span>
                      </div>
                      <span className="text-slate-600">Attempt to gain unauthorized access to our systems</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-red-600 text-xs">×</span>
                      </div>
                      <span className="text-slate-600">Reverse engineer or copy our software</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-red-600 text-xs">×</span>
                      </div>
                      <span className="text-slate-600">Use the service for illegal activities</span>
                    </div>
                  </div>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-800 text-sm">
                    <strong>Violation Consequences:</strong> Violation of these terms may result in immediate account
                    suspension or termination without refund.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Payment Terms */}
            <Card className="border-0 shadow-lg bg-white/60 backdrop-blur-sm border border-white/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-2xl text-slate-800">
                  <CreditCard className="w-6 h-6 text-green-600" />
                  <span>5. Payment Terms</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">Subscription Fees</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Subscription fees are billed in advance on a monthly or annual basis</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>All fees are non-refundable except as required by law</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Prices may change with 30 days' notice to existing customers</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">Usage-Based Charges</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Some features may incur additional charges based on usage:
                  </p>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Message volume exceeding plan limits</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Premium AI model usage</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Additional integrations or custom features</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">Payment Processing</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Payments are processed securely through our third-party payment providers. Failed payments may
                    result in service suspension until payment is resolved.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Intellectual Property */}
            <Card className="border-0 shadow-lg bg-white/60 backdrop-blur-sm border border-white/20">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-800">6. Intellectual Property</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">ChatFlow's Rights</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    ChatFlow retains all rights, title, and interest in:
                  </p>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>The ChatFlow platform, software, and technology</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>All trademarks, logos, and brand elements</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Documentation, templates, and training materials</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">Your Content</h3>
                  <p className="text-slate-600 leading-relaxed">
                    You retain ownership of all content you create using ChatFlow, including chatbot configurations,
                    custom responses, and business data. You grant us a limited license to process this content solely
                    to provide our services.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">License to Use</h3>
                  <p className="text-slate-600 leading-relaxed">
                    We grant you a limited, non-exclusive, non-transferable license to use ChatFlow during your
                    subscription period, subject to these terms.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Limitation of Liability */}
            <Card className="border-0 shadow-lg bg-white/60 backdrop-blur-sm border border-white/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-2xl text-slate-800">
                  <Shield className="w-6 h-6 text-blue-600" />
                  <span>7. Limitation of Liability</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-yellow-800 text-sm font-medium mb-2">Important Legal Notice</p>
                  <p className="text-yellow-800 text-sm">
                    The following limitations may not apply in all jurisdictions. Please consult local laws for your
                    specific rights.
                  </p>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  To the maximum extent permitted by law, ChatFlow shall not be liable for:
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-slate-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Indirect, incidental, special, or consequential damages</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-slate-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Loss of profits, data, or business opportunities</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-slate-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Service interruptions or technical failures</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-slate-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Actions or content of third-party integrations</span>
                  </li>
                </ul>
                <p className="text-slate-600 leading-relaxed">
                  Our total liability for any claims shall not exceed the amount you paid for the service in the 12
                  months preceding the claim.
                </p>
              </CardContent>
            </Card>

            {/* Termination */}
            <Card className="border-0 shadow-lg bg-white/60 backdrop-blur-sm border border-white/20">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-800">8. Termination</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">Termination by You</h3>
                  <p className="text-slate-600 leading-relaxed">
                    You may terminate your account at any time through your account settings or by contacting support.
                    Termination will be effective at the end of your current billing period.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">Termination by ChatFlow</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">We may terminate your account if:</p>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>You violate these terms of service</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Payment is overdue for more than 30 days</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Your use poses a security risk to our platform</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">Effect of Termination</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Upon termination, your access to the service will cease, and your data will be deleted according to
                    our data retention policy. You may export your data before termination.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Governing Law */}
            <Card className="border-0 shadow-lg bg-white/60 backdrop-blur-sm border border-white/20">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-800">9. Governing Law & Disputes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600 leading-relaxed">
                  These terms are governed by the laws of the State of California, USA, without regard to conflict of
                  law principles.
                </p>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">Dispute Resolution</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    We encourage resolving disputes through direct communication. If that fails:
                  </p>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Disputes under $10,000 may be resolved through small claims court</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Larger disputes will be resolved through binding arbitration</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Class action lawsuits are waived except where prohibited by law</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-indigo-50 relative overflow-hidden">
              <div className="absolute inset-0 bg-white/40 backdrop-blur-3xl"></div>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-2xl text-slate-800">
                  <Users className="w-6 h-6 text-blue-600" />
                  <span>10. Contact Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600 leading-relaxed">
                  If you have questions about these Terms of Service, please contact us:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">Legal Department</h4>
                    <p className="text-slate-600 text-sm">Email: legal@chatflow.com</p>
                    <p className="text-slate-600 text-sm">Response time: Within 5 business days</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">General Support</h4>
                    <p className="text-slate-600 text-sm">Email: support@chatflow.com</p>
                    <p className="text-slate-600 text-sm">For account and service questions</p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-white rounded-lg border border-blue-200">
                  <p className="text-blue-800 text-sm">
                    <strong>Mailing Address:</strong> ChatFlow Inc., Legal Department, 123 Tech Street, San Francisco,
                    CA 94105, USA
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Changes to Terms */}
            <Card className="border-0 shadow-lg bg-white/60 backdrop-blur-sm border border-white/20">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-800">11. Changes to Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed mb-4">
                  We may update these Terms of Service from time to time. When we make material changes, we will:
                </p>
                <ul className="space-y-2 text-slate-600 mb-4">
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Notify you by email at least 30 days before changes take effect</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Display a notice on our platform</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Update the "Last Updated" date at the top of this document</span>
                  </li>
                </ul>
                <p className="text-slate-600 leading-relaxed">
                  Your continued use of the service after changes take effect constitutes acceptance of the new terms.
                </p>
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p className="text-slate-700 text-sm">
                    <strong>Version History:</strong> Previous versions of these terms are available upon request at
                    legal@chatflow.com
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}
