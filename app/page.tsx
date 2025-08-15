import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Brain,
  Zap,
  Target,
  Users,
  CheckCircle,
  Star,
  Sparkles,
  Rocket,
  Shield,
  Globe,
  TrendingUp,
  Award,
} from "lucide-react"
import {
  GeometricDivider,
  WaveDivider,
  AnimatedDotsDivider,
  HexagonDivider,
  GradientLineDivider,
  SpiralDivider,
  ZigzagDivider,
  DiamondDivider,
  FloatingElementsDivider,
  ModernLineDivider,
} from "@/components/section-dividers"
import { CTAButton } from "@/components/cta-button"
import { PricingCard } from "@/components/pricing-card"
import { FloatingCTA } from "@/components/floating-cta"
import { ScrollTracker } from "@/components/scroll-tracker"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-black overflow-x-hidden">
      {/* Navigation */}
      <nav className="bg-slate-800/95 backdrop-blur-sm border-b border-slate-200/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2 animate-slide-in-left">
              <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center animate-pulse-glow">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="font-heading font-bold text-xl text-white">PointLine Solutions</span>
            </div>
            <div className="hidden md:flex items-center space-x-8 animate-slide-in-right">
              <a
                href="#pricing"
                className="text-slate-300 hover:text-white transition-all duration-300 hover:scale-105"
              >
                Pricing
              </a>
              <a
                href="#case-studies"
                className="text-slate-300 hover:text-white transition-all duration-300 hover:scale-105"
              >
                Case Studies
              </a>
              <a
                href="#testimonials"
                className="text-slate-300 hover:text-white transition-all duration-300 hover:scale-105"
              >
                Testimonials
              </a>
              <CTAButton 
                variant="primary"
                url="https://calendly.com/pointlinesolutions/30min"
                size="default"
                className="bg-red-500 hover:bg-red-600 text-white animate-scale-pulse"
                location="header"
                buttonName="header_book_call"
              >
                Book Free Call
              </CTAButton>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - High-Impact Roofing/HVAC */}
      <section className="relative overflow-hidden py-20 lg:py-32 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-500/20 rounded-full animate-float"></div>
          <div
            className="absolute top-40 right-20 w-16 h-16 bg-purple-500/20 rounded-lg animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-20 left-1/4 w-12 h-12 bg-yellow-400/20 rounded-full animate-float"
            style={{ animationDelay: "4s" }}
          ></div>
          <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-green-400/20 rounded-lg animate-rotate-slow"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center space-y-8 animate-fade-in-up max-w-5xl mx-auto">
            <Badge className="bg-red-500/10 text-red-400 border-red-500/20 animate-pulse-glow">
              <Sparkles className="w-4 h-4 mr-2" />
              Results Guaranteed or You Don't Pay
            </Badge>
            <h1 className="font-heading font-bold text-4xl lg:text-6xl xl:text-7xl text-white leading-tight animate-text-glow">
              Book 20+ Roofing or HVAC Jobs in 30 Days
              <span className="text-red-400 animate-text-glow"> — or You Don't Pay</span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-200 leading-relaxed max-w-4xl mx-auto">
              Our AI caller, chatbot, and ads engine fill your calendar automatically so you can focus on installs and repairs.
            </p>
            
            {/* Trust Bullets */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-8">
              <div className="flex items-center space-x-2 text-cyan-400">
                <CheckCircle className="w-5 h-5" />
                <span className="text-sm font-semibold">AI-powered follow-up in seconds</span>
              </div>
              <div className="flex items-center space-x-2 text-cyan-400">
                <CheckCircle className="w-5 h-5" />
                <span className="text-sm font-semibold">No long contracts</span>
              </div>
              <div className="flex items-center space-x-2 text-cyan-400">
                <CheckCircle className="w-5 h-5" />
                <span className="text-sm font-semibold">Local-market exclusivity</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton 
                variant="primary"
                url="https://calendly.com/pointlinesolutions/30min"
                location="hero_section"
                buttonName="hero_book_call"
              >
                Book a Free Strategy Call
              </CTAButton>
              <CTAButton
                variant="secondary"
                url="/pricing-guide.pdf"
                location="hero_section"
                buttonName="hero_download_pdf"
              >
                Download Pricing PDF
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      <HexagonDivider />

      <section className="py-16 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent animate-gradient-shift"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { number: "200+", label: "AI Projects Delivered", icon: Rocket },
              { number: "98%", label: "Client Satisfaction", icon: Award },
              { number: "450%", label: "Average ROI Increase", icon: TrendingUp },
              { number: "10+", label: "Industries Served", icon: Globe },
            ].map((stat, index) => (
              <div key={index} className="space-y-4 animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto animate-scale-pulse">
                  <stat.icon className="w-8 h-8 text-cyan-500" />
                </div>
                <div className="text-4xl font-heading font-bold text-white animate-text-glow">{stat.number}</div>
                <div className="text-slate-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GeometricDivider />

      {/* Services Section - Updated colors */}
      <section id="services" className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-32 h-32 bg-cyan-500/10 rounded-full animate-float"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-purple-500/10 rounded-lg animate-rotate-slow"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16 animate-fade-in-up">
            <h2 className="font-heading font-bold text-5xl text-white animate-text-glow">Our AI Solutions</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive AI consulting services designed to accelerate your business transformation
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "AI Strategy & Consulting",
                description:
                  "Develop comprehensive AI roadmaps tailored to your business objectives and industry requirements.",
                color: "bg-cyan-500/10 text-cyan-600",
              },
              {
                icon: Zap,
                title: "Machine Learning Implementation",
                description:
                  "Build and deploy custom ML models that solve real business problems and drive measurable results.",
                color: "bg-yellow-500/10 text-yellow-600",
              },
              {
                icon: Target,
                title: "Process Automation",
                description:
                  "Streamline operations with intelligent automation solutions that reduce costs and improve efficiency.",
                color: "bg-green-500/10 text-green-600",
              },
              {
                icon: Users,
                title: "AI Training & Support",
                description: "Empower your team with comprehensive AI training and ongoing technical support.",
                color: "bg-purple-500/10 text-purple-600",
              },
              {
                icon: CheckCircle,
                title: "Data Analytics & Insights",
                description:
                  "Transform raw data into actionable insights with advanced analytics and visualization tools.",
                color: "bg-pink-500/10 text-pink-600",
              },
              {
                icon: Star,
                title: "Custom AI Development",
                description: "Create bespoke AI solutions designed specifically for your unique business challenges.",
                color: "bg-orange-500/10 text-orange-600",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 bg-slate-800/50 border-slate-700 hover:border-cyan-500/30 animate-fade-in-up hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 space-y-4">
                  <div
                    className={`w-16 h-16 ${service.color} rounded-xl flex items-center justify-center group-hover:animate-scale-pulse transition-all duration-300`}
                  >
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-white group-hover:text-cyan-500 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-slate-900 to-black relative overflow-hidden">
        <div className="absolute top-20 right-20 w-28 h-28 bg-cyan-500/10 rounded-full animate-float"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16 animate-fade-in-up">
            <h2 className="font-heading font-bold text-5xl text-white animate-text-glow">About PointLine Solutions</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We're a team of AI experts and business strategists dedicated to helping roofing and HVAC companies scale their operations.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <h3 className="font-heading font-semibold text-3xl text-white">Our Mission</h3>
              <p className="text-slate-300 leading-relaxed text-lg">
                To revolutionize how service businesses operate by implementing cutting-edge AI solutions that drive real results. 
                We believe every company deserves access to the same technology that Fortune 500 companies use.
              </p>
              <p className="text-slate-300 leading-relaxed text-lg">
                Our proven approach combines deep industry knowledge with advanced AI technology to create automated systems 
                that fill your calendar, nurture leads, and maximize your revenue potential.
              </p>
            </div>
            
            <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <h3 className="font-heading font-semibold text-3xl text-white">Why Choose Us</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-lg">Results Guaranteed</h4>
                    <p className="text-slate-300">We don't get paid unless you see results. Your success is our success.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-lg">Industry Expertise</h4>
                    <p className="text-slate-300">We understand the unique challenges of roofing and HVAC businesses.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-lg">Local Market Focus</h4>
                    <p className="text-slate-300">We only work with one company per city to protect your territory.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency Band 1 */}
      <section className="py-8 bg-red-500/10 border-y border-red-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="text-red-400 font-semibold text-lg">
              ⚡ We only partner with one Roofer and one HVAC company per city to protect your territory.
            </div>
            <CTAButton 
              variant="primary"
              url="https://calendly.com/pointlinesolutions/30min"
              size="default"
              className="bg-red-500 hover:bg-red-600 text-white animate-scale-pulse whitespace-nowrap"
            >
              Book Free Call
            </CTAButton>
          </div>
        </div>
      </section>

      <AnimatedDotsDivider />

      <section className="py-20 bg-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-animated-gradient opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16 animate-fade-in-up">
            <h2 className="font-heading font-bold text-5xl text-white animate-text-glow">How We Work</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Simple, proven process that transforms your business operations
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Go Into Your Business",
                description: "We dive deep into your operations, understand your processes, and identify automation opportunities that will drive real results.",
                icon: Target,
                color: "bg-cyan-500/10 text-cyan-600",
              },
              {
                step: "02", 
                title: "Automate Key Parts",
                description: "We implement smart automation solutions that streamline your workflows, reduce manual tasks, and eliminate bottlenecks.",
                icon: Zap,
                color: "bg-yellow-500/10 text-yellow-600",
              },
              {
                step: "03",
                title: "Build More Revenue",
                description: "With automated processes in place, your team can focus on high-value activities that directly impact your bottom line.",
                icon: TrendingUp,
                color: "bg-green-500/10 text-green-600",
              },
            ].map((process, index) => (
              <div
                key={index}
                className="text-center space-y-6 animate-fade-in-up bg-slate-900/50 rounded-xl p-8 border border-slate-700 hover:border-cyan-500/30 transition-all duration-500 hover:scale-105"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative">
                  <div className={`w-20 h-20 ${process.color} rounded-full flex items-center justify-center mx-auto animate-scale-pulse`}>
                    <process.icon className="w-10 h-10" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm animate-pulse-glow">
                    {process.step}
                  </div>
                </div>
                <h3 className="font-heading font-semibold text-2xl text-white">{process.title}</h3>
                <p className="text-slate-300 leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 animate-fade-in-up">
            <div className="inline-block bg-cyan-500/10 border border-cyan-500/20 rounded-full px-6 py-3">
              <span className="text-cyan-400 font-semibold text-lg">Everyone Wins</span>
            </div>
            <p className="text-slate-300 mt-4 max-w-2xl mx-auto">
              Your business becomes more efficient, your team focuses on what matters most, and your revenue grows. 
              It's that simple.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gradient-to-br from-slate-900 to-black relative overflow-hidden">
        <div className="absolute top-20 left-10 w-40 h-40 bg-red-500/5 rounded-full animate-float"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16 animate-fade-in-up">
            <h2 className="font-heading font-bold text-5xl text-white animate-text-glow">Clear Pricing. Results First.</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Choose the package that fits your business needs. All packages include our results guarantee.
            </p>
          </div>
          
          <div className="space-y-8 mb-12">
            {/* First row - 2 cards */}
            <div className="grid lg:grid-cols-2 gap-8">
              <PricingCard
                title="Full 3-Month Growth Sprint"
                setup="$3,500"
                monthly="$2,500"
                includes={["Ads", "Funnel", "AI caller/chatbot", "CRM", "Follow-ups"]}
                featured={false}
                calendlyUrl="https://calendly.com/pointlinesolutions/30min"
                pdfUrl="/pricing-guide.pdf"
              />
              <PricingCard
                title="AI Caller + Chatbot Combo"
                setup="$2,500"
                monthly="$800"
                includes={["AI caller", "Chatbot", "Basic follow-ups"]}
                featured={false}
                calendlyUrl="https://calendly.com/pointlinesolutions/30min"
                pdfUrl="/pricing-guide.pdf"
              />
            </div>
            
            {/* Second row - 2 cards */}
            <div className="grid lg:grid-cols-2 gap-8">
              <PricingCard
                title="Ads + Funnel Only"
                setup="$3,500"
                monthly="$2,500"
                includes={["Facebook/Google ads", "Landing pages", "Lead capture"]}
                featured={false}
                calendlyUrl="https://calendly.com/pointlinesolutions/30min"
                pdfUrl="/pricing-guide.pdf"
              />
              <PricingCard
                title="CRM & Workflow Automation"
                setup="$1,500"
                monthly="$500"
                includes={["CRM setup", "Workflow automation", "Team training"]}
                featured={false}
                calendlyUrl="https://calendly.com/pointlinesolutions/30min"
                pdfUrl="/pricing-guide.pdf"
              />
            </div>
            
            {/* Third row - 1 centered card */}
            <div className="flex justify-center">
                              <PricingCard
                  title="AI Follow-Up Sequences"
                  setup="$750"
                  monthly="$250"
                  includes={["Email sequences", "SMS follow-ups", "Lead nurturing"]}
                  featured={false}
                  calendlyUrl="https://calendly.com/pointlinesolutions/30min"
                  pdfUrl="/pricing-guide.pdf"
                />
            </div>
          </div>
          
          <div className="text-center space-y-6 animate-fade-in-up">
            <div className="inline-block bg-red-500/10 border border-red-500/20 rounded-full px-6 py-3">
              <span className="text-red-400 font-semibold text-lg">Results or you don't pay</span>
            </div>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Custom packages available upon request. All packages include our performance guarantee.
            </p>
          </div>
        </div>
      </section>

      <SpiralDivider />

      {/* Case Studies Section - Updated colors */}
      <section id="case-studies" className="py-20 bg-gradient-to-br from-slate-900 to-black relative overflow-hidden">
        <div className="absolute top-20 left-10 w-40 h-40 bg-cyan-500/5 rounded-full animate-float"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16 animate-fade-in-up">
            <h2 className="font-heading font-bold text-5xl text-white animate-text-glow">Success Stories</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Real results from real businesses that trusted us with their AI transformation
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                company: "TechCorp Manufacturing",
                result: "40% reduction in operational costs",
                description:
                  "Implemented predictive maintenance AI that reduced downtime and optimized production schedules.",
                metric: "$2.5M",
                metricLabel: "Annual Savings",
              },
              {
                company: "RetailMax Chain",
                result: "25% increase in sales conversion",
                description:
                  "Deployed personalized recommendation engine that transformed customer shopping experience.",
                metric: "150%",
                metricLabel: "Revenue Growth",
              },
              {
                company: "FinanceFirst Bank",
                result: "60% faster fraud detection",
                description:
                  "Built real-time fraud detection system that protects customers while reducing false positives.",
                metric: "99.8%",
                metricLabel: "Accuracy Rate",
              },
            ].map((study, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-2xl transition-all duration-500 animate-fade-in-up hover:scale-105 bg-slate-800/50 border-slate-700"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8 space-y-4">
                  <div className="absolute top-4 right-4 bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse-glow">
                    {study.metric}
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-white pt-8">{study.company}</h3>
                  <div className="text-2xl font-bold text-cyan-500 animate-text-glow">{study.result}</div>
                  <p className="text-slate-300">{study.description}</p>
                  <div className="text-sm text-slate-400 font-semibold">{study.metricLabel}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section after Case Studies */}
      <section className="py-16 bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 animate-fade-in-up">
          <h2 className="font-heading font-bold text-4xl text-white animate-text-glow">
            Ready to Book 20+ Jobs in 30 Days?
          </h2>
          <p className="text-xl text-slate-200 max-w-2xl mx-auto">
            Join the roofing and HVAC companies already scaling with our AI solutions.
          </p>
                    <CTAButton 
            variant="primary"
            url="https://calendly.com/pointlinesolutions/30min"
          >
            Book Your Free Strategy Call
          </CTAButton>
          </div>
        </section>

      <DiamondDivider />

      {/* Testimonials Section - Updated colors */}
      <section id="testimonials" className="py-20 bg-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent animate-gradient-shift"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16 animate-fade-in-up">
            <h2 className="font-heading font-bold text-5xl text-white animate-text-glow">What Our Clients Say</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Trusted by industry leaders who've experienced transformational results
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                quote:
                  "PointLine Solutions transformed our entire approach to data analysis. Their AI implementation increased our efficiency by 300% and gave us insights we never knew were possible.",
                author: "Sarah Chen",
                title: "CTO, DataDriven Inc.",
                avatar: "/placeholder.svg?height=60&width=60",
                company: "DataDriven Inc.",
                industry: "Technology",
              },
              {
                quote:
                  "The team's expertise in AI strategy is unmatched. They didn't just implement technology—they revolutionized how we think about our business processes.",
                author: "Michael Rodriguez",
                title: "CEO, InnovateNow Corp.",
                avatar: "/placeholder.svg?height=60&width=60",
                company: "InnovateNow Corp.",
                industry: "Manufacturing",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="p-8 bg-slate-900/50 border-slate-700 hover:shadow-xl transition-all duration-500 animate-fade-in-up hover:scale-105"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="space-y-6 p-0">
                  <div className="flex text-cyan-500 animate-pulse-glow">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-lg text-slate-200 italic leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.author}
                      className="w-16 h-16 rounded-full object-cover animate-scale-pulse"
                    />
                    <div>
                      <div className="font-semibold text-white text-lg">{testimonial.author}</div>
                      <div className="text-slate-300">{testimonial.title}</div>
                      <div className="text-sm text-cyan-500 font-semibold">{testimonial.industry}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <FloatingElementsDivider />

      <section className="py-20 bg-gradient-to-br from-slate-900 to-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-28 h-28 bg-purple-500/10 rounded-full animate-float"></div>
          <div className="absolute bottom-10 left-10 w-20 h-20 bg-cyan-400/10 rounded-lg animate-rotate-slow"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16 animate-fade-in-up">
            <h2 className="font-heading font-bold text-5xl text-white animate-text-glow">Our Process</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              A proven methodology that delivers exceptional AI solutions
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "Deep dive into your business challenges and opportunities",
                icon: Target,
              },
              {
                step: "02",
                title: "Strategy",
                description: "Develop comprehensive AI roadmap aligned with your goals",
                icon: Brain,
              },
              {
                step: "03",
                title: "Implementation",
                description: "Build and deploy cutting-edge AI solutions",
                icon: Rocket,
              },
              {
                step: "04",
                title: "Optimization",
                description: "Continuous improvement and performance monitoring",
                icon: TrendingUp,
              },
            ].map((process, index) => (
              <div
                key={index}
                className="text-center space-y-4 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative">
                  <div className="w-20 h-20 bg-cyan-500 rounded-full flex items-center justify-center mx-auto animate-scale-pulse">
                    <process.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold text-sm animate-pulse-glow">
                    {process.step}
                  </div>
                </div>
                <h3 className="font-heading font-semibold text-xl text-white">{process.title}</h3>
                <p className="text-slate-300">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ZigzagDivider />

      {/* Contact Section - Already dark */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 animate-fade-in-up">
          <div className="space-y-4">
            <Badge className="bg-red-500/10 text-red-400 border-red-500/20 animate-pulse-glow">
              <Shield className="w-4 h-4 mr-2" />
              Results Guaranteed
            </Badge>
            <h2 className="font-heading font-bold text-5xl text-white animate-text-glow">
              Ready to Book 20+ Jobs in 30 Days?
            </h2>
            <p className="text-xl text-slate-200 max-w-2xl mx-auto">
              Book your free strategy call and discover how our AI solutions can transform your roofing or HVAC business.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <CTAButton 
            variant="primary"
            url="https://calendly.com/pointlinesolutions/30min"
          >
            Book Your Free Strategy Call
          </CTAButton>
          </div>
        </div>
      </section>

      {/* Urgency Band 2 */}
      <section className="py-8 bg-cyan-500/10 border-y border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="text-cyan-400 font-semibold text-lg">
              ⚡ Storm and heat waves don't wait. Most campaigns go live in 5–7 days once onboarded.
            </div>
            <CTAButton 
              variant="primary"
              url="https://calendly.com/pointlinesolutions/30min"
              size="default"
              className="bg-cyan-500 hover:bg-cyan-600 text-white animate-scale-pulse whitespace-nowrap"
            >
              Book Free Call
            </CTAButton>
          </div>
        </div>
      </section>

      <GradientLineDivider />

      <WaveDivider reverse={true} />

      {/* Footer - Already dark */}
      <footer className="bg-slate-800 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4 animate-fade-in-up">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center animate-pulse-glow">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <span className="font-heading font-bold text-xl text-white">PointLine Solutions</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Transforming businesses through cutting-edge AI solutions and strategic consulting.
              </p>
              <div className="flex space-x-4">
                {["LinkedIn", "Twitter", "GitHub"].map((social, index) => (
                  <div
                    key={index}
                    className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-cyan-500 transition-colors cursor-pointer animate-scale-pulse"
                  >
                    <span className="text-white text-sm">{social[0]}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <h4 className="font-semibold text-white text-lg">Services</h4>
              <div className="space-y-3 text-slate-400">
                <div className="hover:text-white transition-colors cursor-pointer">CRM/Workflow Automation</div>
                <div className="hover:text-white transition-colors cursor-pointer">AI Caller/Chatbot</div>
                <div className="hover:text-white transition-colors cursor-pointer">Ads/Promotion</div>
                <div className="hover:text-white transition-colors cursor-pointer">Follow Up Sequences</div>
              </div>
            </div>
            <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <h4 className="font-semibold text-white text-lg">Company</h4>
              <div className="space-y-3 text-slate-400">
                <div className="hover:text-white transition-colors cursor-pointer">
                  <a href="#about">About Us</a>
                </div>
                <div className="hover:text-white transition-colors cursor-pointer">
                  <a href="#case-studies">Case Studies</a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 text-center text-slate-400 animate-fade-in-up">
            <p>&copy; 2025 PointLine Solutions. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>

      {/* Floating CTA Bubble */}
      <FloatingCTA url="https://calendly.com/pointlinesolutions/30min" />
      <ScrollTracker />
    </div>
  )
}
