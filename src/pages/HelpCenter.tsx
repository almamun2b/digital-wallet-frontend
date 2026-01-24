import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import type { LucideProps } from "lucide-react";
import {
  AlertCircle,
  ArrowLeft,
  BookOpen,
  CheckCircle,
  ChevronRight,
  Clock,
  CreditCard,
  Download,
  FileText,
  HelpCircle,
  Mail,
  MessageCircle,
  Phone,
  Search,
  Shield,
  Users,
  Video,
} from "lucide-react";
import {
  useEffect,
  useRef,
  useState,
  type ForwardRefExoticComponent,
  type RefAttributes,
} from "react";
import { Link } from "react-router";

const helpCategories = [
  {
    id: "getting-started",
    title: "Getting Started",
    description: "Learn the basics of using your digital wallet",
    icon: BookOpen,
    color: "bg-blue-500/10 text-blue-500",
    articles: [
      {
        id: "create-account",
        title: "How to create an account",
        content:
          "Creating an account is simple and takes just a few minutes. Click on the 'Register' button, fill in your personal information, verify your email, and you're ready to start using your digital wallet.",
        category: "getting-started",
        readTime: "3 min",
        difficulty: "Beginner",
      },
      {
        id: "first-transaction",
        title: "Making your first transaction",
        content:
          "Navigate to the 'Send Money' section, enter the recipient's wallet address or phone number, input the amount, confirm the details, and authorize with your PIN. Your transaction will be processed instantly.",
        category: "getting-started",
        readTime: "2 min",
        difficulty: "Beginner",
      },
      {
        id: "setup-profile",
        title: "Setting up your profile",
        content:
          "Complete your profile by adding a profile picture, verifying your identity, setting up two-factor authentication, and configuring your notification preferences for better security and user experience.",
        category: "getting-started",
        readTime: "4 min",
        difficulty: "Beginner",
      },
      {
        id: "understand-dashboard",
        title: "Understanding your dashboard",
        content:
          "Your dashboard provides an overview of your account balance, recent transactions, quick actions, and important notifications. Learn to navigate each section for efficient wallet management.",
        category: "getting-started",
        readTime: "5 min",
        difficulty: "Beginner",
      },
    ],
  },
  {
    id: "transactions",
    title: "Transactions",
    description: "Everything about sending and receiving money",
    icon: CreditCard,
    color: "bg-green-500/10 text-green-500",
    articles: [
      {
        id: "send-money",
        title: "Send money to other users",
        content:
          "Send money instantly to other wallet users using their wallet address, phone number, or email. You can also schedule recurring payments and add transaction notes for better tracking.",
        category: "transactions",
        readTime: "3 min",
        difficulty: "Easy",
      },
      {
        id: "cash-in",
        title: "Cash-in through agents",
        content:
          "Visit authorized agents to add money to your wallet. Simply provide your wallet number, hand over the cash, and receive confirmation. The amount will be credited to your wallet instantly.",
        category: "transactions",
        readTime: "2 min",
        difficulty: "Easy",
      },
      {
        id: "cash-out",
        title: "Cash-out from your wallet",
        content:
          "Withdraw money from your digital wallet through authorized agents. The agent will verify your identity and provide cash after deducting the applicable fees.",
        category: "transactions",
        readTime: "2 min",
        difficulty: "Easy",
      },
      {
        id: "transaction-history",
        title: "Transaction history and limits",
        content:
          "View your complete transaction history, filter by date or type, download statements, and understand your daily and monthly transaction limits for better financial planning.",
        category: "transactions",
        readTime: "4 min",
        difficulty: "Intermediate",
      },
    ],
  },
  {
    id: "security",
    title: "Security",
    description: "Keep your account safe and secure",
    icon: Shield,
    color: "bg-purple-500/10 text-purple-500",
    articles: [
      {
        id: "pin-protection",
        title: "Setting up PIN protection",
        content:
          "Create a strong 4-digit PIN that's not easily guessable. Avoid using birth dates, phone numbers, or sequential numbers. Change your PIN regularly for enhanced security.",
        category: "security",
        readTime: "3 min",
        difficulty: "Easy",
      },
      {
        id: "two-factor",
        title: "Two-factor authentication",
        content:
          "Enable 2FA for an extra layer of security. You'll receive a verification code on your registered mobile number for sensitive operations like large transactions or profile changes.",
        category: "security",
        readTime: "4 min",
        difficulty: "Intermediate",
      },
      {
        id: "phishing",
        title: "Recognizing phishing attempts",
        content:
          "Learn to identify fake emails, SMS, or websites asking for your wallet details. Always verify the sender's authenticity and never share your PIN or OTP with anyone.",
        category: "security",
        readTime: "5 min",
        difficulty: "Advanced",
      },
      {
        id: "account-recovery",
        title: "Account recovery process",
        content:
          "If you forget your PIN or lose access, follow our secure account recovery process. You'll need to verify your identity through multiple security questions and documents.",
        category: "security",
        readTime: "6 min",
        difficulty: "Advanced",
      },
    ],
  },
  {
    id: "account-management",
    title: "Account Management",
    description: "Manage your account settings and preferences",
    icon: Users,
    color: "bg-orange-500/10 text-orange-500",
    articles: [
      {
        id: "update-info",
        title: "Update personal information",
        content:
          "Keep your personal information current by updating your address, phone number, and email through the account settings. Some changes may require additional verification.",
        category: "account-management",
        readTime: "2 min",
        difficulty: "Easy",
      },
      {
        id: "change-password",
        title: "Change your password",
        content:
          "Regularly update your password for better security. Use a combination of uppercase, lowercase, numbers, and special characters. Avoid using the same password across multiple platforms.",
        category: "account-management",
        readTime: "3 min",
        difficulty: "Easy",
      },
      {
        id: "download-statements",
        title: "Download account statements",
        content:
          "Generate and download detailed account statements for any period. Choose from PDF or Excel formats. Statements include all transactions, fees, and balance changes.",
        category: "account-management",
        readTime: "3 min",
        difficulty: "Intermediate",
      },
      {
        id: "close-account",
        title: "Close your account",
        content:
          "If you need to close your account, ensure all transactions are complete, withdraw remaining balance, and follow our secure account closure process. Account closure is irreversible.",
        category: "account-management",
        readTime: "4 min",
        difficulty: "Advanced",
      },
    ],
  },
];

