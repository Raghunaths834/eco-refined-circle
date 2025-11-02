import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  const breadcrumbNames: { [key: string]: string } = {
    'about': 'About Us',
    'products': 'Products & Services',
    'customers': 'Our Customers',
    'gallery': 'Gallery',
    'contact': 'Contact Us',
    'privacy': 'Privacy Policy',
    'terms': 'Terms & Conditions'
  };

  if (pathnames.length === 0) return null;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.gslubricants.com/"
      },
      ...pathnames.map((path, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": breadcrumbNames[path] || path,
        "item": `https://www.gslubricants.com/${pathnames.slice(0, index + 1).join('/')}`
      }))
    ]
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
      <nav aria-label="Breadcrumb" className="bg-muted/30 py-3">
        <div className="container mx-auto px-4">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link 
                to="/" 
                className="flex items-center text-muted-foreground hover:text-primary transition-colors"
              >
                <Home className="h-4 w-4" />
              </Link>
            </li>
            {pathnames.map((path, index) => {
              const to = `/${pathnames.slice(0, index + 1).join('/')}`;
              const isLast = index === pathnames.length - 1;

              return (
                <li key={to} className="flex items-center space-x-2">
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  {isLast ? (
                    <span className="text-foreground font-medium">
                      {breadcrumbNames[path] || path}
                    </span>
                  ) : (
                    <Link 
                      to={to}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {breadcrumbNames[path] || path}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </nav>
    </>
  );
};

export default Breadcrumbs;
