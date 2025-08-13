import { Gamepad2, MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="gradient-dark border-t border-primary/20 pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Gamepad2 className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold">Virtual Games</h3>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              A melhor loja de videogames de Santa Maria, RS. Oferecemos compra, venda, 
              manutenção e locação de consoles e acessórios com qualidade e garantia.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-gaming">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-gaming">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Serviços</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-gaming">Compra & Venda</a></li>
              <li><a href="#" className="hover:text-primary transition-gaming">Manutenção</a></li>
              <li><a href="#" className="hover:text-primary transition-gaming">Locação</a></li>
              <li><a href="#" className="hover:text-primary transition-gaming">Avaliação</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Contato</h4>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-sm">Santa Maria, RS</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-sm">(55) 9999-9999</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-sm">Seg-Sex: 9h-18h</span>
              </div>
            </div>
          </div>
        </div>

        {/* Products Categories */}
        <div className="border-t border-primary/20 pt-8 mb-8">
          <h4 className="text-lg font-semibold mb-4 text-center text-primary">Produtos Disponíveis</h4>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <span className="neon-border rounded-full px-3 py-1 bg-card/30">PlayStation 5</span>
            <span className="neon-border rounded-full px-3 py-1 bg-card/30">Xbox Series X/S</span>
            <span className="neon-border rounded-full px-3 py-1 bg-card/30">Nintendo Switch</span>
            <span className="neon-border rounded-full px-3 py-1 bg-card/30">Controles</span>
            <span className="neon-border rounded-full px-3 py-1 bg-card/30">Headsets</span>
            <span className="neon-border rounded-full px-3 py-1 bg-card/30">Jogos</span>
            <span className="neon-border rounded-full px-3 py-1 bg-card/30">Acessórios</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; 2024 Virtual Games. Todos os direitos reservados.</p>
          <p>Santa Maria, Rio Grande do Sul</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;