const quickActions = [
  {
    title: "Live Chat Support",
    description: "Chat with our support team in real-time",
    icon: MessageCircle,
    color: "bg-blue-500/10 text-blue-500",
    action: "Start Chat",
    href: "/contact-us",
  },
  {
    title: "Call Support",
    description: "Speak with our support representatives",
    icon: Phone,
    color: "bg-green-500/10 text-green-500",
    action: "Call Now",
    href: "tel:1-800-HELP",
  },
  {
    title: "Email Support",
    description: "Send us a detailed message about your issue",
    icon: Mail,
    color: "bg-purple-500/10 text-purple-500",
    action: "Send Email",
    href: "mailto:support@digitalwallet.com",
  },
];

const resources = [
  {
    title: "Video Tutorials",
    description: "Step-by-step video guides",
    icon: Video,
    color: "bg-red-500/10 text-red-500",
  },
  {
    title: "User Manual",
    description: "Complete documentation",
    icon: FileText,
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    title: "FAQ",
    description: "Frequently asked questions",
    icon: HelpCircle,
    color: "bg-green-500/10 text-green-500",
  },
  {
    title: "Download Guides",
    description: "PDF guides and resources",
    icon: Download,
    color: "bg-orange-500/10 text-orange-500",
  },
];

export default function HelpCenter() {
  // Define article type
  type Article = {
    id: string;
    title: string;
    content: string;
    category: string;
    readTime: string;
    difficulty: string;
  };

  // Define search result type with category object
  type SearchResult = {
    id: string;
    title: string;
    content: string;
    category: string;
    readTime: string;
    difficulty: string;
    categoryData: {
      id: string;
      title: string;
      description: string;
      icon: ForwardRefExoticComponent<
        Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
      >;
      color: string;
      articles: Article[];
    };
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [view, setView] = useState<"home" | "search-results">("home");
  const [showDropdown, setShowDropdown] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter articles based on search query
  const filteredArticles: SearchResult[] = searchQuery
    ? helpCategories.flatMap((category) =>
        category.articles
          .filter(
            (article) =>
              article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
              article.content.toLowerCase().includes(searchQuery.toLowerCase()),
          )
          .map((article) => ({
            ...article,
            categoryData: category,
          })),
      )
    : [];

  const handleArticleClick = (article: Article | SearchResult) => {
    // Convert SearchResult back to Article for selectedArticle state
    const articleData: Article = {
      id: article.id,
      title: article.title,
      content: article.content,
      category: article.category,
      readTime: article.readTime,
      difficulty: article.difficulty,
    };

    setSelectedArticle(articleData);
    setShowDropdown(false);
    // Scroll to top when showing article details
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBack = () => {
    setSelectedArticle(null);
    // Always go back to home view since we're using dropdown search
    setView("home");
    setShowDropdown(false);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setShowDropdown(query.length > 0);
  };

  // Article Detail Component
  const ArticleDetail = ({ article }: { article: Article }) => {
    const category = helpCategories.find((cat) => cat.id === article.category);

    return (
      <main className="bg-background overflow-x-hidden">
        <section className="relative min-h-[60vh] flex items-center pt-24 pb-16 md:pt-32 md:pb-24 hero-mesh">
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full -mr-64 -mt-32 opacity-10 dark:opacity-5 animate-pulse" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 blur-[100px] rounded-full -ml-48 -mb-24 opacity-8 dark:opacity-3 transition-all duration-1000" />
          </div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="max-w-4xl mx-auto">
              <Button
                variant="ghost"
                onClick={handleBack}
                className="mb-6 hover:bg-primary/10"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Help Center
              </Button>

              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader className="pb-6">
                  <div className="flex items-center gap-4 mb-4">
                    {category && (
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-2xl ${category.color}`}
                      >
                        <category.icon className="h-6 w-6" />
                      </div>
                    )}
                    <div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <span>{category?.title || "Help Article"}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {article.readTime}
                        </span>
                        <span>•</span>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            article.difficulty === "Beginner"
                              ? "bg-green-500/10 text-green-500"
                              : article.difficulty === "Easy"
                                ? "bg-blue-500/10 text-blue-500"
                                : article.difficulty === "Intermediate"
                                  ? "bg-orange-500/10 text-orange-500"
                                  : "bg-red-500/10 text-red-500"
                          }`}
                        >
                          {article.difficulty}
                        </span>
                      </div>
                      <CardTitle className="text-3xl font-bold">
                        {article.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="prose prose-lg max-w-none">
                    <p className="text-muted-foreground leading-relaxed text-base">
                      {article.content}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-border/50">
                    <div className="flex items-center gap-4">
                      <Button variant="outline" size="sm">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Helpful
                      </Button>
                      <Button variant="outline" size="sm">
                        <AlertCircle className="h-4 w-4 mr-2" />
                        Not Helpful
                      </Button>
                    </div>
                    <Button variant="outline" size="sm">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Report Issue
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    );
  };

  // Search Results Component
  const SearchResults = () => (
    <main className="bg-background overflow-x-hidden">
      <section className="relative min-h-[60vh] flex items-center pt-24 pb-16 md:pt-32 md:pb-24 hero-mesh">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full -mr-64 -mt-32 opacity-10 dark:opacity-5 animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 blur-[100px] rounded-full -ml-48 -mb-24 opacity-8 dark:opacity-3 transition-all duration-1000" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Button
              variant="ghost"
              onClick={() => handleSearch("")}
              className="mb-6 hover:bg-primary/10"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Help Center
            </Button>

            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2">Search Results</h1>
              <p className="text-muted-foreground text-lg">
                Found {filteredArticles.length} results for "{searchQuery}"
              </p>
            </div>

            <div className="space-y-4">
              {filteredArticles.map((article: SearchResult) => (
                <Card
                  key={article.id}
                  className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 cursor-pointer group"
                  onClick={() => handleArticleClick(article)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                          {article.content}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {article.readTime}
                          </span>
                          <span
                            className={`px-2 py-1 rounded-full font-medium ${
                              article.difficulty === "Beginner"
                                ? "bg-green-500/10 text-green-500"
                                : article.difficulty === "Easy"
                                  ? "bg-blue-500/10 text-blue-500"
                                  : article.difficulty === "Intermediate"
                                    ? "bg-orange-500/10 text-orange-500"
                                    : "bg-red-500/10 text-red-500"
                            }`}
                          >
                            {article.difficulty}
                          </span>
                          <span className="px-2 py-1 rounded-full bg-primary/10 text-primary">
                            {article.categoryData.title}
                          </span>
                        </div>
                      </div>
                      <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all mt-1" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredArticles.length === 0 && (
              <div className="text-center py-12">
                <HelpCircle className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  No articles found
                </h3>
                <p className="text-muted-foreground">
                  Try adjusting your search terms or browse other categories.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );

  // Show article detail if selected
  if (selectedArticle) {
    return <ArticleDetail article={selectedArticle} />;
  }

  // Show search results if searching
  if (view === "search-results") {
    return <SearchResults />;
  }
  return (
    <main className="bg-background overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-24 pb-16 md:pt-32 md:pb-24 hero-mesh">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full -mr-64 -mt-32 opacity-10 dark:opacity-5 animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 blur-[100px] rounded-full -ml-48 -mb-24 opacity-8 dark:opacity-3 transition-all duration-1000" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <SectionHeader
              badge="Support"
              title="Help"
              titleAccent="Center"
              description="Find answers, get support, and learn how to make the most of your digital wallet experience."
              align="center"
            />

            {/* Search Bar */}
            <div className="mt-12 max-w-2xl mx-auto">
              <div className="relative" ref={searchContainerRef}>
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search for help articles, topics, or keywords..."
                  className="pl-12 h-14 text-base rounded-2xl border-border/50 bg-card/50 backdrop-blur-sm focus:border-primary/50"
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  onFocus={() => setShowDropdown(searchQuery.length > 0)}
                />

                {/* Search Dropdown */}
                {showDropdown && filteredArticles.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border/50 rounded-xl shadow-lg backdrop-blur-sm z-50 max-h-80 overflow-y-auto">
                    {filteredArticles.map((article) => {
                      const category = helpCategories.find(
                        (cat) => cat.id === article.category,
                      );
                      return (
                        <div
                          key={article.id}
                          className="p-4 hover:bg-muted/50 cursor-pointer border-b border-border/30 last:border-b-0 transition-colors"
                          onClick={() => {
                            handleArticleClick(article);
                            setShowDropdown(false);
                          }}
                        >
                          <div className="flex items-start gap-3">
                            <div
                              className={`p-2 rounded-lg ${category?.color || "bg-gray-500/10 text-gray-500"}`}
                            >
                              {category && (
                                <category.icon className="h-4 w-4" />
                              )}
                            </div>
                            <div className="flex-1 min-w-0 text-left">
                              <h4 className="font-medium text-sm mb-1 line-clamp-1">
                                {article.title}
                              </h4>
                              <p className="text-xs text-muted-foreground line-clamp-2">
                                {article.content}
                              </p>
                              <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                                <span className="flex items-center gap-1">
                                  <Clock className="h-3 w-3" />
                                  {article.readTime}
                                </span>
                                <span>•</span>
                                <span>{article.difficulty}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* No results message */}
                {showDropdown &&
                  searchQuery &&
                  filteredArticles.length === 0 && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border/50 rounded-xl shadow-lg backdrop-blur-sm z-50 p-4">
                      <div className="text-center text-muted-foreground">
                        <Search className="h-8 w-8 mx-auto mb-2 opacity-50" />
                        <p className="text-sm">No articles found</p>
                        <p className="text-xs mt-1">Try different keywords</p>
                      </div>
                    </div>
                  )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="relative isolate overflow-hidden py-24 sm:py-32 bg-background">
        {/* Background decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary blur-[100px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary blur-[100px] rounded-full" />
        </div>

        <div className="mx-auto container px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              badge="Categories"
              title="Browse Help"
              titleAccent="Topics"
              description="Find the information you need organized by category."
              align="center"
            />

            <div className="mt-16 grid gap-8 grid-cols-1">
              {helpCategories.map((category, idx) => (
                <Card
                  key={category.title}
                  className="group border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 hover:shadow-2xl overflow-hidden"
                  style={{ animationDelay: `${idx * 150}ms` }}
                >
                  {/* Decorative accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 -mr-16 -mt-16 rounded-full group-hover:bg-primary/10 transition-colors duration-500" />

                  <CardHeader className="space-y-4 pb-4">
                    <CardTitle className="flex items-center gap-4 text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-2xl ${category.color} group-hover:scale-110 transition-transform duration-500`}
                      >
                        <category.icon className="h-7 w-7" />
                      </div>
                      <span>{category.title}</span>
                    </CardTitle>
                    <p className="text-muted-foreground leading-relaxed">
                      {category.description}
                    </p>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-3">
                      {category.articles.map((article) => (
                        <li
                          key={article.id}
                          className="flex items-center justify-between p-3 rounded-lg bg-card/30 border border-border/30 hover:bg-primary/5 transition-colors cursor-pointer group"
                          onClick={() => handleArticleClick(article)}
                        >
                          <span className="text-sm font-medium">
                            {article.title}
                          </span>
                          <ChevronRight className="h-4 w-4 text-muted-foreground transition-all" />
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="relative isolate overflow-hidden py-24 sm:py-32 bg-background border-t border-muted/40">
        {/* Background decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary blur-[100px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary blur-[100px] rounded-full" />
        </div>

        <div className="mx-auto container px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              badge="Support"
              title="Quick"
              titleAccent="Actions"
              description="Get immediate help through our support channels."
              align="center"
            />

            <div className="mt-16 grid gap-6 sm:grid-cols-1 md:grid-cols-3">
              {quickActions.map((action, idx) => (
                <Card
                  key={action.title}
                  className="group border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-12"
                  style={{ animationDelay: `${idx * 150}ms` }}
                >
                  <CardContent className="p-8 text-center">
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-2xl ${action.color} mx-auto mb-6 group-hover:scale-110 transition-transform duration-500`}
                    >
                      <action.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                      {action.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {action.description}
                    </p>
                    <Button asChild className="w-full">
                      <Link to={action.href}>
                        {action.action}
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="relative isolate overflow-hidden py-24 sm:py-32 bg-background">
        {/* Background decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary blur-[100px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary blur-[100px] rounded-full" />
        </div>

        <div className="mx-auto container px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              badge="Learning"
              title="Additional"
              titleAccent="Resources"
              description="Access comprehensive guides and learning materials."
              align="center"
            />

            <div className="mt-16 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {resources.map((resource, idx) => (
                <Card
                  key={resource.title}
                  className="group border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-lg overflow-hidden animate-in fade-in slide-in-from-bottom-12 cursor-pointer"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl ${resource.color} mx-auto mb-4 group-hover:scale-110 transition-transform duration-500`}
                    >
                      <resource.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                      {resource.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {resource.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Support Hours */}
      <section className="relative isolate overflow-hidden py-24 sm:py-32 bg-background border-t border-muted/40">
        <div className="mx-auto container px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <SectionHeader
              badge="Availability"
              title="Support"
              titleAccent="Hours"
              description="Our support team is here to help you when you need it most."
              align="center"
            />

            <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-3">
              <div className="text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-500 mx-auto mb-4">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">Live Chat</h3>
                <p className="text-sm text-muted-foreground">24/7 Available</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Average response: 2 minutes
                </p>
              </div>
              <div className="text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-500/10 text-green-500 mx-auto mb-4">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">Phone Support</h3>
                <p className="text-sm text-muted-foreground">
                  Mon-Fri: 9AM-6PM EST
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Weekend: 10AM-4PM EST
                </p>
              </div>
              <div className="text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-500 mx-auto mb-4">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">Email Support</h3>
                <p className="text-sm text-muted-foreground">24/7 Available</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Response within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
