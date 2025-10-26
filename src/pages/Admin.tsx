import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Loader2, Mail, Phone, Building, User as UserIcon, MessageSquare, Shield } from "lucide-react";
import type { User, Session } from "@supabase/supabase-js";

interface ContactSubmission {
  id: string;
  first_name: string;
  last_name: string;
  company: string;
  email: string;
  phone: string | null;
  service: string | null;
  volume: string | null;
  message: string | null;
  created_at: string;
}

interface UserRole {
  id: string;
  user_id: string;
  role: string;
  created_at: string;
}

const Admin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [userRoles, setUserRoles] = useState<UserRole[]>([]);

  useEffect(() => {
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        
        if (!session?.user) {
          navigate("/auth");
        }
      }
    );

    // Check for existing session and admin status
    const initAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session);
      setUser(session?.user ?? null);

      if (!session?.user) {
        navigate("/auth");
        return;
      }

      // Check if user has admin role
      const { data: roleData, error: roleError } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", session.user.id)
        .eq("role", "admin")
        .maybeSingle();

      if (roleError) {
        console.error("Error checking admin role:", roleError);
      }

      const hasAdminRole = !!roleData;
      setIsAdmin(hasAdminRole);

      if (!hasAdminRole) {
        toast({
          title: "Access Denied",
          description: "You do not have admin privileges.",
          variant: "destructive",
        });
        navigate("/");
        return;
      }

      // Fetch all data
      await Promise.all([fetchSubmissions(), fetchUserRoles()]);
      setIsLoading(false);
    };

    initAuth();

    return () => subscription.unsubscribe();
  }, [navigate, toast]);

  const fetchSubmissions = async () => {
    try {
      const { data, error } = await supabase
        .from("contact_submissions")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;

      setSubmissions(data || []);
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to load contact submissions.",
        variant: "destructive",
      });
    }
  };

  const fetchUserRoles = async () => {
    try {
      const { data, error } = await supabase
        .from("user_roles")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;

      setUserRoles(data || []);
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to load user roles.",
        variant: "destructive",
      });
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
        <p className="text-muted-foreground">View and manage database records</p>
      </div>

      <Tabs defaultValue="submissions" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-2">
          <TabsTrigger value="submissions">Contact Submissions</TabsTrigger>
          <TabsTrigger value="roles">User Roles</TabsTrigger>
        </TabsList>

        <TabsContent value="submissions" className="mt-6">
          {submissions.length === 0 ? (
            <Card>
              <CardContent className="py-8 text-center text-muted-foreground">
                No contact submissions yet.
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-6">
              {submissions.map((submission) => (
                <Card key={submission.id}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <UserIcon className="h-5 w-5" />
                      {submission.first_name} {submission.last_name}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Submitted on {new Date(submission.created_at).toLocaleString()}
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Building className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">Company:</span>
                      <span>{submission.company}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">Email:</span>
                      <a href={`mailto:${submission.email}`} className="text-primary hover:underline">
                        {submission.email}
                      </a>
                    </div>
                    {submission.phone && (
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">Phone:</span>
                        <a href={`tel:${submission.phone}`} className="text-primary hover:underline">
                          {submission.phone}
                        </a>
                      </div>
                    )}
                    {submission.service && (
                      <div className="flex items-center gap-2">
                        <span className="font-medium">Service:</span>
                        <span>{submission.service}</span>
                      </div>
                    )}
                    {submission.volume && (
                      <div className="flex items-center gap-2">
                        <span className="font-medium">Volume:</span>
                        <span>{submission.volume}</span>
                      </div>
                    )}
                    {submission.message && (
                      <div className="flex items-start gap-2">
                        <MessageSquare className="h-4 w-4 text-muted-foreground mt-1" />
                        <div>
                          <span className="font-medium">Message:</span>
                          <p className="mt-1 text-muted-foreground">{submission.message}</p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="roles" className="mt-6">
          {userRoles.length === 0 ? (
            <Card>
              <CardContent className="py-8 text-center text-muted-foreground">
                No user roles found.
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  User Roles
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User ID</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Created At</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {userRoles.map((role) => (
                      <TableRow key={role.id}>
                        <TableCell className="font-mono text-sm">{role.user_id}</TableCell>
                        <TableCell>
                          <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-primary/10 text-primary">
                            {role.role}
                          </span>
                        </TableCell>
                        <TableCell>{new Date(role.created_at).toLocaleString()}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Admin;
