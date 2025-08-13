import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Clock, MessageCircle, Instagram, Facebook } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
            Visite Nossa <span className="gradient-neon bg-clip-text text-transparent">Loja</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Venha conhecer nossa loja física e toda nossa variedade de produtos
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="shadow-card neon-border bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <MapPin className="w-6 h-6 text-primary" />
                  Localização
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg mb-4">Santa Maria, Rio Grande do Sul</p>
                <p className="text-muted-foreground">
                  Centro da cidade, fácil acesso e estacionamento disponível
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card neon-border bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Clock className="w-6 h-6 text-accent" />
                  Horário de Funcionamento
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span>Segunda à Sexta:</span>
                  <span className="text-accent">9h às 18h</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábado:</span>
                  <span className="text-accent">9h às 17h</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingo:</span>
                  <span className="text-muted-foreground">Fechado</span>
                </div>
              </CardContent>
            </Card>

            {/* Contact Methods */}
            <div className="grid sm:grid-cols-2 gap-4">
              <Button variant="gaming" className="h-auto py-4 flex-col gap-2">
                <MessageCircle className="w-6 h-6" />
                <span>WhatsApp</span>
              </Button>
              <Button variant="neon" className="h-auto py-4 flex-col gap-2">
                <Phone className="w-6 h-6" />
                <span>Ligar</span>
              </Button>
            </div>

            {/* Social Media */}
            <div className="flex justify-center gap-4">
              <Button variant="ghost" size="icon" className="rounded-full neon-border">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full neon-border">
                <Facebook className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold mb-8 text-center lg:text-left">
              Por que escolher a Virtual Games?
            </h3>
            
            <div className="space-y-4">
              {[
                { emoji: "🏆", title: "Melhor preço da região", desc: "Garantimos o melhor custo-benefício" },
                { emoji: "🔧", title: "Técnicos especialistas", desc: "Equipe certificada e experiente" },
                { emoji: "✅", title: "Garantia em todos os serviços", desc: "Tranquilidade total para você" },
                { emoji: "⚡", title: "Atendimento rápido", desc: "Soluções ágeis para suas necessidades" },
                { emoji: "🎮", title: "Produtos originais", desc: "Apenas marcas confiáveis e originais" },
                { emoji: "📦", title: "Estoque sempre atualizado", desc: "Lançamentos e clássicos disponíveis" }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg neon-border bg-card/50 backdrop-blur-sm transition-gaming hover:shadow-accent"
                >
                  <span className="text-2xl">{feature.emoji}</span>
                  <div>
                    <h4 className="font-semibold text-lg">{feature.title}</h4>
                    <p className="text-muted-foreground">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;