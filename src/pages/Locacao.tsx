import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowLeft, Users, Gamepad2, Truck, Shield, Star, PartyPopper } from "lucide-react";
import { Link } from "react-router-dom";
import rentalImage from "@/assets/rental-service.webp";

const Locacao = () => {
  const packages = [
    {
      name: "Pacote Festa Infantil",
      description: "Perfeito para aniversários e festas de criança",
      duration: "Diária (8h)",
      price: "R$ 150,00",
      originalPrice: "R$ 180,00",
      discount: "17% OFF",
      popular: true,
      includes: [
        "1 Nintendo Switch + dock",
        "4 Joy-Con controllers",
        "5 jogos família",
        "Cabo HDMI 5m",
        "Setup na sua casa"
      ],
      ageGroup: "6-12 anos",
      players: "até 4 jogadores"
    },
    {
      name: "Pacote Gamer Teen",
      description: "Para adolescentes que querem diversão hardcore",
      duration: "Diária (12h)",
      price: "R$ 200,00",
      originalPrice: "R$ 240,00",
      discount: "17% OFF",
      popular: true,
      includes: [
        "1 PlayStation 5",
        "4 controles DualSense",
        "8 jogos variados",
        "Headset gaming",
        "Setup completo"
      ],
      ageGroup: "13-17 anos",
      players: "até 4 jogadores"
    },
    {
      name: "Pacote Adult Party",
      description: "Diversão garantida para adultos e festas",
      duration: "Diária (10h)",
      price: "R$ 220,00",
      originalPrice: "R$ 260,00",
      discount: "15% OFF",
      popular: false,
      includes: [
        "1 Xbox Series X",
        "4 controles wireless",
        "10 jogos multiplayer",
        "Sistema de som",
        "Montagem profissional"
      ],
      ageGroup: "18+ anos",
      players: "até 8 jogadores"
    },
    {
      name: "Pacote Retro Gaming",
      description: "Nostalgia pura com clássicos atemporais",
      duration: "Diária (8h)",
      price: "R$ 120,00",
      originalPrice: "R$ 150,00",
      discount: "20% OFF",
      popular: false,
      includes: [
        "Console retro mini",
        "2 controles clássicos",
        "100+ jogos retro",
        "Cabo HDMI",
        "Manual de jogos"
      ],
      ageGroup: "Todas idades",
      players: "até 2 jogadores"
    },
    {
      name: "Pacote Premium Event",
      description: "Solução completa para eventos grandes",
      duration: "Por evento",
      price: "R$ 450,00",
      originalPrice: "R$ 550,00",
      discount: "18% OFF",
      popular: true,
      includes: [
        "2 consoles diferentes",
        "8 controles totais",
        "20+ jogos variados",
        "2 TVs 55 polegadas",
        "Técnico no local"
      ],
      ageGroup: "Todas idades",
      players: "até 16 jogadores"
    },
    {
      name: "Pacote VR Experience",
      description: "Realidade virtual para uma experiência única",
      duration: "4 horas",
      price: "R$ 300,00",
      originalPrice: "R$ 350,00",
      discount: "14% OFF",
      popular: false,
      includes: [
        "PlayStation VR2",
        "2 headsets VR",
        "6 jogos VR",
        "Área demarcada",
        "Monitor de experiência"
      ],
      ageGroup: "10+ anos",
      players: "até 2 jogadores"
    }
  ];

  const additionalServices = [
    {
      service: "Entrega e Retirada",
      description: "Levamos e buscamos em sua casa",
      price: "R$ 30,00",
      icon: <Truck className="w-6 h-6 text-accent" />
    },
    {
      service: "Setup Profissional",
      description: "Montagem e configuração completa",
      price: "R$ 50,00",
      icon: <Gamepad2 className="w-6 h-6 text-primary" />
    },
    {
      service: "Técnico no Evento",
      description: "Suporte técnico durante toda a festa",
      price: "R$ 100,00",
      icon: <Users className="w-6 h-6 text-accent-glow" />
    },
    {
      service: "Seguro Premium",
      description: "Cobertura total contra danos",
      price: "R$ 40,00",
      icon: <Shield className="w-6 h-6 text-primary-glow" />
    }
  ];

  const testimonials = [
    {
      name: "Maria L.",
      event: "Aniversário de 8 anos",
      text: "As crianças se divertiram demais! O pessoal montou tudo certinho e os jogos eram perfeitos para a idade.",
      rating: 5
    },
    {
      name: "Pedro C.",
      event: "Confraternização empresa",
      text: "Alugamos para nosso evento corporativo. Foi um sucesso! Funcionários de todas as idades participaram.",
      rating: 5
    },
    {
      name: "Ana R.",
      event: "Festa de 15 anos",
      text: "Minha filha e os amigos amaram! O PlayStation 5 foi o destaque da festa. Super recomendo!",
      rating: 5
    }
  ];

  const eventTypes = [
    { type: "Aniversários", icon: "🎂", description: "Crianças, adolescentes e adultos" },
    { type: "Eventos Corporativos", icon: "🏢", description: "Team building e confraternizações" },
    { type: "Festas de Formatura", icon: "🎓", description: "Diversão para comemorar conquistas" },
    { type: "Casamentos", icon: "💒", description: "Entretenimento para os convidados" },
    { type: "Reuniões Familiares", icon: "👨‍👩‍👧‍👦", description: "Momentos especiais em família" },
    { type: "Eventos Escolares", icon: "🏫", description: "Atividades recreativas educacionais" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header with back button */}
      <div className="container mx-auto px-4 py-6">
        <Link to="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para Home
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 gradient-dark"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${rentalImage})` }}
        ></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-primary-glow/20 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Calendar className="w-12 h-12 text-primary-glow animate-glow-pulse" />
              <h1 className="text-5xl md:text-6xl font-bold glow-text">
                Locação de <span className="gradient-neon bg-clip-text text-transparent">Consoles</span>
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Diversão garantida para festas, eventos e momentos especiais
            </p>

            {/* Benefits */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="flex items-center gap-2 neon-border rounded-full px-4 py-2 bg-card/50 backdrop-blur-sm">
                <Truck className="w-5 h-5 text-accent" />
                <span>Entrega e Retirada</span>
              </div>
              <div className="flex items-center gap-2 neon-border rounded-full px-4 py-2 bg-card/50 backdrop-blur-sm">
                <Gamepad2 className="w-5 h-5 text-primary" />
                <span>Setup Completo</span>
              </div>
              <div className="flex items-center gap-2 neon-border rounded-full px-4 py-2 bg-card/50 backdrop-blur-sm">
                <PartyPopper className="w-5 h-5 text-accent-glow" />
                <span>Suporte no Evento</span>
              </div>
            </div>

            <Button variant="gaming" size="lg" className="text-lg px-8 py-4">
              <Calendar className="w-5 h-5 mr-2" />
              Fazer Reserva
            </Button>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
              Nossos <span className="gradient-neon bg-clip-text text-transparent">Pacotes</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Soluções personalizadas para cada tipo de evento
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {packages.map((pkg, index) => (
              <Card 
                key={index}
                className="shadow-card hover:shadow-neon transition-gaming group neon-border bg-card/80 backdrop-blur-sm relative"
              >
                {pkg.popular && (
                  <Badge className="absolute -top-2 -right-2 bg-accent text-accent-foreground z-10">
                    🔥 Popular
                  </Badge>
                )}
                
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary-glow" />
                    {pkg.name}
                  </CardTitle>
                  <CardDescription className="text-sm mb-3">{pkg.description}</CardDescription>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-accent">{pkg.price}</span>
                      {pkg.originalPrice && (
                        <div className="flex items-center gap-2">
                          <span className="text-sm line-through text-muted-foreground">{pkg.originalPrice}</span>
                          <Badge variant="destructive" className="text-xs">{pkg.discount}</Badge>
                        </div>
                      )}
                    </div>
                    <div className="text-right text-sm text-muted-foreground">
                      <div>{pkg.duration}</div>
                      <div>{pkg.players}</div>
                    </div>
                  </div>
                  
                  <Badge variant="outline" className="w-fit mt-2">{pkg.ageGroup}</Badge>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {pkg.includes.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-2 text-sm">
                        <Star className="w-4 h-4 text-accent flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button variant="outline" className="w-full group-hover:shadow-accent">
                    Reservar Agora
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-text">
              Serviços <span className="gradient-neon bg-clip-text text-transparent">Adicionais</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Personalize sua experiência com nossos extras
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="neon-border bg-card/60 backdrop-blur-sm text-center">
                <CardHeader>
                  <div className="mx-auto mb-2">{service.icon}</div>
                  <CardTitle className="text-lg">{service.service}</CardTitle>
                  <CardDescription className="text-sm">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-xl font-bold text-accent mb-3">{service.price}</div>
                  <Button variant="outline" size="sm" className="w-full">
                    Adicionar
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-text">
              Tipos de <span className="gradient-neon bg-clip-text text-transparent">Eventos</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Atendemos todos os tipos de celebrações
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventTypes.map((event, index) => (
              <Card key={index} className="shadow-card neon-border bg-card/80 backdrop-blur-sm text-center hover:shadow-accent transition-gaming">
                <CardHeader>
                  <div className="text-4xl mb-2">{event.icon}</div>
                  <CardTitle className="text-lg">{event.type}</CardTitle>
                  <CardDescription>{event.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-text">
              Eventos <span className="gradient-neon bg-clip-text text-transparent">Realizados</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-card neon-border bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <Badge variant="secondary" className="w-fit">{testimonial.event}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 gradient-gaming opacity-10"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 glow-text">
            Planejando um evento especial?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Entre em contato e vamos criar a experiência gaming perfeita para sua festa!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gaming" size="lg" className="text-lg px-8 py-4">
              Fazer Orçamento
            </Button>
            <Button variant="neon" size="lg" className="text-lg px-8 py-4">
              WhatsApp: (55) 99999-9999
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Locacao;