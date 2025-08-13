import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingBag, Wrench, Calendar, Star } from "lucide-react";
import storeImage from "@/assets/store-showcase.webp";
import repairImage from "@/assets/repair-service.webp";
import rentalImage from "@/assets/rental-service.webp";

const ServicesSection = () => {
  const services = [
    {
      icon: <ShoppingBag className="w-8 h-8 text-primary" />,
      title: "Compra & Venda",
      description: "Consoles e acessórios novos e usados com garantia e melhor preço da região",
      image: storeImage,
      features: ["PlayStation 5", "Xbox Series X/S", "Nintendo Switch", "Acessórios originais", "Jogos novos e usados"],
      cta: "Ver Catálogo"
    },
    {
      icon: <Wrench className="w-8 h-8 text-accent" />,
      title: "Manutenção",
      description: "Assistência técnica especializada com técnicos certificados e peças originais",
      image: repairImage,
      features: ["Reparo de controles", "Limpeza interna", "Troca de peças", "Diagnóstico gratuito", "Garantia do serviço"],
      cta: "Solicitar Orçamento"
    },
    {
      icon: <Calendar className="w-8 h-8 text-primary-glow" />,
      title: "Locação",
      description: "Alugue consoles e acessórios para festas, eventos ou diversão em casa",
      image: rentalImage,
      features: ["Diárias e pacotes", "Setup completo", "Jogos inclusos", "Entrega e retirada", "Suporte técnico"],
      cta: "Fazer Reserva"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
            Nossos <span className="gradient-neon bg-clip-text text-transparent">Serviços</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluções completas para gamers de todas as idades
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="shadow-card hover:shadow-neon transition-gaming group neon-border bg-card/80 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10 w-fit group-hover:animate-glow-pulse">
                  {service.icon}
                </div>
                <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Service Image */}
                <div className="relative overflow-hidden rounded-lg">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-48 object-cover transition-gaming group-hover:scale-105"
                  />
                  <div className="absolute inset-0 gradient-gaming opacity-20"></div>
                </div>

                {/* Features List */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-sm">
                      <Star className="w-4 h-4 text-accent flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button variant="outline" className="w-full group-hover:shadow-accent">
                  {service.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Button variant="gaming" size="lg" className="text-lg px-8 py-4">
            Fale Conosco no WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;