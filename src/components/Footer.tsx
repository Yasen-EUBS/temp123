export const Footer = () => {
  return (
    <footer className="bg-primary border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <div className="text-2xl">🌲</div>
            <h3 className="text-xl font-bold">Траурна Агенция Кипарис</h3>
          </div>
          <p className="text-muted-foreground">
            Професионални траурни услуги с уважение и съпричастност
          </p>
          <div className="pt-4 border-t border-border">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Траурна Агенция Кипарис. Всички права запазени.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
