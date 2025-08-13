import { Button } from "@/components/ui/button";
import { Gamepad2, MapPin, Phone } from "lucide-react";
import heroImage from "@/assets/hero-gaming.webp";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 gradient-dark"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-primary-glow/30 rounded-full blur-lg animate-glow-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          {/* Logo/Brand */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <Gamepad2 className="w-12 h-12 text-primary animate-glow-pulse" />
            <h1 className="text-5xl md:text-7xl font-bold glow-text">
              Virtual <span className="gradient-neon bg-clip-text text-transparent">Games</span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto">
            Sua loja gamer completa em Santa Maria, RS
          </p>
          
          <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-3xl mx-auto">
            Compra • Venda • Manutenção • Locação de Consoles e Acessórios
          </p>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 mb-10 text-accent">
            <MapPin className="w-5 h-5" />
            <span className="text-lg font-semibold">Santa Maria, RS</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="gaming" size="lg" className="text-lg px-8 py-4">
              <Phone className="w-5 h-5" />
              Entre em Contato
            </Button>
            <Button variant="neon" size="lg" className="text-lg px-8 py-4">
              Nossos Serviços
            </Button>
          </div>

          {/* Features badges */}
          <div className="flex flex-wrap justify-center gap-4 mt-12 text-sm">
            <div className="neon-border rounded-full px-4 py-2 bg-card/50 backdrop-blur-sm">
              ✨ Novos & Usados
            </div>
            <div className="neon-border rounded-full px-4 py-2 bg-card/50 backdrop-blur-sm">
              🔧 Manutenção Especializada
            </div>
            <div className="neon-border rounded-full px-4 py-2 bg-card/50 backdrop-blur-sm">
              🎮 Locação de Consoles
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;