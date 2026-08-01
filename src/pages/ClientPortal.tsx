import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Seo } from "@/components/Seo";
import {
  Lock,
  User,
  Eye,
  EyeOff,
  Download,
  LogOut,
  FileArchive,
  FileText,
  ShieldCheck,
  AlertCircle,
} from "lucide-react";
import portalData from "@/data/clientPortal.json";

const SESSION_KEY = "genzai-client-session";

interface ClientUser {
  username: string;
  name: string;
  organization: string;
}

const ClientPortal = () => {
  const [user, setUser] = useState<ClientUser | null>(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  // Restore an existing session so a page refresh doesn't log the client out.
  useEffect(() => {
    const stored = sessionStorage.getItem(SESSION_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        // Ignore sessions saved before the switch to usernames.
        if (parsed?.username) {
          setUser(parsed);
        } else {
          sessionStorage.removeItem(SESSION_KEY);
        }
      } catch {
        sessionStorage.removeItem(SESSION_KEY);
      }
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    const match = portalData.users.find(
      (u) =>
        u.username.toLowerCase() === username.trim().toLowerCase() &&
        u.password === password
    );

    if (!match) {
      setError("Invalid username or password. Please try again.");
      setSubmitting(false);
      return;
    }

    const session: ClientUser = {
      username: match.username,
      name: match.name,
      organization: match.organization,
    };
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(session));
    setUser(session);
    setPassword("");
    setSubmitting(false);
  };

  const handleLogout = () => {
    sessionStorage.removeItem(SESSION_KEY);
    setUser(null);
    setUsername("");
    setPassword("");
  };

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Client Portal"
        description="Secure client portal for GenzAI Labs partners — sign in to access your deployment packages and downloads."
        path="/client"
      />

      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
            Client Portal
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            {user ? `Welcome, ${user.name}` : "Client Access"}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {user
              ? "Your deployment packages are ready to download below."
              : "Sign in with the credentials provided by GenzAI Labs to access your downloads."}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {!user ? (
            /* ---------------- Login ---------------- */
            <div className="max-w-md mx-auto">
              <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Lock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Sign In</h2>
                    <p className="text-sm text-gray-600">
                      Authorised clients only
                    </p>
                  </div>
                </div>

                <form onSubmit={handleLogin} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="client-username">Username</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        id="client-username"
                        type="text"
                        autoComplete="username"
                        placeholder="Enter your username"
                        className="pl-10"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="client-password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        id="client-password"
                        type={showPassword ? "text" : "password"}
                        autoComplete="current-password"
                        placeholder="Enter your password"
                        className="pl-10 pr-10"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        aria-label={
                          showPassword ? "Hide password" : "Show password"
                        }
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  {error && (
                    <div className="flex items-start space-x-2 bg-red-50 border-l-4 border-red-500 p-3 rounded-r-md">
                      <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-red-700">{error}</p>
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-blue-500 hover:bg-blue-400 text-white shadow-sm shadow-blue-500/20"
                  >
                    {submitting ? "Signing in..." : "Sign In"}
                  </Button>
                </form>
              </div>

              <p className="text-sm text-gray-600 text-center mt-6">
                Need access? Contact us at{" "}
                <a
                  href="mailto:sales@genzailabs.com"
                  className="text-blue-600 hover:underline"
                >
                  sales@genzailabs.com
                </a>
                .
              </p>
            </div>
          ) : (
            /* ---------------- Downloads ---------------- */
            <div className="space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-blue-50 border border-blue-100 rounded-lg p-6">
                <div className="flex items-start space-x-3">
                  <ShieldCheck className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">{user.username}</p>
                    <p className="text-sm text-gray-600">
                      {user.organization} — signed in
                    </p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  onClick={handleLogout}
                  className="sm:flex-shrink-0"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </Button>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Available Downloads
                </h2>

                <div className="space-y-4">
                  {portalData.downloads.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 flex flex-col md:flex-row md:items-center gap-5"
                    >
                      <div className="flex-shrink-0 w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center">
                        {item.type === "pdf" ? (
                          <FileText className="h-7 w-7 text-blue-600" />
                        ) : (
                          <FileArchive className="h-7 w-7 text-blue-600" />
                        )}
                      </div>

                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900">
                          {item.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed mt-1">
                          {item.description}
                        </p>
                        <p className="text-sm text-gray-500 mt-2">
                          {item.filename} &middot; {item.size} &middot;{" "}
                          {item.version} &middot; Updated {item.updated}
                        </p>
                      </div>

                      <a
                        href={item.file}
                        download={item.filename}
                        className="md:flex-shrink-0"
                      >
                        <Button className="w-full md:w-auto bg-blue-500 hover:bg-blue-400 text-white shadow-sm shadow-blue-500/20">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <p className="text-sm text-gray-600">
                  These files are provided for authorised GenzAI Labs clients
                  only and must not be redistributed. For installation support,
                  contact{" "}
                  <a
                    href="mailto:sales@genzailabs.com"
                    className="text-blue-600 hover:underline"
                  >
                    sales@genzailabs.com
                  </a>
                  .
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ClientPortal;
